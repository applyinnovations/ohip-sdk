import { RequestContext } from './oauth';

type OhipCashierMapping = {
  [ohipUsername: string]: string;
};

interface OhipJWT {
  sub: string;
}

export class OhipCashierMappingProvider {
  usernameToCashierIdMapping: OhipCashierMapping;

  constructor({ cashierMapping }: { cashierMapping: OhipCashierMapping }) {
    this.usernameToCashierIdMapping = cashierMapping;
  }

  async cashierMappingMiddleware(
    context: RequestContext,
  ): Promise<RequestContext> {
    const matchPattern = /"cashierId":-1/g;
    const { headers, body } = context.init;
    const headersString = JSON.stringify(headers);
    const mustReplaceBody =
      typeof body === 'string' && !!body.match(matchPattern);
    const mustReplaceHeaders = !!headersString?.match(matchPattern);
    if (!mustReplaceHeaders && !mustReplaceBody) return context;
    // @ts-ignore
    const token = headers?.Authorization?.split(' ')[1];
    const sub = getSubFromOhipAccessToken(token);
    if (!sub) throw new Error('invalid access token or sub missing');
    const cashierId = this.usernameToCashierIdMapping[sub];
    if (!cashierId)
      throw new Error('cashier id not found for sub specified in token');
    const intCashierId = parseInt(cashierId, 10);
    const newCashierIdString = `"cashierId":${intCashierId}`;
    return {
      ...context,
      init: {
        ...context.init,
        body: mustReplaceBody
          ? body.replace(matchPattern, newCashierIdString)
          : body,
        headers: mustReplaceHeaders
          ? JSON.parse(headersString.replace(matchPattern, newCashierIdString))
          : headers,
      },
    };
  }
}

function getSubFromOhipAccessToken(token: string): string | null {
  const parts: string[] = token.split('.');
  if (parts.length < 2) {
    return null;
  }
  const payload: string = base64UrlDecode(parts[1]);
  let claims: OhipJWT;
  try {
    claims = JSON.parse(payload);
  } catch (error) {
    return null;
  }
  return claims.sub;
}

function base64UrlDecode(input: string): string {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
  const buffer = Buffer.from(base64, 'base64');
  return buffer.toString('utf-8');
}

import { RequestContext } from './oauth';
type OhipCashierMapping = {
    [ohipUsername: string]: string;
};
export declare class OhipCashierMappingProvider {
    usernameToCashierIdMapping: OhipCashierMapping;
    constructor({ cashierMapping }: {
        cashierMapping: OhipCashierMapping;
    });
    cashierMappingMiddleware(context: RequestContext): Promise<RequestContext>;
}
export {};

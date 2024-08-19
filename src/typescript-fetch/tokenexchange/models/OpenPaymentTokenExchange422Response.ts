/* tslint:disable */
/* eslint-disable */
/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProblemDetail } from './ProblemDetail';
import {
    ProblemDetailFromJSON,
    ProblemDetailFromJSONTyped,
    ProblemDetailToJSON,
} from './ProblemDetail';

/**
 * Problem Details for HTTP APIs
 * @export
 * @interface OpenPaymentTokenExchange422Response
 */
export interface OpenPaymentTokenExchange422Response {
    /**
     * Unique identifier value that is attached to the request that allows reference to a particular transaction
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    correlationId?: string;
    /**
     * Detailed error message
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    detail?: string;
    /**
     * Application specific error code
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    oerrorCode?: string;
    /**
     * Drill down to the details
     * @type {Array<ProblemDetail>}
     * @memberof OpenPaymentTokenExchange422Response
     */
    oerrorDetails?: Array<ProblemDetail>;
    /**
     * JSON path to indicate where the error occurs
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    oerrorPath?: string;
    /**
     * HTTP status code
     * @type {number}
     * @memberof OpenPaymentTokenExchange422Response
     */
    status?: number;
    /**
     * Summary error message
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    title: string;
    /**
     * HTTP error code page
     * @type {string}
     * @memberof OpenPaymentTokenExchange422Response
     */
    type: string;
}

/**
 * Check if a given object implements the OpenPaymentTokenExchange422Response interface.
 */
export function instanceOfOpenPaymentTokenExchange422Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function OpenPaymentTokenExchange422ResponseFromJSON(json: any): OpenPaymentTokenExchange422Response {
    return OpenPaymentTokenExchange422ResponseFromJSONTyped(json, false);
}

export function OpenPaymentTokenExchange422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenPaymentTokenExchange422Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'correlationId': !exists(json, 'correlationId') ? undefined : json['correlationId'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'oerrorCode': !exists(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorDetails': !exists(json, 'o:errorDetails') ? undefined : ((json['o:errorDetails'] as Array<any>).map(ProblemDetailFromJSON)),
        'oerrorPath': !exists(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}

export function OpenPaymentTokenExchange422ResponseToJSON(value?: OpenPaymentTokenExchange422Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'correlationId': value.correlationId,
        'detail': value.detail,
        'o:errorCode': value.oerrorCode,
        'o:errorDetails': value.oerrorDetails === undefined ? undefined : ((value.oerrorDetails as Array<any>).map(ProblemDetailToJSON)),
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}


/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProblemDetail } from './ProblemDetail';
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
export declare function instanceOfOpenPaymentTokenExchange422Response(value: object): boolean;
export declare function OpenPaymentTokenExchange422ResponseFromJSON(json: any): OpenPaymentTokenExchange422Response;
export declare function OpenPaymentTokenExchange422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenPaymentTokenExchange422Response;
export declare function OpenPaymentTokenExchange422ResponseToJSON(value?: OpenPaymentTokenExchange422Response | null): any;
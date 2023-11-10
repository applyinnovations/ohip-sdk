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
/**
 * Problem Details for HTTP APIs
 * @export
 * @interface ProblemDetail
 */
export interface ProblemDetail {
    /**
     * Unique identifier value that is attached to the request that allows reference to a particular transaction
     * @type {string}
     * @memberof ProblemDetail
     */
    correlationId?: string;
    /**
     * Detailed error message
     * @type {string}
     * @memberof ProblemDetail
     */
    detail?: string;
    /**
     * Application specific error code
     * @type {string}
     * @memberof ProblemDetail
     */
    oerrorCode?: string;
    /**
     * Drill down to the details
     * @type {Array<ProblemDetail>}
     * @memberof ProblemDetail
     */
    oerrorDetails?: Array<ProblemDetail>;
    /**
     * JSON path to indicate where the error occurs
     * @type {string}
     * @memberof ProblemDetail
     */
    oerrorPath?: string;
    /**
     * HTTP status code
     * @type {number}
     * @memberof ProblemDetail
     */
    status?: number;
    /**
     * Summary error message
     * @type {string}
     * @memberof ProblemDetail
     */
    title: string;
    /**
     * HTTP error code page
     * @type {string}
     * @memberof ProblemDetail
     */
    type: string;
}
/**
 * Check if a given object implements the ProblemDetail interface.
 */
export declare function instanceOfProblemDetail(value: object): boolean;
export declare function ProblemDetailFromJSON(json: any): ProblemDetail;
export declare function ProblemDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProblemDetail;
export declare function ProblemDetailToJSON(value?: ProblemDetail | null): any;

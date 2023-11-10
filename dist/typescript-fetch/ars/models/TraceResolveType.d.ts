/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface TraceResolveType
 */
export interface TraceResolveType {
    /**
     * User that resolved the trace
     * @type {string}
     * @memberof TraceResolveType
     */
    resolvedBy?: string;
    /**
     * Date the trace was resolved
     * @type {Date}
     * @memberof TraceResolveType
     */
    resolvedOn?: Date;
}
/**
 * Check if a given object implements the TraceResolveType interface.
 */
export declare function instanceOfTraceResolveType(value: object): boolean;
export declare function TraceResolveTypeFromJSON(json: any): TraceResolveType;
export declare function TraceResolveTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceResolveType;
export declare function TraceResolveTypeToJSON(value?: TraceResolveType | null): any;

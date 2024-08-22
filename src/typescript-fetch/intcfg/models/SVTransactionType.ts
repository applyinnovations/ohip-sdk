/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Status of the Hotel Interface either STOPPED or RUNNING.
 * @export
 */
export const SVTransactionType = {
    OperaTransaction: 'OperaTransaction',
    VendorTransaction: 'VendorTransaction',
    OperaAndVendorTransaction: 'OperaAndVendorTransaction'
} as const;
export type SVTransactionType = typeof SVTransactionType[keyof typeof SVTransactionType];


export function SVTransactionTypeFromJSON(json: any): SVTransactionType {
    return SVTransactionTypeFromJSONTyped(json, false);
}

export function SVTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SVTransactionType {
    return json as SVTransactionType;
}

export function SVTransactionTypeToJSON(value?: SVTransactionType | null): any {
    return value as any;
}


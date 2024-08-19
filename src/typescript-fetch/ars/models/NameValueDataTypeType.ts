/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const NameValueDataTypeType = {
    String: 'String',
    Number: 'Number',
    Date: 'Date',
    Datetime: 'Datetime',
    Time: 'Time',
    Integer: 'Integer'
} as const;
export type NameValueDataTypeType = typeof NameValueDataTypeType[keyof typeof NameValueDataTypeType];


export function NameValueDataTypeTypeFromJSON(json: any): NameValueDataTypeType {
    return NameValueDataTypeTypeFromJSONTyped(json, false);
}

export function NameValueDataTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameValueDataTypeType {
    return json as NameValueDataTypeType;
}

export function NameValueDataTypeTypeToJSON(value?: NameValueDataTypeType | null): any {
    return value as any;
}


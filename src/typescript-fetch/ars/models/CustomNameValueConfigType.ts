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
 * Italian Lottery Number.
 * @export
 */
export const CustomNameValueConfigType = {
    ItalianFattura: 'ItalianFattura',
    Folio: 'Folio',
    FinancialTransaction: 'FinancialTransaction',
    TaiwanInvoice: 'TaiwanInvoice',
    SaudiCustomerType: 'SaudiCustomerType',
    ItalianLotteryNumber: 'ItalianLotteryNumber'
} as const;
export type CustomNameValueConfigType = typeof CustomNameValueConfigType[keyof typeof CustomNameValueConfigType];


export function CustomNameValueConfigTypeFromJSON(json: any): CustomNameValueConfigType {
    return CustomNameValueConfigTypeFromJSONTyped(json, false);
}

export function CustomNameValueConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomNameValueConfigType {
    return json as CustomNameValueConfigType;
}

export function CustomNameValueConfigTypeToJSON(value?: CustomNameValueConfigType | null): any {
    return value as any;
}

/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export const FolioCommandType = {
    Invoice: 'Invoice',
    Info: 'Info',
    ResendInvoice: 'ResendInvoice',
    Cancellation: 'Cancellation',
    EodReset: 'EodReset',
    XReport: 'XReport',
    SendFiscalInvoice: 'SendFiscalInvoice',
    ZeroInvoice: 'ZeroInvoice',
    EndOfPeriod: 'EndOfPeriod',
    ZeroInvoiceWithReceipt: 'ZeroInvoiceWithReceipt',
    FiscalUpdate: 'FiscalUpdate',
    CheckOut: 'CheckOut'
} as const;
export type FolioCommandType = typeof FolioCommandType[keyof typeof FolioCommandType];


export function FolioCommandTypeFromJSON(json: any): FolioCommandType {
    return FolioCommandTypeFromJSONTyped(json, false);
}

export function FolioCommandTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioCommandType {
    return json as FolioCommandType;
}

export function FolioCommandTypeToJSON(value?: FolioCommandType | null): any {
    return value as any;
}


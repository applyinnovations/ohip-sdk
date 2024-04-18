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
 * This contains the receipt type.
 * @export
 */
export const ReceiptType = {
    Payment: 'Payment',
    Deposit: 'Deposit',
    Paidout: 'Paidout',
    Transaction: 'Transaction',
    CheckExchange: 'CheckExchange',
    CurrencyExchangeCheck: 'CurrencyExchangeCheck',
    CurrencyExchangeCash: 'CurrencyExchangeCash',
    DepositRequest: 'DepositRequest',
    DepositRefundReceipt: 'DepositRefundReceipt',
    Acknowledgement: 'Acknowledgement'
} as const;
export type ReceiptType = typeof ReceiptType[keyof typeof ReceiptType];


export function ReceiptTypeFromJSON(json: any): ReceiptType {
    return ReceiptTypeFromJSONTyped(json, false);
}

export function ReceiptTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiptType {
    return json as ReceiptType;
}

export function ReceiptTypeToJSON(value?: ReceiptType | null): any {
    return value as any;
}

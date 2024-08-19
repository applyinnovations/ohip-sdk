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
 * Shift drop report created when cashier closure is completed. It is an integral part of closure report and is not to be printed or accessed by itself.
 * @export
 */
export const CashierReportType = {
    Cash: 'Cash',
    Check: 'Check',
    ForeignCurrency: 'ForeignCurrency',
    CreditCard: 'CreditCard',
    Miscellaneous: 'Miscellaneous',
    ArSettlements: 'ArSettlements',
    DepositTransfers: 'DepositTransfers',
    Shiftdrop: 'Shiftdrop'
} as const;
export type CashierReportType = typeof CashierReportType[keyof typeof CashierReportType];


export function CashierReportTypeFromJSON(json: any): CashierReportType {
    return CashierReportTypeFromJSONTyped(json, false);
}

export function CashierReportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierReportType {
    return json as CashierReportType;
}

export function CashierReportTypeToJSON(value?: CashierReportType | null): any {
    return value as any;
}


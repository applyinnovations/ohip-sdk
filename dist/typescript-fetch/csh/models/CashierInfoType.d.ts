/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Cashier information. Contains Id and Name details of the cashier.
 * @export
 * @interface CashierInfoType
 */
export interface CashierInfoType {
    /**
     * Cashier Id of the Cashier.
     * @type {number}
     * @memberof CashierInfoType
     */
    cashierId?: number;
    /**
     * Cashier Name.
     * @type {string}
     * @memberof CashierInfoType
     */
    cashierName?: string;
}
/**
 * Check if a given object implements the CashierInfoType interface.
 */
export declare function instanceOfCashierInfoType(value: object): boolean;
export declare function CashierInfoTypeFromJSON(json: any): CashierInfoType;
export declare function CashierInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierInfoType;
export declare function CashierInfoTypeToJSON(value?: CashierInfoType | null): any;

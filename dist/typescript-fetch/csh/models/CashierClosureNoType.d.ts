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
 * Type used in cashier closure to specify a cashier's shift.
 * @export
 * @interface CashierClosureNoType
 */
export interface CashierClosureNoType {
    /**
     * Cashier closure shift drop cash payment method type bag number.
     * @type {string}
     * @memberof CashierClosureNoType
     */
    bagNumberForCash?: string;
    /**
     * Cashier closure shift drop others payment method type bag number.
     * @type {string}
     * @memberof CashierClosureNoType
     */
    bagNumberForOthers?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof CashierClosureNoType
     */
    cashierId?: number;
    /**
     * The Cashier Shift Number.
     * @type {number}
     * @memberof CashierClosureNoType
     */
    closureNo?: number;
    /**
     * Cashier closure shift drop location code.
     * @type {string}
     * @memberof CashierClosureNoType
     */
    shiftDropLocationCode?: string;
}
/**
 * Check if a given object implements the CashierClosureNoType interface.
 */
export declare function instanceOfCashierClosureNoType(value: object): boolean;
export declare function CashierClosureNoTypeFromJSON(json: any): CashierClosureNoType;
export declare function CashierClosureNoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierClosureNoType;
export declare function CashierClosureNoTypeToJSON(value?: CashierClosureNoType | null): any;

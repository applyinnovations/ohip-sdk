/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { PrepaidCardTransactionType } from './PrepaidCardTransactionType';
/**
 * Prepaid Card Details.
 * @export
 * @interface PrepaidCardDetailsType
 */
export interface PrepaidCardDetailsType {
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    activateDate?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    balanceTotal?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    creditTotal?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    debitTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    expiredDate?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    initialCreditTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    initialLoadDate?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardDetailsType
     */
    reservedTotal?: CurrencyAmountType;
    /**
     * Holds fixed charge detail.
     * @type {Array<PrepaidCardTransactionType>}
     * @memberof PrepaidCardDetailsType
     */
    transactions?: Array<PrepaidCardTransactionType>;
    /**
     * Holds fixed charge detail.
     * @type {string}
     * @memberof PrepaidCardDetailsType
     */
    validUntilDate?: string;
}
/**
 * Check if a given object implements the PrepaidCardDetailsType interface.
 */
export declare function instanceOfPrepaidCardDetailsType(value: object): boolean;
export declare function PrepaidCardDetailsTypeFromJSON(json: any): PrepaidCardDetailsType;
export declare function PrepaidCardDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardDetailsType;
export declare function PrepaidCardDetailsTypeToJSON(value?: PrepaidCardDetailsType | null): any;

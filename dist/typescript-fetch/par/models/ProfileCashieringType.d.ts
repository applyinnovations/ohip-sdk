/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DirectBillingType } from './DirectBillingType';
/**
 * Contains cashiering related details for the profile
 * @export
 * @interface ProfileCashieringType
 */
export interface ProfileCashieringType {
    /**
     * Account Receivables Central Number.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    arNoCentral?: string;
    /**
     * Contains the auto folio settlement type for the profile.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    autoFolioSettlementType?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof ProfileCashieringType
     */
    decimalPlaces?: number;
    /**
     * Contains the direct billing related information for the profile.
     * @type {Array<DirectBillingType>}
     * @memberof ProfileCashieringType
     */
    directBillingList?: Array<DirectBillingType>;
    /**
     * Ability to define on the account, the number of days after which the invoice should be paid.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    paymentDueDays?: number;
    /**
     * Reference Currency.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    referenceCurrency?: string;
    /**
     * Tax1 Percentage for Collecting Agent.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    taxPercent1?: number;
    /**
     * Tax2 Percentage for Collecting Agent.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    taxPercent2?: number;
    /**
     * Tax3 Percentage for Collecting Agent.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    taxPercent3?: number;
    /**
     * Tax4 Percentage for Collecting Agent.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    taxPercent4?: number;
    /**
     * Tax5 Percentage for Collecting Agent.
     * @type {number}
     * @memberof ProfileCashieringType
     */
    taxPercent5?: number;
    /**
     * VAT Offset Flag.
     * @type {string}
     * @memberof ProfileCashieringType
     */
    vATOffsetYN?: string;
}
/**
 * Check if a given object implements the ProfileCashieringType interface.
 */
export declare function instanceOfProfileCashieringType(value: object): boolean;
export declare function ProfileCashieringTypeFromJSON(json: any): ProfileCashieringType;
export declare function ProfileCashieringTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCashieringType;
export declare function ProfileCashieringTypeToJSON(value?: ProfileCashieringType | null): any;

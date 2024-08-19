/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DirectBillingType } from './DirectBillingType';
import {
    DirectBillingTypeFromJSON,
    DirectBillingTypeFromJSONTyped,
    DirectBillingTypeToJSON,
} from './DirectBillingType';

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
export function instanceOfProfileCashieringType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileCashieringTypeFromJSON(json: any): ProfileCashieringType {
    return ProfileCashieringTypeFromJSONTyped(json, false);
}

export function ProfileCashieringTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCashieringType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arNoCentral': !exists(json, 'arNoCentral') ? undefined : json['arNoCentral'],
        'autoFolioSettlementType': !exists(json, 'autoFolioSettlementType') ? undefined : json['autoFolioSettlementType'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'directBillingList': !exists(json, 'directBillingList') ? undefined : ((json['directBillingList'] as Array<any>).map(DirectBillingTypeFromJSON)),
        'paymentDueDays': !exists(json, 'paymentDueDays') ? undefined : json['paymentDueDays'],
        'referenceCurrency': !exists(json, 'referenceCurrency') ? undefined : json['referenceCurrency'],
        'taxPercent1': !exists(json, 'taxPercent1') ? undefined : json['taxPercent1'],
        'taxPercent2': !exists(json, 'taxPercent2') ? undefined : json['taxPercent2'],
        'taxPercent3': !exists(json, 'taxPercent3') ? undefined : json['taxPercent3'],
        'taxPercent4': !exists(json, 'taxPercent4') ? undefined : json['taxPercent4'],
        'taxPercent5': !exists(json, 'taxPercent5') ? undefined : json['taxPercent5'],
        'vATOffsetYN': !exists(json, 'vATOffsetYN') ? undefined : json['vATOffsetYN'],
    };
}

export function ProfileCashieringTypeToJSON(value?: ProfileCashieringType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arNoCentral': value.arNoCentral,
        'autoFolioSettlementType': value.autoFolioSettlementType,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'directBillingList': value.directBillingList === undefined ? undefined : ((value.directBillingList as Array<any>).map(DirectBillingTypeToJSON)),
        'paymentDueDays': value.paymentDueDays,
        'referenceCurrency': value.referenceCurrency,
        'taxPercent1': value.taxPercent1,
        'taxPercent2': value.taxPercent2,
        'taxPercent3': value.taxPercent3,
        'taxPercent4': value.taxPercent4,
        'taxPercent5': value.taxPercent5,
        'vATOffsetYN': value.vATOffsetYN,
    };
}


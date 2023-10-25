/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Information related to a membership transactions Revenue.
 * @export
 * @interface MembershipTransactionRevenueType
 */
export interface MembershipTransactionRevenueType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof MembershipTransactionRevenueType
     */
    centralRevenue?: CurrencyAmountType;
    /**
     * Indicates the Date when the revenue was recognized.
     * @type {Date}
     * @memberof MembershipTransactionRevenueType
     */
    date?: Date;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof MembershipTransactionRevenueType
     */
    pMSRevenue?: CurrencyAmountType;
    /**
     * Indicates if the stay is qualified for points calculation.
     * @type {boolean}
     * @memberof MembershipTransactionRevenueType
     */
    qualified?: boolean;
    /**
     * Indicates the Revenue type associated to Revenue.
     * @type {string}
     * @memberof MembershipTransactionRevenueType
     */
    revenueType?: string;
}

/**
 * Check if a given object implements the MembershipTransactionRevenueType interface.
 */
export function instanceOfMembershipTransactionRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTransactionRevenueTypeFromJSON(json: any): MembershipTransactionRevenueType {
    return MembershipTransactionRevenueTypeFromJSONTyped(json, false);
}

export function MembershipTransactionRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'centralRevenue': !exists(json, 'centralRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['centralRevenue']),
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'pMSRevenue': !exists(json, 'pMSRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['pMSRevenue']),
        'qualified': !exists(json, 'qualified') ? undefined : json['qualified'],
        'revenueType': !exists(json, 'revenueType') ? undefined : json['revenueType'],
    };
}

export function MembershipTransactionRevenueTypeToJSON(value?: MembershipTransactionRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'centralRevenue': CurrencyAmountTypeToJSON(value.centralRevenue),
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'pMSRevenue': CurrencyAmountTypeToJSON(value.pMSRevenue),
        'qualified': value.qualified,
        'revenueType': value.revenueType,
    };
}


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
import type { ARBalanceType } from './ARBalanceType';
import {
    ARBalanceTypeFromJSON,
    ARBalanceTypeFromJSONTyped,
    ARBalanceTypeToJSON,
} from './ARBalanceType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';

/**
 * Year information for an Year View.
 * @export
 * @interface ARYearViewType
 */
export interface ARYearViewType {
    /**
     * 
     * @type {ARBalanceType}
     * @memberof ARYearViewType
     */
    balanceInfo?: ARBalanceType;
    /**
     * 
     * @type {DateRangeType}
     * @memberof ARYearViewType
     */
    dateRange?: DateRangeType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ARYearViewType
     */
    runningTotal?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ARYearViewType interface.
 */
export function instanceOfARYearViewType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARYearViewTypeFromJSON(json: any): ARYearViewType {
    return ARYearViewTypeFromJSONTyped(json, false);
}

export function ARYearViewTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARYearViewType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceInfo': !exists(json, 'balanceInfo') ? undefined : ARBalanceTypeFromJSON(json['balanceInfo']),
        'dateRange': !exists(json, 'dateRange') ? undefined : DateRangeTypeFromJSON(json['dateRange']),
        'runningTotal': !exists(json, 'runningTotal') ? undefined : CurrencyAmountTypeFromJSON(json['runningTotal']),
    };
}

export function ARYearViewTypeToJSON(value?: ARYearViewType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balanceInfo': ARBalanceTypeToJSON(value.balanceInfo),
        'dateRange': DateRangeTypeToJSON(value.dateRange),
        'runningTotal': CurrencyAmountTypeToJSON(value.runningTotal),
    };
}


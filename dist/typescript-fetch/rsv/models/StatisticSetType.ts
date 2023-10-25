/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NumericCategorySummaryType } from './NumericCategorySummaryType';
import {
    NumericCategorySummaryTypeFromJSON,
    NumericCategorySummaryTypeFromJSONTyped,
    NumericCategorySummaryTypeToJSON,
} from './NumericCategorySummaryType';
import type { RevenueCategorySummaryType } from './RevenueCategorySummaryType';
import {
    RevenueCategorySummaryTypeFromJSON,
    RevenueCategorySummaryTypeFromJSONTyped,
    RevenueCategorySummaryTypeToJSON,
} from './RevenueCategorySummaryType';

/**
 * An instance of a statistic, which is a set containing revenue category and number category summaries.
 * @export
 * @interface StatisticSetType
 */
export interface StatisticSetType {
    /**
     * Collection of CountCategorySummary elements. Used if count values reported.
     * @type {Array<NumericCategorySummaryType>}
     * @memberof StatisticSetType
     */
    numericCategorySummariesType?: Array<NumericCategorySummaryType>;
    /**
     * Collection of RevenueCategorySummary elements. Used if revenue values reported.
     * @type {Array<RevenueCategorySummaryType>}
     * @memberof StatisticSetType
     */
    revenueCategorySummariesType?: Array<RevenueCategorySummaryType>;
    /**
     * Date of the statistic.
     * @type {Date}
     * @memberof StatisticSetType
     */
    statisticDate?: Date;
    /**
     * Determines whether statistic date is a weekend date.
     * @type {boolean}
     * @memberof StatisticSetType
     */
    weekendDate?: boolean;
}

/**
 * Check if a given object implements the StatisticSetType interface.
 */
export function instanceOfStatisticSetType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatisticSetTypeFromJSON(json: any): StatisticSetType {
    return StatisticSetTypeFromJSONTyped(json, false);
}

export function StatisticSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticSetType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numericCategorySummariesType': !exists(json, 'numericCategorySummariesType') ? undefined : ((json['numericCategorySummariesType'] as Array<any>).map(NumericCategorySummaryTypeFromJSON)),
        'revenueCategorySummariesType': !exists(json, 'revenueCategorySummariesType') ? undefined : ((json['revenueCategorySummariesType'] as Array<any>).map(RevenueCategorySummaryTypeFromJSON)),
        'statisticDate': !exists(json, 'statisticDate') ? undefined : (new Date(json['statisticDate'])),
        'weekendDate': !exists(json, 'weekendDate') ? undefined : json['weekendDate'],
    };
}

export function StatisticSetTypeToJSON(value?: StatisticSetType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numericCategorySummariesType': value.numericCategorySummariesType === undefined ? undefined : ((value.numericCategorySummariesType as Array<any>).map(NumericCategorySummaryTypeToJSON)),
        'revenueCategorySummariesType': value.revenueCategorySummariesType === undefined ? undefined : ((value.revenueCategorySummariesType as Array<any>).map(RevenueCategorySummaryTypeToJSON)),
        'statisticDate': value.statisticDate === undefined ? undefined : (value.statisticDate.toISOString().substr(0,10)),
        'weekendDate': value.weekendDate,
    };
}


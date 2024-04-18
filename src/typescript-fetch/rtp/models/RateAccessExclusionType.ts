/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';

/**
 * Access Exclusion information indicating the actions allowed under a HUB or Hotel for which the access exclusion is set.
 * @export
 * @interface RateAccessExclusionType
 */
export interface RateAccessExclusionType {
    /**
     * Allow to cancel a reservation under this access exclusion.
     * @type {boolean}
     * @memberof RateAccessExclusionType
     */
    allowCancelReservation?: boolean;
    /**
     * Allow to create a reservation under this access exclusion.
     * @type {boolean}
     * @memberof RateAccessExclusionType
     */
    allowCreateReservation?: boolean;
    /**
     * Allow to modify a reservation under this access exclusion.
     * @type {boolean}
     * @memberof RateAccessExclusionType
     */
    allowModifyReservation?: boolean;
    /**
     * 
     * @type {DateRangeType}
     * @memberof RateAccessExclusionType
     */
    dateRange?: DateRangeType;
    /**
     * Exclude a specific rate from availability
     * @type {boolean}
     * @memberof RateAccessExclusionType
     */
    excludeFromAvailability?: boolean;
    /**
     * The rate access exclusion is inactive
     * @type {boolean}
     * @memberof RateAccessExclusionType
     */
    inactive?: boolean;
    /**
     * The type of source (CRO or Hotel code) for which the rate access exclusion is set.
     * @type {string}
     * @memberof RateAccessExclusionType
     */
    sourceType?: string;
    /**
     * CRO or Hotel code value.
     * @type {string}
     * @memberof RateAccessExclusionType
     */
    sourceValue?: string;
}

/**
 * Check if a given object implements the RateAccessExclusionType interface.
 */
export function instanceOfRateAccessExclusionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RateAccessExclusionTypeFromJSON(json: any): RateAccessExclusionType {
    return RateAccessExclusionTypeFromJSONTyped(json, false);
}

export function RateAccessExclusionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateAccessExclusionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowCancelReservation': !exists(json, 'allowCancelReservation') ? undefined : json['allowCancelReservation'],
        'allowCreateReservation': !exists(json, 'allowCreateReservation') ? undefined : json['allowCreateReservation'],
        'allowModifyReservation': !exists(json, 'allowModifyReservation') ? undefined : json['allowModifyReservation'],
        'dateRange': !exists(json, 'dateRange') ? undefined : DateRangeTypeFromJSON(json['dateRange']),
        'excludeFromAvailability': !exists(json, 'excludeFromAvailability') ? undefined : json['excludeFromAvailability'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'sourceType': !exists(json, 'sourceType') ? undefined : json['sourceType'],
        'sourceValue': !exists(json, 'sourceValue') ? undefined : json['sourceValue'],
    };
}

export function RateAccessExclusionTypeToJSON(value?: RateAccessExclusionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowCancelReservation': value.allowCancelReservation,
        'allowCreateReservation': value.allowCreateReservation,
        'allowModifyReservation': value.allowModifyReservation,
        'dateRange': DateRangeTypeToJSON(value.dateRange),
        'excludeFromAvailability': value.excludeFromAvailability,
        'inactive': value.inactive,
        'sourceType': value.sourceType,
        'sourceValue': value.sourceValue,
    };
}

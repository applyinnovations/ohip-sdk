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
import type { HotelPackageSchedulePriceType } from './HotelPackageSchedulePriceType';
import {
    HotelPackageSchedulePriceTypeFromJSON,
    HotelPackageSchedulePriceTypeFromJSONTyped,
    HotelPackageSchedulePriceTypeToJSON,
} from './HotelPackageSchedulePriceType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * A Hotel Package Schedule.
 * @export
 * @interface ConfigPackageScheduleType
 */
export interface ConfigPackageScheduleType {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof ConfigPackageScheduleType
     */
    end?: string;
    /**
     * Maximum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    maxNights?: number;
    /**
     * Maximum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    maxPersons?: number;
    /**
     * Minimum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    minNights?: number;
    /**
     * Minimum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    minPersons?: number;
    /**
     * New maximum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMaxNights?: number;
    /**
     * New maximum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMaxPersons?: number;
    /**
     * New minimum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMinNights?: number;
    /**
     * New minimum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMinPersons?: number;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof ConfigPackageScheduleType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * The rate plan code specific prices for the package (if any).
     * @type {string}
     * @memberof ConfigPackageScheduleType
     */
    ratePlanCode?: string;
    /**
     * Collection of price schedule for the package.
     * @type {Array<HotelPackageSchedulePriceType>}
     * @memberof ConfigPackageScheduleType
     */
    schedulePrices?: Array<HotelPackageSchedulePriceType>;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof ConfigPackageScheduleType
     */
    start?: string;
}

/**
 * Check if a given object implements the ConfigPackageScheduleType interface.
 */
export function instanceOfConfigPackageScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigPackageScheduleTypeFromJSON(json: any): ConfigPackageScheduleType {
    return ConfigPackageScheduleTypeFromJSONTyped(json, false);
}

export function ConfigPackageScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPackageScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'end': !exists(json, 'end') ? undefined : json['end'],
        'maxNights': !exists(json, 'maxNights') ? undefined : json['maxNights'],
        'maxPersons': !exists(json, 'maxPersons') ? undefined : json['maxPersons'],
        'minNights': !exists(json, 'minNights') ? undefined : json['minNights'],
        'minPersons': !exists(json, 'minPersons') ? undefined : json['minPersons'],
        'newMaxNights': !exists(json, 'newMaxNights') ? undefined : json['newMaxNights'],
        'newMaxPersons': !exists(json, 'newMaxPersons') ? undefined : json['newMaxPersons'],
        'newMinNights': !exists(json, 'newMinNights') ? undefined : json['newMinNights'],
        'newMinPersons': !exists(json, 'newMinPersons') ? undefined : json['newMinPersons'],
        'newTimeSpan': !exists(json, 'newTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['newTimeSpan']),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'schedulePrices': !exists(json, 'schedulePrices') ? undefined : ((json['schedulePrices'] as Array<any>).map(HotelPackageSchedulePriceTypeFromJSON)),
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function ConfigPackageScheduleTypeToJSON(value?: ConfigPackageScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end': value.end,
        'maxNights': value.maxNights,
        'maxPersons': value.maxPersons,
        'minNights': value.minNights,
        'minPersons': value.minPersons,
        'newMaxNights': value.newMaxNights,
        'newMaxPersons': value.newMaxPersons,
        'newMinNights': value.newMinNights,
        'newMinPersons': value.newMinPersons,
        'newTimeSpan': TimeSpanTypeToJSON(value.newTimeSpan),
        'ratePlanCode': value.ratePlanCode,
        'schedulePrices': value.schedulePrices === undefined ? undefined : ((value.schedulePrices as Array<any>).map(HotelPackageSchedulePriceTypeToJSON)),
        'start': value.start,
    };
}


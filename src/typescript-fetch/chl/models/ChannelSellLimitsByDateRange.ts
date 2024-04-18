/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelSellLimitScheduleType } from './ChannelSellLimitScheduleType';
import {
    ChannelSellLimitScheduleTypeFromJSON,
    ChannelSellLimitScheduleTypeFromJSONTyped,
    ChannelSellLimitScheduleTypeToJSON,
} from './ChannelSellLimitScheduleType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to create or update sell limit schedules for the channel or channel room type within a date range. Existing schedules can be split as needed to account for overlapping schedules.
 * @export
 * @interface ChannelSellLimitsByDateRange
 */
export interface ChannelSellLimitsByDateRange {
    /**
     * Flag to indicate whether any overlapping schedules should be automatically adjusted (split, truncated, etc.) as needed.
     * @type {boolean}
     * @memberof ChannelSellLimitsByDateRange
     */
    adjustOverlappingSchedules?: boolean;
    /**
     * Details about a sell limit schedule for a channel or channel room type.
     * @type {Array<ChannelSellLimitScheduleType>}
     * @memberof ChannelSellLimitsByDateRange
     */
    sellLimits?: Array<ChannelSellLimitScheduleType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelSellLimitsByDateRange
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelSellLimitsByDateRange interface.
 */
export function instanceOfChannelSellLimitsByDateRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelSellLimitsByDateRangeFromJSON(json: any): ChannelSellLimitsByDateRange {
    return ChannelSellLimitsByDateRangeFromJSONTyped(json, false);
}

export function ChannelSellLimitsByDateRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSellLimitsByDateRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustOverlappingSchedules': !exists(json, 'adjustOverlappingSchedules') ? undefined : json['adjustOverlappingSchedules'],
        'sellLimits': !exists(json, 'sellLimits') ? undefined : ((json['sellLimits'] as Array<any>).map(ChannelSellLimitScheduleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelSellLimitsByDateRangeToJSON(value?: ChannelSellLimitsByDateRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustOverlappingSchedules': value.adjustOverlappingSchedules,
        'sellLimits': value.sellLimits === undefined ? undefined : ((value.sellLimits as Array<any>).map(ChannelSellLimitScheduleTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

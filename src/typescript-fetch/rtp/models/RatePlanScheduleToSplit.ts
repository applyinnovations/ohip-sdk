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
import type { BaseRatePlanScheduleDetailType } from './BaseRatePlanScheduleDetailType';
import {
    BaseRatePlanScheduleDetailTypeFromJSON,
    BaseRatePlanScheduleDetailTypeFromJSONTyped,
    BaseRatePlanScheduleDetailTypeToJSON,
} from './BaseRatePlanScheduleDetailType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RatePlanScheduleToSplitRatePlanSchedule } from './RatePlanScheduleToSplitRatePlanSchedule';
import {
    RatePlanScheduleToSplitRatePlanScheduleFromJSON,
    RatePlanScheduleToSplitRatePlanScheduleFromJSONTyped,
    RatePlanScheduleToSplitRatePlanScheduleToJSON,
} from './RatePlanScheduleToSplitRatePlanSchedule';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to split rate plan schedule.
 * @export
 * @interface RatePlanScheduleToSplit
 */
export interface RatePlanScheduleToSplit {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RatePlanScheduleToSplit
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RatePlanScheduleToSplitRatePlanSchedule}
     * @memberof RatePlanScheduleToSplit
     */
    ratePlanSchedule?: RatePlanScheduleToSplitRatePlanSchedule;
    /**
     * 
     * @type {BaseRatePlanScheduleDetailType}
     * @memberof RatePlanScheduleToSplit
     */
    splitDetails?: BaseRatePlanScheduleDetailType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RatePlanScheduleToSplit
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RatePlanScheduleToSplit interface.
 */
export function instanceOfRatePlanScheduleToSplit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanScheduleToSplitFromJSON(json: any): RatePlanScheduleToSplit {
    return RatePlanScheduleToSplitFromJSONTyped(json, false);
}

export function RatePlanScheduleToSplitFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanScheduleToSplit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'ratePlanSchedule': !exists(json, 'ratePlanSchedule') ? undefined : RatePlanScheduleToSplitRatePlanScheduleFromJSON(json['ratePlanSchedule']),
        'splitDetails': !exists(json, 'splitDetails') ? undefined : BaseRatePlanScheduleDetailTypeFromJSON(json['splitDetails']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RatePlanScheduleToSplitToJSON(value?: RatePlanScheduleToSplit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'ratePlanSchedule': RatePlanScheduleToSplitRatePlanScheduleToJSON(value.ratePlanSchedule),
        'splitDetails': BaseRatePlanScheduleDetailTypeToJSON(value.splitDetails),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


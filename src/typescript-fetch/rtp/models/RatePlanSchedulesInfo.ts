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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RatePlanMasterInfoType } from './RatePlanMasterInfoType';
import {
    RatePlanMasterInfoTypeFromJSON,
    RatePlanMasterInfoTypeFromJSONTyped,
    RatePlanMasterInfoTypeToJSON,
} from './RatePlanMasterInfoType';
import type { RatePlanScheduleListType } from './RatePlanScheduleListType';
import {
    RatePlanScheduleListTypeFromJSON,
    RatePlanScheduleListTypeFromJSONTyped,
    RatePlanScheduleListTypeToJSON,
} from './RatePlanScheduleListType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object to fetch rate plan schedules.
 * @export
 * @interface RatePlanSchedulesInfo
 */
export interface RatePlanSchedulesInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RatePlanSchedulesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RatePlanMasterInfoType}
     * @memberof RatePlanSchedulesInfo
     */
    ratePlanMasterInfo?: RatePlanMasterInfoType;
    /**
     * 
     * @type {RatePlanScheduleListType}
     * @memberof RatePlanSchedulesInfo
     */
    ratePlanScheduleList?: RatePlanScheduleListType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RatePlanSchedulesInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RatePlanSchedulesInfo interface.
 */
export function instanceOfRatePlanSchedulesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlanSchedulesInfoFromJSON(json: any): RatePlanSchedulesInfo {
    return RatePlanSchedulesInfoFromJSONTyped(json, false);
}

export function RatePlanSchedulesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanSchedulesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'ratePlanMasterInfo': !exists(json, 'ratePlanMasterInfo') ? undefined : RatePlanMasterInfoTypeFromJSON(json['ratePlanMasterInfo']),
        'ratePlanScheduleList': !exists(json, 'ratePlanScheduleList') ? undefined : RatePlanScheduleListTypeFromJSON(json['ratePlanScheduleList']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RatePlanSchedulesInfoToJSON(value?: RatePlanSchedulesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'ratePlanMasterInfo': RatePlanMasterInfoTypeToJSON(value.ratePlanMasterInfo),
        'ratePlanScheduleList': RatePlanScheduleListTypeToJSON(value.ratePlanScheduleList),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

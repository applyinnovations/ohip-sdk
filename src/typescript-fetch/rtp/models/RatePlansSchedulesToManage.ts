/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelRatePlanSchedulesType } from './HotelRatePlanSchedulesType';
import {
    HotelRatePlanSchedulesTypeFromJSON,
    HotelRatePlanSchedulesTypeFromJSONTyped,
    HotelRatePlanSchedulesTypeToJSON,
} from './HotelRatePlanSchedulesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object to create/change/delete rate plans schedules.
 * @export
 * @interface RatePlansSchedulesToManage
 */
export interface RatePlansSchedulesToManage {
    /**
     * Hotel rate plan schedules to be managed.
     * @type {Array<HotelRatePlanSchedulesType>}
     * @memberof RatePlansSchedulesToManage
     */
    hotelRatePlansSchedules?: Array<HotelRatePlanSchedulesType>;
    /**
     * 
     * @type {Links}
     * @memberof RatePlansSchedulesToManage
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof RatePlansSchedulesToManage
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RatePlansSchedulesToManage interface.
 */
export function instanceOfRatePlansSchedulesToManage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePlansSchedulesToManageFromJSON(json: any): RatePlansSchedulesToManage {
    return RatePlansSchedulesToManageFromJSONTyped(json, false);
}

export function RatePlansSchedulesToManageFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlansSchedulesToManage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelRatePlansSchedules': !exists(json, 'hotelRatePlansSchedules') ? undefined : ((json['hotelRatePlansSchedules'] as Array<any>).map(HotelRatePlanSchedulesTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RatePlansSchedulesToManageToJSON(value?: RatePlansSchedulesToManage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelRatePlansSchedules': value.hotelRatePlansSchedules === undefined ? undefined : ((value.hotelRatePlansSchedules as Array<any>).map(HotelRatePlanSchedulesTypeToJSON)),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

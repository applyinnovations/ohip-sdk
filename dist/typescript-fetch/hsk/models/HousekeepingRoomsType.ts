/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Type for a list of Housekeeping rooms for a resort. Used as a criteria type for requests.
 * @export
 * @interface HousekeepingRoomsType
 */
export interface HousekeepingRoomsType {
    /**
     * Collection of room numbers.
     * @type {Array<string>}
     * @memberof HousekeepingRoomsType
     */
    roomList?: Array<string>;
}

/**
 * Check if a given object implements the HousekeepingRoomsType interface.
 */
export function instanceOfHousekeepingRoomsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingRoomsTypeFromJSON(json: any): HousekeepingRoomsType {
    return HousekeepingRoomsTypeFromJSONTyped(json, false);
}

export function HousekeepingRoomsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomList': !exists(json, 'roomList') ? undefined : json['roomList'],
    };
}

export function HousekeepingRoomsTypeToJSON(value?: HousekeepingRoomsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomList': value.roomList,
    };
}


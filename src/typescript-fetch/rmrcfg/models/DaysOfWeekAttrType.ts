/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Days of the Week
 * @export
 * @interface DaysOfWeekAttrType
 */
export interface DaysOfWeekAttrType {
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    saturday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DaysOfWeekAttrType
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the DaysOfWeekAttrType interface.
 */
export function instanceOfDaysOfWeekAttrType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DaysOfWeekAttrTypeFromJSON(json: any): DaysOfWeekAttrType {
    return DaysOfWeekAttrTypeFromJSONTyped(json, false);
}

export function DaysOfWeekAttrTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DaysOfWeekAttrType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function DaysOfWeekAttrTypeToJSON(value?: DaysOfWeekAttrType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'friday': value.friday,
        'monday': value.monday,
        'saturday': value.saturday,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}


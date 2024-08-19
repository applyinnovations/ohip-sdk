/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Detailed information of Housekeeping Section Group.
 * @export
 * @interface HousekeepingSectionGroupType
 */
export interface HousekeepingSectionGroupType {
    /**
     * Housekeeping Section Group Code.
     * @type {string}
     * @memberof HousekeepingSectionGroupType
     */
    code?: string;
    /**
     * Description of the Housekeeping Section Group.
     * @type {string}
     * @memberof HousekeepingSectionGroupType
     */
    description?: string;
    /**
     * Property of the Housekeeping section group.
     * @type {string}
     * @memberof HousekeepingSectionGroupType
     */
    hotelId?: string;
    /**
     * Number of housekeeping credits. This is auto populated while creating/fetching record.
     * @type {number}
     * @memberof HousekeepingSectionGroupType
     */
    roomCredits?: number;
    /**
     * Rooms count for this section group. This is auto populated while creating/fetching record.
     * @type {number}
     * @memberof HousekeepingSectionGroupType
     */
    rooms?: number;
    /**
     * Display sequence when task assignment is automatically broken out by Section Group.
     * @type {number}
     * @memberof HousekeepingSectionGroupType
     */
    sequence?: number;
    /**
     * Target Credit for each task Sheet when auto task assignment is broken out per Section Group.
     * @type {number}
     * @memberof HousekeepingSectionGroupType
     */
    targetCredits?: number;
}

/**
 * Check if a given object implements the HousekeepingSectionGroupType interface.
 */
export function instanceOfHousekeepingSectionGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingSectionGroupTypeFromJSON(json: any): HousekeepingSectionGroupType {
    return HousekeepingSectionGroupTypeFromJSONTyped(json, false);
}

export function HousekeepingSectionGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomCredits': !exists(json, 'roomCredits') ? undefined : json['roomCredits'],
        'rooms': !exists(json, 'rooms') ? undefined : json['rooms'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'targetCredits': !exists(json, 'targetCredits') ? undefined : json['targetCredits'],
    };
}

export function HousekeepingSectionGroupTypeToJSON(value?: HousekeepingSectionGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'roomCredits': value.roomCredits,
        'rooms': value.rooms,
        'sequence': value.sequence,
        'targetCredits': value.targetCredits,
    };
}


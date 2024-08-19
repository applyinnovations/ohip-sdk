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
 * Information regarding Housekeeping Sections.
 * @export
 * @interface HousekeepingSectionType
 */
export interface HousekeepingSectionType {
    /**
     * The Housekeeping Section Code.
     * @type {string}
     * @memberof HousekeepingSectionType
     */
    code?: string;
    /**
     * Description of the Section.
     * @type {string}
     * @memberof HousekeepingSectionType
     */
    description?: string;
    /**
     * Property where this section is defined.
     * @type {string}
     * @memberof HousekeepingSectionType
     */
    hotelId?: string;
    /**
     * Indicates if the Section Code is active.
     * @type {boolean}
     * @memberof HousekeepingSectionType
     */
    inactive?: boolean;
    /**
     * Number of housekeeping credits. This is auto populated while creating/fetching record.
     * @type {number}
     * @memberof HousekeepingSectionType
     */
    roomCredits?: number;
    /**
     * Rooms count for this section code. This is auto populated while creating/fetching record.
     * @type {number}
     * @memberof HousekeepingSectionType
     */
    rooms?: number;
    /**
     * Housekeeping Section Group.
     * @type {string}
     * @memberof HousekeepingSectionType
     */
    sectionGroup?: string;
    /**
     * Display sequence when task assignment is automatically broken out by Section Group.
     * @type {number}
     * @memberof HousekeepingSectionType
     */
    sequence?: number;
    /**
     * Target Credit for each task sheet created for this section when auto task assignment is broken out by section.
     * @type {number}
     * @memberof HousekeepingSectionType
     */
    targetCredits?: number;
}

/**
 * Check if a given object implements the HousekeepingSectionType interface.
 */
export function instanceOfHousekeepingSectionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingSectionTypeFromJSON(json: any): HousekeepingSectionType {
    return HousekeepingSectionTypeFromJSONTyped(json, false);
}

export function HousekeepingSectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'roomCredits': !exists(json, 'roomCredits') ? undefined : json['roomCredits'],
        'rooms': !exists(json, 'rooms') ? undefined : json['rooms'],
        'sectionGroup': !exists(json, 'sectionGroup') ? undefined : json['sectionGroup'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'targetCredits': !exists(json, 'targetCredits') ? undefined : json['targetCredits'],
    };
}

export function HousekeepingSectionTypeToJSON(value?: HousekeepingSectionType | null): any {
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
        'inactive': value.inactive,
        'roomCredits': value.roomCredits,
        'rooms': value.rooms,
        'sectionGroup': value.sectionGroup,
        'sequence': value.sequence,
        'targetCredits': value.targetCredits,
    };
}


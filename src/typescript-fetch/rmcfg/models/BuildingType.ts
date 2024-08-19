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
 * Building or Building Group details associated with the Hotel.
 * @export
 * @interface BuildingType
 */
export interface BuildingType {
    /**
     * Building Group to which building belongs to.
     * @type {string}
     * @memberof BuildingType
     */
    buildingGroupCode?: string;
    /**
     * Building Group or Building Code Identifier of the Hotel.
     * @type {string}
     * @memberof BuildingType
     */
    code?: string;
    /**
     * Total Credits for all the rooms that belong to this building group.
     * @type {number}
     * @memberof BuildingType
     */
    credits?: number;
    /**
     * The description of the Building or Building Group.
     * @type {string}
     * @memberof BuildingType
     */
    description?: string;
    /**
     * Hotel Identifier of the Building or Building Group.
     * @type {string}
     * @memberof BuildingType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildingType
     */
    rooms?: Array<string>;
    /**
     * Building Sequence when task assignment is automatically generated by building.
     * @type {number}
     * @memberof BuildingType
     */
    sequence?: number;
    /**
     * Target Credit for each task sheet created for this building when auto task assignment is broken out by building.
     * @type {number}
     * @memberof BuildingType
     */
    targetCredits?: number;
}

/**
 * Check if a given object implements the BuildingType interface.
 */
export function instanceOfBuildingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildingTypeFromJSON(json: any): BuildingType {
    return BuildingTypeFromJSONTyped(json, false);
}

export function BuildingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildingGroupCode': !exists(json, 'buildingGroupCode') ? undefined : json['buildingGroupCode'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'credits': !exists(json, 'credits') ? undefined : json['credits'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rooms': !exists(json, 'rooms') ? undefined : json['rooms'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'targetCredits': !exists(json, 'targetCredits') ? undefined : json['targetCredits'],
    };
}

export function BuildingTypeToJSON(value?: BuildingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildingGroupCode': value.buildingGroupCode,
        'code': value.code,
        'credits': value.credits,
        'description': value.description,
        'hotelId': value.hotelId,
        'rooms': value.rooms,
        'sequence': value.sequence,
        'targetCredits': value.targetCredits,
    };
}


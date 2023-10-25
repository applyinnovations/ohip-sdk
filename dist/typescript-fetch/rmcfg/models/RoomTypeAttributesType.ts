/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Attributes of property room type.
 * @export
 * @interface RoomTypeAttributesType
 */
export interface RoomTypeAttributesType {
    /**
     * Default occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    defaultOccupancy?: number;
    /**
     * Maximum adult occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    maximumAdults?: number;
    /**
     * Maximum children occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    maximumChildren?: number;
    /**
     * Max occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    maximumOccupancy?: number;
    /**
     * Minimum occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    minimumOccupancy?: number;
    /**
     * Number of physical rooms of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    noOfPhysicalRooms?: number;
}

/**
 * Check if a given object implements the RoomTypeAttributesType interface.
 */
export function instanceOfRoomTypeAttributesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeAttributesTypeFromJSON(json: any): RoomTypeAttributesType {
    return RoomTypeAttributesTypeFromJSONTyped(json, false);
}

export function RoomTypeAttributesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeAttributesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultOccupancy': !exists(json, 'defaultOccupancy') ? undefined : json['defaultOccupancy'],
        'maximumAdults': !exists(json, 'maximumAdults') ? undefined : json['maximumAdults'],
        'maximumChildren': !exists(json, 'maximumChildren') ? undefined : json['maximumChildren'],
        'maximumOccupancy': !exists(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'minimumOccupancy': !exists(json, 'minimumOccupancy') ? undefined : json['minimumOccupancy'],
        'noOfPhysicalRooms': !exists(json, 'noOfPhysicalRooms') ? undefined : json['noOfPhysicalRooms'],
    };
}

export function RoomTypeAttributesTypeToJSON(value?: RoomTypeAttributesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultOccupancy': value.defaultOccupancy,
        'maximumAdults': value.maximumAdults,
        'maximumChildren': value.maximumChildren,
        'maximumOccupancy': value.maximumOccupancy,
        'minimumOccupancy': value.minimumOccupancy,
        'noOfPhysicalRooms': value.noOfPhysicalRooms,
    };
}


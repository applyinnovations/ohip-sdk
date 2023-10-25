/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Detailed information on the capacity of a room.
 * @export
 * @interface RoomSizeType
 */
export interface RoomSizeType {
    /**
     * Area of the room.
     * @type {number}
     * @memberof RoomSizeType
     */
    area?: number;
    /**
     * Length of the room.
     * @type {number}
     * @memberof RoomSizeType
     */
    length?: number;
    /**
     * Maximum height of the room.
     * @type {number}
     * @memberof RoomSizeType
     */
    maxHeight?: number;
    /**
     * Minimum height of the room.
     * @type {number}
     * @memberof RoomSizeType
     */
    minHeight?: number;
    /**
     * The unit of measure in a code format.
     * @type {string}
     * @memberof RoomSizeType
     */
    unitOfMeasureCode?: string;
    /**
     * Width of the room.
     * @type {number}
     * @memberof RoomSizeType
     */
    width?: number;
}

/**
 * Check if a given object implements the RoomSizeType interface.
 */
export function instanceOfRoomSizeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomSizeTypeFromJSON(json: any): RoomSizeType {
    return RoomSizeTypeFromJSONTyped(json, false);
}

export function RoomSizeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomSizeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'area': !exists(json, 'area') ? undefined : json['area'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'maxHeight': !exists(json, 'maxHeight') ? undefined : json['maxHeight'],
        'minHeight': !exists(json, 'minHeight') ? undefined : json['minHeight'],
        'unitOfMeasureCode': !exists(json, 'unitOfMeasureCode') ? undefined : json['unitOfMeasureCode'],
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function RoomSizeTypeToJSON(value?: RoomSizeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'area': value.area,
        'length': value.length,
        'maxHeight': value.maxHeight,
        'minHeight': value.minHeight,
        'unitOfMeasureCode': value.unitOfMeasureCode,
        'width': value.width,
    };
}


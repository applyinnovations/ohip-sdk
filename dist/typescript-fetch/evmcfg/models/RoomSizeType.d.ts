/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
export declare function instanceOfRoomSizeType(value: object): boolean;
export declare function RoomSizeTypeFromJSON(json: any): RoomSizeType;
export declare function RoomSizeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomSizeType;
export declare function RoomSizeTypeToJSON(value?: RoomSizeType | null): any;
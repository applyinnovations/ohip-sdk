/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
     * Max occupancy of property room type.
     * @type {number}
     * @memberof RoomTypeAttributesType
     */
    maximumOccupancy?: number;
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
export declare function instanceOfRoomTypeAttributesType(value: object): boolean;
export declare function RoomTypeAttributesTypeFromJSON(json: any): RoomTypeAttributesType;
export declare function RoomTypeAttributesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeAttributesType;
export declare function RoomTypeAttributesTypeToJSON(value?: RoomTypeAttributesType | null): any;
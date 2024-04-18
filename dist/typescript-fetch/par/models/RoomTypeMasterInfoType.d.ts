/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomTypeInfoType } from './RoomTypeInfoType';
/**
 * The RoomType element is used to contain all the room type information for a single room type.
 * @export
 * @interface RoomTypeMasterInfoType
 */
export interface RoomTypeMasterInfoType {
    /**
     *
     * @type {string}
     * @memberof RoomTypeMasterInfoType
     */
    hotelId?: string;
    /**
     * Room type information
     * @type {Array<RoomTypeInfoType>}
     * @memberof RoomTypeMasterInfoType
     */
    roomType?: Array<RoomTypeInfoType>;
}
/**
 * Check if a given object implements the RoomTypeMasterInfoType interface.
 */
export declare function instanceOfRoomTypeMasterInfoType(value: object): boolean;
export declare function RoomTypeMasterInfoTypeFromJSON(json: any): RoomTypeMasterInfoType;
export declare function RoomTypeMasterInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeMasterInfoType;
export declare function RoomTypeMasterInfoTypeToJSON(value?: RoomTypeMasterInfoType | null): any;
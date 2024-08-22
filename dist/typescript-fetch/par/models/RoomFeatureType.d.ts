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
/**
 * Room Feature Information.
 * @export
 * @interface RoomFeatureType
 */
export interface RoomFeatureType {
    /**
     * A code representing a room feature.
     * @type {string}
     * @memberof RoomFeatureType
     */
    code?: string;
    /**
     * A code representing a room feature.
     * @type {string}
     * @memberof RoomFeatureType
     */
    description?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof RoomFeatureType
     */
    orderSequence?: number;
    /**
     * Indicates quantity.
     * @type {number}
     * @memberof RoomFeatureType
     */
    quantity?: number;
}
/**
 * Check if a given object implements the RoomFeatureType interface.
 */
export declare function instanceOfRoomFeatureType(value: object): boolean;
export declare function RoomFeatureTypeFromJSON(json: any): RoomFeatureType;
export declare function RoomFeatureTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomFeatureType;
export declare function RoomFeatureTypeToJSON(value?: RoomFeatureType | null): any;

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
/**
 * Resort Room Condition Configuration Type
 * @export
 * @interface RoomCondtionType
 */
export interface RoomCondtionType {
    /**
     *
     * @type {string}
     * @memberof RoomCondtionType
     */
    code?: string;
    /**
     * Comments for the room condition.
     * @type {string}
     * @memberof RoomCondtionType
     */
    comments?: string;
    /**
     * Description for the room condition.
     * @type {string}
     * @memberof RoomCondtionType
     */
    description?: string;
    /**
     * Indicates types of assignment.
     * @type {boolean}
     * @memberof RoomCondtionType
     */
    displayInRoomAssignment?: boolean;
    /**
     *
     * @type {number}
     * @memberof RoomCondtionType
     */
    displaySeq?: number;
    /**
     *
     * @type {number}
     * @memberof RoomCondtionType
     */
    holdMinutes?: number;
    /**
     *
     * @type {string}
     * @memberof RoomCondtionType
     */
    hotelId?: string;
    /**
     *
     * @type {boolean}
     * @memberof RoomCondtionType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the RoomCondtionType interface.
 */
export declare function instanceOfRoomCondtionType(value: object): boolean;
export declare function RoomCondtionTypeFromJSON(json: any): RoomCondtionType;
export declare function RoomCondtionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCondtionType;
export declare function RoomCondtionTypeToJSON(value?: RoomCondtionType | null): any;
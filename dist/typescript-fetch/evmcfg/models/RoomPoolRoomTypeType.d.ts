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
/**
 * This extension will only use for consuming RoomType and SellSequence elements for consistency.
 * @export
 * @interface RoomPoolRoomTypeType
 */
export interface RoomPoolRoomTypeType {
    /**
     * Indicates if room type is accessible.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    accessible?: boolean;
    /**
     * Active date of the room type.
     * @type {Date}
     * @memberof RoomPoolRoomTypeType
     */
    activeDate?: Date;
    /**
     * Indicates the room type is inactive or not.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    inactive?: boolean;
    /**
     * Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    meetingRoom?: boolean;
    /**
     * Number of rooms for this room type.
     * @type {number}
     * @memberof RoomPoolRoomTypeType
     */
    numberOfRooms?: number;
    /**
     * Indicates if room type is pseudo.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    pseudo?: boolean;
    /**
     * Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    restricted?: boolean;
    /**
     * Room class for the room type code.
     * @type {string}
     * @memberof RoomPoolRoomTypeType
     */
    roomClass?: string;
    /**
     *
     * @type {string}
     * @memberof RoomPoolRoomTypeType
     */
    roomType?: string;
    /**
     * Indicates room types sell sequence.
     * @type {number}
     * @memberof RoomPoolRoomTypeType
     */
    sellSequence?: number;
    /**
     * Indicates if room type is sent to interface.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    sendToInterface?: boolean;
    /**
     * Short Description of room type.
     * @type {string}
     * @memberof RoomPoolRoomTypeType
     */
    shortDescription?: string;
    /**
     * Indicates room type is a suite.
     * @type {boolean}
     * @memberof RoomPoolRoomTypeType
     */
    suite?: boolean;
}
/**
 * Check if a given object implements the RoomPoolRoomTypeType interface.
 */
export declare function instanceOfRoomPoolRoomTypeType(value: object): boolean;
export declare function RoomPoolRoomTypeTypeFromJSON(json: any): RoomPoolRoomTypeType;
export declare function RoomPoolRoomTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomPoolRoomTypeType;
export declare function RoomPoolRoomTypeTypeToJSON(value?: RoomPoolRoomTypeType | null): any;

/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BedTypeInfoType } from './BedTypeInfoType';
import type { BookingChannelMappingType } from './BookingChannelMappingType';
import type { RoomFeatureType } from './RoomFeatureType';
import type { RoomTypeAttributesType } from './RoomTypeAttributesType';
/**
 *
 * @export
 * @interface RoomTypeInfoType
 */
export interface RoomTypeInfoType {
    /**
     * Indicates whether room type is accessible or not.
     * @type {boolean}
     * @memberof RoomTypeInfoType
     */
    accessible?: boolean;
    /**
     *
     * @type {BedTypeInfoType}
     * @memberof RoomTypeInfoType
     */
    bedType?: BedTypeInfoType;
    /**
     * Bed type code associated with room.
     * @type {Array<string>}
     * @memberof RoomTypeInfoType
     */
    bedTypeCodes?: Array<string>;
    /**
     * Booking Channels mapping for the Room Type.
     * @type {Array<BookingChannelMappingType>}
     * @memberof RoomTypeInfoType
     */
    bookingChannelMappings?: Array<BookingChannelMappingType>;
    /**
     * Indicates room type is a Component Room.
     * @type {boolean}
     * @memberof RoomTypeInfoType
     */
    component?: boolean;
    /**
     *
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    hotelId?: string;
    /**
     * Block code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    invBlockCode?: string;
    /**
     * Detail description of the Room Type.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    longDescription?: string;
    /**
     * Represents the promotional code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    promotionCode?: string;
    /**
     *
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomClass?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof RoomTypeInfoType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Represents the room qualifier code like Deluxe,Economy,Suite etc.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomQualifierCode?: string;
    /**
     * Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomQualifierMatchIndicator?: string;
    /**
     *
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomType?: string;
    /**
     *
     * @type {RoomTypeAttributesType}
     * @memberof RoomTypeInfoType
     */
    roomTypeAttributes?: RoomTypeAttributesType;
    /**
     * Represents the room view code like City view, River view, Ocean view etc.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    roomViewCode?: string;
    /**
     * Indicates room type is a suite.
     * @type {boolean}
     * @memberof RoomTypeInfoType
     */
    suite?: boolean;
    /**
     * Name corresponding to a RoomType.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    webName?: string;
    /**
     * URL providing more information about the Room Type.
     * @type {string}
     * @memberof RoomTypeInfoType
     */
    webPage?: string;
}
/**
 * Check if a given object implements the RoomTypeInfoType interface.
 */
export declare function instanceOfRoomTypeInfoType(value: object): boolean;
export declare function RoomTypeInfoTypeFromJSON(json: any): RoomTypeInfoType;
export declare function RoomTypeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeInfoType;
export declare function RoomTypeInfoTypeToJSON(value?: RoomTypeInfoType | null): any;
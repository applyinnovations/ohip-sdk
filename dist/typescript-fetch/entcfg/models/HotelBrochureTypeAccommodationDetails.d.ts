/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Accommodation Details of the hotel.
 * @export
 * @interface HotelBrochureTypeAccommodationDetails
 */
export interface HotelBrochureTypeAccommodationDetails {
    /**
     * The number of Accessible Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    accessibleRooms?: number;
    /**
     * The number of Connecting Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    connectingRooms?: number;
    /**
     * The number of Double Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    doubleRooms?: number;
    /**
     * The floor number of Executive Floors of the Hotel.
     * @type {string}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    executiveFloorNo?: string;
    /**
     * The number of Family Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    familyRooms?: number;
    /**
     * The number of Guest Room Elevators.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    guestRoomElevators?: number;
    /**
     * The total number of the Guest Room Floors.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    guestRoomFloors?: number;
    /**
     * Maximum Adults for Family Room Type.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    maxAdultsInFamilyRoom?: number;
    /**
     * Maximum Children for Family Room Type.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    maxChildrenInFamilyRoom?: number;
    /**
     * The number of Non-Smoking Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    nonSmokingRooms?: number;
    /**
     * The information about the Room Amenities.
     * @type {string}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    roomAmenties?: string;
    /**
     * The Description of the shops in the Hotel.
     * @type {string}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    shopDescription?: string;
    /**
     * The number of Single Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    singleRooms?: number;
    /**
     * The number of Suites of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    suites?: number;
    /**
     * The number of Twin Rooms of the Hotel.
     * @type {number}
     * @memberof HotelBrochureTypeAccommodationDetails
     */
    twinRooms?: number;
}
/**
 * Check if a given object implements the HotelBrochureTypeAccommodationDetails interface.
 */
export declare function instanceOfHotelBrochureTypeAccommodationDetails(value: object): boolean;
export declare function HotelBrochureTypeAccommodationDetailsFromJSON(json: any): HotelBrochureTypeAccommodationDetails;
export declare function HotelBrochureTypeAccommodationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelBrochureTypeAccommodationDetails;
export declare function HotelBrochureTypeAccommodationDetailsToJSON(value?: HotelBrochureTypeAccommodationDetails | null): any;
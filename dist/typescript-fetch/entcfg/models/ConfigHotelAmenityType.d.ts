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
import type { AmenityTypeType } from './AmenityTypeType';
/**
 * Base details used for amenities.
 * @export
 * @interface ConfigHotelAmenityType
 */
export interface ConfigHotelAmenityType {
    /**
     *
     * @type {AmenityTypeType}
     * @memberof ConfigHotelAmenityType
     */
    amenityType?: AmenityTypeType;
    /**
     * The date the amenity is scheduled to become active.
     * @type {Date}
     * @memberof ConfigHotelAmenityType
     */
    beginDate?: Date;
    /**
     * The comments about amenity of the hotel.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    comments?: string;
    /**
     * The description about amenity of the hotel.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    description?: string;
    /**
     * The date the amenity is scheduled to become inactive.
     * @type {Date}
     * @memberof ConfigHotelAmenityType
     */
    endDate?: Date;
    /**
     * Specifies the feature code (aka amenity code).
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    featureCode?: string;
    /**
     * Specifies the hotel code for which the amenity is specified.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    hotelId?: string;
    /**
     * The hours of operation of the amenity in the hotel.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    hours?: string;
    /**
     * The new amenity code which is used in the change method.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    newAmenityCode?: string;
    /**
     * The new date the amenity is scheduled to become active.
     * @type {Date}
     * @memberof ConfigHotelAmenityType
     */
    newBeginDate?: Date;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ConfigHotelAmenityType
     */
    orderSequence?: number;
    /**
     * The price range of the amenity in the hotel.
     * @type {string}
     * @memberof ConfigHotelAmenityType
     */
    priceRange?: string;
}
/**
 * Check if a given object implements the ConfigHotelAmenityType interface.
 */
export declare function instanceOfConfigHotelAmenityType(value: object): boolean;
export declare function ConfigHotelAmenityTypeFromJSON(json: any): ConfigHotelAmenityType;
export declare function ConfigHotelAmenityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigHotelAmenityType;
export declare function ConfigHotelAmenityTypeToJSON(value?: ConfigHotelAmenityType | null): any;
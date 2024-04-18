/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelContactRoleType } from './HotelContactRoleType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Contact identification details.
 * @export
 * @interface HotelContactType
 */
export interface HotelContactType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof HotelContactType
     */
    nameId?: UniqueIDType;
    /**
     * The code of the hotel.
     * @type {string}
     * @memberof HotelContactType
     */
    hotelId?: string;
    /**
     * Name of the hotel contact.
     * @type {string}
     * @memberof HotelContactType
     */
    name?: string;
    /**
     * Lists of HotelContactRoles of the hotel.
     * @type {Array<HotelContactRoleType>}
     * @memberof HotelContactType
     */
    roles?: Array<HotelContactRoleType>;
    /**
     * The contact's code in the hotel.
     * @type {string}
     * @memberof HotelContactType
     */
    ownerCode?: string;
    /**
     * The preferred method of communication for the contact.
     * @type {string}
     * @memberof HotelContactType
     */
    communicationMethod?: string;
    /**
     * Details about the preferred communication method. Example: email address, fax number, etc.
     * @type {string}
     * @memberof HotelContactType
     */
    communicationAddress?: string;
    /**
     * Primary flag.
     * @type {boolean}
     * @memberof HotelContactType
     */
    primary?: boolean;
}
/**
 * Check if a given object implements the HotelContactType interface.
 */
export declare function instanceOfHotelContactType(value: object): boolean;
export declare function HotelContactTypeFromJSON(json: any): HotelContactType;
export declare function HotelContactTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelContactType;
export declare function HotelContactTypeToJSON(value?: HotelContactType | null): any;
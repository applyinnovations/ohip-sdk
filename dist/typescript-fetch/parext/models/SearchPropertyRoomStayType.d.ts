/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelAvailabilityStatus } from './HotelAvailabilityStatus';
import type { OfferTotalType } from './OfferTotalType';
import type { PropertySearchPropertyInfo } from './PropertySearchPropertyInfo';
import type { RoomTagType } from './RoomTagType';
/**
 *
 * @export
 * @interface SearchPropertyRoomStayType
 */
export interface SearchPropertyRoomStayType {
    /**
     *
     * @type {HotelAvailabilityStatus}
     * @memberof SearchPropertyRoomStayType
     */
    availability?: HotelAvailabilityStatus;
    /**
     *
     * @type {OfferTotalType}
     * @memberof SearchPropertyRoomStayType
     */
    minimumRate?: OfferTotalType;
    /**
     *
     * @type {PropertySearchPropertyInfo}
     * @memberof SearchPropertyRoomStayType
     */
    propertyInfo?: PropertySearchPropertyInfo;
    /**
     *
     * @type {string}
     * @memberof SearchPropertyRoomStayType
     */
    roomClass?: string;
    /**
     * The collection of tag and respective room type for which minimum rate is returned.
     * @type {Array<RoomTagType>}
     * @memberof SearchPropertyRoomStayType
     */
    roomTags?: Array<RoomTagType>;
}
/**
 * Check if a given object implements the SearchPropertyRoomStayType interface.
 */
export declare function instanceOfSearchPropertyRoomStayType(value: object): boolean;
export declare function SearchPropertyRoomStayTypeFromJSON(json: any): SearchPropertyRoomStayType;
export declare function SearchPropertyRoomStayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPropertyRoomStayType;
export declare function SearchPropertyRoomStayTypeToJSON(value?: SearchPropertyRoomStayType | null): any;
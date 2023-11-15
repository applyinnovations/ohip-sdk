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
import type { SearchRoomClassificationType } from './SearchRoomClassificationType';
import type { SortByType } from './SortByType';
/**
 *
 * @export
 * @interface SearchPropertyRequestType
 */
export interface SearchPropertyRequestType {
    /**
     * Corporate ID
     * @type {string}
     * @memberof SearchPropertyRequestType
     */
    accountId?: string;
    /**
     * Arrival/Check-in Date
     * @type {string}
     * @memberof SearchPropertyRequestType
     */
    arrivalDate: string;
    /**
     * Departure/Check-out Date
     * @type {string}
     * @memberof SearchPropertyRequestType
     */
    departureDate: string;
    /**
     * List of hotelIds for search criteria.
     * @type {Array<string>}
     * @memberof SearchPropertyRequestType
     */
    hotelIds?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof SearchPropertyRequestType
     */
    includePublicRates?: boolean;
    /**
     * number of records to be fetched in one request
     * @type {number}
     * @memberof SearchPropertyRequestType
     */
    limit?: number;
    /**
     * Minimum base rate in an offer
     * @type {number}
     * @memberof SearchPropertyRequestType
     */
    minRate?: number;
    /**
     * offset of record
     * @type {number}
     * @memberof SearchPropertyRequestType
     */
    offset?: number;
    /**
     *
     * @type {Array<SearchRoomClassificationType>}
     * @memberof SearchPropertyRequestType
     */
    rooms?: Array<SearchRoomClassificationType>;
    /**
     *
     * @type {SortByType}
     * @memberof SearchPropertyRequestType
     */
    sortBy?: SortByType;
}
/**
 * Check if a given object implements the SearchPropertyRequestType interface.
 */
export declare function instanceOfSearchPropertyRequestType(value: object): boolean;
export declare function SearchPropertyRequestTypeFromJSON(json: any): SearchPropertyRequestType;
export declare function SearchPropertyRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPropertyRequestType;
export declare function SearchPropertyRequestTypeToJSON(value?: SearchPropertyRequestType | null): any;

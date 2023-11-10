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
import type { SearchPropertyRoomStayType } from './SearchPropertyRoomStayType';
/**
 * Property Search Response
 * @export
 * @interface SearchPropertyResponseType
 */
export interface SearchPropertyResponseType {
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof SearchPropertyResponseType
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof SearchPropertyResponseType
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof SearchPropertyResponseType
     */
    offset?: number;
    /**
     * Collection of the returned Offers
     * @type {Array<SearchPropertyRoomStayType>}
     * @memberof SearchPropertyResponseType
     */
    roomStays?: Array<SearchPropertyRoomStayType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof SearchPropertyResponseType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the SearchPropertyResponseType interface.
 */
export declare function instanceOfSearchPropertyResponseType(value: object): boolean;
export declare function SearchPropertyResponseTypeFromJSON(json: any): SearchPropertyResponseType;
export declare function SearchPropertyResponseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPropertyResponseType;
export declare function SearchPropertyResponseTypeToJSON(value?: SearchPropertyResponseType | null): any;

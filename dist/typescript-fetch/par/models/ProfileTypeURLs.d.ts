/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { URLInfoType } from './URLInfoType';
/**
 * List of Information on a URL for the customer.
 * @export
 * @interface ProfileTypeURLs
 */
export interface ProfileTypeURLs {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeURLs
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeURLs
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeURLs
     */
    totalResults?: number;
    /**
     * Collection of Detailed information on web url/address for the customer.
     * @type {Array<URLInfoType>}
     * @memberof ProfileTypeURLs
     */
    uRLInfo?: Array<URLInfoType>;
}
/**
 * Check if a given object implements the ProfileTypeURLs interface.
 */
export declare function instanceOfProfileTypeURLs(value: object): boolean;
export declare function ProfileTypeURLsFromJSON(json: any): ProfileTypeURLs;
export declare function ProfileTypeURLsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeURLs;
export declare function ProfileTypeURLsToJSON(value?: ProfileTypeURLs | null): any;
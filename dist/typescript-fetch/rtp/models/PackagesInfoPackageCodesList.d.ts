/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelPackageCodesType } from './HotelPackageCodesType';
/**
 * List of package codes.
 * @export
 * @interface PackagesInfoPackageCodesList
 */
export interface PackagesInfoPackageCodesList {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof PackagesInfoPackageCodesList
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof PackagesInfoPackageCodesList
     */
    hasMore?: boolean;
    /**
     * Package Codes of each hotel.
     * @type {Array<HotelPackageCodesType>}
     * @memberof PackagesInfoPackageCodesList
     */
    packageCodes?: Array<HotelPackageCodesType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof PackagesInfoPackageCodesList
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the PackagesInfoPackageCodesList interface.
 */
export declare function instanceOfPackagesInfoPackageCodesList(value: object): boolean;
export declare function PackagesInfoPackageCodesListFromJSON(json: any): PackagesInfoPackageCodesList;
export declare function PackagesInfoPackageCodesListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagesInfoPackageCodesList;
export declare function PackagesInfoPackageCodesListToJSON(value?: PackagesInfoPackageCodesList | null): any;

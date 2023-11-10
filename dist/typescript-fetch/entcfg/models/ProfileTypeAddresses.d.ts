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
import type { AddressInfoType } from './AddressInfoType';
/**
 * List of customer addresses.
 * @export
 * @interface ProfileTypeAddresses
 */
export interface ProfileTypeAddresses {
    /**
     * Collection of Detailed information on an address for the customer.
     * @type {Array<AddressInfoType>}
     * @memberof ProfileTypeAddresses
     */
    addressInfo?: Array<AddressInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeAddresses
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeAddresses
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeAddresses
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileTypeAddresses interface.
 */
export declare function instanceOfProfileTypeAddresses(value: object): boolean;
export declare function ProfileTypeAddressesFromJSON(json: any): ProfileTypeAddresses;
export declare function ProfileTypeAddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeAddresses;
export declare function ProfileTypeAddressesToJSON(value?: ProfileTypeAddresses | null): any;

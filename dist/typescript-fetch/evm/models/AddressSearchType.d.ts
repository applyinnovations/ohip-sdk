/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CountryNameType } from './CountryNameType';
/**
 * Address Details such as city, state, country, postal code etc.
 * @export
 * @interface AddressSearchType
 */
export interface AddressSearchType {
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof AddressSearchType
     */
    cityName?: string;
    /**
     *
     * @type {CountryNameType}
     * @memberof AddressSearchType
     */
    country?: CountryNameType;
    /**
     * When true indicates that only profiles with city will be fetched.
     * @type {boolean}
     * @memberof AddressSearchType
     */
    excludeNoCity?: boolean;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof AddressSearchType
     */
    postalCode?: string;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof AddressSearchType
     */
    state?: string;
    /**
     * First Line of Street Address. For profile search it matches the first Address line.
     * @type {string}
     * @memberof AddressSearchType
     */
    streetAddress?: string;
}
/**
 * Check if a given object implements the AddressSearchType interface.
 */
export declare function instanceOfAddressSearchType(value: object): boolean;
export declare function AddressSearchTypeFromJSON(json: any): AddressSearchType;
export declare function AddressSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressSearchType;
export declare function AddressSearchTypeToJSON(value?: AddressSearchType | null): any;

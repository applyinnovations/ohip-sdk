/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CountryNameType } from './CountryNameType';
/**
 * Provides address information.
 * @export
 * @interface AddressType
 */
export interface AddressType {
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @type {Array<string>}
     * @memberof AddressType
     */
    addressLine?: Array<string>;
    /**
     * The postal barcode for the address.
     * @type {string}
     * @memberof AddressType
     */
    barCode?: string;
    /**
     * Post Office City Extension Code number. City Extension mainly used for UK addresses.
     * @type {string}
     * @memberof AddressType
     */
    cityExtension?: string;
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof AddressType
     */
    cityName?: string;
    /**
     *
     * @type {CountryNameType}
     * @memberof AddressType
     */
    country?: CountryNameType;
    /**
     * County or District Name (e.g., Fairfax). This is read only.
     * @type {string}
     * @memberof AddressType
     */
    county?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof AddressType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof AddressType
     */
    creatorId?: string;
    /**
     * Indicator to define if the Address is validated by the Address Validation System.
     * @type {boolean}
     * @memberof AddressType
     */
    isValidated?: boolean;
    /**
     * Language identification.
     * @type {string}
     * @memberof AddressType
     */
    language?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof AddressType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof AddressType
     */
    lastModifyDateTime?: string;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof AddressType
     */
    postalCode?: string;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof AddressType
     */
    primaryInd?: boolean;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof AddressType
     */
    state?: string;
    /**
     * Defines the type of address (e.g. home, business, other).
     * @type {string}
     * @memberof AddressType
     */
    type?: string;
    /**
     * Describes the type code
     * @type {string}
     * @memberof AddressType
     */
    typeDescription?: string;
    /**
     * Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address.
     * @type {boolean}
     * @memberof AddressType
     */
    updateReservations?: boolean;
}
/**
 * Check if a given object implements the AddressType interface.
 */
export declare function instanceOfAddressType(value: object): boolean;
export declare function AddressTypeFromJSON(json: any): AddressType;
export declare function AddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressType;
export declare function AddressTypeToJSON(value?: AddressType | null): any;

/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
}
/**
 * Check if a given object implements the AddressType interface.
 */
export declare function instanceOfAddressType(value: object): boolean;
export declare function AddressTypeFromJSON(json: any): AddressType;
export declare function AddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressType;
export declare function AddressTypeToJSON(value?: AddressType | null): any;

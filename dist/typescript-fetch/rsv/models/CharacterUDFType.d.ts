/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Used to hold user defined field of Character/String Type.
 * @export
 * @interface CharacterUDFType
 */
export interface CharacterUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof CharacterUDFType
     */
    alternateName?: string;
    /**
     * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof CharacterUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof CharacterUDFType
     */
    value?: string;
}
/**
 * Check if a given object implements the CharacterUDFType interface.
 */
export declare function instanceOfCharacterUDFType(value: object): boolean;
export declare function CharacterUDFTypeFromJSON(json: any): CharacterUDFType;
export declare function CharacterUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterUDFType;
export declare function CharacterUDFTypeToJSON(value?: CharacterUDFType | null): any;

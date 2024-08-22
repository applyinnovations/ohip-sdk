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
 * A Config Package Info type.
 * @export
 * @interface ConfigPackagePrimaryDetailsType
 */
export interface ConfigPackagePrimaryDetailsType {
    /**
     * Arrangement Code.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    arrangementCode?: string;
    /**
     * Indicates the begin sell date of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    beginSellDate?: string;
    /**
     * The description of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    description?: string;
    /**
     * Indicates the end sell date of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    endSellDate?: string;
    /**
     * The Forecast group package belongs to.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    forecastGroup?: string;
    /**
     * The short description of the package.
     * @type {string}
     * @memberof ConfigPackagePrimaryDetailsType
     */
    shortDescription?: string;
}
/**
 * Check if a given object implements the ConfigPackagePrimaryDetailsType interface.
 */
export declare function instanceOfConfigPackagePrimaryDetailsType(value: object): boolean;
export declare function ConfigPackagePrimaryDetailsTypeFromJSON(json: any): ConfigPackagePrimaryDetailsType;
export declare function ConfigPackagePrimaryDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPackagePrimaryDetailsType;
export declare function ConfigPackagePrimaryDetailsTypeToJSON(value?: ConfigPackagePrimaryDetailsType | null): any;

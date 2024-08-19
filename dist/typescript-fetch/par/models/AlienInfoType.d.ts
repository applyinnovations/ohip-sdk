/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * immigration/visa information of a foreign person.
 * @export
 * @interface AlienInfoType
 */
export interface AlienInfoType {
    /**
     * Alien Registration Number.
     * @type {string}
     * @memberof AlienInfoType
     */
    alienRegistrationNo?: string;
    /**
     * Immigration Status on an Alien.
     * @type {string}
     * @memberof AlienInfoType
     */
    immigrationStatus?: string;
    /**
     * Visa Type of an Alien.
     * @type {string}
     * @memberof AlienInfoType
     */
    visaValidityType?: string;
}
/**
 * Check if a given object implements the AlienInfoType interface.
 */
export declare function instanceOfAlienInfoType(value: object): boolean;
export declare function AlienInfoTypeFromJSON(json: any): AlienInfoType;
export declare function AlienInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlienInfoType;
export declare function AlienInfoTypeToJSON(value?: AlienInfoType | null): any;

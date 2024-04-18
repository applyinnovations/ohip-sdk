/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Profile information related to tax.
 * @export
 * @interface ProfileTaxInfoType
 */
export interface ProfileTaxInfoType {
    /**
     * Business ID. The maximum length of this element should not exceed 120 characters.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    businessId?: string;
    /**
     * Business Registration Code. The maximum length of this element should not exceed 120 characters.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    businessRegistration?: string;
    /**
     * The tax id of this profile. Usually issued by a government agency. Used by 1099 printing.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    tax1No?: string;
    /**
     * Tax 2 id of this profile.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    tax2No?: string;
    /**
     * Tax Category to be changed.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    taxCategory?: string;
    /**
     * Tax Office to be changed.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    taxOffice?: string;
    /**
     * Tax type to be changed.
     * @type {string}
     * @memberof ProfileTaxInfoType
     */
    taxType?: string;
}
/**
 * Check if a given object implements the ProfileTaxInfoType interface.
 */
export declare function instanceOfProfileTaxInfoType(value: object): boolean;
export declare function ProfileTaxInfoTypeFromJSON(json: any): ProfileTaxInfoType;
export declare function ProfileTaxInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTaxInfoType;
export declare function ProfileTaxInfoTypeToJSON(value?: ProfileTaxInfoType | null): any;
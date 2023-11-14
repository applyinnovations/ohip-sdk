/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
}
/**
 * Check if a given object implements the ProfileTaxInfoType interface.
 */
export declare function instanceOfProfileTaxInfoType(value: object): boolean;
export declare function ProfileTaxInfoTypeFromJSON(json: any): ProfileTaxInfoType;
export declare function ProfileTaxInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTaxInfoType;
export declare function ProfileTaxInfoTypeToJSON(value?: ProfileTaxInfoType | null): any;
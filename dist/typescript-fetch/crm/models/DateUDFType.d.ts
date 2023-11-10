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
/**
 * Used to hold user defined field of Date Type.
 * @export
 * @interface DateUDFType
 */
export interface DateUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof DateUDFType
     */
    alternateName?: string;
    /**
     * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof DateUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {Date}
     * @memberof DateUDFType
     */
    value?: Date;
}
/**
 * Check if a given object implements the DateUDFType interface.
 */
export declare function instanceOfDateUDFType(value: object): boolean;
export declare function DateUDFTypeFromJSON(json: any): DateUDFType;
export declare function DateUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateUDFType;
export declare function DateUDFTypeToJSON(value?: DateUDFType | null): any;

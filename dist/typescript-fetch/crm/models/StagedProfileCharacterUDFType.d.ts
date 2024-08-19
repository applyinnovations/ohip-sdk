/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface StagedProfileCharacterUDFType
 */
export interface StagedProfileCharacterUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    alternateName?: string;
    /**
     * The error in a user defined field in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    errorDescription?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    id?: string;
    /**
     * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    name?: string;
    /**
     * PMS table name.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    tableName?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    type?: string;
    /**
     * Indicates whether the UDF information is valid.
     * @type {boolean}
     * @memberof StagedProfileCharacterUDFType
     */
    valid?: boolean;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    value?: string;
}
/**
 * Check if a given object implements the StagedProfileCharacterUDFType interface.
 */
export declare function instanceOfStagedProfileCharacterUDFType(value: object): boolean;
export declare function StagedProfileCharacterUDFTypeFromJSON(json: any): StagedProfileCharacterUDFType;
export declare function StagedProfileCharacterUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileCharacterUDFType;
export declare function StagedProfileCharacterUDFTypeToJSON(value?: StagedProfileCharacterUDFType | null): any;

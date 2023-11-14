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
 * Used to hold user defined field of Character/String Type.
 * @export
 * @interface StagedProfileCharacterUDFType
 */
export interface StagedProfileCharacterUDFType {
    /**
     * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    value?: string;
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    altname?: string;
    /**
     * The error in a user defined field in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    errorDescription?: string;
    /**
     * PMS table name.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    tableName?: string;
    /**
     * Indicates whether the UDF information is valid.
     * @type {boolean}
     * @memberof StagedProfileCharacterUDFType
     */
    valid?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileCharacterUDFType
     */
    type?: string;
}
/**
 * Check if a given object implements the StagedProfileCharacterUDFType interface.
 */
export declare function instanceOfStagedProfileCharacterUDFType(value: object): boolean;
export declare function StagedProfileCharacterUDFTypeFromJSON(json: any): StagedProfileCharacterUDFType;
export declare function StagedProfileCharacterUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileCharacterUDFType;
export declare function StagedProfileCharacterUDFTypeToJSON(value?: StagedProfileCharacterUDFType | null): any;
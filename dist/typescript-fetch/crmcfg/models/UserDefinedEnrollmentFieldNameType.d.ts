/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Date of birth field of Membership Type.
 * @export
 */
export declare const UserDefinedEnrollmentFieldNameType: {
    readonly Communication: "Communication";
    readonly LastName: "LastName";
    readonly FirstName: "FirstName";
    readonly Address: "Address";
    readonly Fee: "Fee";
    readonly BirthDate: "BirthDate";
};
export type UserDefinedEnrollmentFieldNameType = typeof UserDefinedEnrollmentFieldNameType[keyof typeof UserDefinedEnrollmentFieldNameType];
export declare function UserDefinedEnrollmentFieldNameTypeFromJSON(json: any): UserDefinedEnrollmentFieldNameType;
export declare function UserDefinedEnrollmentFieldNameTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedEnrollmentFieldNameType;
export declare function UserDefinedEnrollmentFieldNameTypeToJSON(value?: UserDefinedEnrollmentFieldNameType | null): any;

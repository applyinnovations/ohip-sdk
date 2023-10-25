/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type used for User Defined Field Group Data Type.
 * @export
 */
export const UserDefinedFieldGroupDataType = {
    Integer: 'Integer',
    Char: 'Char'
} as const;
export type UserDefinedFieldGroupDataType = typeof UserDefinedFieldGroupDataType[keyof typeof UserDefinedFieldGroupDataType];


export function UserDefinedFieldGroupDataTypeFromJSON(json: any): UserDefinedFieldGroupDataType {
    return UserDefinedFieldGroupDataTypeFromJSONTyped(json, false);
}

export function UserDefinedFieldGroupDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedFieldGroupDataType {
    return json as UserDefinedFieldGroupDataType;
}

export function UserDefinedFieldGroupDataTypeToJSON(value?: UserDefinedFieldGroupDataType | null): any {
    return value as any;
}


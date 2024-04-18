/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Identifies the data type of the report parameter.
 * @export
 */
export const ParamDataType = {
    DateAsChar: 'DateAsChar',
    Date: 'Date',
    Number: 'Number',
    CheckBox: 'CheckBox',
    DateTime: 'DateTime',
    Char: 'Char',
    Money: 'Money',
    Integer: 'Integer'
} as const;
export type ParamDataType = typeof ParamDataType[keyof typeof ParamDataType];


export function ParamDataTypeFromJSON(json: any): ParamDataType {
    return ParamDataTypeFromJSONTyped(json, false);
}

export function ParamDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParamDataType {
    return json as ParamDataType;
}

export function ParamDataTypeToJSON(value?: ParamDataType | null): any {
    return value as any;
}

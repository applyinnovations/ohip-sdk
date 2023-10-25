/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The value types of parameter, possible types are Boolean, String, Date, and Number.
 * @export
 */
export const ChannelParameterValueType = {
    Boolean: 'Boolean',
    String: 'String',
    Date: 'Date',
    Time: 'Time',
    Number: 'Number',
    SingleSelectLov: 'SingleSelectLOV',
    MultiSelectLov: 'MultiSelectLOV'
} as const;
export type ChannelParameterValueType = typeof ChannelParameterValueType[keyof typeof ChannelParameterValueType];


export function ChannelParameterValueTypeFromJSON(json: any): ChannelParameterValueType {
    return ChannelParameterValueTypeFromJSONTyped(json, false);
}

export function ChannelParameterValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelParameterValueType {
    return json as ChannelParameterValueType;
}

export function ChannelParameterValueTypeToJSON(value?: ChannelParameterValueType | null): any {
    return value as any;
}


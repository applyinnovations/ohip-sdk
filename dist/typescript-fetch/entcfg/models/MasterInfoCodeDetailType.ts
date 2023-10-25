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
 * 
 * @export
 */
export const MasterInfoCodeDetailType = {
    LongDescription: 'LongDescription',
    ShortDescription: 'ShortDescription'
} as const;
export type MasterInfoCodeDetailType = typeof MasterInfoCodeDetailType[keyof typeof MasterInfoCodeDetailType];


export function MasterInfoCodeDetailTypeFromJSON(json: any): MasterInfoCodeDetailType {
    return MasterInfoCodeDetailTypeFromJSONTyped(json, false);
}

export function MasterInfoCodeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterInfoCodeDetailType {
    return json as MasterInfoCodeDetailType;
}

export function MasterInfoCodeDetailTypeToJSON(value?: MasterInfoCodeDetailType | null): any {
    return value as any;
}


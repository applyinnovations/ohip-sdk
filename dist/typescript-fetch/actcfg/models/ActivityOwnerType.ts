/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Activity owner.
 * @export
 */
export const ActivityOwnerType = {
    Current: 'Current',
    Primary: 'Primary',
    Custom: 'Custom',
    Block: 'Block',
    Room: 'Room',
    Catering: 'Catering'
} as const;
export type ActivityOwnerType = typeof ActivityOwnerType[keyof typeof ActivityOwnerType];


export function ActivityOwnerTypeFromJSON(json: any): ActivityOwnerType {
    return ActivityOwnerTypeFromJSONTyped(json, false);
}

export function ActivityOwnerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityOwnerType {
    return json as ActivityOwnerType;
}

export function ActivityOwnerTypeToJSON(value?: ActivityOwnerType | null): any {
    return value as any;
}


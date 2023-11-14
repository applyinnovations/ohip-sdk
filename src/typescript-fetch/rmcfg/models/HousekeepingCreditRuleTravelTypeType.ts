/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Applies to rooms across multiple section groups.
 * @export
 */
export const HousekeepingCreditRuleTravelTypeType = {
    Building: 'Building',
    Floor: 'Floor',
    Section: 'Section',
    SectionGroup: 'SectionGroup'
} as const;
export type HousekeepingCreditRuleTravelTypeType = typeof HousekeepingCreditRuleTravelTypeType[keyof typeof HousekeepingCreditRuleTravelTypeType];


export function HousekeepingCreditRuleTravelTypeTypeFromJSON(json: any): HousekeepingCreditRuleTravelTypeType {
    return HousekeepingCreditRuleTravelTypeTypeFromJSONTyped(json, false);
}

export function HousekeepingCreditRuleTravelTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRuleTravelTypeType {
    return json as HousekeepingCreditRuleTravelTypeType;
}

export function HousekeepingCreditRuleTravelTypeTypeToJSON(value?: HousekeepingCreditRuleTravelTypeType | null): any {
    return value as any;
}

/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points.
 * @export
 */
export const MembershipEarningPreferenceType = {
    Points: 'Points',
    Miles: 'Miles'
} as const;
export type MembershipEarningPreferenceType = typeof MembershipEarningPreferenceType[keyof typeof MembershipEarningPreferenceType];


export function MembershipEarningPreferenceTypeFromJSON(json: any): MembershipEarningPreferenceType {
    return MembershipEarningPreferenceTypeFromJSONTyped(json, false);
}

export function MembershipEarningPreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipEarningPreferenceType {
    return json as MembershipEarningPreferenceType;
}

export function MembershipEarningPreferenceTypeToJSON(value?: MembershipEarningPreferenceType | null): any {
    return value as any;
}


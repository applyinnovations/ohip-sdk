/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates the type of referral for a Profile to the Room Owner.
 * @export
 */
export const ReferralType = {
    Owner: 'Owner',
    OwnerReferral: 'OwnerReferral'
} as const;
export type ReferralType = typeof ReferralType[keyof typeof ReferralType];


export function ReferralTypeFromJSON(json: any): ReferralType {
    return ReferralTypeFromJSONTyped(json, false);
}

export function ReferralTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralType {
    return json as ReferralType;
}

export function ReferralTypeToJSON(value?: ReferralType | null): any {
    return value as any;
}

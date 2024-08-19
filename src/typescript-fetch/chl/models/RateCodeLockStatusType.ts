/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates that the rate code is locked by the central system and cannot be edited at the property level.
 * @export
 */
export const RateCodeLockStatusType = {
    Unlocked: 'Unlocked',
    External: 'External',
    Property: 'Property',
    Central: 'Central'
} as const;
export type RateCodeLockStatusType = typeof RateCodeLockStatusType[keyof typeof RateCodeLockStatusType];


export function RateCodeLockStatusTypeFromJSON(json: any): RateCodeLockStatusType {
    return RateCodeLockStatusTypeFromJSONTyped(json, false);
}

export function RateCodeLockStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateCodeLockStatusType {
    return json as RateCodeLockStatusType;
}

export function RateCodeLockStatusTypeToJSON(value?: RateCodeLockStatusType | null): any {
    return value as any;
}


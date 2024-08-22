/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Applies on restricted dates.
 * @export
 */
export const RuleAppliesOnType = {
    Arrival: 'Arrival',
    Departure: 'Departure',
    Any: 'Any',
    Restricted: 'Restricted'
} as const;
export type RuleAppliesOnType = typeof RuleAppliesOnType[keyof typeof RuleAppliesOnType];


export function RuleAppliesOnTypeFromJSON(json: any): RuleAppliesOnType {
    return RuleAppliesOnTypeFromJSONTyped(json, false);
}

export function RuleAppliesOnTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleAppliesOnType {
    return json as RuleAppliesOnType;
}

export function RuleAppliesOnTypeToJSON(value?: RuleAppliesOnType | null): any {
    return value as any;
}


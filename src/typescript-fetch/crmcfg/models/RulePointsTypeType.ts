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
 * Possible membership points types.
 * @export
 */
export const RulePointsTypeType = {
    Base: 'Base',
    Bonus: 'Bonus'
} as const;
export type RulePointsTypeType = typeof RulePointsTypeType[keyof typeof RulePointsTypeType];


export function RulePointsTypeTypeFromJSON(json: any): RulePointsTypeType {
    return RulePointsTypeTypeFromJSONTyped(json, false);
}

export function RulePointsTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulePointsTypeType {
    return json as RulePointsTypeType;
}

export function RulePointsTypeTypeToJSON(value?: RulePointsTypeType | null): any {
    return value as any;
}


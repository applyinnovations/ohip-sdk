/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Yearly.
 * @export
 */
export const FixedChargeFrequencyType = {
    O: 'O',
    D: 'D',
    W: 'W',
    M: 'M',
    Q: 'Q',
    Y: 'Y'
} as const;
export type FixedChargeFrequencyType = typeof FixedChargeFrequencyType[keyof typeof FixedChargeFrequencyType];


export function FixedChargeFrequencyTypeFromJSON(json: any): FixedChargeFrequencyType {
    return FixedChargeFrequencyTypeFromJSONTyped(json, false);
}

export function FixedChargeFrequencyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeFrequencyType {
    return json as FixedChargeFrequencyType;
}

export function FixedChargeFrequencyTypeToJSON(value?: FixedChargeFrequencyType | null): any {
    return value as any;
}


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
 * December.
 * @export
 */
export const MonthNoType = {
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    _5: '5',
    _6: '6',
    _7: '7',
    _8: '8',
    _9: '9',
    _10: '10',
    _11: '11',
    _12: '12'
} as const;
export type MonthNoType = typeof MonthNoType[keyof typeof MonthNoType];


export function MonthNoTypeFromJSON(json: any): MonthNoType {
    return MonthNoTypeFromJSONTyped(json, false);
}

export function MonthNoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthNoType {
    return json as MonthNoType;
}

export function MonthNoTypeToJSON(value?: MonthNoType | null): any {
    return value as any;
}

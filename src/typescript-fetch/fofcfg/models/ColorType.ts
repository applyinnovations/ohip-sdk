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
 * Color configuration type. This color configuration provides a visual category of entities.
 * @export
 */
export const ColorType = {
    Red: 'Red',
    DarkRed: 'DarkRed',
    Green: 'Green',
    DarkGreen: 'DarkGreen',
    LightGreen: 'LightGreen',
    Orange: 'Orange',
    White: 'White',
    Yellow: 'Yellow',
    DarkYellow: 'DarkYellow',
    Purple: 'Purple',
    Brown: 'Brown',
    Gray: 'Gray',
    Aqua: 'Aqua',
    Chocolate: 'Chocolate',
    Blue: 'Blue',
    LightBlue: 'LightBlue',
    DarkBlue: 'DarkBlue',
    Cyan: 'Cyan',
    DarkCyan: 'DarkCyan',
    Magenta: 'Magenta',
    DarkMagenta: 'DarkMagenta',
    Black: 'Black'
} as const;
export type ColorType = typeof ColorType[keyof typeof ColorType];


export function ColorTypeFromJSON(json: any): ColorType {
    return ColorTypeFromJSONTyped(json, false);
}

export function ColorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorType {
    return json as ColorType;
}

export function ColorTypeToJSON(value?: ColorType | null): any {
    return value as any;
}


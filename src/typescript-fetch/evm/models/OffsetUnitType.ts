/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates deadline offset unit type.
 * @export
 */
export const OffsetUnitType = {
    Year: 'Year',
    Month: 'Month',
    Day: 'Day',
    Hour: 'Hour'
} as const;
export type OffsetUnitType = typeof OffsetUnitType[keyof typeof OffsetUnitType];


export function OffsetUnitTypeFromJSON(json: any): OffsetUnitType {
    return OffsetUnitTypeFromJSONTyped(json, false);
}

export function OffsetUnitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OffsetUnitType {
    return json as OffsetUnitType;
}

export function OffsetUnitTypeToJSON(value?: OffsetUnitType | null): any {
    return value as any;
}

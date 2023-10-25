/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Exception rule for 10 Rooms.
 * @export
 */
export const MultipleRoomsType = {
    Two: 'Two',
    Three: 'Three',
    Four: 'Four',
    Five: 'Five',
    Six: 'Six',
    Seven: 'Seven',
    Eight: 'Eight',
    Nine: 'Nine',
    Ten: 'Ten'
} as const;
export type MultipleRoomsType = typeof MultipleRoomsType[keyof typeof MultipleRoomsType];


export function MultipleRoomsTypeFromJSON(json: any): MultipleRoomsType {
    return MultipleRoomsTypeFromJSONTyped(json, false);
}

export function MultipleRoomsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultipleRoomsType {
    return json as MultipleRoomsType;
}

export function MultipleRoomsTypeToJSON(value?: MultipleRoomsType | null): any {
    return value as any;
}


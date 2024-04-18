/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate Async API
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for Yieldable or Non Yieldable
 * @export
 */
export const RoomTypeYieldableType = {
    Yieldable: 'Yieldable',
    NonYieldable: 'NonYieldable'
} as const;
export type RoomTypeYieldableType = typeof RoomTypeYieldableType[keyof typeof RoomTypeYieldableType];


export function RoomTypeYieldableTypeFromJSON(json: any): RoomTypeYieldableType {
    return RoomTypeYieldableTypeFromJSONTyped(json, false);
}

export function RoomTypeYieldableTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeYieldableType {
    return json as RoomTypeYieldableType;
}

export function RoomTypeYieldableTypeToJSON(value?: RoomTypeYieldableType | null): any {
    return value as any;
}

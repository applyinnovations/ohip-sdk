/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Status of the Hotel Interface either STOPPED or RUNNING.
 * @export
 */
export const HotelInterfaceStatusType = {
    Stopped: 'Stopped',
    Running: 'Running',
    Waiting: 'Waiting',
    StopInitiated: 'StopInitiated',
    StartInitiated: 'StartInitiated',
    RebootInitiated: 'RebootInitiated',
    Other: 'Other'
} as const;
export type HotelInterfaceStatusType = typeof HotelInterfaceStatusType[keyof typeof HotelInterfaceStatusType];


export function HotelInterfaceStatusTypeFromJSON(json: any): HotelInterfaceStatusType {
    return HotelInterfaceStatusTypeFromJSONTyped(json, false);
}

export function HotelInterfaceStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceStatusType {
    return json as HotelInterfaceStatusType;
}

export function HotelInterfaceStatusTypeToJSON(value?: HotelInterfaceStatusType | null): any {
    return value as any;
}

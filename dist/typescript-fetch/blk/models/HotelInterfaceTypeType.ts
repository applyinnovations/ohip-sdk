/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * XML Posting Interface
 * @export
 */
export const HotelInterfaceTypeType = {
    Bms: 'Bms',
    Cas: 'Cas',
    Ccw: 'Ccw',
    Dls: 'Dls',
    Eft: 'Eft',
    Exp: 'Exp',
    Mak: 'Mak',
    Mbs: 'Mbs',
    Msc: 'Msc',
    Pbx: 'Pbx',
    Pos: 'Pos',
    Svs: 'Svs',
    Tik: 'Tik',
    Vid: 'Vid',
    Vms: 'Vms',
    Www: 'Www',
    Xml: 'Xml'
} as const;
export type HotelInterfaceTypeType = typeof HotelInterfaceTypeType[keyof typeof HotelInterfaceTypeType];


export function HotelInterfaceTypeTypeFromJSON(json: any): HotelInterfaceTypeType {
    return HotelInterfaceTypeTypeFromJSONTyped(json, false);
}

export function HotelInterfaceTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceTypeType {
    return json as HotelInterfaceTypeType;
}

export function HotelInterfaceTypeTypeToJSON(value?: HotelInterfaceTypeType | null): any {
    return value as any;
}


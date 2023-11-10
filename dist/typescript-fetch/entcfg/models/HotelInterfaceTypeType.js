"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelInterfaceTypeTypeToJSON = exports.HotelInterfaceTypeTypeFromJSONTyped = exports.HotelInterfaceTypeTypeFromJSON = exports.HotelInterfaceTypeType = void 0;
/**
 * XML Posting Interface
 * @export
 */
exports.HotelInterfaceTypeType = {
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
};
function HotelInterfaceTypeTypeFromJSON(json) {
    return HotelInterfaceTypeTypeFromJSONTyped(json, false);
}
exports.HotelInterfaceTypeTypeFromJSON = HotelInterfaceTypeTypeFromJSON;
function HotelInterfaceTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.HotelInterfaceTypeTypeFromJSONTyped = HotelInterfaceTypeTypeFromJSONTyped;
function HotelInterfaceTypeTypeToJSON(value) {
    return value;
}
exports.HotelInterfaceTypeTypeToJSON = HotelInterfaceTypeTypeToJSON;

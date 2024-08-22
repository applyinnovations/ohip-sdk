"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelInterfaceTypeToJSON = exports.HotelInterfaceTypeFromJSONTyped = exports.HotelInterfaceTypeFromJSON = exports.instanceOfHotelInterfaceType = void 0;
const runtime_1 = require("../runtime");
const HotelInterfaceStatusType_1 = require("./HotelInterfaceStatusType");
const HotelInterfaceTypeType_1 = require("./HotelInterfaceTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the HotelInterfaceType interface.
 */
function instanceOfHotelInterfaceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelInterfaceType = instanceOfHotelInterfaceType;
function HotelInterfaceTypeFromJSON(json) {
    return HotelInterfaceTypeFromJSONTyped(json, false);
}
exports.HotelInterfaceTypeFromJSON = HotelInterfaceTypeFromJSON;
function HotelInterfaceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activeFlag': !(0, runtime_1.exists)(json, 'activeFlag') ? undefined : json['activeFlag'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !(0, runtime_1.exists)(json, 'interfaceId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['interfaceId']),
        'interfaceName': !(0, runtime_1.exists)(json, 'interfaceName') ? undefined : json['interfaceName'],
        'interfaceType': !(0, runtime_1.exists)(json, 'interfaceType') ? undefined : (0, HotelInterfaceTypeType_1.HotelInterfaceTypeTypeFromJSON)(json['interfaceType']),
        'logo': !(0, runtime_1.exists)(json, 'logo') ? undefined : json['logo'],
        'machineName': !(0, runtime_1.exists)(json, 'machineName') ? undefined : json['machineName'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, HotelInterfaceStatusType_1.HotelInterfaceStatusTypeFromJSON)(json['status']),
    };
}
exports.HotelInterfaceTypeFromJSONTyped = HotelInterfaceTypeFromJSONTyped;
function HotelInterfaceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activeFlag': value.activeFlag,
        'hotelId': value.hotelId,
        'interfaceId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.interfaceId),
        'interfaceName': value.interfaceName,
        'interfaceType': (0, HotelInterfaceTypeType_1.HotelInterfaceTypeTypeToJSON)(value.interfaceType),
        'logo': value.logo,
        'machineName': value.machineName,
        'status': (0, HotelInterfaceStatusType_1.HotelInterfaceStatusTypeToJSON)(value.status),
    };
}
exports.HotelInterfaceTypeToJSON = HotelInterfaceTypeToJSON;

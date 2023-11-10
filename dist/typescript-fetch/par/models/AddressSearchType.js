"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSearchTypeToJSON = exports.AddressSearchTypeFromJSONTyped = exports.AddressSearchTypeFromJSON = exports.instanceOfAddressSearchType = void 0;
const runtime_1 = require("../runtime");
const CountryNameType_1 = require("./CountryNameType");
/**
 * Check if a given object implements the AddressSearchType interface.
 */
function instanceOfAddressSearchType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddressSearchType = instanceOfAddressSearchType;
function AddressSearchTypeFromJSON(json) {
    return AddressSearchTypeFromJSONTyped(json, false);
}
exports.AddressSearchTypeFromJSON = AddressSearchTypeFromJSON;
function AddressSearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cityName': !(0, runtime_1.exists)(json, 'cityName') ? undefined : json['cityName'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['country']),
        'excludeNoCity': !(0, runtime_1.exists)(json, 'excludeNoCity') ? undefined : json['excludeNoCity'],
        'postalCode': !(0, runtime_1.exists)(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'streetAddress': !(0, runtime_1.exists)(json, 'streetAddress') ? undefined : json['streetAddress'],
    };
}
exports.AddressSearchTypeFromJSONTyped = AddressSearchTypeFromJSONTyped;
function AddressSearchTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cityName': value.cityName,
        'country': (0, CountryNameType_1.CountryNameTypeToJSON)(value.country),
        'excludeNoCity': value.excludeNoCity,
        'postalCode': value.postalCode,
        'state': value.state,
        'streetAddress': value.streetAddress,
    };
}
exports.AddressSearchTypeToJSON = AddressSearchTypeToJSON;

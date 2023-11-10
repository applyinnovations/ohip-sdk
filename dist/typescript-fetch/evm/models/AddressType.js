"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressTypeToJSON = exports.AddressTypeFromJSONTyped = exports.AddressTypeFromJSON = exports.instanceOfAddressType = void 0;
const runtime_1 = require("../runtime");
const CountryNameType_1 = require("./CountryNameType");
/**
 * Check if a given object implements the AddressType interface.
 */
function instanceOfAddressType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAddressType = instanceOfAddressType;
function AddressTypeFromJSON(json) {
    return AddressTypeFromJSONTyped(json, false);
}
exports.AddressTypeFromJSON = AddressTypeFromJSON;
function AddressTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressLine': !(0, runtime_1.exists)(json, 'addressLine') ? undefined : json['addressLine'],
        'cityExtension': !(0, runtime_1.exists)(json, 'cityExtension') ? undefined : json['cityExtension'],
        'cityName': !(0, runtime_1.exists)(json, 'cityName') ? undefined : json['cityName'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['country']),
        'county': !(0, runtime_1.exists)(json, 'county') ? undefined : json['county'],
        'isValidated': !(0, runtime_1.exists)(json, 'isValidated') ? undefined : json['isValidated'],
        'postalCode': !(0, runtime_1.exists)(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'typeDescription': !(0, runtime_1.exists)(json, 'typeDescription') ? undefined : json['typeDescription'],
    };
}
exports.AddressTypeFromJSONTyped = AddressTypeFromJSONTyped;
function AddressTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressLine': value.addressLine,
        'cityExtension': value.cityExtension,
        'cityName': value.cityName,
        'country': (0, CountryNameType_1.CountryNameTypeToJSON)(value.country),
        'county': value.county,
        'isValidated': value.isValidated,
        'postalCode': value.postalCode,
        'state': value.state,
        'type': value.type,
        'typeDescription': value.typeDescription,
    };
}
exports.AddressTypeToJSON = AddressTypeToJSON;

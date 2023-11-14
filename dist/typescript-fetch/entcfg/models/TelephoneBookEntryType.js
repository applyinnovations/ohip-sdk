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
exports.TelephoneBookEntryTypeToJSON = exports.TelephoneBookEntryTypeFromJSONTyped = exports.TelephoneBookEntryTypeFromJSON = exports.instanceOfTelephoneBookEntryType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the TelephoneBookEntryType interface.
 */
function instanceOfTelephoneBookEntryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTelephoneBookEntryType = instanceOfTelephoneBookEntryType;
function TelephoneBookEntryTypeFromJSON(json) {
    return TelephoneBookEntryTypeFromJSONTyped(json, false);
}
exports.TelephoneBookEntryTypeFromJSON = TelephoneBookEntryTypeFromJSON;
function TelephoneBookEntryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'category': !(0, runtime_1.exists)(json, 'category') ? undefined : json['category'],
        'categoryDescription': !(0, runtime_1.exists)(json, 'categoryDescription') ? undefined : json['categoryDescription'],
        'categorySequence': !(0, runtime_1.exists)(json, 'categorySequence') ? undefined : json['categorySequence'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['id']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'remarks': !(0, runtime_1.exists)(json, 'remarks') ? undefined : json['remarks'],
        'telephone': !(0, runtime_1.exists)(json, 'telephone') ? undefined : json['telephone'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.TelephoneBookEntryTypeFromJSONTyped = TelephoneBookEntryTypeFromJSONTyped;
function TelephoneBookEntryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'category': value.category,
        'categoryDescription': value.categoryDescription,
        'categorySequence': value.categorySequence,
        'hotelId': value.hotelId,
        'id': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.id),
        'name': value.name,
        'remarks': value.remarks,
        'telephone': value.telephone,
        'url': value.url,
    };
}
exports.TelephoneBookEntryTypeToJSON = TelephoneBookEntryTypeToJSON;
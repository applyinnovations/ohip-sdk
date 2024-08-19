"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelephoneInfoTypeToJSON = exports.TelephoneInfoTypeFromJSONTyped = exports.TelephoneInfoTypeFromJSON = exports.instanceOfTelephoneInfoType = void 0;
const runtime_1 = require("../runtime");
const TelephoneType_1 = require("./TelephoneType");
/**
 * Check if a given object implements the TelephoneInfoType interface.
 */
function instanceOfTelephoneInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTelephoneInfoType = instanceOfTelephoneInfoType;
function TelephoneInfoTypeFromJSON(json) {
    return TelephoneInfoTypeFromJSONTyped(json, false);
}
exports.TelephoneInfoTypeFromJSON = TelephoneInfoTypeFromJSON;
function TelephoneInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'telephone': !(0, runtime_1.exists)(json, 'telephone') ? undefined : (0, TelephoneType_1.TelephoneTypeFromJSON)(json['telephone']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.TelephoneInfoTypeFromJSONTyped = TelephoneInfoTypeFromJSONTyped;
function TelephoneInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'telephone': (0, TelephoneType_1.TelephoneTypeToJSON)(value.telephone),
        'type': value.type,
    };
}
exports.TelephoneInfoTypeToJSON = TelephoneInfoTypeToJSON;

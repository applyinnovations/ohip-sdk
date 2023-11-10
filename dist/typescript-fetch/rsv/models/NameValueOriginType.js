"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameValueOriginTypeToJSON = exports.NameValueOriginTypeFromJSONTyped = exports.NameValueOriginTypeFromJSON = exports.instanceOfNameValueOriginType = void 0;
const runtime_1 = require("../runtime");
const NameValueModuleType_1 = require("./NameValueModuleType");
/**
 * Check if a given object implements the NameValueOriginType interface.
 */
function instanceOfNameValueOriginType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNameValueOriginType = instanceOfNameValueOriginType;
function NameValueOriginTypeFromJSON(json) {
    return NameValueOriginTypeFromJSONTyped(json, false);
}
exports.NameValueOriginTypeFromJSON = NameValueOriginTypeFromJSON;
function NameValueOriginTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'destination': !(0, runtime_1.exists)(json, 'destination') ? undefined : json['destination'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'originName': !(0, runtime_1.exists)(json, 'originName') ? undefined : (0, NameValueModuleType_1.NameValueModuleTypeFromJSON)(json['originName']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.NameValueOriginTypeFromJSONTyped = NameValueOriginTypeFromJSONTyped;
function NameValueOriginTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'destination': value.destination,
        'id': value.id,
        'originName': (0, NameValueModuleType_1.NameValueModuleTypeToJSON)(value.originName),
        'type': value.type,
    };
}
exports.NameValueOriginTypeToJSON = NameValueOriginTypeToJSON;

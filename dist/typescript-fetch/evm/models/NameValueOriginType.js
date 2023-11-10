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

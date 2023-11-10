"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLInfoTypeToJSON = exports.URLInfoTypeFromJSONTyped = exports.URLInfoTypeFromJSON = exports.instanceOfURLInfoType = void 0;
const runtime_1 = require("../runtime");
const URLType_1 = require("./URLType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the URLInfoType interface.
 */
function instanceOfURLInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfURLInfoType = instanceOfURLInfoType;
function URLInfoTypeFromJSON(json) {
    return URLInfoTypeFromJSONTyped(json, false);
}
exports.URLInfoTypeFromJSON = URLInfoTypeFromJSON;
function URLInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : (0, URLType_1.URLTypeFromJSON)(json['url']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.URLInfoTypeFromJSONTyped = URLInfoTypeFromJSONTyped;
function URLInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'idContext': value.idContext,
        'type': value.type,
        'url': (0, URLType_1.URLTypeToJSON)(value.url),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.URLInfoTypeToJSON = URLInfoTypeToJSON;

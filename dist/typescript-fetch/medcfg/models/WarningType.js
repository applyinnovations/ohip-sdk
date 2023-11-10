"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningTypeToJSON = exports.WarningTypeFromJSONTyped = exports.WarningTypeFromJSON = exports.instanceOfWarningType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WarningType interface.
 */
function instanceOfWarningType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWarningType = instanceOfWarningType;
function WarningTypeFromJSON(json) {
    return WarningTypeFromJSONTyped(json, false);
}
exports.WarningTypeFromJSON = WarningTypeFromJSON;
function WarningTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'docURL': !(0, runtime_1.exists)(json, 'docURL') ? undefined : json['docURL'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'recordId': !(0, runtime_1.exists)(json, 'recordId') ? undefined : json['recordId'],
        'rph': !(0, runtime_1.exists)(json, 'rph') ? undefined : json['rph'],
        'shortText': !(0, runtime_1.exists)(json, 'shortText') ? undefined : json['shortText'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.WarningTypeFromJSONTyped = WarningTypeFromJSONTyped;
function WarningTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'docURL': value.docURL,
        'language': value.language,
        'recordId': value.recordId,
        'rph': value.rph,
        'shortText': value.shortText,
        'status': value.status,
        'tag': value.tag,
        'type': value.type,
        'value': value.value,
    };
}
exports.WarningTypeToJSON = WarningTypeToJSON;

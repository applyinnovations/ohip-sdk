"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRoomFeatureConfigTypeToJSON = exports.TemplateRoomFeatureConfigTypeFromJSONTyped = exports.TemplateRoomFeatureConfigTypeFromJSON = exports.instanceOfTemplateRoomFeatureConfigType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType50_1 = require("./TranslationTextType50");
/**
 * Check if a given object implements the TemplateRoomFeatureConfigType interface.
 */
function instanceOfTemplateRoomFeatureConfigType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateRoomFeatureConfigType = instanceOfTemplateRoomFeatureConfigType;
function TemplateRoomFeatureConfigTypeFromJSON(json) {
    return TemplateRoomFeatureConfigTypeFromJSONTyped(json, false);
}
exports.TemplateRoomFeatureConfigTypeFromJSON = TemplateRoomFeatureConfigTypeFromJSON;
function TemplateRoomFeatureConfigTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType50_1.TranslationTextType50FromJSON)(json['description']),
        'global': !(0, runtime_1.exists)(json, 'global') ? undefined : json['global'],
        'groupCode': !(0, runtime_1.exists)(json, 'groupCode') ? undefined : json['groupCode'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.TemplateRoomFeatureConfigTypeFromJSONTyped = TemplateRoomFeatureConfigTypeFromJSONTyped;
function TemplateRoomFeatureConfigTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'code': value.code,
        'description': (0, TranslationTextType50_1.TranslationTextType50ToJSON)(value.description),
        'global': value.global,
        'groupCode': value.groupCode,
        'inactive': value.inactive,
        'sequence': value.sequence,
    };
}
exports.TemplateRoomFeatureConfigTypeToJSON = TemplateRoomFeatureConfigTypeToJSON;
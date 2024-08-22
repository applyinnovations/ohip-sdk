"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceGroupTypeToJSON = exports.SourceGroupTypeFromJSONTyped = exports.SourceGroupTypeFromJSON = exports.instanceOfSourceGroupType = void 0;
const runtime_1 = require("../runtime");
const SourceCodeType_1 = require("./SourceCodeType");
const TranslationTextType50_1 = require("./TranslationTextType50");
/**
 * Check if a given object implements the SourceGroupType interface.
 */
function instanceOfSourceGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSourceGroupType = instanceOfSourceGroupType;
function SourceGroupTypeFromJSON(json) {
    return SourceGroupTypeFromJSONTyped(json, false);
}
exports.SourceGroupTypeFromJSON = SourceGroupTypeFromJSON;
function SourceGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType50_1.TranslationTextType50FromJSON)(json['description']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'sourceCodes': !(0, runtime_1.exists)(json, 'sourceCodes') ? undefined : (json['sourceCodes'].map(SourceCodeType_1.SourceCodeTypeFromJSON)),
    };
}
exports.SourceGroupTypeFromJSONTyped = SourceGroupTypeFromJSONTyped;
function SourceGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': (0, TranslationTextType50_1.TranslationTextType50ToJSON)(value.description),
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'sequence': value.sequence,
        'sourceCodes': value.sourceCodes === undefined ? undefined : (value.sourceCodes.map(SourceCodeType_1.SourceCodeTypeToJSON)),
    };
}
exports.SourceGroupTypeToJSON = SourceGroupTypeToJSON;

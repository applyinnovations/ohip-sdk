"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessEventDataTypeToJSON = exports.BusinessEventDataTypeFromJSONTyped = exports.BusinessEventDataTypeFromJSON = exports.instanceOfBusinessEventDataType = void 0;
const runtime_1 = require("../runtime");
const BusinessEventIDType_1 = require("./BusinessEventIDType");
const BusinessEventType_1 = require("./BusinessEventType");
/**
 * Check if a given object implements the BusinessEventDataType interface.
 */
function instanceOfBusinessEventDataType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBusinessEventDataType = instanceOfBusinessEventDataType;
function BusinessEventDataTypeFromJSON(json) {
    return BusinessEventDataTypeFromJSONTyped(json, false);
}
exports.BusinessEventDataTypeFromJSON = BusinessEventDataTypeFromJSON;
function BusinessEventDataTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'businessEvent': !(0, runtime_1.exists)(json, 'businessEvent') ? undefined : (0, BusinessEventType_1.BusinessEventTypeFromJSON)(json['businessEvent']),
        'businessEventId': !(0, runtime_1.exists)(json, 'businessEventId') ? undefined : (0, BusinessEventIDType_1.BusinessEventIDTypeFromJSON)(json['businessEventId']),
    };
}
exports.BusinessEventDataTypeFromJSONTyped = BusinessEventDataTypeFromJSONTyped;
function BusinessEventDataTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'businessEvent': (0, BusinessEventType_1.BusinessEventTypeToJSON)(value.businessEvent),
        'businessEventId': (0, BusinessEventIDType_1.BusinessEventIDTypeToJSON)(value.businessEventId),
    };
}
exports.BusinessEventDataTypeToJSON = BusinessEventDataTypeToJSON;
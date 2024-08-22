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
exports.SystemRateLevelTypeToJSON = exports.SystemRateLevelTypeFromJSONTyped = exports.SystemRateLevelTypeFromJSON = exports.instanceOfSystemRateLevelType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the SystemRateLevelType interface.
 */
function instanceOfSystemRateLevelType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSystemRateLevelType = instanceOfSystemRateLevelType;
function SystemRateLevelTypeFromJSON(json) {
    return SystemRateLevelTypeFromJSONTyped(json, false);
}
exports.SystemRateLevelTypeFromJSON = SystemRateLevelTypeFromJSON;
function SystemRateLevelTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rateLevelCode': !(0, runtime_1.exists)(json, 'rateLevelCode') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['rateLevelCode']),
    };
}
exports.SystemRateLevelTypeFromJSONTyped = SystemRateLevelTypeFromJSONTyped;
function SystemRateLevelTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rateLevelCode': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.rateLevelCode),
    };
}
exports.SystemRateLevelTypeToJSON = SystemRateLevelTypeToJSON;

"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCodeInfoTypeToJSON = exports.SourceCodeInfoTypeFromJSONTyped = exports.SourceCodeInfoTypeFromJSON = exports.instanceOfSourceCodeInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SourceCodeInfoType interface.
 */
function instanceOfSourceCodeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSourceCodeInfoType = instanceOfSourceCodeInfoType;
function SourceCodeInfoTypeFromJSON(json) {
    return SourceCodeInfoTypeFromJSONTyped(json, false);
}
exports.SourceCodeInfoTypeFromJSON = SourceCodeInfoTypeFromJSON;
function SourceCodeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceGroup': !(0, runtime_1.exists)(json, 'sourceGroup') ? undefined : json['sourceGroup'],
    };
}
exports.SourceCodeInfoTypeFromJSONTyped = SourceCodeInfoTypeFromJSONTyped;
function SourceCodeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'hotelId': value.hotelId,
        'sourceCode': value.sourceCode,
        'sourceGroup': value.sourceGroup,
    };
}
exports.SourceCodeInfoTypeToJSON = SourceCodeInfoTypeToJSON;

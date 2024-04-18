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
exports.ExceptionDetailTypeToJSON = exports.ExceptionDetailTypeFromJSONTyped = exports.ExceptionDetailTypeFromJSON = exports.instanceOfExceptionDetailType = void 0;
const runtime_1 = require("../runtime");
const ErrorInstance_1 = require("./ErrorInstance");
const InstanceLink_1 = require("./InstanceLink");
/**
 * Check if a given object implements the ExceptionDetailType interface.
 */
function instanceOfExceptionDetailType(value) {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfExceptionDetailType = instanceOfExceptionDetailType;
function ExceptionDetailTypeFromJSON(json) {
    return ExceptionDetailTypeFromJSONTyped(json, false);
}
exports.ExceptionDetailTypeFromJSON = ExceptionDetailTypeFromJSON;
function ExceptionDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'detail': !(0, runtime_1.exists)(json, 'detail') ? undefined : json['detail'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'oerrorCode': !(0, runtime_1.exists)(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorDetails': !(0, runtime_1.exists)(json, 'o:errorDetails') ? undefined : (json['o:errorDetails'].map(ErrorInstance_1.ErrorInstanceFromJSON)),
        'oerrorPath': !(0, runtime_1.exists)(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}
exports.ExceptionDetailTypeFromJSONTyped = ExceptionDetailTypeFromJSONTyped;
function ExceptionDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'detail': value.detail,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'o:errorCode': value.oerrorCode,
        'o:errorDetails': value.oerrorDetails === undefined ? undefined : (value.oerrorDetails.map(ErrorInstance_1.ErrorInstanceToJSON)),
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}
exports.ExceptionDetailTypeToJSON = ExceptionDetailTypeToJSON;
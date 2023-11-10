"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInstanceToJSON = exports.ErrorInstanceFromJSONTyped = exports.ErrorInstanceFromJSON = exports.instanceOfErrorInstance = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ErrorInstance interface.
 */
function instanceOfErrorInstance(value) {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfErrorInstance = instanceOfErrorInstance;
function ErrorInstanceFromJSON(json) {
    return ErrorInstanceFromJSONTyped(json, false);
}
exports.ErrorInstanceFromJSON = ErrorInstanceFromJSON;
function ErrorInstanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'detail': !(0, runtime_1.exists)(json, 'detail') ? undefined : json['detail'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'oerrorCode': !(0, runtime_1.exists)(json, 'o:errorCode') ? undefined : json['o:errorCode'],
        'oerrorPath': !(0, runtime_1.exists)(json, 'o:errorPath') ? undefined : json['o:errorPath'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}
exports.ErrorInstanceFromJSONTyped = ErrorInstanceFromJSONTyped;
function ErrorInstanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'detail': value.detail,
        'instance': value.instance,
        'o:errorCode': value.oerrorCode,
        'o:errorPath': value.oerrorPath,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}
exports.ErrorInstanceToJSON = ErrorInstanceToJSON;

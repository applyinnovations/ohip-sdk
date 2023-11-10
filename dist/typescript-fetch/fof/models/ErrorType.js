"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypeToJSON = exports.ErrorTypeFromJSONTyped = exports.ErrorTypeFromJSON = exports.instanceOfErrorType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ErrorType interface.
 */
function instanceOfErrorType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfErrorType = instanceOfErrorType;
function ErrorTypeFromJSON(json) {
    return ErrorTypeFromJSONTyped(json, false);
}
exports.ErrorTypeFromJSON = ErrorTypeFromJSON;
function ErrorTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'docURL': !(0, runtime_1.exists)(json, 'docURL') ? undefined : json['docURL'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'nodeList': !(0, runtime_1.exists)(json, 'nodeList') ? undefined : json['nodeList'],
        'recordId': !(0, runtime_1.exists)(json, 'recordId') ? undefined : json['recordId'],
        'shortText': !(0, runtime_1.exists)(json, 'shortText') ? undefined : json['shortText'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.ErrorTypeFromJSONTyped = ErrorTypeFromJSONTyped;
function ErrorTypeToJSON(value) {
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
        'nodeList': value.nodeList,
        'recordId': value.recordId,
        'shortText': value.shortText,
        'status': value.status,
        'tag': value.tag,
        'type': value.type,
        'value': value.value,
    };
}
exports.ErrorTypeToJSON = ErrorTypeToJSON;

"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueTextInfoTypeToJSON = exports.QueueTextInfoTypeFromJSONTyped = exports.QueueTextInfoTypeFromJSON = exports.instanceOfQueueTextInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the QueueTextInfoType interface.
 */
function instanceOfQueueTextInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfQueueTextInfoType = instanceOfQueueTextInfoType;
function QueueTextInfoTypeFromJSON(json) {
    return QueueTextInfoTypeFromJSONTyped(json, false);
}
exports.QueueTextInfoTypeFromJSON = QueueTextInfoTypeFromJSON;
function QueueTextInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sentBy': !(0, runtime_1.exists)(json, 'sentBy') ? undefined : json['sentBy'],
        'sentTime': !(0, runtime_1.exists)(json, 'sentTime') ? undefined : json['sentTime'],
    };
}
exports.QueueTextInfoTypeFromJSONTyped = QueueTextInfoTypeFromJSONTyped;
function QueueTextInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sentBy': value.sentBy,
        'sentTime': value.sentTime,
    };
}
exports.QueueTextInfoTypeToJSON = QueueTextInfoTypeToJSON;

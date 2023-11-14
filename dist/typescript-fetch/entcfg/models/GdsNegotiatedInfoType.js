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
exports.GdsNegotiatedInfoTypeToJSON = exports.GdsNegotiatedInfoTypeFromJSONTyped = exports.GdsNegotiatedInfoTypeFromJSON = exports.instanceOfGdsNegotiatedInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GdsNegotiatedInfoType interface.
 */
function instanceOfGdsNegotiatedInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGdsNegotiatedInfoType = instanceOfGdsNegotiatedInfoType;
function GdsNegotiatedInfoTypeFromJSON(json) {
    return GdsNegotiatedInfoTypeFromJSONTyped(json, false);
}
exports.GdsNegotiatedInfoTypeFromJSON = GdsNegotiatedInfoTypeFromJSON;
function GdsNegotiatedInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessCode': !(0, runtime_1.exists)(json, 'accessCode') ? undefined : json['accessCode'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : (new Date(json['end'])),
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : (new Date(json['start'])),
    };
}
exports.GdsNegotiatedInfoTypeFromJSONTyped = GdsNegotiatedInfoTypeFromJSONTyped;
function GdsNegotiatedInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessCode': value.accessCode,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substring(0, 10)),
        'inactive': value.inactive,
        'order': value.order,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substring(0, 10)),
    };
}
exports.GdsNegotiatedInfoTypeToJSON = GdsNegotiatedInfoTypeToJSON;
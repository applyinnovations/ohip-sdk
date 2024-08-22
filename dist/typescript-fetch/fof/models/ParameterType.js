"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterTypeToJSON = exports.ParameterTypeFromJSONTyped = exports.ParameterTypeFromJSON = exports.instanceOfParameterType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ParameterType interface.
 */
function instanceOfParameterType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfParameterType = instanceOfParameterType;
function ParameterTypeFromJSON(json) {
    return ParameterTypeFromJSONTyped(json, false);
}
exports.ParameterTypeFromJSON = ParameterTypeFromJSON;
function ParameterTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'parameterName': !(0, runtime_1.exists)(json, 'parameterName') ? undefined : json['parameterName'],
        'parameterValue': !(0, runtime_1.exists)(json, 'parameterValue') ? undefined : json['parameterValue'],
    };
}
exports.ParameterTypeFromJSONTyped = ParameterTypeFromJSONTyped;
function ParameterTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'parameterName': value.parameterName,
        'parameterValue': value.parameterValue,
    };
}
exports.ParameterTypeToJSON = ParameterTypeToJSON;

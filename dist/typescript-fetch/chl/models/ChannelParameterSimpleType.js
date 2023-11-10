"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelParameterSimpleTypeToJSON = exports.ChannelParameterSimpleTypeFromJSONTyped = exports.ChannelParameterSimpleTypeFromJSON = exports.instanceOfChannelParameterSimpleType = void 0;
const runtime_1 = require("../runtime");
const ChannelParameterValueType_1 = require("./ChannelParameterValueType");
/**
 * Check if a given object implements the ChannelParameterSimpleType interface.
 */
function instanceOfChannelParameterSimpleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelParameterSimpleType = instanceOfChannelParameterSimpleType;
function ChannelParameterSimpleTypeFromJSON(json) {
    return ChannelParameterSimpleTypeFromJSONTyped(json, false);
}
exports.ChannelParameterSimpleTypeFromJSON = ChannelParameterSimpleTypeFromJSON;
function ChannelParameterSimpleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'parameterName': !(0, runtime_1.exists)(json, 'parameterName') ? undefined : json['parameterName'],
        'parameterValue': !(0, runtime_1.exists)(json, 'parameterValue') ? undefined : json['parameterValue'],
        'parameterValueType': !(0, runtime_1.exists)(json, 'parameterValueType') ? undefined : (0, ChannelParameterValueType_1.ChannelParameterValueTypeFromJSON)(json['parameterValueType']),
    };
}
exports.ChannelParameterSimpleTypeFromJSONTyped = ChannelParameterSimpleTypeFromJSONTyped;
function ChannelParameterSimpleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'parameterName': value.parameterName,
        'parameterValue': value.parameterValue,
        'parameterValueType': (0, ChannelParameterValueType_1.ChannelParameterValueTypeToJSON)(value.parameterValueType),
    };
}
exports.ChannelParameterSimpleTypeToJSON = ChannelParameterSimpleTypeToJSON;

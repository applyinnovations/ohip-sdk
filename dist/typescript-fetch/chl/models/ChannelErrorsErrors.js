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
exports.ChannelErrorsErrorsToJSON = exports.ChannelErrorsErrorsFromJSONTyped = exports.ChannelErrorsErrorsFromJSON = exports.instanceOfChannelErrorsErrors = void 0;
const runtime_1 = require("../runtime");
const SystemErrorType_1 = require("./SystemErrorType");
/**
 * Check if a given object implements the ChannelErrorsErrors interface.
 */
function instanceOfChannelErrorsErrors(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelErrorsErrors = instanceOfChannelErrorsErrors;
function ChannelErrorsErrorsFromJSON(json) {
    return ChannelErrorsErrorsFromJSONTyped(json, false);
}
exports.ChannelErrorsErrorsFromJSON = ChannelErrorsErrorsFromJSON;
function ChannelErrorsErrorsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'error': !(0, runtime_1.exists)(json, 'error') ? undefined : (json['error'].map(SystemErrorType_1.SystemErrorTypeFromJSON)),
    };
}
exports.ChannelErrorsErrorsFromJSONTyped = ChannelErrorsErrorsFromJSONTyped;
function ChannelErrorsErrorsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelCode': value.bookingChannelCode,
        'error': value.error === undefined ? undefined : (value.error.map(SystemErrorType_1.SystemErrorTypeToJSON)),
    };
}
exports.ChannelErrorsErrorsToJSON = ChannelErrorsErrorsToJSON;

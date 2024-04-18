"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateProgramTypeToJSON = exports.RateProgramTypeFromJSONTyped = exports.RateProgramTypeFromJSON = exports.instanceOfRateProgramType = void 0;
const runtime_1 = require("../runtime");
const RateProgramRateType_1 = require("./RateProgramRateType");
/**
 * Check if a given object implements the RateProgramType interface.
 */
function instanceOfRateProgramType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateProgramType = instanceOfRateProgramType;
function RateProgramTypeFromJSON(json) {
    return RateProgramTypeFromJSONTyped(json, false);
}
exports.RateProgramTypeFromJSON = RateProgramTypeFromJSON;
function RateProgramTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rates': !(0, runtime_1.exists)(json, 'rates') ? undefined : (json['rates'].map(RateProgramRateType_1.RateProgramRateTypeFromJSON)),
        'roomPool': !(0, runtime_1.exists)(json, 'roomPool') ? undefined : json['roomPool'],
    };
}
exports.RateProgramTypeFromJSONTyped = RateProgramTypeFromJSONTyped;
function RateProgramTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rates': value.rates === undefined ? undefined : (value.rates.map(RateProgramRateType_1.RateProgramRateTypeToJSON)),
        'roomPool': value.roomPool,
    };
}
exports.RateProgramTypeToJSON = RateProgramTypeToJSON;
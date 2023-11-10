"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomChargeExemptionDateTypeToJSON = exports.CustomChargeExemptionDateTypeFromJSONTyped = exports.CustomChargeExemptionDateTypeFromJSON = exports.instanceOfCustomChargeExemptionDateType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CustomChargeExemptionDateType interface.
 */
function instanceOfCustomChargeExemptionDateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomChargeExemptionDateType = instanceOfCustomChargeExemptionDateType;
function CustomChargeExemptionDateTypeFromJSON(json) {
    return CustomChargeExemptionDateTypeFromJSONTyped(json, false);
}
exports.CustomChargeExemptionDateTypeFromJSON = CustomChargeExemptionDateTypeFromJSON;
function CustomChargeExemptionDateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
    };
}
exports.CustomChargeExemptionDateTypeFromJSONTyped = CustomChargeExemptionDateTypeFromJSONTyped;
function CustomChargeExemptionDateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'quantity': value.quantity,
    };
}
exports.CustomChargeExemptionDateTypeToJSON = CustomChargeExemptionDateTypeToJSON;

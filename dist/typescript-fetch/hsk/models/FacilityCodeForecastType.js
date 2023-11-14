"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityCodeForecastTypeToJSON = exports.FacilityCodeForecastTypeFromJSONTyped = exports.FacilityCodeForecastTypeFromJSON = exports.instanceOfFacilityCodeForecastType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ForecastQuantitiesType_1 = require("./ForecastQuantitiesType");
/**
 * Check if a given object implements the FacilityCodeForecastType interface.
 */
function instanceOfFacilityCodeForecastType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFacilityCodeForecastType = instanceOfFacilityCodeForecastType;
function FacilityCodeForecastTypeFromJSON(json) {
    return FacilityCodeForecastTypeFromJSONTyped(json, false);
}
exports.FacilityCodeForecastTypeFromJSON = FacilityCodeForecastTypeFromJSON;
function FacilityCodeForecastTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['code']),
        'forecast': !(0, runtime_1.exists)(json, 'forecast') ? undefined : (0, ForecastQuantitiesType_1.ForecastQuantitiesTypeFromJSON)(json['forecast']),
    };
}
exports.FacilityCodeForecastTypeFromJSONTyped = FacilityCodeForecastTypeFromJSONTyped;
function FacilityCodeForecastTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.code),
        'forecast': (0, ForecastQuantitiesType_1.ForecastQuantitiesTypeToJSON)(value.forecast),
    };
}
exports.FacilityCodeForecastTypeToJSON = FacilityCodeForecastTypeToJSON;
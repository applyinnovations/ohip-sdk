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
exports.FacilityTotalForecastTypeToJSON = exports.FacilityTotalForecastTypeFromJSONTyped = exports.FacilityTotalForecastTypeFromJSON = exports.instanceOfFacilityTotalForecastType = void 0;
const runtime_1 = require("../runtime");
const FacilityCodesForecastType_1 = require("./FacilityCodesForecastType");
const ForecastTotalsQuantitiesType_1 = require("./ForecastTotalsQuantitiesType");
/**
 * Check if a given object implements the FacilityTotalForecastType interface.
 */
function instanceOfFacilityTotalForecastType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFacilityTotalForecastType = instanceOfFacilityTotalForecastType;
function FacilityTotalForecastTypeFromJSON(json) {
    return FacilityTotalForecastTypeFromJSONTyped(json, false);
}
exports.FacilityTotalForecastTypeFromJSON = FacilityTotalForecastTypeFromJSON;
function FacilityTotalForecastTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalFacilityCodes': !(0, runtime_1.exists)(json, 'totalFacilityCodes') ? undefined : (0, FacilityCodesForecastType_1.FacilityCodesForecastTypeFromJSON)(json['totalFacilityCodes']),
        'totals': !(0, runtime_1.exists)(json, 'totals') ? undefined : (0, ForecastTotalsQuantitiesType_1.ForecastTotalsQuantitiesTypeFromJSON)(json['totals']),
    };
}
exports.FacilityTotalForecastTypeFromJSONTyped = FacilityTotalForecastTypeFromJSONTyped;
function FacilityTotalForecastTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'totalFacilityCodes': (0, FacilityCodesForecastType_1.FacilityCodesForecastTypeToJSON)(value.totalFacilityCodes),
        'totals': (0, ForecastTotalsQuantitiesType_1.ForecastTotalsQuantitiesTypeToJSON)(value.totals),
    };
}
exports.FacilityTotalForecastTypeToJSON = FacilityTotalForecastTypeToJSON;

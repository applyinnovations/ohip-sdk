"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityForecastFacilityForecastDetailsToJSON = exports.FacilityForecastFacilityForecastDetailsFromJSONTyped = exports.FacilityForecastFacilityForecastDetailsFromJSON = exports.instanceOfFacilityForecastFacilityForecastDetails = void 0;
const runtime_1 = require("../runtime");
const FacilityTaskForecastType_1 = require("./FacilityTaskForecastType");
const FacilityTotalForecastType_1 = require("./FacilityTotalForecastType");
/**
 * Check if a given object implements the FacilityForecastFacilityForecastDetails interface.
 */
function instanceOfFacilityForecastFacilityForecastDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFacilityForecastFacilityForecastDetails = instanceOfFacilityForecastFacilityForecastDetails;
function FacilityForecastFacilityForecastDetailsFromJSON(json) {
    return FacilityForecastFacilityForecastDetailsFromJSONTyped(json, false);
}
exports.FacilityForecastFacilityForecastDetailsFromJSON = FacilityForecastFacilityForecastDetailsFromJSON;
function FacilityForecastFacilityForecastDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tasks': !(0, runtime_1.exists)(json, 'tasks') ? undefined : (json['tasks'].map(FacilityTaskForecastType_1.FacilityTaskForecastTypeFromJSON)),
        'totals': !(0, runtime_1.exists)(json, 'totals') ? undefined : (0, FacilityTotalForecastType_1.FacilityTotalForecastTypeFromJSON)(json['totals']),
    };
}
exports.FacilityForecastFacilityForecastDetailsFromJSONTyped = FacilityForecastFacilityForecastDetailsFromJSONTyped;
function FacilityForecastFacilityForecastDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tasks': value.tasks === undefined ? undefined : (value.tasks.map(FacilityTaskForecastType_1.FacilityTaskForecastTypeToJSON)),
        'totals': (0, FacilityTotalForecastType_1.FacilityTotalForecastTypeToJSON)(value.totals),
    };
}
exports.FacilityForecastFacilityForecastDetailsToJSON = FacilityForecastFacilityForecastDetailsToJSON;

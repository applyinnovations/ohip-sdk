"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyTraceTextsCriteriaTypeToJSON = exports.CopyTraceTextsCriteriaTypeFromJSONTyped = exports.CopyTraceTextsCriteriaTypeFromJSON = exports.instanceOfCopyTraceTextsCriteriaType = void 0;
const runtime_1 = require("../runtime");
const HotelCodeListType_1 = require("./HotelCodeListType");
const TraceTextsType_1 = require("./TraceTextsType");
/**
 * Check if a given object implements the CopyTraceTextsCriteriaType interface.
 */
function instanceOfCopyTraceTextsCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyTraceTextsCriteriaType = instanceOfCopyTraceTextsCriteriaType;
function CopyTraceTextsCriteriaTypeFromJSON(json) {
    return CopyTraceTextsCriteriaTypeFromJSONTyped(json, false);
}
exports.CopyTraceTextsCriteriaTypeFromJSON = CopyTraceTextsCriteriaTypeFromJSON;
function CopyTraceTextsCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'targetHotels': !(0, runtime_1.exists)(json, 'targetHotels') ? undefined : (0, HotelCodeListType_1.HotelCodeListTypeFromJSON)(json['targetHotels']),
        'traceTexts': !(0, runtime_1.exists)(json, 'traceTexts') ? undefined : (0, TraceTextsType_1.TraceTextsTypeFromJSON)(json['traceTexts']),
    };
}
exports.CopyTraceTextsCriteriaTypeFromJSONTyped = CopyTraceTextsCriteriaTypeFromJSONTyped;
function CopyTraceTextsCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'targetHotels': (0, HotelCodeListType_1.HotelCodeListTypeToJSON)(value.targetHotels),
        'traceTexts': (0, TraceTextsType_1.TraceTextsTypeToJSON)(value.traceTexts),
    };
}
exports.CopyTraceTextsCriteriaTypeToJSON = CopyTraceTextsCriteriaTypeToJSON;
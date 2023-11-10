"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyEventForecastsCriteriaTypeToJSON = exports.CopyEventForecastsCriteriaTypeFromJSONTyped = exports.CopyEventForecastsCriteriaTypeFromJSON = exports.instanceOfCopyEventForecastsCriteriaType = void 0;
const runtime_1 = require("../runtime");
const EventForecastsListType_1 = require("./EventForecastsListType");
/**
 * Check if a given object implements the CopyEventForecastsCriteriaType interface.
 */
function instanceOfCopyEventForecastsCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyEventForecastsCriteriaType = instanceOfCopyEventForecastsCriteriaType;
function CopyEventForecastsCriteriaTypeFromJSON(json) {
    return CopyEventForecastsCriteriaTypeFromJSONTyped(json, false);
}
exports.CopyEventForecastsCriteriaTypeFromJSON = CopyEventForecastsCriteriaTypeFromJSON;
function CopyEventForecastsCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventForecastsList': !(0, runtime_1.exists)(json, 'eventForecastsList') ? undefined : (json['eventForecastsList'].map(EventForecastsListType_1.EventForecastsListTypeFromJSON)),
        'includeRevenueType': !(0, runtime_1.exists)(json, 'includeRevenueType') ? undefined : json['includeRevenueType'],
    };
}
exports.CopyEventForecastsCriteriaTypeFromJSONTyped = CopyEventForecastsCriteriaTypeFromJSONTyped;
function CopyEventForecastsCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventForecastsList': value.eventForecastsList === undefined ? undefined : (value.eventForecastsList.map(EventForecastsListType_1.EventForecastsListTypeToJSON)),
        'includeRevenueType': value.includeRevenueType,
    };
}
exports.CopyEventForecastsCriteriaTypeToJSON = CopyEventForecastsCriteriaTypeToJSON;

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
exports.EventForecastInfoTypeToJSON = exports.EventForecastInfoTypeFromJSONTyped = exports.EventForecastInfoTypeFromJSON = exports.instanceOfEventForecastInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const DateRangeType_1 = require("./DateRangeType");
/**
 * Check if a given object implements the EventForecastInfoType interface.
 */
function instanceOfEventForecastInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventForecastInfoType = instanceOfEventForecastInfoType;
function EventForecastInfoTypeFromJSON(json) {
    return EventForecastInfoTypeFromJSONTyped(json, false);
}
exports.EventForecastInfoTypeFromJSON = EventForecastInfoTypeFromJSON;
function EventForecastInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockType': !(0, runtime_1.exists)(json, 'blockType') ? undefined : json['blockType'],
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['dateRange']),
        'eventType': !(0, runtime_1.exists)(json, 'eventType') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['eventType']),
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
    };
}
exports.EventForecastInfoTypeFromJSONTyped = EventForecastInfoTypeFromJSONTyped;
function EventForecastInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockType': value.blockType,
        'dateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.dateRange),
        'eventType': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.eventType),
        'marketCode': value.marketCode,
    };
}
exports.EventForecastInfoTypeToJSON = EventForecastInfoTypeToJSON;

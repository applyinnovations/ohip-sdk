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
exports.EventForecastTypeToJSON = exports.EventForecastTypeFromJSONTyped = exports.EventForecastTypeFromJSON = exports.instanceOfEventForecastType = void 0;
const runtime_1 = require("../runtime");
const EventForecastInfoType_1 = require("./EventForecastInfoType");
const EventForecastRevDetailListType_1 = require("./EventForecastRevDetailListType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EventForecastType interface.
 */
function instanceOfEventForecastType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventForecastType = instanceOfEventForecastType;
function EventForecastTypeFromJSON(json) {
    return EventForecastTypeFromJSONTyped(json, false);
}
exports.EventForecastTypeFromJSON = EventForecastTypeFromJSON;
function EventForecastTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'forecastId': !(0, runtime_1.exists)(json, 'forecastId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['forecastId']),
        'forecastInfo': !(0, runtime_1.exists)(json, 'forecastInfo') ? undefined : (json['forecastInfo'].map(EventForecastInfoType_1.EventForecastInfoTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'revenueDetails': !(0, runtime_1.exists)(json, 'revenueDetails') ? undefined : (0, EventForecastRevDetailListType_1.EventForecastRevDetailListTypeFromJSON)(json['revenueDetails']),
    };
}
exports.EventForecastTypeFromJSONTyped = EventForecastTypeFromJSONTyped;
function EventForecastTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'forecastId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.forecastId),
        'forecastInfo': value.forecastInfo === undefined ? undefined : (value.forecastInfo.map(EventForecastInfoType_1.EventForecastInfoTypeToJSON)),
        'hotelId': value.hotelId,
        'revenueDetails': (0, EventForecastRevDetailListType_1.EventForecastRevDetailListTypeToJSON)(value.revenueDetails),
    };
}
exports.EventForecastTypeToJSON = EventForecastTypeToJSON;

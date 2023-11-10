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
exports.EventForecastsListTypeToJSON = exports.EventForecastsListTypeFromJSONTyped = exports.EventForecastsListTypeFromJSON = exports.instanceOfEventForecastsListType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EventForecastsListType interface.
 */
function instanceOfEventForecastsListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventForecastsListType = instanceOfEventForecastsListType;
function EventForecastsListTypeFromJSON(json) {
    return EventForecastsListTypeFromJSONTyped(json, false);
}
exports.EventForecastsListTypeFromJSON = EventForecastsListTypeFromJSON;
function EventForecastsListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyBookingTypeAs': !(0, runtime_1.exists)(json, 'copyBookingTypeAs') ? undefined : json['copyBookingTypeAs'],
        'copyDateRangeAs': !(0, runtime_1.exists)(json, 'copyDateRangeAs') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['copyDateRangeAs']),
        'copyEventTypeAs': !(0, runtime_1.exists)(json, 'copyEventTypeAs') ? undefined : json['copyEventTypeAs'],
        'copyMarketCodeAs': !(0, runtime_1.exists)(json, 'copyMarketCodeAs') ? undefined : json['copyMarketCodeAs'],
        'sourceEventType': !(0, runtime_1.exists)(json, 'sourceEventType') ? undefined : json['sourceEventType'],
        'sourceForecastId': !(0, runtime_1.exists)(json, 'sourceForecastId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['sourceForecastId']),
        'sourceHotelCode': !(0, runtime_1.exists)(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
        'targetHotelCode': !(0, runtime_1.exists)(json, 'targetHotelCode') ? undefined : json['targetHotelCode'],
    };
}
exports.EventForecastsListTypeFromJSONTyped = EventForecastsListTypeFromJSONTyped;
function EventForecastsListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyBookingTypeAs': value.copyBookingTypeAs,
        'copyDateRangeAs': (0, DateRangeType_1.DateRangeTypeToJSON)(value.copyDateRangeAs),
        'copyEventTypeAs': value.copyEventTypeAs,
        'copyMarketCodeAs': value.copyMarketCodeAs,
        'sourceEventType': value.sourceEventType,
        'sourceForecastId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.sourceForecastId),
        'sourceHotelCode': value.sourceHotelCode,
        'targetHotelCode': value.targetHotelCode,
    };
}
exports.EventForecastsListTypeToJSON = EventForecastsListTypeToJSON;

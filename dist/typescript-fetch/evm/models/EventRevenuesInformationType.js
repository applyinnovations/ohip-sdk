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
exports.EventRevenuesInformationTypeToJSON = exports.EventRevenuesInformationTypeFromJSONTyped = exports.EventRevenuesInformationTypeFromJSON = exports.instanceOfEventRevenuesInformationType = void 0;
const runtime_1 = require("../runtime");
const EventRevenueInformationType_1 = require("./EventRevenueInformationType");
/**
 * Check if a given object implements the EventRevenuesInformationType interface.
 */
function instanceOfEventRevenuesInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventRevenuesInformationType = instanceOfEventRevenuesInformationType;
function EventRevenuesInformationTypeFromJSON(json) {
    return EventRevenuesInformationTypeFromJSONTyped(json, false);
}
exports.EventRevenuesInformationTypeFromJSON = EventRevenuesInformationTypeFromJSON;
function EventRevenuesInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'eventLevelRevenueActualization': !(0, runtime_1.exists)(json, 'eventLevelRevenueActualization') ? undefined : json['eventLevelRevenueActualization'],
        'eventRevenueInformation': !(0, runtime_1.exists)(json, 'eventRevenueInformation') ? undefined : (json['eventRevenueInformation'].map(EventRevenueInformationType_1.EventRevenueInformationTypeFromJSON)),
        'excludeFromForecast': !(0, runtime_1.exists)(json, 'excludeFromForecast') ? undefined : json['excludeFromForecast'],
        'useForecastRevenue': !(0, runtime_1.exists)(json, 'useForecastRevenue') ? undefined : json['useForecastRevenue'],
    };
}
exports.EventRevenuesInformationTypeFromJSONTyped = EventRevenuesInformationTypeFromJSONTyped;
function EventRevenuesInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'eventLevelRevenueActualization': value.eventLevelRevenueActualization,
        'eventRevenueInformation': value.eventRevenueInformation === undefined ? undefined : (value.eventRevenueInformation.map(EventRevenueInformationType_1.EventRevenueInformationTypeToJSON)),
        'excludeFromForecast': value.excludeFromForecast,
        'useForecastRevenue': value.useForecastRevenue,
    };
}
exports.EventRevenuesInformationTypeToJSON = EventRevenuesInformationTypeToJSON;
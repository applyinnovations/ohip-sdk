"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralAvailSimulatorTypeToJSON = exports.GeneralAvailSimulatorTypeFromJSONTyped = exports.GeneralAvailSimulatorTypeFromJSON = exports.instanceOfGeneralAvailSimulatorType = void 0;
const runtime_1 = require("../runtime");
const AvailableRatePlanType_1 = require("./AvailableRatePlanType");
const SellOrderType_1 = require("./SellOrderType");
/**
 * Check if a given object implements the GeneralAvailSimulatorType interface.
 */
function instanceOfGeneralAvailSimulatorType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGeneralAvailSimulatorType = instanceOfGeneralAvailSimulatorType;
function GeneralAvailSimulatorTypeFromJSON(json) {
    return GeneralAvailSimulatorTypeFromJSONTyped(json, false);
}
exports.GeneralAvailSimulatorTypeFromJSON = GeneralAvailSimulatorTypeFromJSON;
function GeneralAvailSimulatorTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availableRatePlans': !(0, runtime_1.exists)(json, 'availableRatePlans') ? undefined : (json['availableRatePlans'].map(AvailableRatePlanType_1.AvailableRatePlanTypeFromJSON)),
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'marketingInfo': !(0, runtime_1.exists)(json, 'marketingInfo') ? undefined : json['marketingInfo'],
        'sellOrder': !(0, runtime_1.exists)(json, 'sellOrder') ? undefined : (0, SellOrderType_1.SellOrderTypeFromJSON)(json['sellOrder']),
        'supportsHTMLEditor': !(0, runtime_1.exists)(json, 'supportsHTMLEditor') ? undefined : json['supportsHTMLEditor'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.GeneralAvailSimulatorTypeFromJSONTyped = GeneralAvailSimulatorTypeFromJSONTyped;
function GeneralAvailSimulatorTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availableRatePlans': value.availableRatePlans === undefined ? undefined : (value.availableRatePlans.map(AvailableRatePlanType_1.AvailableRatePlanTypeToJSON)),
        'bookingChannelCode': value.bookingChannelCode,
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelId': value.hotelId,
        'marketingInfo': value.marketingInfo,
        'sellOrder': (0, SellOrderType_1.SellOrderTypeToJSON)(value.sellOrder),
        'supportsHTMLEditor': value.supportsHTMLEditor,
        'totalResults': value.totalResults,
    };
}
exports.GeneralAvailSimulatorTypeToJSON = GeneralAvailSimulatorTypeToJSON;

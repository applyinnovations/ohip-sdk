"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyConditionTypeToJSON = exports.StrategyConditionTypeFromJSONTyped = exports.StrategyConditionTypeFromJSON = exports.instanceOfStrategyConditionType = void 0;
const runtime_1 = require("../runtime");
const RateStrategyConditionType_1 = require("./RateStrategyConditionType");
const ThresholdType_1 = require("./ThresholdType");
/**
 * Check if a given object implements the StrategyConditionType interface.
 */
function instanceOfStrategyConditionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStrategyConditionType = instanceOfStrategyConditionType;
function StrategyConditionTypeFromJSON(json) {
    return StrategyConditionTypeFromJSONTyped(json, false);
}
exports.StrategyConditionTypeFromJSON = StrategyConditionTypeFromJSON;
function StrategyConditionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'considerOutOfOrderRooms': !(0, runtime_1.exists)(json, 'considerOutOfOrderRooms') ? undefined : json['considerOutOfOrderRooms'],
        'considerSellLimits': !(0, runtime_1.exists)(json, 'considerSellLimits') ? undefined : json['considerSellLimits'],
        'threshold': !(0, runtime_1.exists)(json, 'threshold') ? undefined : (0, ThresholdType_1.ThresholdTypeFromJSON)(json['threshold']),
        'thresholdType': !(0, runtime_1.exists)(json, 'thresholdType') ? undefined : json['thresholdType'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, RateStrategyConditionType_1.RateStrategyConditionTypeFromJSON)(json['type']),
    };
}
exports.StrategyConditionTypeFromJSONTyped = StrategyConditionTypeFromJSONTyped;
function StrategyConditionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'considerOutOfOrderRooms': value.considerOutOfOrderRooms,
        'considerSellLimits': value.considerSellLimits,
        'threshold': (0, ThresholdType_1.ThresholdTypeToJSON)(value.threshold),
        'thresholdType': value.thresholdType,
        'type': (0, RateStrategyConditionType_1.RateStrategyConditionTypeToJSON)(value.type),
    };
}
exports.StrategyConditionTypeToJSON = StrategyConditionTypeToJSON;

"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateStrategiesToSetRateStrategiesToJSON = exports.RateStrategiesToSetRateStrategiesFromJSONTyped = exports.RateStrategiesToSetRateStrategiesFromJSON = exports.instanceOfRateStrategiesToSetRateStrategies = void 0;
const runtime_1 = require("../runtime");
const HotelRateStrategyType_1 = require("./HotelRateStrategyType");
/**
 * Check if a given object implements the RateStrategiesToSetRateStrategies interface.
 */
function instanceOfRateStrategiesToSetRateStrategies(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateStrategiesToSetRateStrategies = instanceOfRateStrategiesToSetRateStrategies;
function RateStrategiesToSetRateStrategiesFromJSON(json) {
    return RateStrategiesToSetRateStrategiesFromJSONTyped(json, false);
}
exports.RateStrategiesToSetRateStrategiesFromJSON = RateStrategiesToSetRateStrategiesFromJSON;
function RateStrategiesToSetRateStrategiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'autoCounterStrategy': !(0, runtime_1.exists)(json, 'autoCounterStrategy') ? undefined : json['autoCounterStrategy'],
        'rateStrategy': !(0, runtime_1.exists)(json, 'rateStrategy') ? undefined : (json['rateStrategy'].map(HotelRateStrategyType_1.HotelRateStrategyTypeFromJSON)),
    };
}
exports.RateStrategiesToSetRateStrategiesFromJSONTyped = RateStrategiesToSetRateStrategiesFromJSONTyped;
function RateStrategiesToSetRateStrategiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'autoCounterStrategy': value.autoCounterStrategy,
        'rateStrategy': value.rateStrategy === undefined ? undefined : (value.rateStrategy.map(HotelRateStrategyType_1.HotelRateStrategyTypeToJSON)),
    };
}
exports.RateStrategiesToSetRateStrategiesToJSON = RateStrategiesToSetRateStrategiesToJSON;

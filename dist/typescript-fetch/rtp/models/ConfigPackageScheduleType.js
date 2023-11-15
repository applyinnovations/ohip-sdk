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
exports.ConfigPackageScheduleTypeToJSON = exports.ConfigPackageScheduleTypeFromJSONTyped = exports.ConfigPackageScheduleTypeFromJSON = exports.instanceOfConfigPackageScheduleType = void 0;
const runtime_1 = require("../runtime");
const HotelPackageSchedulePriceType_1 = require("./HotelPackageSchedulePriceType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the ConfigPackageScheduleType interface.
 */
function instanceOfConfigPackageScheduleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigPackageScheduleType = instanceOfConfigPackageScheduleType;
function ConfigPackageScheduleTypeFromJSON(json) {
    return ConfigPackageScheduleTypeFromJSONTyped(json, false);
}
exports.ConfigPackageScheduleTypeFromJSON = ConfigPackageScheduleTypeFromJSON;
function ConfigPackageScheduleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : json['end'],
        'maxNights': !(0, runtime_1.exists)(json, 'maxNights') ? undefined : json['maxNights'],
        'maxPersons': !(0, runtime_1.exists)(json, 'maxPersons') ? undefined : json['maxPersons'],
        'minNights': !(0, runtime_1.exists)(json, 'minNights') ? undefined : json['minNights'],
        'minPersons': !(0, runtime_1.exists)(json, 'minPersons') ? undefined : json['minPersons'],
        'newMaxNights': !(0, runtime_1.exists)(json, 'newMaxNights') ? undefined : json['newMaxNights'],
        'newMaxPersons': !(0, runtime_1.exists)(json, 'newMaxPersons') ? undefined : json['newMaxPersons'],
        'newMinNights': !(0, runtime_1.exists)(json, 'newMinNights') ? undefined : json['newMinNights'],
        'newMinPersons': !(0, runtime_1.exists)(json, 'newMinPersons') ? undefined : json['newMinPersons'],
        'newTimeSpan': !(0, runtime_1.exists)(json, 'newTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['newTimeSpan']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'schedulePrices': !(0, runtime_1.exists)(json, 'schedulePrices') ? undefined : (json['schedulePrices'].map(HotelPackageSchedulePriceType_1.HotelPackageSchedulePriceTypeFromJSON)),
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : json['start'],
    };
}
exports.ConfigPackageScheduleTypeFromJSONTyped = ConfigPackageScheduleTypeFromJSONTyped;
function ConfigPackageScheduleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end': value.end,
        'maxNights': value.maxNights,
        'maxPersons': value.maxPersons,
        'minNights': value.minNights,
        'minPersons': value.minPersons,
        'newMaxNights': value.newMaxNights,
        'newMaxPersons': value.newMaxPersons,
        'newMinNights': value.newMinNights,
        'newMinPersons': value.newMinPersons,
        'newTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.newTimeSpan),
        'ratePlanCode': value.ratePlanCode,
        'schedulePrices': value.schedulePrices === undefined ? undefined : (value.schedulePrices.map(HotelPackageSchedulePriceType_1.HotelPackageSchedulePriceTypeToJSON)),
        'start': value.start,
    };
}
exports.ConfigPackageScheduleTypeToJSON = ConfigPackageScheduleTypeToJSON;

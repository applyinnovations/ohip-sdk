"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticSetTypeToJSON = exports.StatisticSetTypeFromJSONTyped = exports.StatisticSetTypeFromJSON = exports.instanceOfStatisticSetType = void 0;
const runtime_1 = require("../runtime");
const NumericCategorySummaryType_1 = require("./NumericCategorySummaryType");
const RevenueCategorySummaryType_1 = require("./RevenueCategorySummaryType");
/**
 * Check if a given object implements the StatisticSetType interface.
 */
function instanceOfStatisticSetType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStatisticSetType = instanceOfStatisticSetType;
function StatisticSetTypeFromJSON(json) {
    return StatisticSetTypeFromJSONTyped(json, false);
}
exports.StatisticSetTypeFromJSON = StatisticSetTypeFromJSON;
function StatisticSetTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numericCategorySummariesType': !(0, runtime_1.exists)(json, 'numericCategorySummariesType') ? undefined : (json['numericCategorySummariesType'].map(NumericCategorySummaryType_1.NumericCategorySummaryTypeFromJSON)),
        'revenueCategorySummariesType': !(0, runtime_1.exists)(json, 'revenueCategorySummariesType') ? undefined : (json['revenueCategorySummariesType'].map(RevenueCategorySummaryType_1.RevenueCategorySummaryTypeFromJSON)),
        'statisticDate': !(0, runtime_1.exists)(json, 'statisticDate') ? undefined : json['statisticDate'],
        'weekendDate': !(0, runtime_1.exists)(json, 'weekendDate') ? undefined : json['weekendDate'],
    };
}
exports.StatisticSetTypeFromJSONTyped = StatisticSetTypeFromJSONTyped;
function StatisticSetTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numericCategorySummariesType': value.numericCategorySummariesType === undefined ? undefined : (value.numericCategorySummariesType.map(NumericCategorySummaryType_1.NumericCategorySummaryTypeToJSON)),
        'revenueCategorySummariesType': value.revenueCategorySummariesType === undefined ? undefined : (value.revenueCategorySummariesType.map(RevenueCategorySummaryType_1.RevenueCategorySummaryTypeToJSON)),
        'statisticDate': value.statisticDate,
        'weekendDate': value.weekendDate,
    };
}
exports.StatisticSetTypeToJSON = StatisticSetTypeToJSON;
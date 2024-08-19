"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleFiscalPeriodTypeToJSON = exports.CycleFiscalPeriodTypeFromJSONTyped = exports.CycleFiscalPeriodTypeFromJSON = exports.instanceOfCycleFiscalPeriodType = void 0;
const runtime_1 = require("../runtime");
const CyclePeriodType_1 = require("./CyclePeriodType");
/**
 * Check if a given object implements the CycleFiscalPeriodType interface.
 */
function instanceOfCycleFiscalPeriodType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCycleFiscalPeriodType = instanceOfCycleFiscalPeriodType;
function CycleFiscalPeriodTypeFromJSON(json) {
    return CycleFiscalPeriodTypeFromJSONTyped(json, false);
}
exports.CycleFiscalPeriodTypeFromJSON = CycleFiscalPeriodTypeFromJSON;
function CycleFiscalPeriodTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cycle': !(0, runtime_1.exists)(json, 'cycle') ? undefined : (0, CyclePeriodType_1.CyclePeriodTypeFromJSON)(json['cycle']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'periodPrefix': !(0, runtime_1.exists)(json, 'periodPrefix') ? undefined : json['periodPrefix'],
        'yearId': !(0, runtime_1.exists)(json, 'yearId') ? undefined : json['yearId'],
    };
}
exports.CycleFiscalPeriodTypeFromJSONTyped = CycleFiscalPeriodTypeFromJSONTyped;
function CycleFiscalPeriodTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cycle': (0, CyclePeriodType_1.CyclePeriodTypeToJSON)(value.cycle),
        'hotelId': value.hotelId,
        'periodPrefix': value.periodPrefix,
        'yearId': value.yearId,
    };
}
exports.CycleFiscalPeriodTypeToJSON = CycleFiscalPeriodTypeToJSON;

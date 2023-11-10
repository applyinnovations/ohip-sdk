"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalPeriodTypeToJSON = exports.FiscalPeriodTypeFromJSONTyped = exports.FiscalPeriodTypeFromJSON = exports.instanceOfFiscalPeriodType = void 0;
const runtime_1 = require("../runtime");
const YearTypeType_1 = require("./YearTypeType");
/**
 * Check if a given object implements the FiscalPeriodType interface.
 */
function instanceOfFiscalPeriodType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalPeriodType = instanceOfFiscalPeriodType;
function FiscalPeriodTypeFromJSON(json) {
    return FiscalPeriodTypeFromJSONTyped(json, false);
}
exports.FiscalPeriodTypeFromJSON = FiscalPeriodTypeFromJSON;
function FiscalPeriodTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'periodType': !(0, runtime_1.exists)(json, 'periodType') ? undefined : (0, YearTypeType_1.YearTypeTypeFromJSON)(json['periodType']),
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'year': !(0, runtime_1.exists)(json, 'year') ? undefined : json['year'],
        'yearId': !(0, runtime_1.exists)(json, 'yearId') ? undefined : json['yearId'],
    };
}
exports.FiscalPeriodTypeFromJSONTyped = FiscalPeriodTypeFromJSONTyped;
function FiscalPeriodTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0, 10)),
        'hotelId': value.hotelId,
        'periodType': (0, YearTypeType_1.YearTypeTypeToJSON)(value.periodType),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0, 10)),
        'year': value.year,
        'yearId': value.yearId,
    };
}
exports.FiscalPeriodTypeToJSON = FiscalPeriodTypeToJSON;

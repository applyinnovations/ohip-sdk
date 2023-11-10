"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionSummaryTypeToJSON = exports.CommissionSummaryTypeFromJSONTyped = exports.CommissionSummaryTypeFromJSON = exports.instanceOfCommissionSummaryType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the CommissionSummaryType interface.
 */
function instanceOfCommissionSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommissionSummaryType = instanceOfCommissionSummaryType;
function CommissionSummaryTypeFromJSON(json) {
    return CommissionSummaryTypeFromJSONTyped(json, false);
}
exports.CommissionSummaryTypeFromJSON = CommissionSummaryTypeFromJSON;
function CommissionSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aR': !(0, runtime_1.exists)(json, 'aR') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['aR']),
        'onHold': !(0, runtime_1.exists)(json, 'onHold') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['onHold']),
        'potential': !(0, runtime_1.exists)(json, 'potential') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['potential']),
        'toBePaid': !(0, runtime_1.exists)(json, 'toBePaid') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['toBePaid']),
    };
}
exports.CommissionSummaryTypeFromJSONTyped = CommissionSummaryTypeFromJSONTyped;
function CommissionSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aR': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.aR),
        'onHold': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.onHold),
        'potential': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.potential),
        'toBePaid': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.toBePaid),
    };
}
exports.CommissionSummaryTypeToJSON = CommissionSummaryTypeToJSON;

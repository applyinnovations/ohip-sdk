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
exports.CommissionCalculationTypeToJSON = exports.CommissionCalculationTypeFromJSONTyped = exports.CommissionCalculationTypeFromJSON = exports.instanceOfCommissionCalculationType = void 0;
const runtime_1 = require("../runtime");
const CommissionCodeTransactionType_1 = require("./CommissionCodeTransactionType");
const ReservationBasedCommissionType_1 = require("./ReservationBasedCommissionType");
/**
 * Check if a given object implements the CommissionCalculationType interface.
 */
function instanceOfCommissionCalculationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommissionCalculationType = instanceOfCommissionCalculationType;
function CommissionCalculationTypeFromJSON(json) {
    return CommissionCalculationTypeFromJSONTyped(json, false);
}
exports.CommissionCalculationTypeFromJSON = CommissionCalculationTypeFromJSON;
function CommissionCalculationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservationBasedCommission': !(0, runtime_1.exists)(json, 'reservationBasedCommission') ? undefined : (0, ReservationBasedCommissionType_1.ReservationBasedCommissionTypeFromJSON)(json['reservationBasedCommission']),
        'revenueBasedCommission': !(0, runtime_1.exists)(json, 'revenueBasedCommission') ? undefined : (json['revenueBasedCommission'].map(CommissionCodeTransactionType_1.CommissionCodeTransactionTypeFromJSON)),
    };
}
exports.CommissionCalculationTypeFromJSONTyped = CommissionCalculationTypeFromJSONTyped;
function CommissionCalculationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservationBasedCommission': (0, ReservationBasedCommissionType_1.ReservationBasedCommissionTypeToJSON)(value.reservationBasedCommission),
        'revenueBasedCommission': value.revenueBasedCommission === undefined ? undefined : (value.revenueBasedCommission.map(CommissionCodeTransactionType_1.CommissionCodeTransactionTypeToJSON)),
    };
}
exports.CommissionCalculationTypeToJSON = CommissionCalculationTypeToJSON;
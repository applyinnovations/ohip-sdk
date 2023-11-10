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
exports.CommissionPaymentsActivityDetailsToJSON = exports.CommissionPaymentsActivityDetailsFromJSONTyped = exports.CommissionPaymentsActivityDetailsFromJSON = exports.instanceOfCommissionPaymentsActivityDetails = void 0;
const runtime_1 = require("../runtime");
const CommissionPaymentsActivityType_1 = require("./CommissionPaymentsActivityType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CommissionPaymentsActivityDetails interface.
 */
function instanceOfCommissionPaymentsActivityDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommissionPaymentsActivityDetails = instanceOfCommissionPaymentsActivityDetails;
function CommissionPaymentsActivityDetailsFromJSON(json) {
    return CommissionPaymentsActivityDetailsFromJSONTyped(json, false);
}
exports.CommissionPaymentsActivityDetailsFromJSON = CommissionPaymentsActivityDetailsFromJSON;
function CommissionPaymentsActivityDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'paymentsActivity': !(0, runtime_1.exists)(json, 'paymentsActivity') ? undefined : (0, CommissionPaymentsActivityType_1.CommissionPaymentsActivityTypeFromJSON)(json['paymentsActivity']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CommissionPaymentsActivityDetailsFromJSONTyped = CommissionPaymentsActivityDetailsFromJSONTyped;
function CommissionPaymentsActivityDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'paymentsActivity': (0, CommissionPaymentsActivityType_1.CommissionPaymentsActivityTypeToJSON)(value.paymentsActivity),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CommissionPaymentsActivityDetailsToJSON = CommissionPaymentsActivityDetailsToJSON;

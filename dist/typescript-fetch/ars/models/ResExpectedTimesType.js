"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResExpectedTimesTypeToJSON = exports.ResExpectedTimesTypeFromJSONTyped = exports.ResExpectedTimesTypeFromJSON = exports.instanceOfResExpectedTimesType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ResExpectedTimesType interface.
 */
function instanceOfResExpectedTimesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResExpectedTimesType = instanceOfResExpectedTimesType;
function ResExpectedTimesTypeFromJSON(json) {
    return ResExpectedTimesTypeFromJSONTyped(json, false);
}
exports.ResExpectedTimesTypeFromJSON = ResExpectedTimesTypeFromJSON;
function ResExpectedTimesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservationExpectedArrivalTime': !(0, runtime_1.exists)(json, 'reservationExpectedArrivalTime') ? undefined : json['reservationExpectedArrivalTime'],
        'reservationExpectedDepartureTime': !(0, runtime_1.exists)(json, 'reservationExpectedDepartureTime') ? undefined : json['reservationExpectedDepartureTime'],
    };
}
exports.ResExpectedTimesTypeFromJSONTyped = ResExpectedTimesTypeFromJSONTyped;
function ResExpectedTimesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservationExpectedArrivalTime': value.reservationExpectedArrivalTime,
        'reservationExpectedDepartureTime': value.reservationExpectedDepartureTime,
    };
}
exports.ResExpectedTimesTypeToJSON = ResExpectedTimesTypeToJSON;

"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedTaxReportingTypeToJSON = exports.BedTaxReportingTypeFromJSONTyped = exports.BedTaxReportingTypeFromJSON = exports.instanceOfBedTaxReportingType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BedTaxReportingType interface.
 */
function instanceOfBedTaxReportingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBedTaxReportingType = instanceOfBedTaxReportingType;
function BedTaxReportingTypeFromJSON(json) {
    return BedTaxReportingTypeFromJSONTyped(json, false);
}
exports.BedTaxReportingTypeFromJSON = BedTaxReportingTypeFromJSON;
function BedTaxReportingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'taxRegistrationNo': !(0, runtime_1.exists)(json, 'taxRegistrationNo') ? undefined : json['taxRegistrationNo'],
        'taxableDays': !(0, runtime_1.exists)(json, 'taxableDays') ? undefined : json['taxableDays'],
        'visaExpiryDate': !(0, runtime_1.exists)(json, 'visaExpiryDate') ? undefined : (new Date(json['visaExpiryDate'])),
        'visaIssueDate': !(0, runtime_1.exists)(json, 'visaIssueDate') ? undefined : (new Date(json['visaIssueDate'])),
        'visaNumber': !(0, runtime_1.exists)(json, 'visaNumber') ? undefined : json['visaNumber'],
    };
}
exports.BedTaxReportingTypeFromJSONTyped = BedTaxReportingTypeFromJSONTyped;
function BedTaxReportingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'taxRegistrationNo': value.taxRegistrationNo,
        'taxableDays': value.taxableDays,
        'visaExpiryDate': value.visaExpiryDate === undefined ? undefined : (value.visaExpiryDate.toISOString().substr(0, 10)),
        'visaIssueDate': value.visaIssueDate === undefined ? undefined : (value.visaIssueDate.toISOString().substr(0, 10)),
        'visaNumber': value.visaNumber,
    };
}
exports.BedTaxReportingTypeToJSON = BedTaxReportingTypeToJSON;

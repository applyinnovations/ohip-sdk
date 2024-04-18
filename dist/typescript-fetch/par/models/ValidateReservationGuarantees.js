"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateReservationGuaranteesToJSON = exports.ValidateReservationGuaranteesFromJSONTyped = exports.ValidateReservationGuaranteesFromJSON = exports.instanceOfValidateReservationGuarantees = void 0;
const runtime_1 = require("../runtime");
const ResGuaranteeSearchType_1 = require("./ResGuaranteeSearchType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ValidateReservationGuarantees interface.
 */
function instanceOfValidateReservationGuarantees(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfValidateReservationGuarantees = instanceOfValidateReservationGuarantees;
function ValidateReservationGuaranteesFromJSON(json) {
    return ValidateReservationGuaranteesFromJSONTyped(json, false);
}
exports.ValidateReservationGuaranteesFromJSON = ValidateReservationGuaranteesFromJSON;
function ValidateReservationGuaranteesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, ResGuaranteeSearchType_1.ResGuaranteeSearchTypeFromJSON)(json['criteria']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ValidateReservationGuaranteesFromJSONTyped = ValidateReservationGuaranteesFromJSONTyped;
function ValidateReservationGuaranteesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, ResGuaranteeSearchType_1.ResGuaranteeSearchTypeToJSON)(value.criteria),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ValidateReservationGuaranteesToJSON = ValidateReservationGuaranteesToJSON;
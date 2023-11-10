"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteeRequirementsTypeToJSON = exports.GuaranteeRequirementsTypeFromJSONTyped = exports.GuaranteeRequirementsTypeFromJSON = exports.instanceOfGuaranteeRequirementsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GuaranteeRequirementsType interface.
 */
function instanceOfGuaranteeRequirementsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuaranteeRequirementsType = instanceOfGuaranteeRequirementsType;
function GuaranteeRequirementsTypeFromJSON(json) {
    return GuaranteeRequirementsTypeFromJSONTyped(json, false);
}
exports.GuaranteeRequirementsTypeFromJSON = GuaranteeRequirementsTypeFromJSON;
function GuaranteeRequirementsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : json['address'],
        'arrivalTime': !(0, runtime_1.exists)(json, 'arrivalTime') ? undefined : json['arrivalTime'],
        'cancellation': !(0, runtime_1.exists)(json, 'cancellation') ? undefined : json['cancellation'],
        'creditCard': !(0, runtime_1.exists)(json, 'creditCard') ? undefined : json['creditCard'],
        'deposit': !(0, runtime_1.exists)(json, 'deposit') ? undefined : json['deposit'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'requirementCode': !(0, runtime_1.exists)(json, 'requirementCode') ? undefined : json['requirementCode'],
    };
}
exports.GuaranteeRequirementsTypeFromJSONTyped = GuaranteeRequirementsTypeFromJSONTyped;
function GuaranteeRequirementsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'arrivalTime': value.arrivalTime,
        'cancellation': value.cancellation,
        'creditCard': value.creditCard,
        'deposit': value.deposit,
        'phoneNumber': value.phoneNumber,
        'requirementCode': value.requirementCode,
    };
}
exports.GuaranteeRequirementsTypeToJSON = GuaranteeRequirementsTypeToJSON;

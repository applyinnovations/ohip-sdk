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
exports.BenefitTypeToJSON = exports.BenefitTypeFromJSONTyped = exports.BenefitTypeFromJSON = exports.instanceOfBenefitType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BenefitType interface.
 */
function instanceOfBenefitType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBenefitType = instanceOfBenefitType;
function BenefitTypeFromJSON(json) {
    return BenefitTypeFromJSONTyped(json, false);
}
exports.BenefitTypeFromJSON = BenefitTypeFromJSON;
function BenefitTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.BenefitTypeFromJSONTyped = BenefitTypeFromJSONTyped;
function BenefitTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'inactive': value.inactive,
        'message': value.message,
    };
}
exports.BenefitTypeToJSON = BenefitTypeToJSON;

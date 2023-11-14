"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteeCodesTypeToJSON = exports.GuaranteeCodesTypeFromJSONTyped = exports.GuaranteeCodesTypeFromJSON = exports.instanceOfGuaranteeCodesType = void 0;
const runtime_1 = require("../runtime");
const GuaranteeConfigType_1 = require("./GuaranteeConfigType");
/**
 * Check if a given object implements the GuaranteeCodesType interface.
 */
function instanceOfGuaranteeCodesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuaranteeCodesType = instanceOfGuaranteeCodesType;
function GuaranteeCodesTypeFromJSON(json) {
    return GuaranteeCodesTypeFromJSONTyped(json, false);
}
exports.GuaranteeCodesTypeFromJSON = GuaranteeCodesTypeFromJSON;
function GuaranteeCodesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guaranteeCode': !(0, runtime_1.exists)(json, 'guaranteeCode') ? undefined : (json['guaranteeCode'].map(GuaranteeConfigType_1.GuaranteeConfigTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.GuaranteeCodesTypeFromJSONTyped = GuaranteeCodesTypeFromJSONTyped;
function GuaranteeCodesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guaranteeCode': value.guaranteeCode === undefined ? undefined : (value.guaranteeCode.map(GuaranteeConfigType_1.GuaranteeConfigTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
exports.GuaranteeCodesTypeToJSON = GuaranteeCodesTypeToJSON;
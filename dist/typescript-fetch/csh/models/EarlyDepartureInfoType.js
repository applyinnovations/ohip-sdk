"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyDepartureInfoTypeToJSON = exports.EarlyDepartureInfoTypeFromJSONTyped = exports.EarlyDepartureInfoTypeFromJSON = exports.instanceOfEarlyDepartureInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the EarlyDepartureInfoType interface.
 */
function instanceOfEarlyDepartureInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEarlyDepartureInfoType = instanceOfEarlyDepartureInfoType;
function EarlyDepartureInfoTypeFromJSON(json) {
    return EarlyDepartureInfoTypeFromJSONTyped(json, false);
}
exports.EarlyDepartureInfoTypeFromJSON = EarlyDepartureInfoTypeFromJSON;
function EarlyDepartureInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'penaltyAmount': !(0, runtime_1.exists)(json, 'penaltyAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['penaltyAmount']),
        'penaltyDescription': !(0, runtime_1.exists)(json, 'penaltyDescription') ? undefined : json['penaltyDescription'],
    };
}
exports.EarlyDepartureInfoTypeFromJSONTyped = EarlyDepartureInfoTypeFromJSONTyped;
function EarlyDepartureInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'penaltyAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.penaltyAmount),
        'penaltyDescription': value.penaltyDescription,
    };
}
exports.EarlyDepartureInfoTypeToJSON = EarlyDepartureInfoTypeToJSON;
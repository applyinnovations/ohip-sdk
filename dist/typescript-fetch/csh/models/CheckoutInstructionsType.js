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
exports.CheckoutInstructionsTypeToJSON = exports.CheckoutInstructionsTypeFromJSONTyped = exports.CheckoutInstructionsTypeFromJSON = exports.instanceOfCheckoutInstructionsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CheckoutInstructionsType interface.
 */
function instanceOfCheckoutInstructionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCheckoutInstructionsType = instanceOfCheckoutInstructionsType;
function CheckoutInstructionsTypeFromJSON(json) {
    return CheckoutInstructionsTypeFromJSONTyped(json, false);
}
exports.CheckoutInstructionsTypeFromJSON = CheckoutInstructionsTypeFromJSON;
function CheckoutInstructionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guestPreferredCurrency': !(0, runtime_1.exists)(json, 'guestPreferredCurrency') ? undefined : json['guestPreferredCurrency'],
        'ignoreWarnings': !(0, runtime_1.exists)(json, 'ignoreWarnings') ? undefined : json['ignoreWarnings'],
        'roomStatus': !(0, runtime_1.exists)(json, 'roomStatus') ? undefined : json['roomStatus'],
        'scheduleOn': !(0, runtime_1.exists)(json, 'scheduleOn') ? undefined : json['scheduleOn'],
    };
}
exports.CheckoutInstructionsTypeFromJSONTyped = CheckoutInstructionsTypeFromJSONTyped;
function CheckoutInstructionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guestPreferredCurrency': value.guestPreferredCurrency,
        'ignoreWarnings': value.ignoreWarnings,
        'roomStatus': value.roomStatus,
        'scheduleOn': value.scheduleOn,
    };
}
exports.CheckoutInstructionsTypeToJSON = CheckoutInstructionsTypeToJSON;

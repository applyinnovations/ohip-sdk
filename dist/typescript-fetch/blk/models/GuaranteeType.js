"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteeTypeToJSON = exports.GuaranteeTypeFromJSONTyped = exports.GuaranteeTypeFromJSON = exports.instanceOfGuaranteeType = void 0;
const runtime_1 = require("../runtime");
const GuaranteeRequirementsType_1 = require("./GuaranteeRequirementsType");
const TranslationTextType80_1 = require("./TranslationTextType80");
/**
 * Check if a given object implements the GuaranteeType interface.
 */
function instanceOfGuaranteeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuaranteeType = instanceOfGuaranteeType;
function GuaranteeTypeFromJSON(json) {
    return GuaranteeTypeFromJSONTyped(json, false);
}
exports.GuaranteeTypeFromJSON = GuaranteeTypeFromJSON;
function GuaranteeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'guaranteeCode': !(0, runtime_1.exists)(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'lateArrival': !(0, runtime_1.exists)(json, 'lateArrival') ? undefined : json['lateArrival'],
        'onHold': !(0, runtime_1.exists)(json, 'onHold') ? undefined : json['onHold'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'paymentTypes': !(0, runtime_1.exists)(json, 'paymentTypes') ? undefined : json['paymentTypes'],
        'requirements': !(0, runtime_1.exists)(json, 'requirements') ? undefined : (0, GuaranteeRequirementsType_1.GuaranteeRequirementsTypeFromJSON)(json['requirements']),
        'reserveInventory': !(0, runtime_1.exists)(json, 'reserveInventory') ? undefined : json['reserveInventory'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : (0, TranslationTextType80_1.TranslationTextType80FromJSON)(json['shortDescription']),
    };
}
exports.GuaranteeTypeFromJSONTyped = GuaranteeTypeFromJSONTyped;
function GuaranteeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'guaranteeCode': value.guaranteeCode,
        'lateArrival': value.lateArrival,
        'onHold': value.onHold,
        'orderSequence': value.orderSequence,
        'paymentTypes': value.paymentTypes,
        'requirements': (0, GuaranteeRequirementsType_1.GuaranteeRequirementsTypeToJSON)(value.requirements),
        'reserveInventory': value.reserveInventory,
        'shortDescription': (0, TranslationTextType80_1.TranslationTextType80ToJSON)(value.shortDescription),
    };
}
exports.GuaranteeTypeToJSON = GuaranteeTypeToJSON;

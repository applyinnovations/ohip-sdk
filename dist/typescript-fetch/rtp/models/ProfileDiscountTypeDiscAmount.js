"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDiscountTypeDiscAmountToJSON = exports.ProfileDiscountTypeDiscAmountFromJSONTyped = exports.ProfileDiscountTypeDiscAmountFromJSON = exports.instanceOfProfileDiscountTypeDiscAmount = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ProfileDiscountTypeDiscAmount interface.
 */
function instanceOfProfileDiscountTypeDiscAmount(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileDiscountTypeDiscAmount = instanceOfProfileDiscountTypeDiscAmount;
function ProfileDiscountTypeDiscAmountFromJSON(json) {
    return ProfileDiscountTypeDiscAmountFromJSONTyped(json, false);
}
exports.ProfileDiscountTypeDiscAmountFromJSON = ProfileDiscountTypeDiscAmountFromJSON;
function ProfileDiscountTypeDiscAmountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'flatOrPercentage': !(0, runtime_1.exists)(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
    };
}
exports.ProfileDiscountTypeDiscAmountFromJSONTyped = ProfileDiscountTypeDiscAmountFromJSONTyped;
function ProfileDiscountTypeDiscAmountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'flatOrPercentage': value.flatOrPercentage,
    };
}
exports.ProfileDiscountTypeDiscAmountToJSON = ProfileDiscountTypeDiscAmountToJSON;

"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionTypeToJSON = exports.PromotionTypeFromJSONTyped = exports.PromotionTypeFromJSON = exports.instanceOfPromotionType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PromotionType interface.
 */
function instanceOfPromotionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPromotionType = instanceOfPromotionType;
function PromotionTypeFromJSON(json) {
    return PromotionTypeFromJSONTyped(json, false);
}
exports.PromotionTypeFromJSON = PromotionTypeFromJSON;
function PromotionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'couponCode': !(0, runtime_1.exists)(json, 'couponCode') ? undefined : json['couponCode'],
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'promotionName': !(0, runtime_1.exists)(json, 'promotionName') ? undefined : json['promotionName'],
    };
}
exports.PromotionTypeFromJSONTyped = PromotionTypeFromJSONTyped;
function PromotionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'couponCode': value.couponCode,
        'promotionCode': value.promotionCode,
        'promotionName': value.promotionName,
    };
}
exports.PromotionTypeToJSON = PromotionTypeToJSON;

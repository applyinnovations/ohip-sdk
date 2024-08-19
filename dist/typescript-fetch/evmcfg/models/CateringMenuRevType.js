"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringMenuRevTypeToJSON = exports.CateringMenuRevTypeFromJSONTyped = exports.CateringMenuRevTypeFromJSON = exports.instanceOfCateringMenuRevType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const MenuTypeType_1 = require("./MenuTypeType");
/**
 * Check if a given object implements the CateringMenuRevType interface.
 */
function instanceOfCateringMenuRevType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringMenuRevType = instanceOfCateringMenuRevType;
function CateringMenuRevTypeFromJSON(json) {
    return CateringMenuRevTypeFromJSONTyped(json, false);
}
exports.CateringMenuRevTypeFromJSON = CateringMenuRevTypeFromJSON;
function CateringMenuRevTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cost': !(0, runtime_1.exists)(json, 'cost') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['cost']),
        'costMargin': !(0, runtime_1.exists)(json, 'costMargin') ? undefined : json['costMargin'],
        'internalQuote': !(0, runtime_1.exists)(json, 'internalQuote') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['internalQuote']),
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'priceMargin': !(0, runtime_1.exists)(json, 'priceMargin') ? undefined : json['priceMargin'],
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : json['revenueType'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, MenuTypeType_1.MenuTypeTypeFromJSON)(json['type']),
    };
}
exports.CateringMenuRevTypeFromJSONTyped = CateringMenuRevTypeFromJSONTyped;
function CateringMenuRevTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cost': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.cost),
        'costMargin': value.costMargin,
        'internalQuote': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.internalQuote),
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'priceMargin': value.priceMargin,
        'revenueType': value.revenueType,
        'type': (0, MenuTypeType_1.MenuTypeTypeToJSON)(value.type),
    };
}
exports.CateringMenuRevTypeToJSON = CateringMenuRevTypeToJSON;

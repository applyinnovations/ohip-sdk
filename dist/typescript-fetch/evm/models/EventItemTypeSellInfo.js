"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventItemTypeSellInfoToJSON = exports.EventItemTypeSellInfoFromJSONTyped = exports.EventItemTypeSellInfoFromJSON = exports.instanceOfEventItemTypeSellInfo = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DateTimeSpanType_1 = require("./DateTimeSpanType");
/**
 * Check if a given object implements the EventItemTypeSellInfo interface.
 */
function instanceOfEventItemTypeSellInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventItemTypeSellInfo = instanceOfEventItemTypeSellInfo;
function EventItemTypeSellInfoFromJSON(json) {
    return EventItemTypeSellInfoFromJSONTyped(json, false);
}
exports.EventItemTypeSellInfoFromJSON = EventItemTypeSellInfoFromJSON;
function EventItemTypeSellInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'available': !(0, runtime_1.exists)(json, 'available') ? undefined : (0, DateTimeSpanType_1.DateTimeSpanTypeFromJSON)(json['available']),
        'availableQty': !(0, runtime_1.exists)(json, 'availableQty') ? undefined : json['availableQty'],
        'criticalInventory': !(0, runtime_1.exists)(json, 'criticalInventory') ? undefined : json['criticalInventory'],
        'defaultDuration': !(0, runtime_1.exists)(json, 'defaultDuration') ? undefined : json['defaultDuration'],
        'defaultQty': !(0, runtime_1.exists)(json, 'defaultQty') ? undefined : json['defaultQty'],
        'discountable': !(0, runtime_1.exists)(json, 'discountable') ? undefined : json['discountable'],
        'fixedCharge': !(0, runtime_1.exists)(json, 'fixedCharge') ? undefined : json['fixedCharge'],
        'itemClassDiscountable': !(0, runtime_1.exists)(json, 'itemClassDiscountable') ? undefined : json['itemClassDiscountable'],
        'itemClassWebBookable': !(0, runtime_1.exists)(json, 'itemClassWebBookable') ? undefined : json['itemClassWebBookable'],
        'outsideStay': !(0, runtime_1.exists)(json, 'outsideStay') ? undefined : json['outsideStay'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'qtyInStock': !(0, runtime_1.exists)(json, 'qtyInStock') ? undefined : json['qtyInStock'],
        'sellControl': !(0, runtime_1.exists)(json, 'sellControl') ? undefined : json['sellControl'],
        'sellSeparate': !(0, runtime_1.exists)(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'webBookable': !(0, runtime_1.exists)(json, 'webBookable') ? undefined : json['webBookable'],
        'welcomeOffer': !(0, runtime_1.exists)(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
    };
}
exports.EventItemTypeSellInfoFromJSONTyped = EventItemTypeSellInfoFromJSONTyped;
function EventItemTypeSellInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'available': (0, DateTimeSpanType_1.DateTimeSpanTypeToJSON)(value.available),
        'availableQty': value.availableQty,
        'criticalInventory': value.criticalInventory,
        'defaultDuration': value.defaultDuration,
        'defaultQty': value.defaultQty,
        'discountable': value.discountable,
        'fixedCharge': value.fixedCharge,
        'itemClassDiscountable': value.itemClassDiscountable,
        'itemClassWebBookable': value.itemClassWebBookable,
        'outsideStay': value.outsideStay,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'qtyInStock': value.qtyInStock,
        'sellControl': value.sellControl,
        'sellSeparate': value.sellSeparate,
        'webBookable': value.webBookable,
        'welcomeOffer': value.welcomeOffer,
    };
}
exports.EventItemTypeSellInfoToJSON = EventItemTypeSellInfoToJSON;

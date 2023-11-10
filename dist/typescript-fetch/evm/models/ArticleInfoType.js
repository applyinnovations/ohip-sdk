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
exports.ArticleInfoTypeToJSON = exports.ArticleInfoTypeFromJSONTyped = exports.ArticleInfoTypeFromJSON = exports.instanceOfArticleInfoType = void 0;
const runtime_1 = require("../runtime");
const ArticlePostItType_1 = require("./ArticlePostItType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the ArticleInfoType interface.
 */
function instanceOfArticleInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfArticleInfoType = instanceOfArticleInfoType;
function ArticleInfoTypeFromJSON(json) {
    return ArticleInfoTypeFromJSONTyped(json, false);
}
exports.ArticleInfoTypeFromJSON = ArticleInfoTypeFromJSON;
function ArticleInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'articleCode': !(0, runtime_1.exists)(json, 'articleCode') ? undefined : json['articleCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'postIt': !(0, runtime_1.exists)(json, 'postIt') ? undefined : (0, ArticlePostItType_1.ArticlePostItTypeFromJSON)(json['postIt']),
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'universalProductCode': !(0, runtime_1.exists)(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}
exports.ArticleInfoTypeFromJSONTyped = ArticleInfoTypeFromJSONTyped;
function ArticleInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'articleCode': value.articleCode,
        'description': value.description,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'orderSequence': value.orderSequence,
        'postIt': (0, ArticlePostItType_1.ArticlePostItTypeToJSON)(value.postIt),
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'transactionCode': value.transactionCode,
        'universalProductCode': value.universalProductCode,
    };
}
exports.ArticleInfoTypeToJSON = ArticleInfoTypeToJSON;

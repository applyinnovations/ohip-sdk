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
exports.TrxInfoTypeToJSON = exports.TrxInfoTypeFromJSONTyped = exports.TrxInfoTypeFromJSON = exports.instanceOfTrxInfoType = void 0;
const runtime_1 = require("../runtime");
const ArticleInfoType_1 = require("./ArticleInfoType");
/**
 * Check if a given object implements the TrxInfoType interface.
 */
function instanceOfTrxInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrxInfoType = instanceOfTrxInfoType;
function TrxInfoTypeFromJSON(json) {
    return TrxInfoTypeFromJSONTyped(json, false);
}
exports.TrxInfoTypeFromJSON = TrxInfoTypeFromJSON;
function TrxInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'articles': !(0, runtime_1.exists)(json, 'articles') ? undefined : (json['articles'].map(ArticleInfoType_1.ArticleInfoTypeFromJSON)),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'printTrxReceipt': !(0, runtime_1.exists)(json, 'printTrxReceipt') ? undefined : json['printTrxReceipt'],
        'routingInstructionsId': !(0, runtime_1.exists)(json, 'routingInstructionsId') ? undefined : json['routingInstructionsId'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionGroup': !(0, runtime_1.exists)(json, 'transactionGroup') ? undefined : json['transactionGroup'],
        'transactionSubGroup': !(0, runtime_1.exists)(json, 'transactionSubGroup') ? undefined : json['transactionSubGroup'],
        'trxServiceType': !(0, runtime_1.exists)(json, 'trxServiceType') ? undefined : json['trxServiceType'],
        'universalProductCode': !(0, runtime_1.exists)(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}
exports.TrxInfoTypeFromJSONTyped = TrxInfoTypeFromJSONTyped;
function TrxInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'articles': value.articles === undefined ? undefined : (value.articles.map(ArticleInfoType_1.ArticleInfoTypeToJSON)),
        'description': value.description,
        'hotelId': value.hotelId,
        'printTrxReceipt': value.printTrxReceipt,
        'routingInstructionsId': value.routingInstructionsId,
        'transactionCode': value.transactionCode,
        'transactionGroup': value.transactionGroup,
        'transactionSubGroup': value.transactionSubGroup,
        'trxServiceType': value.trxServiceType,
        'universalProductCode': value.universalProductCode,
    };
}
exports.TrxInfoTypeToJSON = TrxInfoTypeToJSON;

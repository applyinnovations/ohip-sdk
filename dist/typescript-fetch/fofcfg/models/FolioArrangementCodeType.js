"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioArrangementCodeTypeToJSON = exports.FolioArrangementCodeTypeFromJSONTyped = exports.FolioArrangementCodeTypeFromJSON = exports.instanceOfFolioArrangementCodeType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the FolioArrangementCodeType interface.
 */
function instanceOfFolioArrangementCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFolioArrangementCodeType = instanceOfFolioArrangementCodeType;
function FolioArrangementCodeTypeFromJSON(json) {
    return FolioArrangementCodeTypeFromJSONTyped(json, false);
}
exports.FolioArrangementCodeTypeFromJSON = FolioArrangementCodeTypeFromJSON;
function FolioArrangementCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrangementId': !(0, runtime_1.exists)(json, 'arrangementId') ? undefined : json['arrangementId'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'revenue': !(0, runtime_1.exists)(json, 'revenue') ? undefined : json['revenue'],
        'taxTypeCode': !(0, runtime_1.exists)(json, 'taxTypeCode') ? undefined : json['taxTypeCode'],
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['transactionCodes']),
    };
}
exports.FolioArrangementCodeTypeFromJSONTyped = FolioArrangementCodeTypeFromJSONTyped;
function FolioArrangementCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrangementId': value.arrangementId,
        'code': value.code,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'hotelId': value.hotelId,
        'revenue': value.revenue,
        'taxTypeCode': value.taxTypeCode,
        'transactionCodes': (0, CodeListType_1.CodeListTypeToJSON)(value.transactionCodes),
    };
}
exports.FolioArrangementCodeTypeToJSON = FolioArrangementCodeTypeToJSON;
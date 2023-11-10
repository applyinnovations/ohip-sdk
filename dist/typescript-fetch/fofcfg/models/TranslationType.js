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
exports.TranslationTypeToJSON = exports.TranslationTypeFromJSONTyped = exports.TranslationTypeFromJSON = exports.instanceOfTranslationType = void 0;
const runtime_1 = require("../runtime");
const InterfaceControlArticleType_1 = require("./InterfaceControlArticleType");
const InterfaceControlCfgType_1 = require("./InterfaceControlCfgType");
const InterfaceControlLangType_1 = require("./InterfaceControlLangType");
const InterfaceControlSpecType_1 = require("./InterfaceControlSpecType");
/**
 * Check if a given object implements the TranslationType interface.
 */
function instanceOfTranslationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationType = instanceOfTranslationType;
function TranslationTypeFromJSON(json) {
    return TranslationTypeFromJSONTyped(json, false);
}
exports.TranslationTypeFromJSON = TranslationTypeFromJSON;
function TranslationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'articles': !(0, runtime_1.exists)(json, 'articles') ? undefined : (json['articles'].map(InterfaceControlArticleType_1.InterfaceControlArticleTypeFromJSON)),
        'configuation': !(0, runtime_1.exists)(json, 'configuation') ? undefined : (json['configuation'].map(InterfaceControlCfgType_1.InterfaceControlCfgTypeFromJSON)),
        'defaultCharge': !(0, runtime_1.exists)(json, 'defaultCharge') ? undefined : json['defaultCharge'],
        'groupNoLength': !(0, runtime_1.exists)(json, 'groupNoLength') ? undefined : json['groupNoLength'],
        'guestMessageIdLength': !(0, runtime_1.exists)(json, 'guestMessageIdLength') ? undefined : json['guestMessageIdLength'],
        'guestNoLength': !(0, runtime_1.exists)(json, 'guestNoLength') ? undefined : json['guestNoLength'],
        'languages': !(0, runtime_1.exists)(json, 'languages') ? undefined : (json['languages'].map(InterfaceControlLangType_1.InterfaceControlLangTypeFromJSON)),
        'specifications': !(0, runtime_1.exists)(json, 'specifications') ? undefined : (json['specifications'].map(InterfaceControlSpecType_1.InterfaceControlSpecTypeFromJSON)),
    };
}
exports.TranslationTypeFromJSONTyped = TranslationTypeFromJSONTyped;
function TranslationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'articles': value.articles === undefined ? undefined : (value.articles.map(InterfaceControlArticleType_1.InterfaceControlArticleTypeToJSON)),
        'configuation': value.configuation === undefined ? undefined : (value.configuation.map(InterfaceControlCfgType_1.InterfaceControlCfgTypeToJSON)),
        'defaultCharge': value.defaultCharge,
        'groupNoLength': value.groupNoLength,
        'guestMessageIdLength': value.guestMessageIdLength,
        'guestNoLength': value.guestNoLength,
        'languages': value.languages === undefined ? undefined : (value.languages.map(InterfaceControlLangType_1.InterfaceControlLangTypeToJSON)),
        'specifications': value.specifications === undefined ? undefined : (value.specifications.map(InterfaceControlSpecType_1.InterfaceControlSpecTypeToJSON)),
    };
}
exports.TranslationTypeToJSON = TranslationTypeToJSON;

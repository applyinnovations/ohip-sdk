"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationTextType2000ToJSON = exports.TranslationTextType2000FromJSONTyped = exports.TranslationTextType2000FromJSON = exports.instanceOfTranslationTextType2000 = void 0;
const runtime_1 = require("../runtime");
const TranslationsTextType_1 = require("./TranslationsTextType");
/**
 * Check if a given object implements the TranslationTextType2000 interface.
 */
function instanceOfTranslationTextType2000(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationTextType2000 = instanceOfTranslationTextType2000;
function TranslationTextType2000FromJSON(json) {
    return TranslationTextType2000FromJSONTyped(json, false);
}
exports.TranslationTextType2000FromJSON = TranslationTextType2000FromJSON;
function TranslationTextType2000FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultText': !(0, runtime_1.exists)(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !(0, runtime_1.exists)(json, 'translatedTexts') ? undefined : (0, TranslationsTextType_1.TranslationsTextTypeFromJSON)(json['translatedTexts']),
    };
}
exports.TranslationTextType2000FromJSONTyped = TranslationTextType2000FromJSONTyped;
function TranslationTextType2000ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'defaultText': value.defaultText,
        'translatedTexts': (0, TranslationsTextType_1.TranslationsTextTypeToJSON)(value.translatedTexts),
    };
}
exports.TranslationTextType2000ToJSON = TranslationTextType2000ToJSON;

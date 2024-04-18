"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationTextType1000ToJSON = exports.TranslationTextType1000FromJSONTyped = exports.TranslationTextType1000FromJSON = exports.instanceOfTranslationTextType1000 = void 0;
const runtime_1 = require("../runtime");
const TranslationsTextTypeInner_1 = require("./TranslationsTextTypeInner");
/**
 * Check if a given object implements the TranslationTextType1000 interface.
 */
function instanceOfTranslationTextType1000(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationTextType1000 = instanceOfTranslationTextType1000;
function TranslationTextType1000FromJSON(json) {
    return TranslationTextType1000FromJSONTyped(json, false);
}
exports.TranslationTextType1000FromJSON = TranslationTextType1000FromJSON;
function TranslationTextType1000FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultText': !(0, runtime_1.exists)(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !(0, runtime_1.exists)(json, 'translatedTexts') ? undefined : (json['translatedTexts'].map(TranslationsTextTypeInner_1.TranslationsTextTypeInnerFromJSON)),
    };
}
exports.TranslationTextType1000FromJSONTyped = TranslationTextType1000FromJSONTyped;
function TranslationTextType1000ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'defaultText': value.defaultText,
        'translatedTexts': value.translatedTexts === undefined ? undefined : (value.translatedTexts.map(TranslationsTextTypeInner_1.TranslationsTextTypeInnerToJSON)),
    };
}
exports.TranslationTextType1000ToJSON = TranslationTextType1000ToJSON;
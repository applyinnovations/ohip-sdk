"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationTextType50ToJSON = exports.TranslationTextType50FromJSONTyped = exports.TranslationTextType50FromJSON = exports.instanceOfTranslationTextType50 = void 0;
const runtime_1 = require("../runtime");
const TranslationsTextTypeInner_1 = require("./TranslationsTextTypeInner");
/**
 * Check if a given object implements the TranslationTextType50 interface.
 */
function instanceOfTranslationTextType50(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationTextType50 = instanceOfTranslationTextType50;
function TranslationTextType50FromJSON(json) {
    return TranslationTextType50FromJSONTyped(json, false);
}
exports.TranslationTextType50FromJSON = TranslationTextType50FromJSON;
function TranslationTextType50FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultText': !(0, runtime_1.exists)(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !(0, runtime_1.exists)(json, 'translatedTexts') ? undefined : (json['translatedTexts'].map(TranslationsTextTypeInner_1.TranslationsTextTypeInnerFromJSON)),
    };
}
exports.TranslationTextType50FromJSONTyped = TranslationTextType50FromJSONTyped;
function TranslationTextType50ToJSON(value) {
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
exports.TranslationTextType50ToJSON = TranslationTextType50ToJSON;

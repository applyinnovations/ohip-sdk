"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationTextType200ToJSON = exports.TranslationTextType200FromJSONTyped = exports.TranslationTextType200FromJSON = exports.instanceOfTranslationTextType200 = void 0;
const runtime_1 = require("../runtime");
const TranslationsTextType_1 = require("./TranslationsTextType");
/**
 * Check if a given object implements the TranslationTextType200 interface.
 */
function instanceOfTranslationTextType200(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTranslationTextType200 = instanceOfTranslationTextType200;
function TranslationTextType200FromJSON(json) {
    return TranslationTextType200FromJSONTyped(json, false);
}
exports.TranslationTextType200FromJSON = TranslationTextType200FromJSON;
function TranslationTextType200FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultText': !(0, runtime_1.exists)(json, 'defaultText') ? undefined : json['defaultText'],
        'translatedTexts': !(0, runtime_1.exists)(json, 'translatedTexts') ? undefined : (0, TranslationsTextType_1.TranslationsTextTypeFromJSON)(json['translatedTexts']),
    };
}
exports.TranslationTextType200FromJSONTyped = TranslationTextType200FromJSONTyped;
function TranslationTextType200ToJSON(value) {
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
exports.TranslationTextType200ToJSON = TranslationTextType200ToJSON;

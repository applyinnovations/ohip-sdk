"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMappingEnhancedDescriptionTypeToJSON = exports.ChannelMappingEnhancedDescriptionTypeFromJSONTyped = exports.ChannelMappingEnhancedDescriptionTypeFromJSON = exports.instanceOfChannelMappingEnhancedDescriptionType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType50_1 = require("./TranslationTextType50");
/**
 * Check if a given object implements the ChannelMappingEnhancedDescriptionType interface.
 */
function instanceOfChannelMappingEnhancedDescriptionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelMappingEnhancedDescriptionType = instanceOfChannelMappingEnhancedDescriptionType;
function ChannelMappingEnhancedDescriptionTypeFromJSON(json) {
    return ChannelMappingEnhancedDescriptionTypeFromJSONTyped(json, false);
}
exports.ChannelMappingEnhancedDescriptionTypeFromJSON = ChannelMappingEnhancedDescriptionTypeFromJSON;
function ChannelMappingEnhancedDescriptionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enhancedDescriptionLine1': !(0, runtime_1.exists)(json, 'enhancedDescriptionLine1') ? undefined : (0, TranslationTextType50_1.TranslationTextType50FromJSON)(json['enhancedDescriptionLine1']),
        'enhancedDescriptionLine2': !(0, runtime_1.exists)(json, 'enhancedDescriptionLine2') ? undefined : (0, TranslationTextType50_1.TranslationTextType50FromJSON)(json['enhancedDescriptionLine2']),
        'enhancedDescriptionLine3': !(0, runtime_1.exists)(json, 'enhancedDescriptionLine3') ? undefined : (0, TranslationTextType50_1.TranslationTextType50FromJSON)(json['enhancedDescriptionLine3']),
    };
}
exports.ChannelMappingEnhancedDescriptionTypeFromJSONTyped = ChannelMappingEnhancedDescriptionTypeFromJSONTyped;
function ChannelMappingEnhancedDescriptionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enhancedDescriptionLine1': (0, TranslationTextType50_1.TranslationTextType50ToJSON)(value.enhancedDescriptionLine1),
        'enhancedDescriptionLine2': (0, TranslationTextType50_1.TranslationTextType50ToJSON)(value.enhancedDescriptionLine2),
        'enhancedDescriptionLine3': (0, TranslationTextType50_1.TranslationTextType50ToJSON)(value.enhancedDescriptionLine3),
    };
}
exports.ChannelMappingEnhancedDescriptionTypeToJSON = ChannelMappingEnhancedDescriptionTypeToJSON;

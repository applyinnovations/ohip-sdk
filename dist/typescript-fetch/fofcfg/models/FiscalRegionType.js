"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalRegionTypeToJSON = exports.FiscalRegionTypeFromJSONTyped = exports.FiscalRegionTypeFromJSON = exports.instanceOfFiscalRegionType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the FiscalRegionType interface.
 */
function instanceOfFiscalRegionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalRegionType = instanceOfFiscalRegionType;
function FiscalRegionTypeFromJSON(json) {
    return FiscalRegionTypeFromJSONTyped(json, false);
}
exports.FiscalRegionTypeFromJSON = FiscalRegionTypeFromJSON;
function FiscalRegionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'displayOrder': !(0, runtime_1.exists)(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}
exports.FiscalRegionTypeFromJSONTyped = FiscalRegionTypeFromJSONTyped;
function FiscalRegionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'displayOrder': value.displayOrder,
    };
}
exports.FiscalRegionTypeToJSON = FiscalRegionTypeToJSON;

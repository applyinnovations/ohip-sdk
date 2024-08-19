"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterUDFTypeToJSON = exports.CharacterUDFTypeFromJSONTyped = exports.CharacterUDFTypeFromJSON = exports.instanceOfCharacterUDFType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CharacterUDFType interface.
 */
function instanceOfCharacterUDFType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCharacterUDFType = instanceOfCharacterUDFType;
function CharacterUDFTypeFromJSON(json) {
    return CharacterUDFTypeFromJSONTyped(json, false);
}
exports.CharacterUDFTypeFromJSON = CharacterUDFTypeFromJSON;
function CharacterUDFTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alternateName': !(0, runtime_1.exists)(json, 'alternateName') ? undefined : json['alternateName'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.CharacterUDFTypeFromJSONTyped = CharacterUDFTypeFromJSONTyped;
function CharacterUDFTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alternateName': value.alternateName,
        'name': value.name,
        'value': value.value,
    };
}
exports.CharacterUDFTypeToJSON = CharacterUDFTypeToJSON;

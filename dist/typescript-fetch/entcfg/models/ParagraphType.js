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
exports.ParagraphTypeToJSON = exports.ParagraphTypeFromJSONTyped = exports.ParagraphTypeFromJSON = exports.instanceOfParagraphType = void 0;
const runtime_1 = require("../runtime");
const FormattedTextTextType_1 = require("./FormattedTextTextType");
/**
 * Check if a given object implements the ParagraphType interface.
 */
function instanceOfParagraphType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfParagraphType = instanceOfParagraphType;
function ParagraphTypeFromJSON(json) {
    return ParagraphTypeFromJSONTyped(json, false);
}
exports.ParagraphTypeFromJSON = ParagraphTypeFromJSON;
function ParagraphTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : (0, FormattedTextTextType_1.FormattedTextTextTypeFromJSON)(json['text']),
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.ParagraphTypeFromJSONTyped = ParagraphTypeFromJSONTyped;
function ParagraphTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'text': (0, FormattedTextTextType_1.FormattedTextTextTypeToJSON)(value.text),
        'image': value.image,
        'url': value.url,
    };
}
exports.ParagraphTypeToJSON = ParagraphTypeToJSON;
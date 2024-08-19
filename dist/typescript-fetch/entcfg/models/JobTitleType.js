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
exports.JobTitleTypeToJSON = exports.JobTitleTypeFromJSONTyped = exports.JobTitleTypeFromJSON = exports.instanceOfJobTitleType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType80_1 = require("./TranslationTextType80");
/**
 * Check if a given object implements the JobTitleType interface.
 */
function instanceOfJobTitleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfJobTitleType = instanceOfJobTitleType;
function JobTitleTypeFromJSON(json) {
    return JobTitleTypeFromJSONTyped(json, false);
}
exports.JobTitleTypeFromJSON = JobTitleTypeFromJSON;
function JobTitleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType80_1.TranslationTextType80FromJSON)(json['description']),
        'displayClosingScript': !(0, runtime_1.exists)(json, 'displayClosingScript') ? undefined : json['displayClosingScript'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.JobTitleTypeFromJSONTyped = JobTitleTypeFromJSONTyped;
function JobTitleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': (0, TranslationTextType80_1.TranslationTextType80ToJSON)(value.description),
        'displayClosingScript': value.displayClosingScript,
        'hotelId': value.hotelId,
    };
}
exports.JobTitleTypeToJSON = JobTitleTypeToJSON;

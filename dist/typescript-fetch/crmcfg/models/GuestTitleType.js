"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestTitleTypeToJSON = exports.GuestTitleTypeFromJSONTyped = exports.GuestTitleTypeFromJSON = exports.instanceOfGuestTitleType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GuestTitleType interface.
 */
function instanceOfGuestTitleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestTitleType = instanceOfGuestTitleType;
function GuestTitleTypeFromJSON(json) {
    return GuestTitleTypeFromJSONTyped(json, false);
}
exports.GuestTitleTypeFromJSON = GuestTitleTypeFromJSON;
function GuestTitleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displayOrder': !(0, runtime_1.exists)(json, 'displayOrder') ? undefined : json['displayOrder'],
        'greeting': !(0, runtime_1.exists)(json, 'greeting') ? undefined : json['greeting'],
        'languageCode': !(0, runtime_1.exists)(json, 'languageCode') ? undefined : json['languageCode'],
        'newLanguageCode': !(0, runtime_1.exists)(json, 'newLanguageCode') ? undefined : json['newLanguageCode'],
        'newTitleType': !(0, runtime_1.exists)(json, 'newTitleType') ? undefined : json['newTitleType'],
        'titleType': !(0, runtime_1.exists)(json, 'titleType') ? undefined : json['titleType'],
    };
}
exports.GuestTitleTypeFromJSONTyped = GuestTitleTypeFromJSONTyped;
function GuestTitleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'displayOrder': value.displayOrder,
        'greeting': value.greeting,
        'languageCode': value.languageCode,
        'newLanguageCode': value.newLanguageCode,
        'newTitleType': value.newTitleType,
        'titleType': value.titleType,
    };
}
exports.GuestTitleTypeToJSON = GuestTitleTypeToJSON;

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
exports.CompanyTypeTypeToJSON = exports.CompanyTypeTypeFromJSONTyped = exports.CompanyTypeTypeFromJSON = exports.instanceOfCompanyTypeType = void 0;
const runtime_1 = require("../runtime");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
/**
 * Check if a given object implements the CompanyTypeType interface.
 */
function instanceOfCompanyTypeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompanyTypeType = instanceOfCompanyTypeType;
function CompanyTypeTypeFromJSON(json) {
    return CompanyTypeTypeFromJSONTyped(json, false);
}
exports.CompanyTypeTypeFromJSON = CompanyTypeTypeFromJSON;
function CompanyTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'displayOrder': !(0, runtime_1.exists)(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}
exports.CompanyTypeTypeFromJSONTyped = CompanyTypeTypeFromJSONTyped;
function CompanyTypeTypeToJSON(value) {
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
exports.CompanyTypeTypeToJSON = CompanyTypeTypeToJSON;

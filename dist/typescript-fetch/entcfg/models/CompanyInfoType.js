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
exports.CompanyInfoTypeToJSON = exports.CompanyInfoTypeFromJSONTyped = exports.CompanyInfoTypeFromJSON = exports.instanceOfCompanyInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CompanyInfoType interface.
 */
function instanceOfCompanyInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompanyInfoType = instanceOfCompanyInfoType;
function CompanyInfoTypeFromJSON(json) {
    return CompanyInfoTypeFromJSONTyped(json, false);
}
exports.CompanyInfoTypeFromJSON = CompanyInfoTypeFromJSON;
function CompanyInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'legalCompany': !(0, runtime_1.exists)(json, 'legalCompany') ? undefined : json['legalCompany'],
        'department': !(0, runtime_1.exists)(json, 'department') ? undefined : json['department'],
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : json['position'],
    };
}
exports.CompanyInfoTypeFromJSONTyped = CompanyInfoTypeFromJSONTyped;
function CompanyInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'legalCompany': value.legalCompany,
        'department': value.department,
        'position': value.position,
    };
}
exports.CompanyInfoTypeToJSON = CompanyInfoTypeToJSON;
"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTypeToJSON = exports.CompanyTypeFromJSONTyped = exports.CompanyTypeFromJSON = exports.instanceOfCompanyType = void 0;
const runtime_1 = require("../runtime");
const IATAInfoType_1 = require("./IATAInfoType");
/**
 * Check if a given object implements the CompanyType interface.
 */
function instanceOfCompanyType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompanyType = instanceOfCompanyType;
function CompanyTypeFromJSON(json) {
    return CompanyTypeFromJSONTyped(json, false);
}
exports.CompanyTypeFromJSON = CompanyTypeFromJSON;
function CompanyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'companyName': !(0, runtime_1.exists)(json, 'companyName') ? undefined : json['companyName'],
        'companyName2': !(0, runtime_1.exists)(json, 'companyName2') ? undefined : json['companyName2'],
        'companyName3': !(0, runtime_1.exists)(json, 'companyName3') ? undefined : json['companyName3'],
        'alternateName': !(0, runtime_1.exists)(json, 'alternateName') ? undefined : json['alternateName'],
        'alternateLanguage': !(0, runtime_1.exists)(json, 'alternateLanguage') ? undefined : json['alternateLanguage'],
        'businessLocale': !(0, runtime_1.exists)(json, 'businessLocale') ? undefined : json['businessLocale'],
        'iATAInfo': !(0, runtime_1.exists)(json, 'iATAInfo') ? undefined : (0, IATAInfoType_1.IATAInfoTypeFromJSON)(json['iATAInfo']),
        'businessTitle': !(0, runtime_1.exists)(json, 'businessTitle') ? undefined : json['businessTitle'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'nationality': !(0, runtime_1.exists)(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !(0, runtime_1.exists)(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : json['commissionCode'],
        'creditRating': !(0, runtime_1.exists)(json, 'creditRating') ? undefined : json['creditRating'],
        'corporateIdType': !(0, runtime_1.exists)(json, 'corporateIdType') ? undefined : json['corporateIdType'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : json['vipStatus'],
        'vipDescription': !(0, runtime_1.exists)(json, 'vipDescription') ? undefined : json['vipDescription'],
        'blacklist': !(0, runtime_1.exists)(json, 'blacklist') ? undefined : json['blacklist'],
    };
}
exports.CompanyTypeFromJSONTyped = CompanyTypeFromJSONTyped;
function CompanyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'companyName': value.companyName,
        'companyName2': value.companyName2,
        'companyName3': value.companyName3,
        'alternateName': value.alternateName,
        'alternateLanguage': value.alternateLanguage,
        'businessLocale': value.businessLocale,
        'iATAInfo': (0, IATAInfoType_1.IATAInfoTypeToJSON)(value.iATAInfo),
        'businessTitle': value.businessTitle,
        'currencyCode': value.currencyCode,
        'language': value.language,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'commissionCode': value.commissionCode,
        'creditRating': value.creditRating,
        'corporateIdType': value.corporateIdType,
        'vipStatus': value.vipStatus,
        'vipDescription': value.vipDescription,
        'blacklist': value.blacklist,
    };
}
exports.CompanyTypeToJSON = CompanyTypeToJSON;
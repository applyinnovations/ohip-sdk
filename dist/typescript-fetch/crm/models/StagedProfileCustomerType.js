"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StagedProfileCustomerTypeToJSON = exports.StagedProfileCustomerTypeFromJSONTyped = exports.StagedProfileCustomerTypeFromJSON = exports.instanceOfStagedProfileCustomerType = void 0;
const runtime_1 = require("../runtime");
const AlienInfoType_1 = require("./AlienInfoType");
const AnonymizationType_1 = require("./AnonymizationType");
const CompanyInfoType_1 = require("./CompanyInfoType");
const CountryNameType_1 = require("./CountryNameType");
const CustomerTypeIdentifications_1 = require("./CustomerTypeIdentifications");
const PersonNameType_1 = require("./PersonNameType");
const StagedProfileErrorType_1 = require("./StagedProfileErrorType");
/**
 * Check if a given object implements the StagedProfileCustomerType interface.
 */
function instanceOfStagedProfileCustomerType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStagedProfileCustomerType = instanceOfStagedProfileCustomerType;
function StagedProfileCustomerTypeFromJSON(json) {
    return StagedProfileCustomerTypeFromJSONTyped(json, false);
}
exports.StagedProfileCustomerTypeFromJSON = StagedProfileCustomerTypeFromJSON;
function StagedProfileCustomerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alienInfo': !(0, runtime_1.exists)(json, 'alienInfo') ? undefined : (0, AlienInfoType_1.AlienInfoTypeFromJSON)(json['alienInfo']),
        'alternateLanguage': !(0, runtime_1.exists)(json, 'alternateLanguage') ? undefined : json['alternateLanguage'],
        'anonymization': !(0, runtime_1.exists)(json, 'anonymization') ? undefined : (0, AnonymizationType_1.AnonymizationTypeFromJSON)(json['anonymization']),
        'birthCountry': !(0, runtime_1.exists)(json, 'birthCountry') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['birthCountry']),
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : (new Date(json['birthDate'])),
        'birthDateMasked': !(0, runtime_1.exists)(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'birthPlace': !(0, runtime_1.exists)(json, 'birthPlace') ? undefined : json['birthPlace'],
        'blacklist': !(0, runtime_1.exists)(json, 'blacklist') ? undefined : json['blacklist'],
        'businessTitle': !(0, runtime_1.exists)(json, 'businessTitle') ? undefined : json['businessTitle'],
        'citizenCountry': !(0, runtime_1.exists)(json, 'citizenCountry') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['citizenCountry']),
        'companyInfo': !(0, runtime_1.exists)(json, 'companyInfo') ? undefined : (0, CompanyInfoType_1.CompanyInfoTypeFromJSON)(json['companyInfo']),
        'creditRating': !(0, runtime_1.exists)(json, 'creditRating') ? undefined : json['creditRating'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'customerValue': !(0, runtime_1.exists)(json, 'customerValue') ? undefined : json['customerValue'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(StagedProfileErrorType_1.StagedProfileErrorTypeFromJSON)),
        'gender': !(0, runtime_1.exists)(json, 'gender') ? undefined : json['gender'],
        'identifications': !(0, runtime_1.exists)(json, 'identifications') ? undefined : (0, CustomerTypeIdentifications_1.CustomerTypeIdentificationsFromJSON)(json['identifications']),
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'legalCompany': !(0, runtime_1.exists)(json, 'legalCompany') ? undefined : json['legalCompany'],
        'nationality': !(0, runtime_1.exists)(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !(0, runtime_1.exists)(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'personName': !(0, runtime_1.exists)(json, 'personName') ? undefined : (json['personName'].map(PersonNameType_1.PersonNameTypeFromJSON)),
        'privateProfile': !(0, runtime_1.exists)(json, 'privateProfile') ? undefined : json['privateProfile'],
        'profession': !(0, runtime_1.exists)(json, 'profession') ? undefined : json['profession'],
        'vipDescription': !(0, runtime_1.exists)(json, 'vipDescription') ? undefined : json['vipDescription'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}
exports.StagedProfileCustomerTypeFromJSONTyped = StagedProfileCustomerTypeFromJSONTyped;
function StagedProfileCustomerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alienInfo': (0, AlienInfoType_1.AlienInfoTypeToJSON)(value.alienInfo),
        'alternateLanguage': value.alternateLanguage,
        'anonymization': (0, AnonymizationType_1.AnonymizationTypeToJSON)(value.anonymization),
        'birthCountry': (0, CountryNameType_1.CountryNameTypeToJSON)(value.birthCountry),
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate.toISOString().substring(0, 10)),
        'birthDateMasked': value.birthDateMasked,
        'birthPlace': value.birthPlace,
        'blacklist': value.blacklist,
        'businessTitle': value.businessTitle,
        'citizenCountry': (0, CountryNameType_1.CountryNameTypeToJSON)(value.citizenCountry),
        'companyInfo': (0, CompanyInfoType_1.CompanyInfoTypeToJSON)(value.companyInfo),
        'creditRating': value.creditRating,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'customerValue': value.customerValue,
        'decimalPlaces': value.decimalPlaces,
        'errors': value.errors === undefined ? undefined : (value.errors.map(StagedProfileErrorType_1.StagedProfileErrorTypeToJSON)),
        'gender': value.gender,
        'identifications': (0, CustomerTypeIdentifications_1.CustomerTypeIdentificationsToJSON)(value.identifications),
        'language': value.language,
        'legalCompany': value.legalCompany,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'personName': value.personName === undefined ? undefined : (value.personName.map(PersonNameType_1.PersonNameTypeToJSON)),
        'privateProfile': value.privateProfile,
        'profession': value.profession,
        'vipDescription': value.vipDescription,
        'vipStatus': value.vipStatus,
    };
}
exports.StagedProfileCustomerTypeToJSON = StagedProfileCustomerTypeToJSON;
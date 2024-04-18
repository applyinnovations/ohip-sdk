"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerTypeToJSON = exports.CustomerTypeFromJSONTyped = exports.CustomerTypeFromJSON = exports.instanceOfCustomerType = void 0;
const runtime_1 = require("../runtime");
const AlienInfoType_1 = require("./AlienInfoType");
const AnonymizationType_1 = require("./AnonymizationType");
const CompanyInfoType_1 = require("./CompanyInfoType");
const CountryNameType_1 = require("./CountryNameType");
const CustomerTypeIdentifications_1 = require("./CustomerTypeIdentifications");
const PersonNameType_1 = require("./PersonNameType");
/**
 * Check if a given object implements the CustomerType interface.
 */
function instanceOfCustomerType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerType = instanceOfCustomerType;
function CustomerTypeFromJSON(json) {
    return CustomerTypeFromJSONTyped(json, false);
}
exports.CustomerTypeFromJSON = CustomerTypeFromJSON;
function CustomerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alienInfo': !(0, runtime_1.exists)(json, 'alienInfo') ? undefined : (0, AlienInfoType_1.AlienInfoTypeFromJSON)(json['alienInfo']),
        'anonymization': !(0, runtime_1.exists)(json, 'anonymization') ? undefined : (0, AnonymizationType_1.AnonymizationTypeFromJSON)(json['anonymization']),
        'birthCountry': !(0, runtime_1.exists)(json, 'birthCountry') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['birthCountry']),
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : json['birthDate'],
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
exports.CustomerTypeFromJSONTyped = CustomerTypeFromJSONTyped;
function CustomerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alienInfo': (0, AlienInfoType_1.AlienInfoTypeToJSON)(value.alienInfo),
        'anonymization': (0, AnonymizationType_1.AnonymizationTypeToJSON)(value.anonymization),
        'birthCountry': (0, CountryNameType_1.CountryNameTypeToJSON)(value.birthCountry),
        'birthDate': value.birthDate,
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
exports.CustomerTypeToJSON = CustomerTypeToJSON;
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
        'personName': !(0, runtime_1.exists)(json, 'personName') ? undefined : (json['personName'].map(PersonNameType_1.PersonNameTypeFromJSON)),
        'anonymization': !(0, runtime_1.exists)(json, 'anonymization') ? undefined : (0, AnonymizationType_1.AnonymizationTypeFromJSON)(json['anonymization']),
        'citizenCountry': !(0, runtime_1.exists)(json, 'citizenCountry') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['citizenCountry']),
        'identifications': !(0, runtime_1.exists)(json, 'identifications') ? undefined : (0, CustomerTypeIdentifications_1.CustomerTypeIdentificationsFromJSON)(json['identifications']),
        'profession': !(0, runtime_1.exists)(json, 'profession') ? undefined : json['profession'],
        'alienInfo': !(0, runtime_1.exists)(json, 'alienInfo') ? undefined : (0, AlienInfoType_1.AlienInfoTypeFromJSON)(json['alienInfo']),
        'birthCountry': !(0, runtime_1.exists)(json, 'birthCountry') ? undefined : (0, CountryNameType_1.CountryNameTypeFromJSON)(json['birthCountry']),
        'legalCompany': !(0, runtime_1.exists)(json, 'legalCompany') ? undefined : json['legalCompany'],
        'companyInfo': !(0, runtime_1.exists)(json, 'companyInfo') ? undefined : (0, CompanyInfoType_1.CompanyInfoTypeFromJSON)(json['companyInfo']),
        'businessTitle': !(0, runtime_1.exists)(json, 'businessTitle') ? undefined : json['businessTitle'],
        'gender': !(0, runtime_1.exists)(json, 'gender') ? undefined : json['gender'],
        'birthDate': !(0, runtime_1.exists)(json, 'birthDate') ? undefined : json['birthDate'],
        'birthDateMasked': !(0, runtime_1.exists)(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'nationality': !(0, runtime_1.exists)(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !(0, runtime_1.exists)(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'customerValue': !(0, runtime_1.exists)(json, 'customerValue') ? undefined : json['customerValue'],
        'creditRating': !(0, runtime_1.exists)(json, 'creditRating') ? undefined : json['creditRating'],
        'vipStatus': !(0, runtime_1.exists)(json, 'vipStatus') ? undefined : json['vipStatus'],
        'vipDescription': !(0, runtime_1.exists)(json, 'vipDescription') ? undefined : json['vipDescription'],
        'birthPlace': !(0, runtime_1.exists)(json, 'birthPlace') ? undefined : json['birthPlace'],
        'privateProfile': !(0, runtime_1.exists)(json, 'privateProfile') ? undefined : json['privateProfile'],
        'blacklist': !(0, runtime_1.exists)(json, 'blacklist') ? undefined : json['blacklist'],
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
        'personName': value.personName === undefined ? undefined : (value.personName.map(PersonNameType_1.PersonNameTypeToJSON)),
        'anonymization': (0, AnonymizationType_1.AnonymizationTypeToJSON)(value.anonymization),
        'citizenCountry': (0, CountryNameType_1.CountryNameTypeToJSON)(value.citizenCountry),
        'identifications': (0, CustomerTypeIdentifications_1.CustomerTypeIdentificationsToJSON)(value.identifications),
        'profession': value.profession,
        'alienInfo': (0, AlienInfoType_1.AlienInfoTypeToJSON)(value.alienInfo),
        'birthCountry': (0, CountryNameType_1.CountryNameTypeToJSON)(value.birthCountry),
        'legalCompany': value.legalCompany,
        'companyInfo': (0, CompanyInfoType_1.CompanyInfoTypeToJSON)(value.companyInfo),
        'businessTitle': value.businessTitle,
        'gender': value.gender,
        'birthDate': value.birthDate,
        'birthDateMasked': value.birthDateMasked,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'language': value.language,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'customerValue': value.customerValue,
        'creditRating': value.creditRating,
        'vipStatus': value.vipStatus,
        'vipDescription': value.vipDescription,
        'birthPlace': value.birthPlace,
        'privateProfile': value.privateProfile,
        'blacklist': value.blacklist,
    };
}
exports.CustomerTypeToJSON = CustomerTypeToJSON;

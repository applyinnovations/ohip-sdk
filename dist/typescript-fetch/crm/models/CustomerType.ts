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

import { exists, mapValues } from '../runtime';
import type { AlienInfoType } from './AlienInfoType';
import {
    AlienInfoTypeFromJSON,
    AlienInfoTypeFromJSONTyped,
    AlienInfoTypeToJSON,
} from './AlienInfoType';
import type { AnonymizationType } from './AnonymizationType';
import {
    AnonymizationTypeFromJSON,
    AnonymizationTypeFromJSONTyped,
    AnonymizationTypeToJSON,
} from './AnonymizationType';
import type { CompanyInfoType } from './CompanyInfoType';
import {
    CompanyInfoTypeFromJSON,
    CompanyInfoTypeFromJSONTyped,
    CompanyInfoTypeToJSON,
} from './CompanyInfoType';
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';
import type { CustomerTypeIdentifications } from './CustomerTypeIdentifications';
import {
    CustomerTypeIdentificationsFromJSON,
    CustomerTypeIdentificationsFromJSONTyped,
    CustomerTypeIdentificationsToJSON,
} from './CustomerTypeIdentifications';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';

/**
 * Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
 * @export
 * @interface CustomerType
 */
export interface CustomerType {
    /**
     * 
     * @type {AlienInfoType}
     * @memberof CustomerType
     */
    alienInfo?: AlienInfoType;
    /**
     * 
     * @type {AnonymizationType}
     * @memberof CustomerType
     */
    anonymization?: AnonymizationType;
    /**
     * 
     * @type {CountryNameType}
     * @memberof CustomerType
     */
    birthCountry?: CountryNameType;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {Date}
     * @memberof CustomerType
     */
    birthDate?: Date;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof CustomerType
     */
    birthDateMasked?: string;
    /**
     * Place of birth.
     * @type {string}
     * @memberof CustomerType
     */
    birthPlace?: string;
    /**
     * This element tells if profile is blacklisted or not.
     * @type {boolean}
     * @memberof CustomerType
     */
    blacklist?: boolean;
    /**
     * Business Title.
     * @type {string}
     * @memberof CustomerType
     */
    businessTitle?: string;
    /**
     * 
     * @type {CountryNameType}
     * @memberof CustomerType
     */
    citizenCountry?: CountryNameType;
    /**
     * 
     * @type {CompanyInfoType}
     * @memberof CustomerType
     */
    companyInfo?: CompanyInfoType;
    /**
     * Credit Rating of the customer.
     * @type {string}
     * @memberof CustomerType
     */
    creditRating?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof CustomerType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof CustomerType
     */
    currencySymbol?: string;
    /**
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @type {string}
     * @memberof CustomerType
     */
    customerValue?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof CustomerType
     */
    decimalPlaces?: number;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof CustomerType
     */
    gender?: string;
    /**
     * 
     * @type {CustomerTypeIdentifications}
     * @memberof CustomerType
     */
    identifications?: CustomerTypeIdentifications;
    /**
     * Language identification.
     * @type {string}
     * @memberof CustomerType
     */
    language?: string;
    /**
     * Name Of the company the individual is associated with.
     * @type {string}
     * @memberof CustomerType
     */
    legalCompany?: string;
    /**
     * Nationality code identification
     * @type {string}
     * @memberof CustomerType
     */
    nationality?: string;
    /**
     * Nationality code description
     * @type {string}
     * @memberof CustomerType
     */
    nationalityDescription?: string;
    /**
     * Detailed name information for the customer.
     * @type {Array<PersonNameType>}
     * @memberof CustomerType
     */
    personName?: Array<PersonNameType>;
    /**
     * This element tells profile is property exclusive or not.
     * @type {boolean}
     * @memberof CustomerType
     */
    privateProfile?: boolean;
    /**
     * Profession of a person.
     * @type {string}
     * @memberof CustomerType
     */
    profession?: string;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof CustomerType
     */
    vipDescription?: string;
    /**
     * VIP status of the customer.
     * @type {string}
     * @memberof CustomerType
     */
    vipStatus?: string;
}

/**
 * Check if a given object implements the CustomerType interface.
 */
export function instanceOfCustomerType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerTypeFromJSON(json: any): CustomerType {
    return CustomerTypeFromJSONTyped(json, false);
}

export function CustomerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alienInfo': !exists(json, 'alienInfo') ? undefined : AlienInfoTypeFromJSON(json['alienInfo']),
        'anonymization': !exists(json, 'anonymization') ? undefined : AnonymizationTypeFromJSON(json['anonymization']),
        'birthCountry': !exists(json, 'birthCountry') ? undefined : CountryNameTypeFromJSON(json['birthCountry']),
        'birthDate': !exists(json, 'birthDate') ? undefined : (new Date(json['birthDate'])),
        'birthDateMasked': !exists(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'birthPlace': !exists(json, 'birthPlace') ? undefined : json['birthPlace'],
        'blacklist': !exists(json, 'blacklist') ? undefined : json['blacklist'],
        'businessTitle': !exists(json, 'businessTitle') ? undefined : json['businessTitle'],
        'citizenCountry': !exists(json, 'citizenCountry') ? undefined : CountryNameTypeFromJSON(json['citizenCountry']),
        'companyInfo': !exists(json, 'companyInfo') ? undefined : CompanyInfoTypeFromJSON(json['companyInfo']),
        'creditRating': !exists(json, 'creditRating') ? undefined : json['creditRating'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'customerValue': !exists(json, 'customerValue') ? undefined : json['customerValue'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'identifications': !exists(json, 'identifications') ? undefined : CustomerTypeIdentificationsFromJSON(json['identifications']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'legalCompany': !exists(json, 'legalCompany') ? undefined : json['legalCompany'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !exists(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'personName': !exists(json, 'personName') ? undefined : ((json['personName'] as Array<any>).map(PersonNameTypeFromJSON)),
        'privateProfile': !exists(json, 'privateProfile') ? undefined : json['privateProfile'],
        'profession': !exists(json, 'profession') ? undefined : json['profession'],
        'vipDescription': !exists(json, 'vipDescription') ? undefined : json['vipDescription'],
        'vipStatus': !exists(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}

export function CustomerTypeToJSON(value?: CustomerType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alienInfo': AlienInfoTypeToJSON(value.alienInfo),
        'anonymization': AnonymizationTypeToJSON(value.anonymization),
        'birthCountry': CountryNameTypeToJSON(value.birthCountry),
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate.toISOString().substr(0,10)),
        'birthDateMasked': value.birthDateMasked,
        'birthPlace': value.birthPlace,
        'blacklist': value.blacklist,
        'businessTitle': value.businessTitle,
        'citizenCountry': CountryNameTypeToJSON(value.citizenCountry),
        'companyInfo': CompanyInfoTypeToJSON(value.companyInfo),
        'creditRating': value.creditRating,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'customerValue': value.customerValue,
        'decimalPlaces': value.decimalPlaces,
        'gender': value.gender,
        'identifications': CustomerTypeIdentificationsToJSON(value.identifications),
        'language': value.language,
        'legalCompany': value.legalCompany,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'personName': value.personName === undefined ? undefined : ((value.personName as Array<any>).map(PersonNameTypeToJSON)),
        'privateProfile': value.privateProfile,
        'profession': value.profession,
        'vipDescription': value.vipDescription,
        'vipStatus': value.vipStatus,
    };
}


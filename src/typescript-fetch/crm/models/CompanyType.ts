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

import { exists, mapValues } from '../runtime';
import type { IATAInfoType } from './IATAInfoType';
import {
    IATAInfoTypeFromJSON,
    IATAInfoTypeFromJSONTyped,
    IATAInfoTypeToJSON,
} from './IATAInfoType';

/**
 * 
 * @export
 * @interface CompanyType
 */
export interface CompanyType {
    /**
     * Alternate Language of the company.
     * @type {string}
     * @memberof CompanyType
     */
    alternateLanguage?: string;
    /**
     * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
     * @type {string}
     * @memberof CompanyType
     */
    alternateName?: string;
    /**
     * This element tells if profile is blacklisted or not.
     * @type {boolean}
     * @memberof CompanyType
     */
    blacklist?: boolean;
    /**
     * A jurisdiction(Territory) in which a company is authorized to do business.
     * @type {string}
     * @memberof CompanyType
     */
    businessLocale?: string;
    /**
     * Business Title.
     * @type {string}
     * @memberof CompanyType
     */
    businessTitle?: string;
    /**
     * Commission code of the company.
     * @type {string}
     * @memberof CompanyType
     */
    commissionCode?: string;
    /**
     * Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName?: string;
    /**
     * Second Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName2?: string;
    /**
     * Third Name of the company.
     * @type {string}
     * @memberof CompanyType
     */
    companyName3?: string;
    /**
     * The type of corporate ID
     * @type {string}
     * @memberof CompanyType
     */
    corporateIdType?: string;
    /**
     * Credit Rating of the company.
     * @type {string}
     * @memberof CompanyType
     */
    creditRating?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof CompanyType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof CompanyType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof CompanyType
     */
    decimalPlaces?: number;
    /**
     * 
     * @type {IATAInfoType}
     * @memberof CompanyType
     */
    iATAInfo?: IATAInfoType;
    /**
     * Language identification.
     * @type {string}
     * @memberof CompanyType
     */
    language?: string;
    /**
     * Nationality code identification
     * @type {string}
     * @memberof CompanyType
     */
    nationality?: string;
    /**
     * Nationality code description
     * @type {string}
     * @memberof CompanyType
     */
    nationalityDescription?: string;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof CompanyType
     */
    vipDescription?: string;
    /**
     * VIP status of the company.
     * @type {string}
     * @memberof CompanyType
     */
    vipStatus?: string;
}

/**
 * Check if a given object implements the CompanyType interface.
 */
export function instanceOfCompanyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyTypeFromJSON(json: any): CompanyType {
    return CompanyTypeFromJSONTyped(json, false);
}

export function CompanyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateLanguage': !exists(json, 'alternateLanguage') ? undefined : json['alternateLanguage'],
        'alternateName': !exists(json, 'alternateName') ? undefined : json['alternateName'],
        'blacklist': !exists(json, 'blacklist') ? undefined : json['blacklist'],
        'businessLocale': !exists(json, 'businessLocale') ? undefined : json['businessLocale'],
        'businessTitle': !exists(json, 'businessTitle') ? undefined : json['businessTitle'],
        'commissionCode': !exists(json, 'commissionCode') ? undefined : json['commissionCode'],
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'companyName2': !exists(json, 'companyName2') ? undefined : json['companyName2'],
        'companyName3': !exists(json, 'companyName3') ? undefined : json['companyName3'],
        'corporateIdType': !exists(json, 'corporateIdType') ? undefined : json['corporateIdType'],
        'creditRating': !exists(json, 'creditRating') ? undefined : json['creditRating'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'iATAInfo': !exists(json, 'iATAInfo') ? undefined : IATAInfoTypeFromJSON(json['iATAInfo']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !exists(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'vipDescription': !exists(json, 'vipDescription') ? undefined : json['vipDescription'],
        'vipStatus': !exists(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}

export function CompanyTypeToJSON(value?: CompanyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateLanguage': value.alternateLanguage,
        'alternateName': value.alternateName,
        'blacklist': value.blacklist,
        'businessLocale': value.businessLocale,
        'businessTitle': value.businessTitle,
        'commissionCode': value.commissionCode,
        'companyName': value.companyName,
        'companyName2': value.companyName2,
        'companyName3': value.companyName3,
        'corporateIdType': value.corporateIdType,
        'creditRating': value.creditRating,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'iATAInfo': IATAInfoTypeToJSON(value.iATAInfo),
        'language': value.language,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'vipDescription': value.vipDescription,
        'vipStatus': value.vipStatus,
    };
}

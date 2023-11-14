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
import type { AlienInfoType } from './AlienInfoType';
import type { AnonymizationType } from './AnonymizationType';
import type { CountryNameType } from './CountryNameType';
import type { CustomerTypeIdentifications } from './CustomerTypeIdentifications';
import type { PersonNameType } from './PersonNameType';
import type { StagedProfileCustomerTypeErrors } from './StagedProfileCustomerTypeErrors';
/**
 * Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
 * @export
 * @interface StagedProfileCustomerType
 */
export interface StagedProfileCustomerType {
    /**
     * Detailed name information for the customer.
     * @type {Array<PersonNameType>}
     * @memberof StagedProfileCustomerType
     */
    personName?: Array<PersonNameType>;
    /**
     *
     * @type {AnonymizationType}
     * @memberof StagedProfileCustomerType
     */
    anonymization?: AnonymizationType;
    /**
     *
     * @type {CountryNameType}
     * @memberof StagedProfileCustomerType
     */
    citizenCountry?: CountryNameType;
    /**
     *
     * @type {CustomerTypeIdentifications}
     * @memberof StagedProfileCustomerType
     */
    identifications?: CustomerTypeIdentifications;
    /**
     * Profession of a person.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    profession?: string;
    /**
     *
     * @type {AlienInfoType}
     * @memberof StagedProfileCustomerType
     */
    alienInfo?: AlienInfoType;
    /**
     *
     * @type {CountryNameType}
     * @memberof StagedProfileCustomerType
     */
    birthCountry?: CountryNameType;
    /**
     * Name Of the company the individual is associated with.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    legalCompany?: string;
    /**
     * Business Title.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    businessTitle?: string;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    gender?: string;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {Date}
     * @memberof StagedProfileCustomerType
     */
    birthDate?: Date;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    birthDateMasked?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof StagedProfileCustomerType
     */
    decimalPlaces?: number;
    /**
     * Language identification.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    language?: string;
    /**
     * Nationality code identification
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    nationality?: string;
    /**
     * Nationality code description
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    nationalityDescription?: string;
    /**
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    customerValue?: string;
    /**
     * Credit Rating of the customer.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    creditRating?: string;
    /**
     * VIP status of the customer.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    vipStatus?: string;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    vipDescription?: string;
    /**
     * Place of birth.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    birthPlace?: string;
    /**
     * This element tells profile is property exclusive or not.
     * @type {boolean}
     * @memberof StagedProfileCustomerType
     */
    privateProfile?: boolean;
    /**
     * This element tells if profile is blacklisted or not.
     * @type {boolean}
     * @memberof StagedProfileCustomerType
     */
    blacklist?: boolean;
    /**
     *
     * @type {StagedProfileCustomerTypeErrors}
     * @memberof StagedProfileCustomerType
     */
    errors?: StagedProfileCustomerTypeErrors;
    /**
     * ALternate language identification.
     * @type {string}
     * @memberof StagedProfileCustomerType
     */
    alternateLanguage?: string;
}
/**
 * Check if a given object implements the StagedProfileCustomerType interface.
 */
export declare function instanceOfStagedProfileCustomerType(value: object): boolean;
export declare function StagedProfileCustomerTypeFromJSON(json: any): StagedProfileCustomerType;
export declare function StagedProfileCustomerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileCustomerType;
export declare function StagedProfileCustomerTypeToJSON(value?: StagedProfileCustomerType | null): any;
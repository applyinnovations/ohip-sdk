/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AnonymizationType } from './AnonymizationType';
import type { CompanyInfoType } from './CompanyInfoType';
import type { CustomerTypeIdentifications } from './CustomerTypeIdentifications';
import type { PersonNameType } from './PersonNameType';
/**
 * Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
 * @export
 * @interface CustomerType
 */
export interface CustomerType {
    /**
     *
     * @type {AnonymizationType}
     * @memberof CustomerType
     */
    anonymization?: AnonymizationType;
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
     * @type {CompanyInfoType}
     * @memberof CustomerType
     */
    companyInfo?: CompanyInfoType;
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
     * Nationality code identification
     * @type {string}
     * @memberof CustomerType
     */
    nationality?: string;
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
export declare function instanceOfCustomerType(value: object): boolean;
export declare function CustomerTypeFromJSON(json: any): CustomerType;
export declare function CustomerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerType;
export declare function CustomerTypeToJSON(value?: CustomerType | null): any;

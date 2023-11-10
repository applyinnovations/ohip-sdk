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
import type { EmailInfoType } from './EmailInfoType';
/**
 * List of email address for the customer.
 * @export
 * @interface CompanyProfileTypeEmails
 */
export interface CompanyProfileTypeEmails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeEmails
     */
    count?: number;
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @type {Array<EmailInfoType>}
     * @memberof CompanyProfileTypeEmails
     */
    emailInfo?: Array<EmailInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeEmails
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the CompanyProfileTypeEmails interface.
 */
export declare function instanceOfCompanyProfileTypeEmails(value: object): boolean;
export declare function CompanyProfileTypeEmailsFromJSON(json: any): CompanyProfileTypeEmails;
export declare function CompanyProfileTypeEmailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeEmails;
export declare function CompanyProfileTypeEmailsToJSON(value?: CompanyProfileTypeEmails | null): any;

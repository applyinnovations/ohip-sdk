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
/**
 * Report History Type used as based type for Remiders and Statements History types.
 * @export
 * @interface ARAccountTypeLastStatementInfo
 */
export interface ARAccountTypeLastStatementInfo {
    /**
     * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
     * @type {string}
     * @memberof ARAccountTypeLastStatementInfo
     */
    dateSent?: string;
    /**
     * Indicates that statement history exists.
     * @type {boolean}
     * @memberof ARAccountTypeLastStatementInfo
     */
    historyExists?: boolean;
    /**
     * Report file name when exists to allow report re-printing.
     * @type {string}
     * @memberof ARAccountTypeLastStatementInfo
     */
    reportFileName?: string;
    /**
     * Report Name.
     * @type {string}
     * @memberof ARAccountTypeLastStatementInfo
     */
    reportName?: string;
    /**
     * When using Statement Numbering, a unique number is associated to the Statement.
     * @type {number}
     * @memberof ARAccountTypeLastStatementInfo
     */
    statementNo?: number;
}
/**
 * Check if a given object implements the ARAccountTypeLastStatementInfo interface.
 */
export declare function instanceOfARAccountTypeLastStatementInfo(value: object): boolean;
export declare function ARAccountTypeLastStatementInfoFromJSON(json: any): ARAccountTypeLastStatementInfo;
export declare function ARAccountTypeLastStatementInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountTypeLastStatementInfo;
export declare function ARAccountTypeLastStatementInfoToJSON(value?: ARAccountTypeLastStatementInfo | null): any;

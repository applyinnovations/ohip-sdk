/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Report History Type used as based type for Remiders and Statements History types.
 * @export
 * @interface ARAccountTypeLastReminderInfo
 */
export interface ARAccountTypeLastReminderInfo {
    /**
     * The minimum age(days) of the invoices to be included in the Reminder
     * @type {number}
     * @memberof ARAccountTypeLastReminderInfo
     */
    age?: number;
    /**
     * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
     * @type {Date}
     * @memberof ARAccountTypeLastReminderInfo
     */
    dateSent?: Date;
    /**
     * Indicates that reminders history exists.
     * @type {boolean}
     * @memberof ARAccountTypeLastReminderInfo
     */
    historyExists?: boolean;
    /**
     * Report file name when exists to allow report re-printing.
     * @type {string}
     * @memberof ARAccountTypeLastReminderInfo
     */
    reportFileName?: string;
    /**
     * Report Name.
     * @type {string}
     * @memberof ARAccountTypeLastReminderInfo
     */
    reportName?: string;
}
/**
 * Check if a given object implements the ARAccountTypeLastReminderInfo interface.
 */
export declare function instanceOfARAccountTypeLastReminderInfo(value: object): boolean;
export declare function ARAccountTypeLastReminderInfoFromJSON(json: any): ARAccountTypeLastReminderInfo;
export declare function ARAccountTypeLastReminderInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountTypeLastReminderInfo;
export declare function ARAccountTypeLastReminderInfoToJSON(value?: ARAccountTypeLastReminderInfo | null): any;
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARInvoiceType } from './ARInvoiceType';
import type { ReminderCycleType } from './ReminderCycleType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * AR Reminder Information Type.
 * @export
 * @interface ARReminderType
 */
export interface ARReminderType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARReminderType
     */
    accountId?: UniqueIDType;
    /**
     * The minimum age(days) of the invoices to be included in the Reminder
     * @type {number}
     * @memberof ARReminderType
     */
    age?: number;
    /**
     * Reminder summary currency code.
     * @type {string}
     * @memberof ARReminderType
     */
    currencyCode?: string;
    /**
     * The current Reminder Cycle number for this reminder. This would be available when Simple Reminder functionality is ON.
     * @type {number}
     * @memberof ARReminderType
     */
    cycle?: number;
    /**
     *
     * @type {ReminderCycleType}
     * @memberof ARReminderType
     */
    cycleUsed?: ReminderCycleType;
    /**
     * Property where the Account belongs.
     * @type {string}
     * @memberof ARReminderType
     */
    hotelId?: string;
    /**
     * A collection of AR Invoices.
     * @type {Array<ARInvoiceType>}
     * @memberof ARReminderType
     */
    invoices?: Array<ARInvoiceType>;
    /**
     * Indicates that reminders history exists.
     * @type {boolean}
     * @memberof ARReminderType
     */
    isHistoryExists?: boolean;
    /**
     * The Last Reminder Cycle used for this Account. This would be available when Simple Reminder functionality is ON.
     * @type {number}
     * @memberof ARReminderType
     */
    lastCycle?: number;
    /**
     * The date of the Last Reminder Sent.
     * @type {string}
     * @memberof ARReminderType
     */
    lastReminderSent?: string;
    /**
     * The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type.
     * @type {string}
     * @memberof ARReminderType
     */
    letterName?: string;
    /**
     * The maximum Age(days) of the invoices in the Reminder. This would be available when Simple Reminder functionality is OFF.
     * @type {number}
     * @memberof ARReminderType
     */
    maxAge?: number;
    /**
     * The Reminder report file name Letter name which is to be used for reprint.
     * @type {string}
     * @memberof ARReminderType
     */
    reportFileName?: string;
}
/**
 * Check if a given object implements the ARReminderType interface.
 */
export declare function instanceOfARReminderType(value: object): boolean;
export declare function ARReminderTypeFromJSON(json: any): ARReminderType;
export declare function ARReminderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARReminderType;
export declare function ARReminderTypeToJSON(value?: ARReminderType | null): any;

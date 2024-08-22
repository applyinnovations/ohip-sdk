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
/**
 * Information related to a Task Code. Task Codes are used to generate task sheets in Rooms Management.
 * @export
 * @interface HousekeepingTaskCodeType
 */
export interface HousekeepingTaskCodeType {
    /**
     * The Code for the task.
     * @type {string}
     * @memberof HousekeepingTaskCodeType
     */
    code?: string;
    /**
     * Description of the Task Code.
     * @type {string}
     * @memberof HousekeepingTaskCodeType
     */
    description?: string;
    /**
     * Indicates if this task code is the default departure task for Facility Tasks. This requires
     * @type {boolean}
     * @memberof HousekeepingTaskCodeType
     */
    facilityDepartureTask?: boolean;
    /**
     * Property where this task code is configured.
     * @type {string}
     * @memberof HousekeepingTaskCodeType
     */
    hotelId?: string;
    /**
     * Instructions for this Task Code.
     * @type {string}
     * @memberof HousekeepingTaskCodeType
     */
    instructions?: string;
    /**
     * Indicates if a linen change is necessary.
     * @type {boolean}
     * @memberof HousekeepingTaskCodeType
     */
    linenChange?: boolean;
    /**
     * Ordering sequence for display.
     * @type {number}
     * @memberof HousekeepingTaskCodeType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the HousekeepingTaskCodeType interface.
 */
export declare function instanceOfHousekeepingTaskCodeType(value: object): boolean;
export declare function HousekeepingTaskCodeTypeFromJSON(json: any): HousekeepingTaskCodeType;
export declare function HousekeepingTaskCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTaskCodeType;
export declare function HousekeepingTaskCodeTypeToJSON(value?: HousekeepingTaskCodeType | null): any;

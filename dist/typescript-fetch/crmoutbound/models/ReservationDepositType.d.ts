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
/**
 * Reservation Deposit Type.
 * @export
 * @interface ReservationDepositType
 */
export interface ReservationDepositType {
    /**
     * Deposit Amount Required.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountRequired?: number;
    /**
     * Deposit Amount Paid.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountPaid?: number;
    /**
     * Deposit Amount Owed.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountOwed?: number;
    /**
     * Deposit Due Date.
     * @type {string}
     * @memberof ReservationDepositType
     */
    dueDate?: string;
    /**
     * Deposit Posting Date.
     * @type {string}
     * @memberof ReservationDepositType
     */
    postingDate?: string;
    /**
     * Resolves whether reservation has paid deposit.
     * @type {boolean}
     * @memberof ReservationDepositType
     */
    hasPaid?: boolean;
    /**
     * Resolves whether reservation has outstanding deposit.
     * @type {boolean}
     * @memberof ReservationDepositType
     */
    hasOutstanding?: boolean;
}
/**
 * Check if a given object implements the ReservationDepositType interface.
 */
export declare function instanceOfReservationDepositType(value: object): boolean;
export declare function ReservationDepositTypeFromJSON(json: any): ReservationDepositType;
export declare function ReservationDepositTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDepositType;
export declare function ReservationDepositTypeToJSON(value?: ReservationDepositType | null): any;

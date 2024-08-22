/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CommentInfoType } from './CommentInfoType';
import type { MembershipTypeLevelType } from './MembershipTypeLevelType';
import type { ThresholdDetailsType } from './ThresholdDetailsType';
import type { TransactionDiversionDailyDetailType } from './TransactionDiversionDailyDetailType';
import type { TransactionDiversionRuleLevelType } from './TransactionDiversionRuleLevelType';
import type { TransactionDiversionRuleTypeType } from './TransactionDiversionRuleTypeType';
/**
 * A Transaction Diversion Rule Type
 * @export
 * @interface ReservationTransactionDiversionType
 */
export interface ReservationTransactionDiversionType {
    /**
     * Transaction Diversion Code
     * @type {string}
     * @memberof ReservationTransactionDiversionType
     */
    code?: string;
    /**
     * List of daily details for Transaction Diversion rule.
     * @type {Array<TransactionDiversionDailyDetailType>}
     * @memberof ReservationTransactionDiversionType
     */
    dailyDetails?: Array<TransactionDiversionDailyDetailType>;
    /**
     * User defined message for the Transaction Diversion Rule.
     * @type {string}
     * @memberof ReservationTransactionDiversionType
     */
    description?: string;
    /**
     * User configured Sequence number.
     * @type {number}
     * @memberof ReservationTransactionDiversionType
     */
    displaySequence?: number;
    /**
     * Transaction diversions that are diverted .
     * @type {number}
     * @memberof ReservationTransactionDiversionType
     */
    diverted?: number;
    /**
     * Hotel code with which Transaction Diversion Rule is associated.
     * @type {string}
     * @memberof ReservationTransactionDiversionType
     */
    hotelId?: string;
    /**
     * Indicator that tells whether the transaction diversion rule is active or not.
     * @type {boolean}
     * @memberof ReservationTransactionDiversionType
     */
    inactive?: boolean;
    /**
     *
     * @type {TransactionDiversionRuleLevelType}
     * @memberof ReservationTransactionDiversionType
     */
    level?: TransactionDiversionRuleLevelType;
    /**
     *
     * @type {MembershipTypeLevelType}
     * @memberof ReservationTransactionDiversionType
     */
    membership?: MembershipTypeLevelType;
    /**
     *
     * @type {CommentInfoType}
     * @memberof ReservationTransactionDiversionType
     */
    notes?: CommentInfoType;
    /**
     * Transaction diversions that are posted.
     * @type {number}
     * @memberof ReservationTransactionDiversionType
     */
    posted?: number;
    /**
     * Room number to receive all the diverted transactions configured for this instruction.
     * @type {string}
     * @memberof ReservationTransactionDiversionType
     */
    targetRoom?: string;
    /**
     *
     * @type {ThresholdDetailsType}
     * @memberof ReservationTransactionDiversionType
     */
    thresholds?: ThresholdDetailsType;
    /**
     * Collection of Transaction Code List
     * @type {Array<CodeDescriptionType>}
     * @memberof ReservationTransactionDiversionType
     */
    transactionCodes?: Array<CodeDescriptionType>;
    /**
     *
     * @type {TransactionDiversionRuleTypeType}
     * @memberof ReservationTransactionDiversionType
     */
    type?: TransactionDiversionRuleTypeType;
    /**
     * VIP code to consider while applying Diversion Instruction.
     * @type {string}
     * @memberof ReservationTransactionDiversionType
     */
    vipCode?: string;
}
/**
 * Check if a given object implements the ReservationTransactionDiversionType interface.
 */
export declare function instanceOfReservationTransactionDiversionType(value: object): boolean;
export declare function ReservationTransactionDiversionTypeFromJSON(json: any): ReservationTransactionDiversionType;
export declare function ReservationTransactionDiversionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationTransactionDiversionType;
export declare function ReservationTransactionDiversionTypeToJSON(value?: ReservationTransactionDiversionType | null): any;

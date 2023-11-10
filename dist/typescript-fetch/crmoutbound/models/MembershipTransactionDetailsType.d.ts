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
import type { CodeListType } from './CodeListType';
import type { MembershipAwardPointsType } from './MembershipAwardPointsType';
import type { MembershipTransactionId } from './MembershipTransactionId';
import type { MembershipTransactionTierPointsType } from './MembershipTransactionTierPointsType';
import type { ReservationIdList } from './ReservationIdList';
import type { TimeSpanType } from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Detailed information related to a membership transaction.
 * @export
 * @interface MembershipTransactionDetailsType
 */
export interface MembershipTransactionDetailsType {
    /**
     *
     * @type {MembershipTransactionId}
     * @memberof MembershipTransactionDetailsType
     */
    membershipTransactionId?: MembershipTransactionId;
    /**
     * Property from which the membership stay information was received.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    hotelId?: string;
    /**
     * The type of membership points transaction.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    transactionType?: string;
    /**
     * The date when the points were calculated.
     * @type {Date}
     * @memberof MembershipTransactionDetailsType
     */
    transactionDate?: Date;
    /**
     *
     * @type {ReservationIdList}
     * @memberof MembershipTransactionDetailsType
     */
    reservationIdList?: ReservationIdList;
    /**
     * The property currency at the originating PMS.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    currency?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof MembershipTransactionDetailsType
     */
    stayTimeSpan?: TimeSpanType;
    /**
     * Promotion code assigned on reservation.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    ratePromotion?: string;
    /**
     *
     * @type {CodeListType}
     * @memberof MembershipTransactionDetailsType
     */
    profilePromotions?: CodeListType;
    /**
     * For adjustments, the date when the points are to be credited.
     * @type {Date}
     * @memberof MembershipTransactionDetailsType
     */
    pointsCreditDate?: Date;
    /**
     * The average cost of the room per night.
     * @type {number}
     * @memberof MembershipTransactionDetailsType
     */
    averageRateAmount?: number;
    /**
     * Indicates if the transaction was created as an adjustment.
     * @type {boolean}
     * @memberof MembershipTransactionDetailsType
     */
    adjustment?: boolean;
    /**
     * Indicates if the points have been calculated on this transaction.
     * @type {boolean}
     * @memberof MembershipTransactionDetailsType
     */
    pointsCalculated?: boolean;
    /**
     * Indicates if the transaction was flagged as an exception.
     * @type {boolean}
     * @memberof MembershipTransactionDetailsType
     */
    exception?: boolean;
    /**
     * The room type for this transaction.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    roomLabel?: string;
    /**
     * The booked room type for this transaction.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    bookedRoomLabel?: string;
    /**
     * Notes associated with this transaction.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    notes?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof MembershipTransactionDetailsType
     */
    statementId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof MembershipTransactionDetailsType
     */
    memberStatementId?: UniqueIDType;
    /**
     * Billing group the points belong to.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    billingGroup?: string;
    /**
     * Base billing group the points belong to.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    baseBillingGroup?: string;
    /**
     * Bonus billing group the points belong to.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    bonusBillingGroup?: string;
    /**
     * The total cost associated with points earned by this transaction.
     * @type {number}
     * @memberof MembershipTransactionDetailsType
     */
    pointsCost?: number;
    /**
     * Messages generated by the system during points calculation.
     * @type {string}
     * @memberof MembershipTransactionDetailsType
     */
    processingMessages?: string;
    /**
     *
     * @type {MembershipAwardPointsType}
     * @memberof MembershipTransactionDetailsType
     */
    awardPoints?: MembershipAwardPointsType;
    /**
     *
     * @type {MembershipTransactionTierPointsType}
     * @memberof MembershipTransactionDetailsType
     */
    tierPoints?: MembershipTransactionTierPointsType;
}
/**
 * Check if a given object implements the MembershipTransactionDetailsType interface.
 */
export declare function instanceOfMembershipTransactionDetailsType(value: object): boolean;
export declare function MembershipTransactionDetailsTypeFromJSON(json: any): MembershipTransactionDetailsType;
export declare function MembershipTransactionDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionDetailsType;
export declare function MembershipTransactionDetailsTypeToJSON(value?: MembershipTransactionDetailsType | null): any;

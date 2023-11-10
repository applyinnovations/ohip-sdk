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
import type { MemberAwardDetailsType } from './MemberAwardDetailsType';
import type { MemberAwardProcessType } from './MemberAwardProcessType';
import type { ProfileIdList } from './ProfileIdList';
import type { ReservationIdList } from './ReservationIdList';
import type { TimeSpanType } from './TimeSpanType';
/**
 *
 * @export
 * @interface MemberAwardType
 */
export interface MemberAwardType {
    /**
     *
     * @type {ProfileIdList}
     * @memberof MemberAwardType
     */
    profileIdList?: ProfileIdList;
    /**
     * The type of the membership.
     * @type {string}
     * @memberof MemberAwardType
     */
    membershipType?: string;
    /**
     * The card number associated with this membership.
     * @type {string}
     * @memberof MemberAwardType
     */
    membershipCardNo?: string;
    /**
     * The current level of the membership.
     * @type {string}
     * @memberof MemberAwardType
     */
    membershipLevel?: string;
    /**
     *
     * @type {ReservationIdList}
     * @memberof MemberAwardType
     */
    reservationIdList?: ReservationIdList;
    /**
     * Number of adults associated with the reservation.
     * @type {number}
     * @memberof MemberAwardType
     */
    adults?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof MemberAwardType
     */
    reservationTimeSpan?: TimeSpanType;
    /**
     * Member points before award transaction.
     * @type {number}
     * @memberof MemberAwardType
     */
    memberPointsBefore?: number;
    /**
     * Member points after award transaction.
     * @type {number}
     * @memberof MemberAwardType
     */
    memberPointsAfter?: number;
    /**
     * Points associated with the award.
     * @type {number}
     * @memberof MemberAwardType
     */
    awardPoints?: number;
    /**
     * Number of cancel points returned.
     * @type {number}
     * @memberof MemberAwardType
     */
    cancelPointsReturn?: number;
    /**
     * Actual number of cancel points.
     * @type {number}
     * @memberof MemberAwardType
     */
    actualCancelPoints?: number;
    /**
     * Points that will expire.
     * @type {number}
     * @memberof MemberAwardType
     */
    expiryPoints?: number;
    /**
     *
     * @type {MemberAwardProcessType}
     * @memberof MemberAwardType
     */
    awardProcessType?: MemberAwardProcessType;
    /**
     *
     * @type {MemberAwardDetailsType}
     * @memberof MemberAwardType
     */
    memberAwardDetails?: MemberAwardDetailsType;
    /**
     * Property associated with the reservation.
     * @type {string}
     * @memberof MemberAwardType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the MemberAwardType interface.
 */
export declare function instanceOfMemberAwardType(value: object): boolean;
export declare function MemberAwardTypeFromJSON(json: any): MemberAwardType;
export declare function MemberAwardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberAwardType;
export declare function MemberAwardTypeToJSON(value?: MemberAwardType | null): any;

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
import type { MembershipAwardBasedOnType } from './MembershipAwardBasedOnType';
/**
 * Information related to Member Award Issue List.
 * @export
 * @interface MembershipAwardListType
 */
export interface MembershipAwardListType {
    /**
     * The number of points actually deducted from the member's total award points if there is a penalty points restriction associated with the award cancellation.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    actualCancelPoints?: number;
    /**
     * The arrival date of the stay for when the award is associated.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    arrivalDate?: string;
    /**
     *
     * @type {MembershipAwardBasedOnType}
     * @memberof MembershipAwardListType
     */
    awardBasedOn?: MembershipAwardBasedOnType;
    /**
     * If the reservation associated with the award was cancelled, the reservation cancellation date appears here.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    awardCancelDate?: string;
    /**
     * If the award was cancelled, the system-generated award cancellation number appears here.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    awardCancellationNumber?: number;
    /**
     * Code assigned to this membership award.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    awardCode?: string;
    /**
     * An identifying number of the award, assigned by the system when the award was issued.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    awardNumber?: number;
    /**
     * Number of points required by the award.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    awardPoints?: number;
    /**
     * The source for the reservation associated with the award.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    awardSource?: string;
    /**
     * Reservation confirmation number.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    bookingNumber?: string;
    /**
     * Total calculated points to cancel an issued award.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    calculatedCancelPoints?: number;
    /**
     * The cancel days, set up in awards configuration that establishes the number of days before arrival when a reservation may be cancelled without an award points penalty.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    cancelDays?: number;
    /**
     * If this award was included on a statement, the cancel member statement ID appears here. The field is blank if the award has not yet been reported on a statement
     * @type {number}
     * @memberof MembershipAwardListType
     */
    cancelMemberStatementID?: number;
    /**
     * The award points that will be deducted (based on a cancel days restriction) if the award is cancelled. (Cancel days, set up in awards configuration, and establish the number of days before arrival when a reservation may be cancelled without an award points penalty.)
     * @type {number}
     * @memberof MembershipAwardListType
     */
    cancelPenaltyPoints?: number;
    /**
     * Type of cancel policy.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    cancelPolicyType?: string;
    /**
     * If this award was included on a statement, the cancel statement ID appears here. The field is blank if the award has not yet been reported on a statement
     * @type {number}
     * @memberof MembershipAwardListType
     */
    cancelStatementID?: number;
    /**
     * Indicates CRS Booking Number.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    crsBookNo?: string;
    /**
     * Date when the award was issued
     * @type {string}
     * @memberof MembershipAwardListType
     */
    dateAwarded?: string;
    /**
     * The date of the departure of the reservation associated with the award. There may be more than one date (multiple nights) associated with award
     * @type {string}
     * @memberof MembershipAwardListType
     */
    departureDate?: string;
    /**
     * Expiry date on the Card.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    expireDate?: string;
    /**
     * Property Reservation number.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    hotelBookingNumber?: string;
    /**
     * Property at which the award was issued.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    hotelId?: string;
    /**
     * Joined date on the Card.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    joinDate?: string;
    /**
     * If this award was included on a statement, the member statement ID appears here. The field is blank if the award has not yet been reported on a statement
     * @type {number}
     * @memberof MembershipAwardListType
     */
    memberStatementId?: number;
    /**
     * Indicates Membership Card Number.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    membershipCardNo?: string;
    /**
     * Card number of the membership.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    membershipId?: number;
    /**
     * Level of this Membership Type.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    membershipLevel?: string;
    /**
     * Membership type for which awards are defined.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    membershipType?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    nameOnCard?: string;
    /**
     * Number of nights cancel policy is applicable.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    numberOfNights?: number;
    /**
     * Indicates PMS Reservation Number.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    pmsResvNo?: string;
    /**
     * Indicates the Product associated with the award.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    product?: string;
    /**
     * Rate plan code associated with the award.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    ratePlanCode?: string;
    /**
     * If the reservation associated with the award was cancelled, the reservation cancellation number appears here.
     * @type {string}
     * @memberof MembershipAwardListType
     */
    reservationCancellationNumber?: string;
    /**
     * If this award was included on a statement, the statement ID appears here. The field is blank if the award has not yet been reported on a statement
     * @type {number}
     * @memberof MembershipAwardListType
     */
    statementId?: number;
    /**
     * The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award
     * @type {string}
     * @memberof MembershipAwardListType
     */
    stayDate?: string;
    /**
     * Indicates member is below the threshold limit or not to request award.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    thresholdPoints?: number;
    /**
     * Total award points available for redemption.
     * @type {number}
     * @memberof MembershipAwardListType
     */
    totalAvailablePoints?: number;
}
/**
 * Check if a given object implements the MembershipAwardListType interface.
 */
export declare function instanceOfMembershipAwardListType(value: object): boolean;
export declare function MembershipAwardListTypeFromJSON(json: any): MembershipAwardListType;
export declare function MembershipAwardListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardListType;
export declare function MembershipAwardListTypeToJSON(value?: MembershipAwardListType | null): any;

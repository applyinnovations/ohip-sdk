/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { MembershipAwardBasedOnType } from './MembershipAwardBasedOnType';
import {
    MembershipAwardBasedOnTypeFromJSON,
    MembershipAwardBasedOnTypeFromJSONTyped,
    MembershipAwardBasedOnTypeToJSON,
} from './MembershipAwardBasedOnType';

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
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    arrivalDate?: Date;
    /**
     * 
     * @type {MembershipAwardBasedOnType}
     * @memberof MembershipAwardListType
     */
    awardBasedOn?: MembershipAwardBasedOnType;
    /**
     * If the reservation associated with the award was cancelled, the reservation cancellation date appears here.
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    awardCancelDate?: Date;
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
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    dateAwarded?: Date;
    /**
     * The date of the departure of the reservation associated with the award. There may be more than one date (multiple nights) associated with award
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    departureDate?: Date;
    /**
     * Expiry date on the Card.
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    expireDate?: Date;
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
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    joinDate?: Date;
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
     * @type {Date}
     * @memberof MembershipAwardListType
     */
    stayDate?: Date;
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
export function instanceOfMembershipAwardListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardListTypeFromJSON(json: any): MembershipAwardListType {
    return MembershipAwardListTypeFromJSONTyped(json, false);
}

export function MembershipAwardListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualCancelPoints': !exists(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'awardBasedOn': !exists(json, 'awardBasedOn') ? undefined : MembershipAwardBasedOnTypeFromJSON(json['awardBasedOn']),
        'awardCancelDate': !exists(json, 'awardCancelDate') ? undefined : (new Date(json['awardCancelDate'])),
        'awardCancellationNumber': !exists(json, 'awardCancellationNumber') ? undefined : json['awardCancellationNumber'],
        'awardCode': !exists(json, 'awardCode') ? undefined : json['awardCode'],
        'awardNumber': !exists(json, 'awardNumber') ? undefined : json['awardNumber'],
        'awardPoints': !exists(json, 'awardPoints') ? undefined : json['awardPoints'],
        'awardSource': !exists(json, 'awardSource') ? undefined : json['awardSource'],
        'bookingNumber': !exists(json, 'bookingNumber') ? undefined : json['bookingNumber'],
        'calculatedCancelPoints': !exists(json, 'calculatedCancelPoints') ? undefined : json['calculatedCancelPoints'],
        'cancelDays': !exists(json, 'cancelDays') ? undefined : json['cancelDays'],
        'cancelMemberStatementID': !exists(json, 'cancelMemberStatementID') ? undefined : json['cancelMemberStatementID'],
        'cancelPenaltyPoints': !exists(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'cancelPolicyType': !exists(json, 'cancelPolicyType') ? undefined : json['cancelPolicyType'],
        'cancelStatementID': !exists(json, 'cancelStatementID') ? undefined : json['cancelStatementID'],
        'crsBookNo': !exists(json, 'crsBookNo') ? undefined : json['crsBookNo'],
        'dateAwarded': !exists(json, 'dateAwarded') ? undefined : (new Date(json['dateAwarded'])),
        'departureDate': !exists(json, 'departureDate') ? undefined : (new Date(json['departureDate'])),
        'expireDate': !exists(json, 'expireDate') ? undefined : (new Date(json['expireDate'])),
        'hotelBookingNumber': !exists(json, 'hotelBookingNumber') ? undefined : json['hotelBookingNumber'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'joinDate': !exists(json, 'joinDate') ? undefined : (new Date(json['joinDate'])),
        'memberStatementId': !exists(json, 'memberStatementId') ? undefined : json['memberStatementId'],
        'membershipCardNo': !exists(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'numberOfNights': !exists(json, 'numberOfNights') ? undefined : json['numberOfNights'],
        'pmsResvNo': !exists(json, 'pmsResvNo') ? undefined : json['pmsResvNo'],
        'product': !exists(json, 'product') ? undefined : json['product'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationCancellationNumber': !exists(json, 'reservationCancellationNumber') ? undefined : json['reservationCancellationNumber'],
        'statementId': !exists(json, 'statementId') ? undefined : json['statementId'],
        'stayDate': !exists(json, 'stayDate') ? undefined : (new Date(json['stayDate'])),
        'thresholdPoints': !exists(json, 'thresholdPoints') ? undefined : json['thresholdPoints'],
        'totalAvailablePoints': !exists(json, 'totalAvailablePoints') ? undefined : json['totalAvailablePoints'],
    };
}

export function MembershipAwardListTypeToJSON(value?: MembershipAwardListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualCancelPoints': value.actualCancelPoints,
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substring(0,10)),
        'awardBasedOn': MembershipAwardBasedOnTypeToJSON(value.awardBasedOn),
        'awardCancelDate': value.awardCancelDate === undefined ? undefined : (value.awardCancelDate.toISOString().substring(0,10)),
        'awardCancellationNumber': value.awardCancellationNumber,
        'awardCode': value.awardCode,
        'awardNumber': value.awardNumber,
        'awardPoints': value.awardPoints,
        'awardSource': value.awardSource,
        'bookingNumber': value.bookingNumber,
        'calculatedCancelPoints': value.calculatedCancelPoints,
        'cancelDays': value.cancelDays,
        'cancelMemberStatementID': value.cancelMemberStatementID,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'cancelPolicyType': value.cancelPolicyType,
        'cancelStatementID': value.cancelStatementID,
        'crsBookNo': value.crsBookNo,
        'dateAwarded': value.dateAwarded === undefined ? undefined : (value.dateAwarded.toISOString().substring(0,10)),
        'departureDate': value.departureDate === undefined ? undefined : (value.departureDate.toISOString().substring(0,10)),
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate.toISOString().substring(0,10)),
        'hotelBookingNumber': value.hotelBookingNumber,
        'hotelId': value.hotelId,
        'joinDate': value.joinDate === undefined ? undefined : (value.joinDate.toISOString().substring(0,10)),
        'memberStatementId': value.memberStatementId,
        'membershipCardNo': value.membershipCardNo,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'numberOfNights': value.numberOfNights,
        'pmsResvNo': value.pmsResvNo,
        'product': value.product,
        'ratePlanCode': value.ratePlanCode,
        'reservationCancellationNumber': value.reservationCancellationNumber,
        'statementId': value.statementId,
        'stayDate': value.stayDate === undefined ? undefined : (value.stayDate.toISOString().substring(0,10)),
        'thresholdPoints': value.thresholdPoints,
        'totalAvailablePoints': value.totalAvailablePoints,
    };
}

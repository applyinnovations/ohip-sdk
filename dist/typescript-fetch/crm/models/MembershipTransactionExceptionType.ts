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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';
import type { MembershipTransactionExceptionComputePointsType } from './MembershipTransactionExceptionComputePointsType';
import {
    MembershipTransactionExceptionComputePointsTypeFromJSON,
    MembershipTransactionExceptionComputePointsTypeFromJSONTyped,
    MembershipTransactionExceptionComputePointsTypeToJSON,
} from './MembershipTransactionExceptionComputePointsType';
import type { MembershipTransactionId } from './MembershipTransactionId';
import {
    MembershipTransactionIdFromJSON,
    MembershipTransactionIdFromJSONTyped,
    MembershipTransactionIdToJSON,
} from './MembershipTransactionId';
import type { MembershipTransactionTierPointsType } from './MembershipTransactionTierPointsType';
import {
    MembershipTransactionTierPointsTypeFromJSON,
    MembershipTransactionTierPointsTypeFromJSONTyped,
    MembershipTransactionTierPointsTypeToJSON,
} from './MembershipTransactionTierPointsType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details about a membership like ProfileID, Card Number, Type, Level, etc.
 * @export
 * @interface MembershipTransactionExceptionType
 */
export interface MembershipTransactionExceptionType {
    /**
     * The average rate of the stay.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    averageRate?: number;
    /**
     * The total number of base award points for this membership points transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    awardBasePoints?: number;
    /**
     * Indicates if this transaction involves bonus points, The total number of bonus points.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    awardBonusPoints?: number;
    /**
     * Indicates if back to back membership transaction exceptions have occurred or not.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    backToBack?: string;
    /**
     * Membership card expiration date.
     * @type {Date}
     * @memberof MembershipTransactionExceptionType
     */
    cardExpirationDate?: Date;
    /**
     * 
     * @type {MembershipTransactionExceptionComputePointsType}
     * @memberof MembershipTransactionExceptionType
     */
    computedPoints?: MembershipTransactionExceptionComputePointsType;
    /**
     * Indicates the type of Exception like Exception not resolved,Points Rejected on Exception etc.,
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    exceptionType?: number;
    /**
     * 
     * @type {DateRangeType}
     * @memberof MembershipTransactionExceptionType
     */
    fromToRangeDate?: DateRangeType;
    /**
     * Hotel code of the membership transaction exceptions.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    hotelId?: string;
    /**
     * Date when the member enrolled for the membership.
     * @type {Date}
     * @memberof MembershipTransactionExceptionType
     */
    joinedDate?: Date;
    /**
     * The card number associated with this membership.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    membershipCardNo?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof MembershipTransactionExceptionType
     */
    membershipId?: UniqueIDType;
    /**
     * The current level of the membership.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    membershipLevel?: string;
    /**
     * 
     * @type {MembershipTransactionId}
     * @memberof MembershipTransactionExceptionType
     */
    membershipTransactionId?: MembershipTransactionId;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof MembershipTransactionExceptionType
     */
    membershipType?: CodeDescriptionType;
    /**
     * The profile name associated with this membership.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    name?: string;
    /**
     * Points Calculated value(Y/N) for the selected transaction.
     * @type {boolean}
     * @memberof MembershipTransactionExceptionType
     */
    pointsCalculate?: boolean;
    /**
     * The systems records and notes identifying the exception criteria.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    processingMessages?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof MembershipTransactionExceptionType
     */
    profileId?: ProfileId;
    /**
     * Any reference like reservation no etc against which the certificate was consumed.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    reservationNumber?: string;
    /**
     * If multiple room membership transaction exceptions occurred, the number of rooms booked.(MR)
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    roomsBooked?: number;
    /**
     * 
     * @type {MembershipTransactionTierPointsType}
     * @memberof MembershipTransactionExceptionType
     */
    tierPoints?: MembershipTransactionTierPointsType;
    /**
     * Tier stay points associated with this membership points transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    tierStays?: number;
    /**
     * Award points associated with this membership points transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    totalAwardPoints?: number;
    /**
     * Tier night points associated with this membership points transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    totalNights?: number;
    /**
     * The total number of award points associated with this transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    totalPoints?: number;
    /**
     * Tier revenue points associated with this membership points transaction.
     * @type {number}
     * @memberof MembershipTransactionExceptionType
     */
    totalRevenue?: number;
    /**
     * Notes regarding the resolution of the membership transaction exception or for any other reason.
     * @type {string}
     * @memberof MembershipTransactionExceptionType
     */
    userNotes?: string;
}

/**
 * Check if a given object implements the MembershipTransactionExceptionType interface.
 */
export function instanceOfMembershipTransactionExceptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTransactionExceptionTypeFromJSON(json: any): MembershipTransactionExceptionType {
    return MembershipTransactionExceptionTypeFromJSONTyped(json, false);
}

export function MembershipTransactionExceptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTransactionExceptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageRate': !exists(json, 'averageRate') ? undefined : json['averageRate'],
        'awardBasePoints': !exists(json, 'awardBasePoints') ? undefined : json['awardBasePoints'],
        'awardBonusPoints': !exists(json, 'awardBonusPoints') ? undefined : json['awardBonusPoints'],
        'backToBack': !exists(json, 'backToBack') ? undefined : json['backToBack'],
        'cardExpirationDate': !exists(json, 'cardExpirationDate') ? undefined : (new Date(json['cardExpirationDate'])),
        'computedPoints': !exists(json, 'computedPoints') ? undefined : MembershipTransactionExceptionComputePointsTypeFromJSON(json['computedPoints']),
        'exceptionType': !exists(json, 'exceptionType') ? undefined : json['exceptionType'],
        'fromToRangeDate': !exists(json, 'fromToRangeDate') ? undefined : DateRangeTypeFromJSON(json['fromToRangeDate']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'joinedDate': !exists(json, 'joinedDate') ? undefined : (new Date(json['joinedDate'])),
        'membershipCardNo': !exists(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipId': !exists(json, 'membershipId') ? undefined : UniqueIDTypeFromJSON(json['membershipId']),
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipTransactionId': !exists(json, 'membershipTransactionId') ? undefined : MembershipTransactionIdFromJSON(json['membershipTransactionId']),
        'membershipType': !exists(json, 'membershipType') ? undefined : CodeDescriptionTypeFromJSON(json['membershipType']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pointsCalculate': !exists(json, 'pointsCalculate') ? undefined : json['pointsCalculate'],
        'processingMessages': !exists(json, 'processingMessages') ? undefined : json['processingMessages'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationNumber': !exists(json, 'reservationNumber') ? undefined : json['reservationNumber'],
        'roomsBooked': !exists(json, 'roomsBooked') ? undefined : json['roomsBooked'],
        'tierPoints': !exists(json, 'tierPoints') ? undefined : MembershipTransactionTierPointsTypeFromJSON(json['tierPoints']),
        'tierStays': !exists(json, 'tierStays') ? undefined : json['tierStays'],
        'totalAwardPoints': !exists(json, 'totalAwardPoints') ? undefined : json['totalAwardPoints'],
        'totalNights': !exists(json, 'totalNights') ? undefined : json['totalNights'],
        'totalPoints': !exists(json, 'totalPoints') ? undefined : json['totalPoints'],
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : json['totalRevenue'],
        'userNotes': !exists(json, 'userNotes') ? undefined : json['userNotes'],
    };
}

export function MembershipTransactionExceptionTypeToJSON(value?: MembershipTransactionExceptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageRate': value.averageRate,
        'awardBasePoints': value.awardBasePoints,
        'awardBonusPoints': value.awardBonusPoints,
        'backToBack': value.backToBack,
        'cardExpirationDate': value.cardExpirationDate === undefined ? undefined : (value.cardExpirationDate.toISOString().substr(0,10)),
        'computedPoints': MembershipTransactionExceptionComputePointsTypeToJSON(value.computedPoints),
        'exceptionType': value.exceptionType,
        'fromToRangeDate': DateRangeTypeToJSON(value.fromToRangeDate),
        'hotelId': value.hotelId,
        'joinedDate': value.joinedDate === undefined ? undefined : (value.joinedDate.toISOString().substr(0,10)),
        'membershipCardNo': value.membershipCardNo,
        'membershipId': UniqueIDTypeToJSON(value.membershipId),
        'membershipLevel': value.membershipLevel,
        'membershipTransactionId': MembershipTransactionIdToJSON(value.membershipTransactionId),
        'membershipType': CodeDescriptionTypeToJSON(value.membershipType),
        'name': value.name,
        'pointsCalculate': value.pointsCalculate,
        'processingMessages': value.processingMessages,
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationNumber': value.reservationNumber,
        'roomsBooked': value.roomsBooked,
        'tierPoints': MembershipTransactionTierPointsTypeToJSON(value.tierPoints),
        'tierStays': value.tierStays,
        'totalAwardPoints': value.totalAwardPoints,
        'totalNights': value.totalNights,
        'totalPoints': value.totalPoints,
        'totalRevenue': value.totalRevenue,
        'userNotes': value.userNotes,
    };
}


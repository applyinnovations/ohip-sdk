/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MemberAwardActionType } from './MemberAwardActionType';
import {
    MemberAwardActionTypeFromJSON,
    MemberAwardActionTypeFromJSONTyped,
    MemberAwardActionTypeToJSON,
} from './MemberAwardActionType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details related to member award like award type, stay date, rate code, etc.
 * @export
 * @interface MemberAwardDetailType
 */
export interface MemberAwardDetailType {
    /**
     * 
     * @type {MemberAwardActionType}
     * @memberof MemberAwardDetailType
     */
    actionType?: MemberAwardActionType;
    /**
     * Actual number of cancel points.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    actualCancelPoints?: number;
    /**
     * Indicates if award is a Stay, Package Element or other.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardBasedOn?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof MemberAwardDetailType
     */
    awardCancellationNo?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof MemberAwardDetailType
     */
    awardProductId?: UniqueIDType;
    /**
     * The award type or code.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardType?: string;
    /**
     * Award Voucher Number.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardVoucherNo?: string;
    /**
     * Number points deducted if award is cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyCharge?: number;
    /**
     * Number days before arrival to apply penalty for cancellation.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyDays?: number;
    /**
     * Number of penalty points if cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyPoints?: number;
    /**
     * Type of cancel penalty like Points, etc.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyType?: string;
    /**
     * Type of cancel policy.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    cancelPolicyType?: string;
    /**
     * Exchange Rate Type for the Currency Exchange.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    exchangeRateType?: string;
    /**
     * Room type label before the upgrade in case of an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    fromRoomType?: string;
    /**
     * If the award detail is inactive.
     * @type {boolean}
     * @memberof MemberAwardDetailType
     */
    inactive?: boolean;
    /**
     * Number of nights cancel policy is applicable.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    numberOfNights?: number;
    /**
     * Points required for the stay date.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    pointsRequired?: number;
    /**
     * Product code for which the award was issued, in case of a product award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    product?: string;
    /**
     * Rate code associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    rateCode?: string;
    /**
     * Redeemed Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedCentralAmount?: number;
    /**
     * Redeemed Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedLocalAmount?: number;
    /**
     * Room type label associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    roomType?: string;
    /**
     * Date of stay.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    stayDate?: string;
    /**
     * Room type label after the upgrade for an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    toRoomType?: string;
    /**
     * Total Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalCentralAmount?: number;
    /**
     * Total Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalLocalAmount?: number;
    /**
     * The Payment Transaction Code for which the Surcharge Applies.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    transactionCode?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    transactionNo?: number;
}

/**
 * Check if a given object implements the MemberAwardDetailType interface.
 */
export function instanceOfMemberAwardDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MemberAwardDetailTypeFromJSON(json: any): MemberAwardDetailType {
    return MemberAwardDetailTypeFromJSONTyped(json, false);
}

export function MemberAwardDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberAwardDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionType': !exists(json, 'actionType') ? undefined : MemberAwardActionTypeFromJSON(json['actionType']),
        'actualCancelPoints': !exists(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'awardBasedOn': !exists(json, 'awardBasedOn') ? undefined : json['awardBasedOn'],
        'awardCancellationNo': !exists(json, 'awardCancellationNo') ? undefined : UniqueIDTypeFromJSON(json['awardCancellationNo']),
        'awardProductId': !exists(json, 'awardProductId') ? undefined : UniqueIDTypeFromJSON(json['awardProductId']),
        'awardType': !exists(json, 'awardType') ? undefined : json['awardType'],
        'awardVoucherNo': !exists(json, 'awardVoucherNo') ? undefined : json['awardVoucherNo'],
        'cancelPenaltyCharge': !exists(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyDays': !exists(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyPoints': !exists(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'cancelPenaltyType': !exists(json, 'cancelPenaltyType') ? undefined : json['cancelPenaltyType'],
        'cancelPolicyType': !exists(json, 'cancelPolicyType') ? undefined : json['cancelPolicyType'],
        'exchangeRateType': !exists(json, 'exchangeRateType') ? undefined : json['exchangeRateType'],
        'fromRoomType': !exists(json, 'fromRoomType') ? undefined : json['fromRoomType'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'numberOfNights': !exists(json, 'numberOfNights') ? undefined : json['numberOfNights'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'product': !exists(json, 'product') ? undefined : json['product'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'redeemedCentralAmount': !exists(json, 'redeemedCentralAmount') ? undefined : json['redeemedCentralAmount'],
        'redeemedLocalAmount': !exists(json, 'redeemedLocalAmount') ? undefined : json['redeemedLocalAmount'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'stayDate': !exists(json, 'stayDate') ? undefined : json['stayDate'],
        'toRoomType': !exists(json, 'toRoomType') ? undefined : json['toRoomType'],
        'totalCentralAmount': !exists(json, 'totalCentralAmount') ? undefined : json['totalCentralAmount'],
        'totalLocalAmount': !exists(json, 'totalLocalAmount') ? undefined : json['totalLocalAmount'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}

export function MemberAwardDetailTypeToJSON(value?: MemberAwardDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionType': MemberAwardActionTypeToJSON(value.actionType),
        'actualCancelPoints': value.actualCancelPoints,
        'awardBasedOn': value.awardBasedOn,
        'awardCancellationNo': UniqueIDTypeToJSON(value.awardCancellationNo),
        'awardProductId': UniqueIDTypeToJSON(value.awardProductId),
        'awardType': value.awardType,
        'awardVoucherNo': value.awardVoucherNo,
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'cancelPenaltyType': value.cancelPenaltyType,
        'cancelPolicyType': value.cancelPolicyType,
        'exchangeRateType': value.exchangeRateType,
        'fromRoomType': value.fromRoomType,
        'inactive': value.inactive,
        'numberOfNights': value.numberOfNights,
        'pointsRequired': value.pointsRequired,
        'product': value.product,
        'rateCode': value.rateCode,
        'redeemedCentralAmount': value.redeemedCentralAmount,
        'redeemedLocalAmount': value.redeemedLocalAmount,
        'roomType': value.roomType,
        'stayDate': value.stayDate,
        'toRoomType': value.toRoomType,
        'totalCentralAmount': value.totalCentralAmount,
        'totalLocalAmount': value.totalLocalAmount,
        'transactionCode': value.transactionCode,
        'transactionNo': value.transactionNo,
    };
}

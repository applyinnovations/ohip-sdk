/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
     * The award type or code.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardType?: string;
    /**
     * Indicates if award is a Stay, Package Element or other.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardBasedOn?: string;
    /**
     * Number days before arrival to apply penalty for cancellation.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyDays?: number;
    /**
     * Number points deducted if award is cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyCharge?: number;
    /**
     * Type of cancel penalty like Points, etc.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyType?: string;
    /**
     * Number of penalty points if cancelled.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    cancelPenaltyPoints?: number;
    /**
     * Date of stay.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    stayDate?: string;
    /**
     * Rate code associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    rateCode?: string;
    /**
     * Room type label associated with the reservation.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    roomType?: string;
    /**
     * Product code for which the award was issued, in case of a product award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    product?: string;
    /**
     * Room type label before the upgrade in case of an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    fromRoomType?: string;
    /**
     * Room type label after the upgrade for an upgrade award.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    toRoomType?: string;
    /**
     * Total Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalLocalAmount?: number;
    /**
     * Redeemed Local Amount on bill in Hotel Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedLocalAmount?: number;
    /**
     * Total Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    totalCentralAmount?: number;
    /**
     * Redeemed Central Amount on bill in External System Currency.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    redeemedCentralAmount?: number;
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
    /**
     * Exchange Rate Type for the Currency Exchange.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    exchangeRateType?: string;
    /**
     * Award Voucher Number.
     * @type {string}
     * @memberof MemberAwardDetailType
     */
    awardVoucherNo?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof MemberAwardDetailType
     */
    awardCancellationNo?: UniqueIDType;
    /**
     * If the award detail is inactive.
     * @type {boolean}
     * @memberof MemberAwardDetailType
     */
    inactive?: boolean;
    /**
     * Points required for the stay date.
     * @type {number}
     * @memberof MemberAwardDetailType
     */
    pointsRequired?: number;
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
        
        'awardType': !exists(json, 'awardType') ? undefined : json['awardType'],
        'awardBasedOn': !exists(json, 'awardBasedOn') ? undefined : json['awardBasedOn'],
        'cancelPenaltyDays': !exists(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyCharge': !exists(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyType': !exists(json, 'cancelPenaltyType') ? undefined : json['cancelPenaltyType'],
        'cancelPenaltyPoints': !exists(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'stayDate': !exists(json, 'stayDate') ? undefined : json['stayDate'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'product': !exists(json, 'product') ? undefined : json['product'],
        'fromRoomType': !exists(json, 'fromRoomType') ? undefined : json['fromRoomType'],
        'toRoomType': !exists(json, 'toRoomType') ? undefined : json['toRoomType'],
        'totalLocalAmount': !exists(json, 'totalLocalAmount') ? undefined : json['totalLocalAmount'],
        'redeemedLocalAmount': !exists(json, 'redeemedLocalAmount') ? undefined : json['redeemedLocalAmount'],
        'totalCentralAmount': !exists(json, 'totalCentralAmount') ? undefined : json['totalCentralAmount'],
        'redeemedCentralAmount': !exists(json, 'redeemedCentralAmount') ? undefined : json['redeemedCentralAmount'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'exchangeRateType': !exists(json, 'exchangeRateType') ? undefined : json['exchangeRateType'],
        'awardVoucherNo': !exists(json, 'awardVoucherNo') ? undefined : json['awardVoucherNo'],
        'awardCancellationNo': !exists(json, 'awardCancellationNo') ? undefined : UniqueIDTypeFromJSON(json['awardCancellationNo']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
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
        
        'awardType': value.awardType,
        'awardBasedOn': value.awardBasedOn,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyType': value.cancelPenaltyType,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'stayDate': value.stayDate,
        'rateCode': value.rateCode,
        'roomType': value.roomType,
        'product': value.product,
        'fromRoomType': value.fromRoomType,
        'toRoomType': value.toRoomType,
        'totalLocalAmount': value.totalLocalAmount,
        'redeemedLocalAmount': value.redeemedLocalAmount,
        'totalCentralAmount': value.totalCentralAmount,
        'redeemedCentralAmount': value.redeemedCentralAmount,
        'transactionCode': value.transactionCode,
        'transactionNo': value.transactionNo,
        'exchangeRateType': value.exchangeRateType,
        'awardVoucherNo': value.awardVoucherNo,
        'awardCancellationNo': UniqueIDTypeToJSON(value.awardCancellationNo),
        'inactive': value.inactive,
        'pointsRequired': value.pointsRequired,
    };
}


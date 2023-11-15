/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This type contains information of a membership award attached to a reservation.
 * @export
 * @interface ReservationMembershipAwardType
 */
export interface ReservationMembershipAwardType {
    /**
     * The number of points actually deducted from the member's total award points if there is a penalty points restriction associated with the award cancellation.
     * @type {number}
     * @memberof ReservationMembershipAwardType
     */
    actualCancelPoints?: number;
    /**
     * The arrival date of the stay for when the award is associated.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    arrivalDate?: string;
    /**
     * Indicates if the Award is based on RATE, PRODUCT or UPGRADE.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    awardBasedOn?: string;
    /**
     * If the reservation associated with the award was cancelled, the reservation cancellation date appears here.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    awardCancelDate?: string;
    /**
     * Unique ID for the award cancellation if cancelled.
     * @type {number}
     * @memberof ReservationMembershipAwardType
     */
    awardCancellationNo?: number;
    /**
     * Unique code that identifies this award.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    awardType?: string;
    /**
     * The cancel days, set up in awards configuration that establishes the number of days before arrival when a reservation may be cancelled without an award points penalty.
     * @type {number}
     * @memberof ReservationMembershipAwardType
     */
    cancelPenaltyDays?: number;
    /**
     * The award points that will be deducted (based on a cancel days restriction) if the award is cancelled. (Cancel days, set up in awards configuration, and establish the number of days before arrival when a reservation may be cancelled without an award points penalty).
     * @type {number}
     * @memberof ReservationMembershipAwardType
     */
    cancelPenaltyPoints?: number;
    /**
     * Date when the award was issued.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    dateAwarded?: string;
    /**
     * The card number associated with this membership.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    membershipCardNo?: string;
    /**
     * Membership type for which awards are defined.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    membershipType?: string;
    /**
     * Name to be displayed on the membership card.
     * @type {string}
     * @memberof ReservationMembershipAwardType
     */
    nameOnCard?: string;
    /**
     * Number of points required for the award.
     * @type {number}
     * @memberof ReservationMembershipAwardType
     */
    pointsRequired?: number;
}

/**
 * Check if a given object implements the ReservationMembershipAwardType interface.
 */
export function instanceOfReservationMembershipAwardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationMembershipAwardTypeFromJSON(json: any): ReservationMembershipAwardType {
    return ReservationMembershipAwardTypeFromJSONTyped(json, false);
}

export function ReservationMembershipAwardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationMembershipAwardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualCancelPoints': !exists(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'awardBasedOn': !exists(json, 'awardBasedOn') ? undefined : json['awardBasedOn'],
        'awardCancelDate': !exists(json, 'awardCancelDate') ? undefined : json['awardCancelDate'],
        'awardCancellationNo': !exists(json, 'awardCancellationNo') ? undefined : json['awardCancellationNo'],
        'awardType': !exists(json, 'awardType') ? undefined : json['awardType'],
        'cancelPenaltyDays': !exists(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyPoints': !exists(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'dateAwarded': !exists(json, 'dateAwarded') ? undefined : json['dateAwarded'],
        'membershipCardNo': !exists(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !exists(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
    };
}

export function ReservationMembershipAwardTypeToJSON(value?: ReservationMembershipAwardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualCancelPoints': value.actualCancelPoints,
        'arrivalDate': value.arrivalDate,
        'awardBasedOn': value.awardBasedOn,
        'awardCancelDate': value.awardCancelDate,
        'awardCancellationNo': value.awardCancellationNo,
        'awardType': value.awardType,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'dateAwarded': value.dateAwarded,
        'membershipCardNo': value.membershipCardNo,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'pointsRequired': value.pointsRequired,
    };
}


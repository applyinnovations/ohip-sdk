/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CompanyDetails } from './CompanyDetails';
import {
    CompanyDetailsFromJSON,
    CompanyDetailsFromJSONTyped,
    CompanyDetailsToJSON,
} from './CompanyDetails';
import type { DistinctIDType } from './DistinctIDType';
import {
    DistinctIDTypeFromJSON,
    DistinctIDTypeFromJSONTyped,
    DistinctIDTypeToJSON,
} from './DistinctIDType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import {
    ExternalReferenceTypeFromJSON,
    ExternalReferenceTypeFromJSONTyped,
    ExternalReferenceTypeToJSON,
} from './ExternalReferenceType';
import type { GroupDetails } from './GroupDetails';
import {
    GroupDetailsFromJSON,
    GroupDetailsFromJSONTyped,
    GroupDetailsToJSON,
} from './GroupDetails';
import type { GuestDetails } from './GuestDetails';
import {
    GuestDetailsFromJSON,
    GuestDetailsFromJSONTyped,
    GuestDetailsToJSON,
} from './GuestDetails';
import type { MembershipDetails } from './MembershipDetails';
import {
    MembershipDetailsFromJSON,
    MembershipDetailsFromJSONTyped,
    MembershipDetailsToJSON,
} from './MembershipDetails';
import type { ReservationDates } from './ReservationDates';
import {
    ReservationDatesFromJSON,
    ReservationDatesFromJSONTyped,
    ReservationDatesToJSON,
} from './ReservationDates';
import type { TravelAgentDetails } from './TravelAgentDetails';
import {
    TravelAgentDetailsFromJSON,
    TravelAgentDetailsFromJSONTyped,
    TravelAgentDetailsToJSON,
} from './TravelAgentDetails';

/**
 * Reservations Information.
 * @export
 * @interface ReservationsInformationType
 */
export interface ReservationsInformationType {
    /**
     * Total number of adults.
     * @type {number}
     * @memberof ReservationsInformationType
     */
    adults?: number;
    /**
     * Indicates if the reservation has performed an Advance Check In.
     * @type {boolean}
     * @memberof ReservationsInformationType
     */
    advancedCheckedIn?: boolean;
    /**
     * Total share amount.
     * @type {number}
     * @memberof ReservationsInformationType
     */
    amount?: number;
    /**
     * Arrival Time of reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    arrivalTime?: string;
    /**
     * Balance.
     * @type {number}
     * @memberof ReservationsInformationType
     */
    balance?: number;
    /**
     * Unique identifiers for Blocks. Eg: BlockId, BlockCode
     * @type {Array<DistinctIDType>}
     * @memberof ReservationsInformationType
     */
    blockIdList?: Array<DistinctIDType>;
    /**
     * Booked Room Type.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    bookedRoomType?: string;
    /**
     * Number of children.
     * @type {number}
     * @memberof ReservationsInformationType
     */
    children?: number;
    /**
     * 
     * @type {CompanyDetails}
     * @memberof ReservationsInformationType
     */
    companyDetails?: CompanyDetails;
    /**
     * Computed reservation status.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    computedReservationStatus?: string;
    /**
     * Internal User ID used to create reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    creatorId?: string;
    /**
     * Currency code.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    currencyCode?: string;
    /**
     * Departure Time of reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    departureTime?: string;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof ReservationsInformationType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     * 
     * @type {GroupDetails}
     * @memberof ReservationsInformationType
     */
    groupDetails?: GroupDetails;
    /**
     * Reservation guarantee code.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    guaranteeCode?: string;
    /**
     * 
     * @type {GuestDetails}
     * @memberof ReservationsInformationType
     */
    guestDetails?: GuestDetails;
    /**
     * Property code.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    hotelId?: string;
    /**
     * Internal User ID used to update the reservation details.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    lastModifierId?: string;
    /**
     * Party code.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    linkCode?: string;
    /**
     * Market code of the reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    marketCode?: string;
    /**
     * 
     * @type {MembershipDetails}
     * @memberof ReservationsInformationType
     */
    membershipDetails?: MembershipDetails;
    /**
     * Number of Nights
     * @type {number}
     * @memberof ReservationsInformationType
     */
    nights?: number;
    /**
     * Number of rooms.
     * @type {number}
     * @memberof ReservationsInformationType
     */
    noOfRooms?: number;
    /**
     * Channel used to create the reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    originCode?: string;
    /**
     * Payment method used for the reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    paymentType?: string;
    /**
     * Indicates whether the reservation is pre-registered for internet check-in or not.
     * @type {boolean}
     * @memberof ReservationsInformationType
     */
    preRegistered?: boolean;
    /**
     * Promotion Code for the Reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    promotionCode?: string;
    /**
     * Rate code used for the reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    rateCode?: string;
    /**
     * Registration card number.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    registrationCardNumber?: string;
    /**
     * 
     * @type {ReservationDates}
     * @memberof ReservationsInformationType
     */
    reservationDates?: ReservationDates;
    /**
     * Unique identifiers for both internal and external systems Eg: ReservationId, ConfirmationNumber, CancellationNumber, ExternalReferenceNumber etc
     * @type {Array<DistinctIDType>}
     * @memberof ReservationsInformationType
     */
    reservationIdList?: Array<DistinctIDType>;
    /**
     * Reservation status.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    reservationStatus?: string;
    /**
     * Room Number.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    roomId?: string;
    /**
     * Room Type.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    roomType?: string;
    /**
     * Indicates if the reservation is shared or not.
     * @type {boolean}
     * @memberof ReservationsInformationType
     */
    shared?: boolean;
    /**
     * Source of the created reservation.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    sourceCode?: string;
    /**
     * 
     * @type {TravelAgentDetails}
     * @memberof ReservationsInformationType
     */
    travelAgentDetails?: TravelAgentDetails;
    /**
     * VIP Status.
     * @type {string}
     * @memberof ReservationsInformationType
     */
    vipStatus?: string;
}

/**
 * Check if a given object implements the ReservationsInformationType interface.
 */
export function instanceOfReservationsInformationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationsInformationTypeFromJSON(json: any): ReservationsInformationType {
    return ReservationsInformationTypeFromJSONTyped(json, false);
}

export function ReservationsInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationsInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adults': !exists(json, 'adults') ? undefined : json['adults'],
        'advancedCheckedIn': !exists(json, 'advancedCheckedIn') ? undefined : json['advancedCheckedIn'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'arrivalTime': !exists(json, 'arrivalTime') ? undefined : json['arrivalTime'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(DistinctIDTypeFromJSON)),
        'bookedRoomType': !exists(json, 'bookedRoomType') ? undefined : json['bookedRoomType'],
        'children': !exists(json, 'children') ? undefined : json['children'],
        'companyDetails': !exists(json, 'companyDetails') ? undefined : CompanyDetailsFromJSON(json['companyDetails']),
        'computedReservationStatus': !exists(json, 'computedReservationStatus') ? undefined : json['computedReservationStatus'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'departureTime': !exists(json, 'departureTime') ? undefined : json['departureTime'],
        'externalReferences': !exists(json, 'externalReferences') ? undefined : ((json['externalReferences'] as Array<any>).map(ExternalReferenceTypeFromJSON)),
        'groupDetails': !exists(json, 'groupDetails') ? undefined : GroupDetailsFromJSON(json['groupDetails']),
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'guestDetails': !exists(json, 'guestDetails') ? undefined : GuestDetailsFromJSON(json['guestDetails']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'linkCode': !exists(json, 'linkCode') ? undefined : json['linkCode'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'membershipDetails': !exists(json, 'membershipDetails') ? undefined : MembershipDetailsFromJSON(json['membershipDetails']),
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        'noOfRooms': !exists(json, 'noOfRooms') ? undefined : json['noOfRooms'],
        'originCode': !exists(json, 'originCode') ? undefined : json['originCode'],
        'paymentType': !exists(json, 'paymentType') ? undefined : json['paymentType'],
        'preRegistered': !exists(json, 'preRegistered') ? undefined : json['preRegistered'],
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'registrationCardNumber': !exists(json, 'registrationCardNumber') ? undefined : json['registrationCardNumber'],
        'reservationDates': !exists(json, 'reservationDates') ? undefined : ReservationDatesFromJSON(json['reservationDates']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(DistinctIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : json['reservationStatus'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'shared': !exists(json, 'shared') ? undefined : json['shared'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'travelAgentDetails': !exists(json, 'travelAgentDetails') ? undefined : TravelAgentDetailsFromJSON(json['travelAgentDetails']),
        'vipStatus': !exists(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}

export function ReservationsInformationTypeToJSON(value?: ReservationsInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adults': value.adults,
        'advancedCheckedIn': value.advancedCheckedIn,
        'amount': value.amount,
        'arrivalTime': value.arrivalTime,
        'balance': value.balance,
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(DistinctIDTypeToJSON)),
        'bookedRoomType': value.bookedRoomType,
        'children': value.children,
        'companyDetails': CompanyDetailsToJSON(value.companyDetails),
        'computedReservationStatus': value.computedReservationStatus,
        'creatorId': value.creatorId,
        'currencyCode': value.currencyCode,
        'departureTime': value.departureTime,
        'externalReferences': value.externalReferences === undefined ? undefined : ((value.externalReferences as Array<any>).map(ExternalReferenceTypeToJSON)),
        'groupDetails': GroupDetailsToJSON(value.groupDetails),
        'guaranteeCode': value.guaranteeCode,
        'guestDetails': GuestDetailsToJSON(value.guestDetails),
        'hotelId': value.hotelId,
        'lastModifierId': value.lastModifierId,
        'linkCode': value.linkCode,
        'marketCode': value.marketCode,
        'membershipDetails': MembershipDetailsToJSON(value.membershipDetails),
        'nights': value.nights,
        'noOfRooms': value.noOfRooms,
        'originCode': value.originCode,
        'paymentType': value.paymentType,
        'preRegistered': value.preRegistered,
        'promotionCode': value.promotionCode,
        'rateCode': value.rateCode,
        'registrationCardNumber': value.registrationCardNumber,
        'reservationDates': ReservationDatesToJSON(value.reservationDates),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(DistinctIDTypeToJSON)),
        'reservationStatus': value.reservationStatus,
        'roomId': value.roomId,
        'roomType': value.roomType,
        'shared': value.shared,
        'sourceCode': value.sourceCode,
        'travelAgentDetails': TravelAgentDetailsToJSON(value.travelAgentDetails),
        'vipStatus': value.vipStatus,
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Asynchronous API
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DailySummaryType } from './DailySummaryType';
import {
    DailySummaryTypeFromJSON,
    DailySummaryTypeFromJSONTyped,
    DailySummaryTypeToJSON,
} from './DailySummaryType';
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Daily summary information related to a reservation.
 * @export
 * @interface ReservationDailySummaryType
 */
export interface ReservationDailySummaryType {
    /**
     * 
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    arrival?: string;
    /**
     * Block code of the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    blockCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    bookingDate?: string;
    /**
     * Classifies the medium(Channel field on reservation screen) through which the reservation is made. Either bookingMedium or origin_of_booking will be present in the response.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    bookingMedium?: string;
    /**
     * The date the reservation was canceled.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    cancellationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    cancellationReasonCode?: string;
    /**
     * The date the reservation was checked out.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    checkedOutDate?: string;
    /**
     * Number of children classified under the first Age Qualifying Group.
     * @type {number}
     * @memberof ReservationDailySummaryType
     */
    children1?: number;
    /**
     * Number of children classified under the second Age Qualifying Group.
     * @type {number}
     * @memberof ReservationDailySummaryType
     */
    children2?: number;
    /**
     * Number of children classified under the third Age Qualifying Group.
     * @type {number}
     * @memberof ReservationDailySummaryType
     */
    children3?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDailySummaryType
     */
    companyId?: UniqueIDType;
    /**
     * Name of the company for the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    companyName?: string;
    /**
     * Business Date when the reservation was created.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    createDateTime?: string;
    /**
     * Collection of daily summary for the reservation.
     * @type {Array<DailySummaryType>}
     * @memberof ReservationDailySummaryType
     */
    dailySummary?: Array<DailySummaryType>;
    /**
     * 
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    departure?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDailySummaryType
     */
    groupId?: UniqueIDType;
    /**
     * Name of the group for the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    groupName?: string;
    /**
     * Country code for guest's primary address.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    guestCountry?: string;
    /**
     * IATA Code.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    iataCode?: string;
    /**
     * Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    lastModifiedDate?: string;
    /**
     * Business Date when the reservation was modified.Either lastModifiedDateTime or lastModifiedDate will be returned.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    lastModifiedDateTime?: string;
    /**
     * Card Number of the membership.Either membershipId or membershipNumber will be returned.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    membershipId?: string;
    /**
     * Indicates the membership level.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    membershipLevel?: string;
    /**
     * Card Number of the membership.Either membershipId or membershipNumber will be returned.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    membershipNumber?: string;
    /**
     * Type of membership.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    membershipType?: string;
    /**
     * Affiliation or ethnicity to a particular country.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    nationality?: string;
    /**
     * Number of rooms of the reservation.
     * @type {number}
     * @memberof ReservationDailySummaryType
     */
    noOfRooms?: number;
    /**
     * Classifies the medium(Channel field on reservation screen) through which the reservation is made.Either bookingMedium or origin_of_booking will be present in the response.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    originOfBooking?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationDailySummaryType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDailySummaryType
     */
    resvContactId?: UniqueIDType;
    /**
     * Name of the contact for the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    resvContactName?: string;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof ReservationDailySummaryType
     */
    resvStatus?: PMSResStatusType;
    /**
     * Type of the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    resvType?: string;
    /**
     * Indicates whether the reservation has any sharers. Y indicates true and N indicates false.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    sharedYn?: string;
    /**
     * Collection of Confirmation Numbers of Sharers.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    sharersList?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDailySummaryType
     */
    sourceId?: UniqueIDType;
    /**
     * Name of the source for the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    sourceName?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationDailySummaryType
     */
    travelAgentId?: UniqueIDType;
    /**
     * Name of the travel agent for the reservation.
     * @type {string}
     * @memberof ReservationDailySummaryType
     */
    travelAgentName?: string;
}

/**
 * Check if a given object implements the ReservationDailySummaryType interface.
 */
export function instanceOfReservationDailySummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationDailySummaryTypeFromJSON(json: any): ReservationDailySummaryType {
    return ReservationDailySummaryTypeFromJSONTyped(json, false);
}

export function ReservationDailySummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDailySummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrival': !exists(json, 'arrival') ? undefined : json['arrival'],
        'blockCode': !exists(json, 'blockCode') ? undefined : json['blockCode'],
        'bookingDate': !exists(json, 'bookingDate') ? undefined : json['bookingDate'],
        'bookingMedium': !exists(json, 'bookingMedium') ? undefined : json['bookingMedium'],
        'cancellationDate': !exists(json, 'cancellationDate') ? undefined : json['cancellationDate'],
        'cancellationReasonCode': !exists(json, 'cancellationReasonCode') ? undefined : json['cancellationReasonCode'],
        'checkedOutDate': !exists(json, 'checkedOutDate') ? undefined : json['checkedOutDate'],
        'children1': !exists(json, 'children1') ? undefined : json['children1'],
        'children2': !exists(json, 'children2') ? undefined : json['children2'],
        'children3': !exists(json, 'children3') ? undefined : json['children3'],
        'companyId': !exists(json, 'companyId') ? undefined : UniqueIDTypeFromJSON(json['companyId']),
        'companyName': !exists(json, 'companyName') ? undefined : json['companyName'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'dailySummary': !exists(json, 'dailySummary') ? undefined : ((json['dailySummary'] as Array<any>).map(DailySummaryTypeFromJSON)),
        'departure': !exists(json, 'departure') ? undefined : json['departure'],
        'groupId': !exists(json, 'groupId') ? undefined : UniqueIDTypeFromJSON(json['groupId']),
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'guestCountry': !exists(json, 'guestCountry') ? undefined : json['guestCountry'],
        'iataCode': !exists(json, 'iataCode') ? undefined : json['iataCode'],
        'lastModifiedDate': !exists(json, 'lastModifiedDate') ? undefined : json['lastModifiedDate'],
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : json['lastModifiedDateTime'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipNumber': !exists(json, 'membershipNumber') ? undefined : json['membershipNumber'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'noOfRooms': !exists(json, 'noOfRooms') ? undefined : json['noOfRooms'],
        'originOfBooking': !exists(json, 'origin_of_booking') ? undefined : json['origin_of_booking'],
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'resvContactId': !exists(json, 'resvContactId') ? undefined : UniqueIDTypeFromJSON(json['resvContactId']),
        'resvContactName': !exists(json, 'resvContactName') ? undefined : json['resvContactName'],
        'resvStatus': !exists(json, 'resvStatus') ? undefined : PMSResStatusTypeFromJSON(json['resvStatus']),
        'resvType': !exists(json, 'resvType') ? undefined : json['resvType'],
        'sharedYn': !exists(json, 'sharedYn') ? undefined : json['sharedYn'],
        'sharersList': !exists(json, 'sharersList') ? undefined : json['sharersList'],
        'sourceId': !exists(json, 'sourceId') ? undefined : UniqueIDTypeFromJSON(json['sourceId']),
        'sourceName': !exists(json, 'sourceName') ? undefined : json['sourceName'],
        'travelAgentId': !exists(json, 'travelAgentId') ? undefined : UniqueIDTypeFromJSON(json['travelAgentId']),
        'travelAgentName': !exists(json, 'travelAgentName') ? undefined : json['travelAgentName'],
    };
}

export function ReservationDailySummaryTypeToJSON(value?: ReservationDailySummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrival': value.arrival,
        'blockCode': value.blockCode,
        'bookingDate': value.bookingDate,
        'bookingMedium': value.bookingMedium,
        'cancellationDate': value.cancellationDate,
        'cancellationReasonCode': value.cancellationReasonCode,
        'checkedOutDate': value.checkedOutDate,
        'children1': value.children1,
        'children2': value.children2,
        'children3': value.children3,
        'companyId': UniqueIDTypeToJSON(value.companyId),
        'companyName': value.companyName,
        'createDateTime': value.createDateTime,
        'dailySummary': value.dailySummary === undefined ? undefined : ((value.dailySummary as Array<any>).map(DailySummaryTypeToJSON)),
        'departure': value.departure,
        'groupId': UniqueIDTypeToJSON(value.groupId),
        'groupName': value.groupName,
        'guestCountry': value.guestCountry,
        'iataCode': value.iataCode,
        'lastModifiedDate': value.lastModifiedDate,
        'lastModifiedDateTime': value.lastModifiedDateTime,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipNumber': value.membershipNumber,
        'membershipType': value.membershipType,
        'nationality': value.nationality,
        'noOfRooms': value.noOfRooms,
        'origin_of_booking': value.originOfBooking,
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'resvContactId': UniqueIDTypeToJSON(value.resvContactId),
        'resvContactName': value.resvContactName,
        'resvStatus': PMSResStatusTypeToJSON(value.resvStatus),
        'resvType': value.resvType,
        'sharedYn': value.sharedYn,
        'sharersList': value.sharersList,
        'sourceId': UniqueIDTypeToJSON(value.sourceId),
        'sourceName': value.sourceName,
        'travelAgentId': UniqueIDTypeToJSON(value.travelAgentId),
        'travelAgentName': value.travelAgentName,
    };
}


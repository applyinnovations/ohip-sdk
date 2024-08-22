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
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { ResAttachedProfileType } from './ResAttachedProfileType';
import {
    ResAttachedProfileTypeFromJSON,
    ResAttachedProfileTypeFromJSONTyped,
    ResAttachedProfileTypeToJSON,
} from './ResAttachedProfileType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { StayInfoType } from './StayInfoType';
import {
    StayInfoTypeFromJSON,
    StayInfoTypeFromJSONTyped,
    StayInfoTypeToJSON,
} from './StayInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * The Reservation class contains the current reservation being created or altered.
 * @export
 * @interface StayReservationInfoType
 */
export interface StayReservationInfoType {
    /**
     * 
     * @type {Array<ResAttachedProfileType>}
     * @memberof StayReservationInfoType
     */
    attachedProfiles?: Array<ResAttachedProfileType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof StayReservationInfoType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     * 
     * @type {string}
     * @memberof StayReservationInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof StayReservationInfoType
     */
    parentReservationId?: ReservationId;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof StayReservationInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof StayReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * 
     * @type {StayInfoType}
     * @memberof StayReservationInfoType
     */
    roomStay?: StayInfoType;
}

/**
 * Check if a given object implements the StayReservationInfoType interface.
 */
export function instanceOfStayReservationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayReservationInfoTypeFromJSON(json: any): StayReservationInfoType {
    return StayReservationInfoTypeFromJSONTyped(json, false);
}

export function StayReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayReservationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachedProfiles': !exists(json, 'attachedProfiles') ? undefined : ((json['attachedProfiles'] as Array<any>).map(ResAttachedProfileTypeFromJSON)),
        'computedReservationStatus': !exists(json, 'computedReservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['computedReservationStatus']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'parentReservationId': !exists(json, 'parentReservationId') ? undefined : ReservationIdFromJSON(json['parentReservationId']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'roomStay': !exists(json, 'roomStay') ? undefined : StayInfoTypeFromJSON(json['roomStay']),
    };
}

export function StayReservationInfoTypeToJSON(value?: StayReservationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachedProfiles': value.attachedProfiles === undefined ? undefined : ((value.attachedProfiles as Array<any>).map(ResAttachedProfileTypeToJSON)),
        'computedReservationStatus': PMSResStatusTypeToJSON(value.computedReservationStatus),
        'hotelId': value.hotelId,
        'parentReservationId': ReservationIdToJSON(value.parentReservationId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'roomStay': StayInfoTypeToJSON(value.roomStay),
    };
}


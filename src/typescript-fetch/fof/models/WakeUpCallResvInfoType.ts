/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
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
 * Criteria to search and retrieve wake up calls.
 * @export
 * @interface WakeUpCallResvInfoType
 */
export interface WakeUpCallResvInfoType {
    /**
     * Reservation arrival date.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    arrival?: string;
    /**
     * Block code with which wake up call is associated.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    blockCode?: string;
    /**
     * 
     * @type {BlockId}
     * @memberof WakeUpCallResvInfoType
     */
    blockId?: BlockId;
    /**
     * Reservation departure date.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    departure?: string;
    /**
     * Room Phone Extension Number.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    extensionNumber?: string;
    /**
     * Guest Name.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    guestName?: string;
    /**
     * Hotel Code where wake up call is set.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    hotelId?: string;
    /**
     * Membership Level of the guest.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    membershipLevel?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof WakeUpCallResvInfoType
     */
    membershipType?: CodeDescriptionType;
    /**
     * 
     * @type {ProfileId}
     * @memberof WakeUpCallResvInfoType
     */
    profileId?: ProfileId;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof WakeUpCallResvInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof WakeUpCallResvInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * Hotel room in which wake up call is to ring.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    room?: string;
    /**
     * Room phone number which wake up call is to ring.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    roomPhoneNumber?: string;
    /**
     * Timezone of hotel.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    timezone?: string;
    /**
     * Guest Name.
     * @type {string}
     * @memberof WakeUpCallResvInfoType
     */
    vip?: string;
}

/**
 * Check if a given object implements the WakeUpCallResvInfoType interface.
 */
export function instanceOfWakeUpCallResvInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WakeUpCallResvInfoTypeFromJSON(json: any): WakeUpCallResvInfoType {
    return WakeUpCallResvInfoTypeFromJSONTyped(json, false);
}

export function WakeUpCallResvInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WakeUpCallResvInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrival': !exists(json, 'arrival') ? undefined : json['arrival'],
        'blockCode': !exists(json, 'blockCode') ? undefined : json['blockCode'],
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'departure': !exists(json, 'departure') ? undefined : json['departure'],
        'extensionNumber': !exists(json, 'extensionNumber') ? undefined : json['extensionNumber'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !exists(json, 'membershipType') ? undefined : CodeDescriptionTypeFromJSON(json['membershipType']),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'room': !exists(json, 'room') ? undefined : json['room'],
        'roomPhoneNumber': !exists(json, 'roomPhoneNumber') ? undefined : json['roomPhoneNumber'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'vip': !exists(json, 'vip') ? undefined : json['vip'],
    };
}

export function WakeUpCallResvInfoTypeToJSON(value?: WakeUpCallResvInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrival': value.arrival,
        'blockCode': value.blockCode,
        'blockId': BlockIdToJSON(value.blockId),
        'departure': value.departure,
        'extensionNumber': value.extensionNumber,
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'membershipLevel': value.membershipLevel,
        'membershipType': CodeDescriptionTypeToJSON(value.membershipType),
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'room': value.room,
        'roomPhoneNumber': value.roomPhoneNumber,
        'timezone': value.timezone,
        'vip': value.vip,
    };
}


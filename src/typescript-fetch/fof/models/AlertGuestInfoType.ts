/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MembershipType } from './MembershipType';
import {
    MembershipTypeFromJSON,
    MembershipTypeFromJSONTyped,
    MembershipTypeToJSON,
} from './MembershipType';
import type { VIPStatusType } from './VIPStatusType';
import {
    VIPStatusTypeFromJSON,
    VIPStatusTypeFromJSONTyped,
    VIPStatusTypeToJSON,
} from './VIPStatusType';

/**
 * 
 * @export
 * @interface AlertGuestInfoType
 */
export interface AlertGuestInfoType {
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    birthDateMasked?: string;
    /**
     * Additional alert information regarding the membership of the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    comments?: string;
    /**
     * Guest Name.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    guestName?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    guestPreferredLanguage?: string;
    /**
     * Hotel code of the last stay location of the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    lastHotelCode?: string;
    /**
     * Last stay date at the property.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    lastStayDate?: string;
    /**
     * 
     * @type {MembershipType}
     * @memberof AlertGuestInfoType
     */
    membership?: MembershipType;
    /**
     * Additional alert information regarding the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    preference?: string;
    /**
     * Additional mandatory alert information regarding the guest preferences.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    preference2?: string;
    /**
     * Holds total number of days that the guest have stayed in the properties for the same brand.
     * @type {number}
     * @memberof AlertGuestInfoType
     */
    totalBrandStay?: number;
    /**
     * Holds total number of days that the guest have stayed in the property.
     * @type {number}
     * @memberof AlertGuestInfoType
     */
    totalStay?: number;
    /**
     * 
     * @type {VIPStatusType}
     * @memberof AlertGuestInfoType
     */
    vipStatus?: VIPStatusType;
}

/**
 * Check if a given object implements the AlertGuestInfoType interface.
 */
export function instanceOfAlertGuestInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlertGuestInfoTypeFromJSON(json: any): AlertGuestInfoType {
    return AlertGuestInfoTypeFromJSONTyped(json, false);
}

export function AlertGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertGuestInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'birthDate': !exists(json, 'birthDate') ? undefined : json['birthDate'],
        'birthDateMasked': !exists(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'guestPreferredLanguage': !exists(json, 'guestPreferredLanguage') ? undefined : json['guestPreferredLanguage'],
        'lastHotelCode': !exists(json, 'lastHotelCode') ? undefined : json['lastHotelCode'],
        'lastStayDate': !exists(json, 'lastStayDate') ? undefined : json['lastStayDate'],
        'membership': !exists(json, 'membership') ? undefined : MembershipTypeFromJSON(json['membership']),
        'preference': !exists(json, 'preference') ? undefined : json['preference'],
        'preference2': !exists(json, 'preference2') ? undefined : json['preference2'],
        'totalBrandStay': !exists(json, 'totalBrandStay') ? undefined : json['totalBrandStay'],
        'totalStay': !exists(json, 'totalStay') ? undefined : json['totalStay'],
        'vipStatus': !exists(json, 'vipStatus') ? undefined : VIPStatusTypeFromJSON(json['vipStatus']),
    };
}

export function AlertGuestInfoTypeToJSON(value?: AlertGuestInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'birthDate': value.birthDate,
        'birthDateMasked': value.birthDateMasked,
        'comments': value.comments,
        'guestName': value.guestName,
        'guestPreferredLanguage': value.guestPreferredLanguage,
        'lastHotelCode': value.lastHotelCode,
        'lastStayDate': value.lastStayDate,
        'membership': MembershipTypeToJSON(value.membership),
        'preference': value.preference,
        'preference2': value.preference2,
        'totalBrandStay': value.totalBrandStay,
        'totalStay': value.totalStay,
        'vipStatus': VIPStatusTypeToJSON(value.vipStatus),
    };
}


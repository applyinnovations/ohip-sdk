/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GuestLastStayInfoType } from './GuestLastStayInfoType';
import {
    GuestLastStayInfoTypeFromJSON,
    GuestLastStayInfoTypeFromJSONTyped,
    GuestLastStayInfoTypeToJSON,
} from './GuestLastStayInfoType';

/**
 * 
 * @export
 * @interface ResGuestAdditionalInfoType
 */
export interface ResGuestAdditionalInfoType {
    /**
     * Entry Date into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    dateOfEntry?: string;
    /**
     * Guest Classification for the data export.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    guestClassification?: string;
    /**
     * Guest Status for the data export.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    guestStatus?: string;
    /**
     * 
     * @type {GuestLastStayInfoType}
     * @memberof ResGuestAdditionalInfoType
     */
    lastStay?: GuestLastStayInfoType;
    /**
     * Entry Date into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    nextDestination?: string;
    /**
     * Entry point into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    portOfEntry?: string;
    /**
     * Preferred Room Type of the guest.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    preferredRoomType?: string;
    /**
     * Purpose of stay.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    purposeOfStay?: string;
}

/**
 * Check if a given object implements the ResGuestAdditionalInfoType interface.
 */
export function instanceOfResGuestAdditionalInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResGuestAdditionalInfoTypeFromJSON(json: any): ResGuestAdditionalInfoType {
    return ResGuestAdditionalInfoTypeFromJSONTyped(json, false);
}

export function ResGuestAdditionalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestAdditionalInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateOfEntry': !exists(json, 'dateOfEntry') ? undefined : json['dateOfEntry'],
        'guestClassification': !exists(json, 'guestClassification') ? undefined : json['guestClassification'],
        'guestStatus': !exists(json, 'guestStatus') ? undefined : json['guestStatus'],
        'lastStay': !exists(json, 'lastStay') ? undefined : GuestLastStayInfoTypeFromJSON(json['lastStay']),
        'nextDestination': !exists(json, 'nextDestination') ? undefined : json['nextDestination'],
        'portOfEntry': !exists(json, 'portOfEntry') ? undefined : json['portOfEntry'],
        'preferredRoomType': !exists(json, 'preferredRoomType') ? undefined : json['preferredRoomType'],
        'purposeOfStay': !exists(json, 'purposeOfStay') ? undefined : json['purposeOfStay'],
    };
}

export function ResGuestAdditionalInfoTypeToJSON(value?: ResGuestAdditionalInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateOfEntry': value.dateOfEntry,
        'guestClassification': value.guestClassification,
        'guestStatus': value.guestStatus,
        'lastStay': GuestLastStayInfoTypeToJSON(value.lastStay),
        'nextDestination': value.nextDestination,
        'portOfEntry': value.portOfEntry,
        'preferredRoomType': value.preferredRoomType,
        'purposeOfStay': value.purposeOfStay,
    };
}


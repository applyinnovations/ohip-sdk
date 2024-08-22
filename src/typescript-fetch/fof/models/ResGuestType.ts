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
import type { ResGuestTypeProfileInfo } from './ResGuestTypeProfileInfo';
import {
    ResGuestTypeProfileInfoFromJSON,
    ResGuestTypeProfileInfoFromJSONTyped,
    ResGuestTypeProfileInfoToJSON,
} from './ResGuestTypeProfileInfo';
import type { TransportInfoType } from './TransportInfoType';
import {
    TransportInfoTypeFromJSON,
    TransportInfoTypeFromJSONTyped,
    TransportInfoTypeToJSON,
} from './TransportInfoType';
import type { VisaInfoType } from './VisaInfoType';
import {
    VisaInfoTypeFromJSON,
    VisaInfoTypeFromJSONTyped,
    VisaInfoTypeToJSON,
} from './VisaInfoType';

/**
 * A collection of ResGuest objects, identifying the guests associated with this reservation. Which guests are in which room is determined by each RoomStays ResGuestRPHs collection.
 * @export
 * @interface ResGuestType
 */
export interface ResGuestType {
    /**
     * 
     * @type {TransportInfoType}
     * @memberof ResGuestType
     */
    arrivalTransport?: TransportInfoType;
    /**
     * 
     * @type {TransportInfoType}
     * @memberof ResGuestType
     */
    departureTransport?: TransportInfoType;
    /**
     * When true indicates this is the primary guest.
     * @type {boolean}
     * @memberof ResGuestType
     */
    primary?: boolean;
    /**
     * 
     * @type {ResGuestTypeProfileInfo}
     * @memberof ResGuestType
     */
    profileInfo?: ResGuestTypeProfileInfo;
    /**
     * This is a reference placeholder, used as an index for this guest in this reservation. In the ResGuest object it is used like all other RPH attributes to send the delta of a reservation. It is used by the RoomStay and Service objects to indicate which guests are associated with that room stay or service.
     * @type {string}
     * @memberof ResGuestType
     */
    reservationGuestRPH?: string;
    /**
     * 
     * @type {VisaInfoType}
     * @memberof ResGuestType
     */
    visaInfo?: VisaInfoType;
}

/**
 * Check if a given object implements the ResGuestType interface.
 */
export function instanceOfResGuestType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResGuestTypeFromJSON(json: any): ResGuestType {
    return ResGuestTypeFromJSONTyped(json, false);
}

export function ResGuestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivalTransport': !exists(json, 'arrivalTransport') ? undefined : TransportInfoTypeFromJSON(json['arrivalTransport']),
        'departureTransport': !exists(json, 'departureTransport') ? undefined : TransportInfoTypeFromJSON(json['departureTransport']),
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'profileInfo': !exists(json, 'profileInfo') ? undefined : ResGuestTypeProfileInfoFromJSON(json['profileInfo']),
        'reservationGuestRPH': !exists(json, 'reservationGuestRPH') ? undefined : json['reservationGuestRPH'],
        'visaInfo': !exists(json, 'visaInfo') ? undefined : VisaInfoTypeFromJSON(json['visaInfo']),
    };
}

export function ResGuestTypeToJSON(value?: ResGuestType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrivalTransport': TransportInfoTypeToJSON(value.arrivalTransport),
        'departureTransport': TransportInfoTypeToJSON(value.departureTransport),
        'primary': value.primary,
        'profileInfo': ResGuestTypeProfileInfoToJSON(value.profileInfo),
        'reservationGuestRPH': value.reservationGuestRPH,
        'visaInfo': VisaInfoTypeToJSON(value.visaInfo),
    };
}


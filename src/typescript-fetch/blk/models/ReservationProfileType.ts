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
import type { ProfileType } from './ProfileType';
import {
    ProfileTypeFromJSON,
    ProfileTypeFromJSONTyped,
    ProfileTypeToJSON,
} from './ProfileType';
import type { ResProfileTypeType } from './ResProfileTypeType';
import {
    ResProfileTypeTypeFromJSON,
    ResProfileTypeTypeFromJSONTyped,
    ResProfileTypeTypeToJSON,
} from './ResProfileTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface ReservationProfileType
 */
export interface ReservationProfileType {
    /**
     * 
     * @type {ProfileType}
     * @memberof ReservationProfileType
     */
    profile?: ProfileType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationProfileType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {ResProfileTypeType}
     * @memberof ReservationProfileType
     */
    reservationProfileType?: ResProfileTypeType;
}

/**
 * Check if a given object implements the ReservationProfileType interface.
 */
export function instanceOfReservationProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationProfileTypeFromJSON(json: any): ReservationProfileType {
    return ReservationProfileTypeFromJSONTyped(json, false);
}

export function ReservationProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profile': !exists(json, 'profile') ? undefined : ProfileTypeFromJSON(json['profile']),
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationProfileType': !exists(json, 'reservationProfileType') ? undefined : ResProfileTypeTypeFromJSON(json['reservationProfileType']),
    };
}

export function ReservationProfileTypeToJSON(value?: ReservationProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile': ProfileTypeToJSON(value.profile),
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationProfileType': ResProfileTypeTypeToJSON(value.reservationProfileType),
    };
}


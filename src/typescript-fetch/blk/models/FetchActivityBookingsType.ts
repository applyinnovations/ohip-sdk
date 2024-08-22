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
import type { ActivityListInner } from './ActivityListInner';
import {
    ActivityListInnerFromJSON,
    ActivityListInnerFromJSONTyped,
    ActivityListInnerToJSON,
} from './ActivityListInner';
import type { AddressType } from './AddressType';
import {
    AddressTypeFromJSON,
    AddressTypeFromJSONTyped,
    AddressTypeToJSON,
} from './AddressType';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Used in the request message to describe the "filtering Criteria" when executing an activity lookup.
 * @export
 * @interface FetchActivityBookingsType
 */
export interface FetchActivityBookingsType {
    /**
     * A collection of Activity objects.
     * @type {Array<ActivityListInner>}
     * @memberof FetchActivityBookingsType
     */
    activities?: Array<ActivityListInner>;
    /**
     * 
     * @type {AddressType}
     * @memberof FetchActivityBookingsType
     */
    address?: AddressType;
    /**
     * Hotel Code, It is used to filter hotel specific children to this specific hotel code.
     * @type {string}
     * @memberof FetchActivityBookingsType
     */
    hotelId?: string;
    /**
     * 
     * @type {PersonNameType}
     * @memberof FetchActivityBookingsType
     */
    personName?: PersonNameType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof FetchActivityBookingsType
     */
    profileId?: Array<UniqueIDType>;
}

/**
 * Check if a given object implements the FetchActivityBookingsType interface.
 */
export function instanceOfFetchActivityBookingsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchActivityBookingsTypeFromJSON(json: any): FetchActivityBookingsType {
    return FetchActivityBookingsTypeFromJSONTyped(json, false);
}

export function FetchActivityBookingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchActivityBookingsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activities': !exists(json, 'activities') ? undefined : ((json['activities'] as Array<any>).map(ActivityListInnerFromJSON)),
        'address': !exists(json, 'address') ? undefined : AddressTypeFromJSON(json['address']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'personName': !exists(json, 'personName') ? undefined : PersonNameTypeFromJSON(json['personName']),
        'profileId': !exists(json, 'profileId') ? undefined : ((json['profileId'] as Array<any>).map(UniqueIDTypeFromJSON)),
    };
}

export function FetchActivityBookingsTypeToJSON(value?: FetchActivityBookingsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activities': value.activities === undefined ? undefined : ((value.activities as Array<any>).map(ActivityListInnerToJSON)),
        'address': AddressTypeToJSON(value.address),
        'hotelId': value.hotelId,
        'personName': PersonNameTypeToJSON(value.personName),
        'profileId': value.profileId === undefined ? undefined : ((value.profileId as Array<any>).map(UniqueIDTypeToJSON)),
    };
}


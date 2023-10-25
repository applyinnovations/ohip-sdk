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
import type { ChannelResvRSInfoType } from './ChannelResvRSInfoType';
import {
    ChannelResvRSInfoTypeFromJSON,
    ChannelResvRSInfoTypeFromJSONTyped,
    ChannelResvRSInfoTypeToJSON,
} from './ChannelResvRSInfoType';
import type { HotelReservationsType } from './HotelReservationsType';
import {
    HotelReservationsTypeFromJSON,
    HotelReservationsTypeFromJSONTyped,
    HotelReservationsTypeToJSON,
} from './HotelReservationsType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Create Reservation Response Type
 * @export
 * @interface CreateReservationType
 */
export interface CreateReservationType {
    /**
     * 
     * @type {ChannelResvRSInfoType}
     * @memberof CreateReservationType
     */
    channelInformation?: ChannelResvRSInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CreateReservationType
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {HotelReservationsType}
     * @memberof CreateReservationType
     */
    reservations?: HotelReservationsType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CreateReservationType
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CreateReservationType interface.
 */
export function instanceOfCreateReservationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateReservationTypeFromJSON(json: any): CreateReservationType {
    return CreateReservationTypeFromJSONTyped(json, false);
}

export function CreateReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateReservationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelInformation': !exists(json, 'channelInformation') ? undefined : ChannelResvRSInfoTypeFromJSON(json['channelInformation']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservations': !exists(json, 'reservations') ? undefined : HotelReservationsTypeFromJSON(json['reservations']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CreateReservationTypeToJSON(value?: CreateReservationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelInformation': ChannelResvRSInfoTypeToJSON(value.channelInformation),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservations': HotelReservationsTypeToJSON(value.reservations),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


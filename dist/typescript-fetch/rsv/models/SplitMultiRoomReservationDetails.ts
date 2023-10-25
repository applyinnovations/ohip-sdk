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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { LinkedReservationsInfoType } from './LinkedReservationsInfoType';
import {
    LinkedReservationsInfoTypeFromJSON,
    LinkedReservationsInfoTypeFromJSONTyped,
    LinkedReservationsInfoTypeToJSON,
} from './LinkedReservationsInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for splitting multi-room reservation into separate reservations.
 * @export
 * @interface SplitMultiRoomReservationDetails
 */
export interface SplitMultiRoomReservationDetails {
    /**
     * 
     * @type {LinkedReservationsInfoType}
     * @memberof SplitMultiRoomReservationDetails
     */
    linkedReservations?: LinkedReservationsInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SplitMultiRoomReservationDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof SplitMultiRoomReservationDetails
     */
    newReservationIdList?: Array<UniqueIDType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SplitMultiRoomReservationDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SplitMultiRoomReservationDetails interface.
 */
export function instanceOfSplitMultiRoomReservationDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SplitMultiRoomReservationDetailsFromJSON(json: any): SplitMultiRoomReservationDetails {
    return SplitMultiRoomReservationDetailsFromJSONTyped(json, false);
}

export function SplitMultiRoomReservationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SplitMultiRoomReservationDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkedReservations': !exists(json, 'linkedReservations') ? undefined : LinkedReservationsInfoTypeFromJSON(json['linkedReservations']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'newReservationIdList': !exists(json, 'newReservationIdList') ? undefined : ((json['newReservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SplitMultiRoomReservationDetailsToJSON(value?: SplitMultiRoomReservationDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkedReservations': LinkedReservationsInfoTypeToJSON(value.linkedReservations),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'newReservationIdList': value.newReservationIdList === undefined ? undefined : ((value.newReservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


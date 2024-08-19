/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyReservationPaymentMethodsType } from './CopyReservationPaymentMethodsType';
import {
    CopyReservationPaymentMethodsTypeFromJSON,
    CopyReservationPaymentMethodsTypeFromJSONTyped,
    CopyReservationPaymentMethodsTypeToJSON,
} from './CopyReservationPaymentMethodsType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { SplitMultiRoomReservationResponseInstructions } from './SplitMultiRoomReservationResponseInstructions';
import {
    SplitMultiRoomReservationResponseInstructionsFromJSON,
    SplitMultiRoomReservationResponseInstructionsFromJSONTyped,
    SplitMultiRoomReservationResponseInstructionsToJSON,
} from './SplitMultiRoomReservationResponseInstructions';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to split multi-room reservation into separate reservations.
 * @export
 * @interface SplitMultiRoomReservation
 */
export interface SplitMultiRoomReservation {
    /**
     * Flag to instruct the operation to copy payment methods of the original reservation to the new reservation to be created.
     * @type {boolean}
     * @memberof SplitMultiRoomReservation
     */
    copyPaymentInformation?: boolean;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SplitMultiRoomReservation
     */
    links?: Array<InstanceLink>;
    /**
     * An identifier representing the record lock for the reservation under process. When passed, the operation will verify that the lock is still valid.
     * @type {number}
     * @memberof SplitMultiRoomReservation
     */
    lockHandle?: number;
    /**
     * 
     * @type {ReservationId}
     * @memberof SplitMultiRoomReservation
     */
    reservationId?: ReservationId;
    /**
     * 
     * @type {CopyReservationPaymentMethodsType}
     * @memberof SplitMultiRoomReservation
     */
    reservationPaymentMethods?: CopyReservationPaymentMethodsType;
    /**
     * 
     * @type {SplitMultiRoomReservationResponseInstructions}
     * @memberof SplitMultiRoomReservation
     */
    responseInstructions?: SplitMultiRoomReservationResponseInstructions;
    /**
     * If set to TRUE, the reservation will be separated into number of rooms that it currently has. Otherwise, only 1 single room reservation will be created and the original reservation will be deducted with 1 room.
     * @type {boolean}
     * @memberof SplitMultiRoomReservation
     */
    splitAll?: boolean;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SplitMultiRoomReservation
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SplitMultiRoomReservation interface.
 */
export function instanceOfSplitMultiRoomReservation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SplitMultiRoomReservationFromJSON(json: any): SplitMultiRoomReservation {
    return SplitMultiRoomReservationFromJSONTyped(json, false);
}

export function SplitMultiRoomReservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SplitMultiRoomReservation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyPaymentInformation': !exists(json, 'copyPaymentInformation') ? undefined : json['copyPaymentInformation'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'lockHandle': !exists(json, 'lockHandle') ? undefined : json['lockHandle'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'reservationPaymentMethods': !exists(json, 'reservationPaymentMethods') ? undefined : CopyReservationPaymentMethodsTypeFromJSON(json['reservationPaymentMethods']),
        'responseInstructions': !exists(json, 'responseInstructions') ? undefined : SplitMultiRoomReservationResponseInstructionsFromJSON(json['responseInstructions']),
        'splitAll': !exists(json, 'splitAll') ? undefined : json['splitAll'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SplitMultiRoomReservationToJSON(value?: SplitMultiRoomReservation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyPaymentInformation': value.copyPaymentInformation,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'lockHandle': value.lockHandle,
        'reservationId': ReservationIdToJSON(value.reservationId),
        'reservationPaymentMethods': CopyReservationPaymentMethodsTypeToJSON(value.reservationPaymentMethods),
        'responseInstructions': SplitMultiRoomReservationResponseInstructionsToJSON(value.responseInstructions),
        'splitAll': value.splitAll,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


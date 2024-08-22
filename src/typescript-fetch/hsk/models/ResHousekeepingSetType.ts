/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HousekeepingInstructionsType } from './HousekeepingInstructionsType';
import {
    HousekeepingInstructionsTypeFromJSON,
    HousekeepingInstructionsTypeFromJSONTyped,
    HousekeepingInstructionsTypeToJSON,
} from './HousekeepingInstructionsType';
import type { ResHousekeepingType } from './ResHousekeepingType';
import {
    ResHousekeepingTypeFromJSON,
    ResHousekeepingTypeFromJSONTyped,
    ResHousekeepingTypeToJSON,
} from './ResHousekeepingType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Search Criteria for retrieving guest housekeeping instructions.
 * @export
 * @interface ResHousekeepingSetType
 */
export interface ResHousekeepingSetType {
    /**
     * Hotel Code.
     * @type {string}
     * @memberof ResHousekeepingSetType
     */
    hotelId?: string;
    /**
     * housekeeping instructions that should be used.
     * @type {Array<HousekeepingInstructionsType>}
     * @memberof ResHousekeepingSetType
     */
    housekeepingInstruction?: Array<HousekeepingInstructionsType>;
    /**
     * 
     * @type {ResHousekeepingType}
     * @memberof ResHousekeepingSetType
     */
    housekeepingInstructions?: ResHousekeepingType;
    /**
     * 
     * @type {ReservationId}
     * @memberof ResHousekeepingSetType
     */
    reservationId?: ReservationId;
    /**
     * Room to which housekeeping record belongs.
     * @type {string}
     * @memberof ResHousekeepingSetType
     */
    room?: string;
}

/**
 * Check if a given object implements the ResHousekeepingSetType interface.
 */
export function instanceOfResHousekeepingSetType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResHousekeepingSetTypeFromJSON(json: any): ResHousekeepingSetType {
    return ResHousekeepingSetTypeFromJSONTyped(json, false);
}

export function ResHousekeepingSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResHousekeepingSetType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'housekeepingInstruction': !exists(json, 'housekeepingInstruction') ? undefined : ((json['housekeepingInstruction'] as Array<any>).map(HousekeepingInstructionsTypeFromJSON)),
        'housekeepingInstructions': !exists(json, 'housekeepingInstructions') ? undefined : ResHousekeepingTypeFromJSON(json['housekeepingInstructions']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'room': !exists(json, 'room') ? undefined : json['room'],
    };
}

export function ResHousekeepingSetTypeToJSON(value?: ResHousekeepingSetType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'housekeepingInstruction': value.housekeepingInstruction === undefined ? undefined : ((value.housekeepingInstruction as Array<any>).map(HousekeepingInstructionsTypeToJSON)),
        'housekeepingInstructions': ResHousekeepingTypeToJSON(value.housekeepingInstructions),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'room': value.room,
    };
}


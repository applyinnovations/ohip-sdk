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
import type { ReservationValidationInstructionType } from './ReservationValidationInstructionType';
import {
    ReservationValidationInstructionTypeFromJSON,
    ReservationValidationInstructionTypeFromJSONTyped,
    ReservationValidationInstructionTypeToJSON,
} from './ReservationValidationInstructionType';
import type { UpsellRateInstructionType } from './UpsellRateInstructionType';
import {
    UpsellRateInstructionTypeFromJSON,
    UpsellRateInstructionTypeFromJSONTyped,
    UpsellRateInstructionTypeToJSON,
} from './UpsellRateInstructionType';

/**
 * Collection of validation instructions.
 * @export
 * @interface ValidateReservationChangesInstructions
 */
export interface ValidateReservationChangesInstructions {
    /**
     * Whether the current operation is copy reservation or not.
     * @type {boolean}
     * @memberof ValidateReservationChangesInstructions
     */
    copyOperation?: boolean;
    /**
     * Reservation validation instruction.
     * @type {Array<ReservationValidationInstructionType>}
     * @memberof ValidateReservationChangesInstructions
     */
    instruction?: Array<ReservationValidationInstructionType>;
    /**
     * 
     * @type {UpsellRateInstructionType}
     * @memberof ValidateReservationChangesInstructions
     */
    upsellRateInstruction?: UpsellRateInstructionType;
}

/**
 * Check if a given object implements the ValidateReservationChangesInstructions interface.
 */
export function instanceOfValidateReservationChangesInstructions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ValidateReservationChangesInstructionsFromJSON(json: any): ValidateReservationChangesInstructions {
    return ValidateReservationChangesInstructionsFromJSONTyped(json, false);
}

export function ValidateReservationChangesInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateReservationChangesInstructions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyOperation': !exists(json, 'copyOperation') ? undefined : json['copyOperation'],
        'instruction': !exists(json, 'instruction') ? undefined : ((json['instruction'] as Array<any>).map(ReservationValidationInstructionTypeFromJSON)),
        'upsellRateInstruction': !exists(json, 'upsellRateInstruction') ? undefined : UpsellRateInstructionTypeFromJSON(json['upsellRateInstruction']),
    };
}

export function ValidateReservationChangesInstructionsToJSON(value?: ValidateReservationChangesInstructions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyOperation': value.copyOperation,
        'instruction': value.instruction === undefined ? undefined : ((value.instruction as Array<any>).map(ReservationValidationInstructionTypeToJSON)),
        'upsellRateInstruction': UpsellRateInstructionTypeToJSON(value.upsellRateInstruction),
    };
}


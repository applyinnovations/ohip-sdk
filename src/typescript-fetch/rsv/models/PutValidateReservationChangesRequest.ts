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
import type { HotelReservationType } from './HotelReservationType';
import {
    HotelReservationTypeFromJSON,
    HotelReservationTypeFromJSONTyped,
    HotelReservationTypeToJSON,
} from './HotelReservationType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { ValidateReservationChangesInstructions } from './ValidateReservationChangesInstructions';
import {
    ValidateReservationChangesInstructionsFromJSON,
    ValidateReservationChangesInstructionsFromJSONTyped,
    ValidateReservationChangesInstructionsToJSON,
} from './ValidateReservationChangesInstructions';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PutValidateReservationChangesRequest
 */
export interface PutValidateReservationChangesRequest {
    /**
     * 
     * @type {ValidateReservationChangesInstructions}
     * @memberof PutValidateReservationChangesRequest
     */
    instructions?: ValidateReservationChangesInstructions;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutValidateReservationChangesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {HotelReservationType}
     * @memberof PutValidateReservationChangesRequest
     */
    reservation?: HotelReservationType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof PutValidateReservationChangesRequest
     */
    timeSpan?: TimeSpanType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutValidateReservationChangesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutValidateReservationChangesRequest interface.
 */
export function instanceOfPutValidateReservationChangesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutValidateReservationChangesRequestFromJSON(json: any): PutValidateReservationChangesRequest {
    return PutValidateReservationChangesRequestFromJSONTyped(json, false);
}

export function PutValidateReservationChangesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutValidateReservationChangesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'instructions': !exists(json, 'instructions') ? undefined : ValidateReservationChangesInstructionsFromJSON(json['instructions']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservation': !exists(json, 'reservation') ? undefined : HotelReservationTypeFromJSON(json['reservation']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutValidateReservationChangesRequestToJSON(value?: PutValidateReservationChangesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'instructions': ValidateReservationChangesInstructionsToJSON(value.instructions),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservation': HotelReservationTypeToJSON(value.reservation),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


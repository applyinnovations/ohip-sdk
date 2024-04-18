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
import type { ActionStatusType } from './ActionStatusType';
import {
    ActionStatusTypeFromJSON,
    ActionStatusTypeFromJSONTyped,
    ActionStatusTypeToJSON,
} from './ActionStatusType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Identifies the response expected from staff or other parties relative to a Track It ticket.
 * @export
 * @interface TrackItActionType
 */
export interface TrackItActionType {
    /**
     * 
     * @type {ActionStatusType}
     * @memberof TrackItActionType
     */
    status?: ActionStatusType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TrackItActionType
     */
    trackItAction?: CodeDescriptionType;
}

/**
 * Check if a given object implements the TrackItActionType interface.
 */
export function instanceOfTrackItActionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItActionTypeFromJSON(json: any): TrackItActionType {
    return TrackItActionTypeFromJSONTyped(json, false);
}

export function TrackItActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItActionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : ActionStatusTypeFromJSON(json['status']),
        'trackItAction': !exists(json, 'trackItAction') ? undefined : CodeDescriptionTypeFromJSON(json['trackItAction']),
    };
}

export function TrackItActionTypeToJSON(value?: TrackItActionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': ActionStatusTypeToJSON(value.status),
        'trackItAction': CodeDescriptionTypeToJSON(value.trackItAction),
    };
}

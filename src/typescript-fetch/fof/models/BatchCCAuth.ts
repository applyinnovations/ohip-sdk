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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ReservationForCCAuthType } from './ReservationForCCAuthType';
import {
    ReservationForCCAuthTypeFromJSON,
    ReservationForCCAuthTypeFromJSONTyped,
    ReservationForCCAuthTypeToJSON,
} from './ReservationForCCAuthType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to start a batch job that will process a list of reservation, and their associated payment methods, that require credit card authorizations.
 * @export
 * @interface BatchCCAuth
 */
export interface BatchCCAuth {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof BatchCCAuth
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BatchCCAuth
     */
    links?: Array<InstanceLink>;
    /**
     * List of reservations with their payment methods.
     * @type {Array<ReservationForCCAuthType>}
     * @memberof BatchCCAuth
     */
    reservations?: Array<ReservationForCCAuthType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchCCAuth
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BatchCCAuth interface.
 */
export function instanceOfBatchCCAuth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BatchCCAuthFromJSON(json: any): BatchCCAuth {
    return BatchCCAuthFromJSONTyped(json, false);
}

export function BatchCCAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchCCAuth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservations': !exists(json, 'reservations') ? undefined : ((json['reservations'] as Array<any>).map(ReservationForCCAuthTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BatchCCAuthToJSON(value?: BatchCCAuth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservations': value.reservations === undefined ? undefined : ((value.reservations as Array<any>).map(ReservationForCCAuthTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


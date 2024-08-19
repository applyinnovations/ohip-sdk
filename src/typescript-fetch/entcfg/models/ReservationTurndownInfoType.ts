/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TurndownStatusType } from './TurndownStatusType';
import {
    TurndownStatusTypeFromJSON,
    TurndownStatusTypeFromJSONTyped,
    TurndownStatusTypeToJSON,
} from './TurndownStatusType';

/**
 * Turndown information for a reservation
 * @export
 * @interface ReservationTurndownInfoType
 */
export interface ReservationTurndownInfoType {
    /**
     * Indicates if turndown is allowed or not
     * @type {boolean}
     * @memberof ReservationTurndownInfoType
     */
    allowed?: boolean;
    /**
     * 
     * @type {TurndownStatusType}
     * @memberof ReservationTurndownInfoType
     */
    status?: TurndownStatusType;
}

/**
 * Check if a given object implements the ReservationTurndownInfoType interface.
 */
export function instanceOfReservationTurndownInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationTurndownInfoTypeFromJSON(json: any): ReservationTurndownInfoType {
    return ReservationTurndownInfoTypeFromJSONTyped(json, false);
}

export function ReservationTurndownInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationTurndownInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowed': !exists(json, 'allowed') ? undefined : json['allowed'],
        'status': !exists(json, 'status') ? undefined : TurndownStatusTypeFromJSON(json['status']),
    };
}

export function ReservationTurndownInfoTypeToJSON(value?: ReservationTurndownInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowed': value.allowed,
        'status': TurndownStatusTypeToJSON(value.status),
    };
}


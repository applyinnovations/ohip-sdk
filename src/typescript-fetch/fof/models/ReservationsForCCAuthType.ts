/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReservationForCCAuthType } from './ReservationForCCAuthType';
import {
    ReservationForCCAuthTypeFromJSON,
    ReservationForCCAuthTypeFromJSONTyped,
    ReservationForCCAuthTypeToJSON,
} from './ReservationForCCAuthType';

/**
 * List of reservations with their payment methods.
 * @export
 * @interface ReservationsForCCAuthType
 */
export interface ReservationsForCCAuthType extends Array<ReservationForCCAuthType> {
}

/**
 * Check if a given object implements the ReservationsForCCAuthType interface.
 */
export function instanceOfReservationsForCCAuthType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationsForCCAuthTypeFromJSON(json: any): ReservationsForCCAuthType {
    return ReservationsForCCAuthTypeFromJSONTyped(json, false);
}

export function ReservationsForCCAuthTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationsForCCAuthType {
    return json;
}

export function ReservationsForCCAuthTypeToJSON(value?: ReservationsForCCAuthType | null): any {
    return value;
}

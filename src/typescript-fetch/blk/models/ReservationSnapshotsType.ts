/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReservationSnapshotType } from './ReservationSnapshotType';
import {
    ReservationSnapshotTypeFromJSON,
    ReservationSnapshotTypeFromJSONTyped,
    ReservationSnapshotTypeToJSON,
} from './ReservationSnapshotType';

/**
 * A collection of Reservation snapshot objects.
 * @export
 * @interface ReservationSnapshotsType
 */
export interface ReservationSnapshotsType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ReservationSnapshotsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ReservationSnapshotsType
     */
    hasMore?: boolean;
    /**
     * A reservation snapshot object.
     * @type {Array<ReservationSnapshotType>}
     * @memberof ReservationSnapshotsType
     */
    reservation?: Array<ReservationSnapshotType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ReservationSnapshotsType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ReservationSnapshotsType interface.
 */
export function instanceOfReservationSnapshotsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationSnapshotsTypeFromJSON(json: any): ReservationSnapshotsType {
    return ReservationSnapshotsTypeFromJSONTyped(json, false);
}

export function ReservationSnapshotsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationSnapshotsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'reservation': !exists(json, 'reservation') ? undefined : ((json['reservation'] as Array<any>).map(ReservationSnapshotTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ReservationSnapshotsTypeToJSON(value?: ReservationSnapshotsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'reservation': value.reservation === undefined ? undefined : ((value.reservation as Array<any>).map(ReservationSnapshotTypeToJSON)),
        'totalResults': value.totalResults,
    };
}


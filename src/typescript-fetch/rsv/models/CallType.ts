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
import type { CallTypeReservation } from './CallTypeReservation';
import {
    CallTypeReservationFromJSON,
    CallTypeReservationFromJSONTyped,
    CallTypeReservationToJSON,
} from './CallTypeReservation';
import type { CallerType } from './CallerType';
import {
    CallerTypeFromJSON,
    CallerTypeFromJSONTyped,
    CallerTypeToJSON,
} from './CallerType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import {
    DateTimeSpanTypeFromJSON,
    DateTimeSpanTypeFromJSONTyped,
    DateTimeSpanTypeToJSON,
} from './DateTimeSpanType';

/**
 * Holds call information.
 * @export
 * @interface CallType
 */
export interface CallType {
    /**
     * 
     * @type {CallerType}
     * @memberof CallType
     */
    caller?: CallerType;
    /**
     * Call comments.
     * @type {string}
     * @memberof CallType
     */
    comments?: string;
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof CallType
     */
    dateTimeSpan?: DateTimeSpanType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof CallType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof CallType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof CallType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof CallType
     */
    instance?: string;
    /**
     * 
     * @type {CallTypeReservation}
     * @memberof CallType
     */
    reservation?: CallTypeReservation;
    /**
     * Call turn away code.
     * @type {string}
     * @memberof CallType
     */
    turnawayCode?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof CallType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof CallType
     */
    url?: string;
}

/**
 * Check if a given object implements the CallType interface.
 */
export function instanceOfCallType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CallTypeFromJSON(json: any): CallType {
    return CallTypeFromJSONTyped(json, false);
}

export function CallTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caller': !exists(json, 'caller') ? undefined : CallerTypeFromJSON(json['caller']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'dateTimeSpan': !exists(json, 'dateTimeSpan') ? undefined : DateTimeSpanTypeFromJSON(json['dateTimeSpan']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'reservation': !exists(json, 'reservation') ? undefined : CallTypeReservationFromJSON(json['reservation']),
        'turnawayCode': !exists(json, 'turnawayCode') ? undefined : json['turnawayCode'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CallTypeToJSON(value?: CallType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caller': CallerTypeToJSON(value.caller),
        'comments': value.comments,
        'dateTimeSpan': DateTimeSpanTypeToJSON(value.dateTimeSpan),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'reservation': CallTypeReservationToJSON(value.reservation),
        'turnawayCode': value.turnawayCode,
        'type': value.type,
        'url': value.url,
    };
}


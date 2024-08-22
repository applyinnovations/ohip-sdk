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
import type { LinkedReservationInfoType } from './LinkedReservationInfoType';
import {
    LinkedReservationInfoTypeFromJSON,
    LinkedReservationInfoTypeFromJSONTyped,
    LinkedReservationInfoTypeToJSON,
} from './LinkedReservationInfoType';

/**
 * Linked Reservations.
 * @export
 * @interface LinkedReservationsInfoType
 */
export interface LinkedReservationsInfoType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof LinkedReservationsInfoType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof LinkedReservationsInfoType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof LinkedReservationsInfoType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof LinkedReservationsInfoType
     */
    instance?: string;
    /**
     * 
     * @type {Array<LinkedReservationInfoType>}
     * @memberof LinkedReservationsInfoType
     */
    reservationInfo?: Array<LinkedReservationInfoType>;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof LinkedReservationsInfoType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof LinkedReservationsInfoType
     */
    url?: string;
}

/**
 * Check if a given object implements the LinkedReservationsInfoType interface.
 */
export function instanceOfLinkedReservationsInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkedReservationsInfoTypeFromJSON(json: any): LinkedReservationsInfoType {
    return LinkedReservationsInfoTypeFromJSONTyped(json, false);
}

export function LinkedReservationsInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedReservationsInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(LinkedReservationInfoTypeFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function LinkedReservationsInfoTypeToJSON(value?: LinkedReservationsInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'reservationInfo': value.reservationInfo === undefined ? undefined : ((value.reservationInfo as Array<any>).map(LinkedReservationInfoTypeToJSON)),
        'type': value.type,
        'url': value.url,
    };
}


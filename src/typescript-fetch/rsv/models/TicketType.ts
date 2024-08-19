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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Reservation Ticket Type Information.
 * @export
 * @interface TicketType
 */
export interface TicketType {
    /**
     * Tickets comsumption date.
     * @type {string}
     * @memberof TicketType
     */
    consumptionDate?: string;
    /**
     * Package description.
     * @type {string}
     * @memberof TicketType
     */
    description?: string;
    /**
     * Tickets issue date.
     * @type {string}
     * @memberof TicketType
     */
    issueDate?: string;
    /**
     * Package Code.
     * @type {string}
     * @memberof TicketType
     */
    packageCode?: string;
    /**
     * Tickets price.
     * @type {number}
     * @memberof TicketType
     */
    price?: number;
    /**
     * Number of tickets used to create multiple tickets.
     * @type {number}
     * @memberof TicketType
     */
    quantity?: number;
    /**
     * The Rate Code to which tickets belong to.
     * @type {string}
     * @memberof TicketType
     */
    rateCode?: string;
    /**
     * Free text field for reference information.
     * @type {string}
     * @memberof TicketType
     */
    reference?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof TicketType
     */
    reservationProductId?: UniqueIDType;
    /**
     * The Status Code for outbound WS call.
     * @type {string}
     * @memberof TicketType
     */
    status?: string;
    /**
     * The Status Description for outbound WS call.
     * @type {string}
     * @memberof TicketType
     */
    statusDescription?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof TicketType
     */
    ticketId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof TicketType
     */
    ticketNumber?: UniqueIDType;
}

/**
 * Check if a given object implements the TicketType interface.
 */
export function instanceOfTicketType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TicketTypeFromJSON(json: any): TicketType {
    return TicketTypeFromJSONTyped(json, false);
}

export function TicketTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consumptionDate': !exists(json, 'consumptionDate') ? undefined : json['consumptionDate'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'issueDate': !exists(json, 'issueDate') ? undefined : json['issueDate'],
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'reservationProductId': !exists(json, 'reservationProductId') ? undefined : UniqueIDTypeFromJSON(json['reservationProductId']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusDescription': !exists(json, 'statusDescription') ? undefined : json['statusDescription'],
        'ticketId': !exists(json, 'ticketId') ? undefined : UniqueIDTypeFromJSON(json['ticketId']),
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : UniqueIDTypeFromJSON(json['ticketNumber']),
    };
}

export function TicketTypeToJSON(value?: TicketType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consumptionDate': value.consumptionDate,
        'description': value.description,
        'issueDate': value.issueDate,
        'packageCode': value.packageCode,
        'price': value.price,
        'quantity': value.quantity,
        'rateCode': value.rateCode,
        'reference': value.reference,
        'reservationProductId': UniqueIDTypeToJSON(value.reservationProductId),
        'status': value.status,
        'statusDescription': value.statusDescription,
        'ticketId': UniqueIDTypeToJSON(value.ticketId),
        'ticketNumber': UniqueIDTypeToJSON(value.ticketNumber),
    };
}


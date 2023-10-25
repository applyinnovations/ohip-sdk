/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TypeOfMessageType } from './TypeOfMessageType';
import {
    TypeOfMessageTypeFromJSON,
    TypeOfMessageTypeFromJSONTyped,
    TypeOfMessageTypeToJSON,
} from './TypeOfMessageType';

/**
 * Holds the Message Information
 * @export
 * @interface MessageType
 */
export interface MessageType {
    /**
     * Date the message was created
     * @type {string}
     * @memberof MessageType
     */
    messageDate?: string;
    /**
     * Message Content
     * @type {string}
     * @memberof MessageType
     */
    messageText?: string;
    /**
     * User who created the Message
     * @type {string}
     * @memberof MessageType
     */
    operator?: string;
    /**
     * Recipient of the Message
     * @type {string}
     * @memberof MessageType
     */
    recipient?: string;
    /**
     * 
     * @type {TypeOfMessageType}
     * @memberof MessageType
     */
    typeOfMessage?: TypeOfMessageType;
}

/**
 * Check if a given object implements the MessageType interface.
 */
export function instanceOfMessageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageTypeFromJSON(json: any): MessageType {
    return MessageTypeFromJSONTyped(json, false);
}

export function MessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageDate': !exists(json, 'messageDate') ? undefined : json['messageDate'],
        'messageText': !exists(json, 'messageText') ? undefined : json['messageText'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'typeOfMessage': !exists(json, 'typeOfMessage') ? undefined : TypeOfMessageTypeFromJSON(json['typeOfMessage']),
    };
}

export function MessageTypeToJSON(value?: MessageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageDate': value.messageDate,
        'messageText': value.messageText,
        'operator': value.operator,
        'recipient': value.recipient,
        'typeOfMessage': TypeOfMessageTypeToJSON(value.typeOfMessage),
    };
}


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
import type { MessageDeliveryType } from './MessageDeliveryType';
import {
    MessageDeliveryTypeFromJSON,
    MessageDeliveryTypeFromJSONTyped,
    MessageDeliveryTypeToJSON,
} from './MessageDeliveryType';
import type { MessageType } from './MessageType';
import {
    MessageTypeFromJSON,
    MessageTypeFromJSONTyped,
    MessageTypeToJSON,
} from './MessageType';

/**
 * Holds the Message information for a Reservation
 * @export
 * @interface GuestMessageType
 */
export interface GuestMessageType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof GuestMessageType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof GuestMessageType
     */
    creatorId?: string;
    /**
     * 
     * @type {MessageDeliveryType}
     * @memberof GuestMessageType
     */
    delivery?: MessageDeliveryType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof GuestMessageType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof GuestMessageType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof GuestMessageType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof GuestMessageType
     */
    instance?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof GuestMessageType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof GuestMessageType
     */
    lastModifyDateTime?: string;
    /**
     * 
     * @type {MessageType}
     * @memberof GuestMessageType
     */
    message?: MessageType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof GuestMessageType
     */
    purgeDate?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof GuestMessageType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof GuestMessageType
     */
    url?: string;
}

/**
 * Check if a given object implements the GuestMessageType interface.
 */
export function instanceOfGuestMessageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestMessageTypeFromJSON(json: any): GuestMessageType {
    return GuestMessageTypeFromJSONTyped(json, false);
}

export function GuestMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestMessageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'delivery': !exists(json, 'delivery') ? undefined : MessageDeliveryTypeFromJSON(json['delivery']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'message': !exists(json, 'message') ? undefined : MessageTypeFromJSON(json['message']),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function GuestMessageTypeToJSON(value?: GuestMessageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'delivery': MessageDeliveryTypeToJSON(value.delivery),
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'message': MessageTypeToJSON(value.message),
        'purgeDate': value.purgeDate,
        'type': value.type,
        'url': value.url,
    };
}

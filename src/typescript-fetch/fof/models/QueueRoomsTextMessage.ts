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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { QueueTextInfoType } from './QueueTextInfoType';
import {
    QueueTextInfoTypeFromJSON,
    QueueTextInfoTypeFromJSONTyped,
    QueueTextInfoTypeToJSON,
} from './QueueTextInfoType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response for delivering a text message via Queue Reservations (to a guest) or Queue Rush (to housekeeping).
 * @export
 * @interface QueueRoomsTextMessage
 */
export interface QueueRoomsTextMessage {
    /**
     * 
     * @type {QueueTextInfoType}
     * @memberof QueueRoomsTextMessage
     */
    guestTextInfo?: QueueTextInfoType;
    /**
     * 
     * @type {Links}
     * @memberof QueueRoomsTextMessage
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof QueueRoomsTextMessage
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the QueueRoomsTextMessage interface.
 */
export function instanceOfQueueRoomsTextMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QueueRoomsTextMessageFromJSON(json: any): QueueRoomsTextMessage {
    return QueueRoomsTextMessageFromJSONTyped(json, false);
}

export function QueueRoomsTextMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueueRoomsTextMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestTextInfo': !exists(json, 'guestTextInfo') ? undefined : QueueTextInfoTypeFromJSON(json['guestTextInfo']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function QueueRoomsTextMessageToJSON(value?: QueueRoomsTextMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestTextInfo': QueueTextInfoTypeToJSON(value.guestTextInfo),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

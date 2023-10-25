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
import type { MessageStatusType } from './MessageStatusType';
import {
    MessageStatusTypeFromJSON,
    MessageStatusTypeFromJSONTyped,
    MessageStatusTypeToJSON,
} from './MessageStatusType';

/**
 * Holds the Delivery Information of the Message
 * @export
 * @interface MessageDeliveryType
 */
export interface MessageDeliveryType {
    /**
     * User who delivered the message (who marked message as received)
     * @type {string}
     * @memberof MessageDeliveryType
     */
    deliveredBy?: string;
    /**
     * Date the message has been delivered (marked as received)
     * @type {string}
     * @memberof MessageDeliveryType
     */
    deliveryDate?: string;
    /**
     * 
     * @type {MessageStatusType}
     * @memberof MessageDeliveryType
     */
    deliveryStatus?: MessageStatusType;
    /**
     * Date when message has been printed
     * @type {string}
     * @memberof MessageDeliveryType
     */
    printDate?: string;
    /**
     * Number in which the message is to be sent.
     * @type {string}
     * @memberof MessageDeliveryType
     */
    textMessageRecipientNo?: string;
    /**
     * User who sent the message
     * @type {string}
     * @memberof MessageDeliveryType
     */
    textMessageSentBy?: string;
    /**
     * User Id of who sent the message
     * @type {number}
     * @memberof MessageDeliveryType
     */
    textMessageSentById?: number;
    /**
     * Date when message has been sent via SMS
     * @type {string}
     * @memberof MessageDeliveryType
     */
    textMessageSentDate?: string;
}

/**
 * Check if a given object implements the MessageDeliveryType interface.
 */
export function instanceOfMessageDeliveryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageDeliveryTypeFromJSON(json: any): MessageDeliveryType {
    return MessageDeliveryTypeFromJSONTyped(json, false);
}

export function MessageDeliveryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDeliveryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveredBy': !exists(json, 'deliveredBy') ? undefined : json['deliveredBy'],
        'deliveryDate': !exists(json, 'deliveryDate') ? undefined : json['deliveryDate'],
        'deliveryStatus': !exists(json, 'deliveryStatus') ? undefined : MessageStatusTypeFromJSON(json['deliveryStatus']),
        'printDate': !exists(json, 'printDate') ? undefined : json['printDate'],
        'textMessageRecipientNo': !exists(json, 'textMessageRecipientNo') ? undefined : json['textMessageRecipientNo'],
        'textMessageSentBy': !exists(json, 'textMessageSentBy') ? undefined : json['textMessageSentBy'],
        'textMessageSentById': !exists(json, 'textMessageSentById') ? undefined : json['textMessageSentById'],
        'textMessageSentDate': !exists(json, 'textMessageSentDate') ? undefined : json['textMessageSentDate'],
    };
}

export function MessageDeliveryTypeToJSON(value?: MessageDeliveryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveredBy': value.deliveredBy,
        'deliveryDate': value.deliveryDate,
        'deliveryStatus': MessageStatusTypeToJSON(value.deliveryStatus),
        'printDate': value.printDate,
        'textMessageRecipientNo': value.textMessageRecipientNo,
        'textMessageSentBy': value.textMessageSentBy,
        'textMessageSentById': value.textMessageSentById,
        'textMessageSentDate': value.textMessageSentDate,
    };
}


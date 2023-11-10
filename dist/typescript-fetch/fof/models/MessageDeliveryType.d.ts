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
import type { MessageStatusType } from './MessageStatusType';
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
export declare function instanceOfMessageDeliveryType(value: object): boolean;
export declare function MessageDeliveryTypeFromJSON(json: any): MessageDeliveryType;
export declare function MessageDeliveryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDeliveryType;
export declare function MessageDeliveryTypeToJSON(value?: MessageDeliveryType | null): any;

/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TypeOfMessageType } from './TypeOfMessageType';
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
export declare function instanceOfMessageType(value: object): boolean;
export declare function MessageTypeFromJSON(json: any): MessageType;
export declare function MessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageType;
export declare function MessageTypeToJSON(value?: MessageType | null): any;

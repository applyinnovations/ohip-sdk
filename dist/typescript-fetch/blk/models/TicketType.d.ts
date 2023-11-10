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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Reservation Ticket Type Information.
 * @export
 * @interface TicketType
 */
export interface TicketType {
    /**
     * Tickets comsumption date.
     * @type {Date}
     * @memberof TicketType
     */
    consumptionDate?: Date;
    /**
     * Package description.
     * @type {string}
     * @memberof TicketType
     */
    description?: string;
    /**
     * Tickets issue date.
     * @type {Date}
     * @memberof TicketType
     */
    issueDate?: Date;
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
export declare function instanceOfTicketType(value: object): boolean;
export declare function TicketTypeFromJSON(json: any): TicketType;
export declare function TicketTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketType;
export declare function TicketTypeToJSON(value?: TicketType | null): any;

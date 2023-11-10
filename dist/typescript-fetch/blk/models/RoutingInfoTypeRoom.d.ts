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
import type { RoutingInstructionType } from './RoutingInstructionType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Room routing type.
 * @export
 * @interface RoutingInfoTypeRoom
 */
export interface RoutingInfoTypeRoom {
    /**
     * Display Name for the guest.
     * @type {string}
     * @memberof RoutingInfoTypeRoom
     */
    guestDisplayName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInfoTypeRoom
     */
    guestNameId?: UniqueIDType;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof RoutingInfoTypeRoom
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInfoTypeRoom
     */
    reservationNameId?: UniqueIDType;
    /**
     * Room number to route the instructions.
     * @type {string}
     * @memberof RoutingInfoTypeRoom
     */
    roomId?: string;
}
/**
 * Check if a given object implements the RoutingInfoTypeRoom interface.
 */
export declare function instanceOfRoutingInfoTypeRoom(value: object): boolean;
export declare function RoutingInfoTypeRoomFromJSON(json: any): RoutingInfoTypeRoom;
export declare function RoutingInfoTypeRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoTypeRoom;
export declare function RoutingInfoTypeRoomToJSON(value?: RoutingInfoTypeRoom | null): any;

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
import type { Links } from './Links';
import type { ReservationAutoRoomAssignRequestType } from './ReservationAutoRoomAssignRequestType';
import type { WarningsType } from './WarningsType';
/**
 * Request for auto assignment of rooms to reservations.
 * @export
 * @interface AutoAssignRoom
 */
export interface AutoAssignRoom {
    /**
     *
     * @type {ReservationAutoRoomAssignRequestType}
     * @memberof AutoAssignRoom
     */
    criteria?: ReservationAutoRoomAssignRequestType;
    /**
     *
     * @type {Links}
     * @memberof AutoAssignRoom
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof AutoAssignRoom
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AutoAssignRoom interface.
 */
export declare function instanceOfAutoAssignRoom(value: object): boolean;
export declare function AutoAssignRoomFromJSON(json: any): AutoAssignRoom;
export declare function AutoAssignRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoAssignRoom;
export declare function AutoAssignRoomToJSON(value?: AutoAssignRoom | null): any;
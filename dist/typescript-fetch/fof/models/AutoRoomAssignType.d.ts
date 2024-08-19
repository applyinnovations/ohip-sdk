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
import type { ErrorType } from './ErrorType';
import type { ReservationId } from './ReservationId';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningType } from './WarningType';
/**
 * Collection of error and warning if any.
 * @export
 * @interface AutoRoomAssignType
 */
export interface AutoRoomAssignType {
    /**
     * Arrival date of the reservation.
     * @type {string}
     * @memberof AutoRoomAssignType
     */
    arrivalDate?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof AutoRoomAssignType
     */
    confirmationNo?: UniqueIDType;
    /**
     * Departure date of the reservation.
     * @type {string}
     * @memberof AutoRoomAssignType
     */
    departureDate?: string;
    /**
     * An error that occurred during the processing of a message.
     * @type {Array<ErrorType>}
     * @memberof AutoRoomAssignType
     */
    errors?: Array<ErrorType>;
    /**
     * Guest name associated to the reservation.
     * @type {string}
     * @memberof AutoRoomAssignType
     */
    guestName?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof AutoRoomAssignType
     */
    reservationId?: ReservationId;
    /**
     * Room number associated to the reservation.
     * @type {string}
     * @memberof AutoRoomAssignType
     */
    roomId?: string;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoRoomAssignType
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AutoRoomAssignType interface.
 */
export declare function instanceOfAutoRoomAssignType(value: object): boolean;
export declare function AutoRoomAssignTypeFromJSON(json: any): AutoRoomAssignType;
export declare function AutoRoomAssignTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoRoomAssignType;
export declare function AutoRoomAssignTypeToJSON(value?: AutoRoomAssignType | null): any;

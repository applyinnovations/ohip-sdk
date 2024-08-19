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
import type { HousekeepingRoomReservationStatusType } from './HousekeepingRoomReservationStatusType';
import type { ReservationId } from './ReservationId';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import type { StayDateInfoType } from './StayDateInfoType';
import type { UniqueIDType } from './UniqueIDType';
import type { VIPStatusType } from './VIPStatusType';
/**
 * Reservation details, including a list of the associated payment methods.
 * @export
 * @interface ReservationForCCAuthType
 */
export interface ReservationForCCAuthType {
    /**
     *
     * @type {string}
     * @memberof ReservationForCCAuthType
     */
    guestFirstName?: string;
    /**
     * Guest name that is registered for the reservation.
     * @type {string}
     * @memberof ReservationForCCAuthType
     */
    guestName?: string;
    /**
     * Defines reservation payment methods.
     * @type {Array<ReservationPaymentMethodType>}
     * @memberof ReservationForCCAuthType
     */
    paymentMethods?: Array<ReservationPaymentMethodType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ReservationForCCAuthType
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {ReservationId}
     * @memberof ReservationForCCAuthType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {HousekeepingRoomReservationStatusType}
     * @memberof ReservationForCCAuthType
     */
    reservationStatusInfo?: HousekeepingRoomReservationStatusType;
    /**
     *
     * @type {string}
     * @memberof ReservationForCCAuthType
     */
    room?: string;
    /**
     *
     * @type {StayDateInfoType}
     * @memberof ReservationForCCAuthType
     */
    stayDateInfo?: StayDateInfoType;
    /**
     *
     * @type {VIPStatusType}
     * @memberof ReservationForCCAuthType
     */
    vipStatus?: VIPStatusType;
}
/**
 * Check if a given object implements the ReservationForCCAuthType interface.
 */
export declare function instanceOfReservationForCCAuthType(value: object): boolean;
export declare function ReservationForCCAuthTypeFromJSON(json: any): ReservationForCCAuthType;
export declare function ReservationForCCAuthTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationForCCAuthType;
export declare function ReservationForCCAuthTypeToJSON(value?: ReservationForCCAuthType | null): any;

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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { LinkedReservationType } from './LinkedReservationType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import type { ReservationAllowedActionType } from './ReservationAllowedActionType';
import type { ReservationBlockType } from './ReservationBlockType';
import type { TimeSpanType } from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface LinkedReservationInfoType
 */
export interface LinkedReservationInfoType {
    /**
     * Allowed action.
     * @type {Array<ReservationAllowedActionType>}
     * @memberof LinkedReservationInfoType
     */
    allowedActions?: Array<ReservationAllowedActionType>;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof LinkedReservationInfoType
     */
    balance?: CurrencyAmountType;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    displayColor?: string;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    givenName?: string;
    /**
     *
     * @type {ResGuaranteeType}
     * @memberof LinkedReservationInfoType
     */
    guarantee?: ResGuaranteeType;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {LinkedReservationType}
     * @memberof LinkedReservationInfoType
     */
    linkReservationType?: LinkedReservationType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof LinkedReservationInfoType
     */
    rate?: CurrencyAmountType;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    ratePlanCode?: string;
    /**
     *
     * @type {ReservationBlockType}
     * @memberof LinkedReservationInfoType
     */
    reservationBlock?: ReservationBlockType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof LinkedReservationInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof LinkedReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * This attribute is to verify if reverse check-in is allowed for the reservation.
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    reverseCheckInAllowed?: boolean;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    room?: string;
    /**
     * This attribute is to verify if room number is locked for the reservation. When true the room number cannot be changed
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    roomNumberLocked?: boolean;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    roomType?: string;
    /**
     * This attribute checks if rate is suppressed or not in order to properly show strike through.
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    suppressRate?: boolean;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    surname?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof LinkedReservationInfoType
     */
    timeSpan?: TimeSpanType;
    /**
     *
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    title?: string;
}
/**
 * Check if a given object implements the LinkedReservationInfoType interface.
 */
export declare function instanceOfLinkedReservationInfoType(value: object): boolean;
export declare function LinkedReservationInfoTypeFromJSON(json: any): LinkedReservationInfoType;
export declare function LinkedReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedReservationInfoType;
export declare function LinkedReservationInfoTypeToJSON(value?: LinkedReservationInfoType | null): any;

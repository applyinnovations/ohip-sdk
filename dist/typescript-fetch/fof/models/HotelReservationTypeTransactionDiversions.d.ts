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
import type { ReservationTransactionDiversionType } from './ReservationTransactionDiversionType';
/**
 * List of transaction diversions attached to the reservation.
 * @export
 * @interface HotelReservationTypeTransactionDiversions
 */
export interface HotelReservationTypeTransactionDiversions {
    /**
     *
     * @type {string}
     * @memberof HotelReservationTypeTransactionDiversions
     */
    actionType?: string;
    /**
     *
     * @type {Array<Array<ReservationTransactionDiversionType>>}
     * @memberof HotelReservationTypeTransactionDiversions
     */
    transactionDiversions?: Array<Array<ReservationTransactionDiversionType>>;
}
/**
 * Check if a given object implements the HotelReservationTypeTransactionDiversions interface.
 */
export declare function instanceOfHotelReservationTypeTransactionDiversions(value: object): boolean;
export declare function HotelReservationTypeTransactionDiversionsFromJSON(json: any): HotelReservationTypeTransactionDiversions;
export declare function HotelReservationTypeTransactionDiversionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationTypeTransactionDiversions;
export declare function HotelReservationTypeTransactionDiversionsToJSON(value?: HotelReservationTypeTransactionDiversions | null): any;

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
import type { PayeeInfoType } from './PayeeInfoType';
/**
 * Folio window view which holds the set of folios for a reservation.
 * @export
 * @interface ReservationFolioWindowType
 */
export interface ReservationFolioWindowType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ReservationFolioWindowType
     */
    balance?: CurrencyAmountType;
    /**
     *
     * @type {number}
     * @memberof ReservationFolioWindowType
     */
    folioWindowNo?: number;
    /**
     *
     * @type {PayeeInfoType}
     * @memberof ReservationFolioWindowType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * Payment Method Type
     * @type {string}
     * @memberof ReservationFolioWindowType
     */
    paymentMethod?: string;
}
/**
 * Check if a given object implements the ReservationFolioWindowType interface.
 */
export declare function instanceOfReservationFolioWindowType(value: object): boolean;
export declare function ReservationFolioWindowTypeFromJSON(json: any): ReservationFolioWindowType;
export declare function ReservationFolioWindowTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationFolioWindowType;
export declare function ReservationFolioWindowTypeToJSON(value?: ReservationFolioWindowType | null): any;

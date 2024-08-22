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
import type { InstanceLink } from './InstanceLink';
import type { ReservationInfoType } from './ReservationInfoType';
import type { ReservationsSummaryType } from './ReservationsSummaryType';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface ShortReservation
 */
export interface ShortReservation {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ShortReservation
     */
    links?: Array<InstanceLink>;
    /**
     * Short reservation information response.
     * @type {Array<ReservationInfoType>}
     * @memberof ShortReservation
     */
    reservationInfoList?: Array<ReservationInfoType>;
    /**
     *
     * @type {ReservationsSummaryType}
     * @memberof ShortReservation
     */
    reservationsSummary?: ReservationsSummaryType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ShortReservation
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ShortReservation interface.
 */
export declare function instanceOfShortReservation(value: object): boolean;
export declare function ShortReservationFromJSON(json: any): ShortReservation;
export declare function ShortReservationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShortReservation;
export declare function ShortReservationToJSON(value?: ShortReservation | null): any;

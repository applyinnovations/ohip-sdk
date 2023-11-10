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
import type { ChangeInterfaceStatusType } from './ChangeInterfaceStatusType';
/**
 * Contains collection of reservation and interface information
 * @export
 * @interface ReservationInterfaceReservationInterfaceStatus
 */
export interface ReservationInterfaceReservationInterfaceStatus {
    /**
     * Collection of reservation and interface information.
     * @type {Array<ChangeInterfaceStatusType>}
     * @memberof ReservationInterfaceReservationInterfaceStatus
     */
    interfaceStatusList?: Array<ChangeInterfaceStatusType>;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ReservationInterfaceReservationInterfaceStatus
     */
    logo?: string;
}
/**
 * Check if a given object implements the ReservationInterfaceReservationInterfaceStatus interface.
 */
export declare function instanceOfReservationInterfaceReservationInterfaceStatus(value: object): boolean;
export declare function ReservationInterfaceReservationInterfaceStatusFromJSON(json: any): ReservationInterfaceReservationInterfaceStatus;
export declare function ReservationInterfaceReservationInterfaceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInterfaceReservationInterfaceStatus;
export declare function ReservationInterfaceReservationInterfaceStatusToJSON(value?: ReservationInterfaceReservationInterfaceStatus | null): any;

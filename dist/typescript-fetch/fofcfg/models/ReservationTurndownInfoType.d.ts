/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TurndownStatusType } from './TurndownStatusType';
/**
 * Turndown information for a reservation
 * @export
 * @interface ReservationTurndownInfoType
 */
export interface ReservationTurndownInfoType {
    /**
     * Indicates if turndown is allowed or not
     * @type {boolean}
     * @memberof ReservationTurndownInfoType
     */
    allowed?: boolean;
    /**
     *
     * @type {TurndownStatusType}
     * @memberof ReservationTurndownInfoType
     */
    status?: TurndownStatusType;
}
/**
 * Check if a given object implements the ReservationTurndownInfoType interface.
 */
export declare function instanceOfReservationTurndownInfoType(value: object): boolean;
export declare function ReservationTurndownInfoTypeFromJSON(json: any): ReservationTurndownInfoType;
export declare function ReservationTurndownInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationTurndownInfoType;
export declare function ReservationTurndownInfoTypeToJSON(value?: ReservationTurndownInfoType | null): any;

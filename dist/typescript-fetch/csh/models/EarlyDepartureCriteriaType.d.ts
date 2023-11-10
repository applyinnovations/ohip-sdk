/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationIdList } from './ReservationIdList';
/**
 * Criteria type for verifying or changing an Early Departure reservation.
 * @export
 * @interface EarlyDepartureCriteriaType
 */
export interface EarlyDepartureCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof EarlyDepartureCriteriaType
     */
    cashierId?: number;
    /**
     * Property code.
     * @type {string}
     * @memberof EarlyDepartureCriteriaType
     */
    hotelId?: string;
    /**
     * Indicates if check has to be done for Rate Tiers.
     * @type {boolean}
     * @memberof EarlyDepartureCriteriaType
     */
    ignoreCheckOnTieredRate?: boolean;
    /**
     * Indicates if Rate Restriction check should be overridden.
     * @type {boolean}
     * @memberof EarlyDepartureCriteriaType
     */
    ignoreRateRestriction?: boolean;
    /**
     * Indicates if any allowance consumed by the guest for today can be posted to the Guest Folio. If this cannot be done then the Early Departure cannot proceed.
     * @type {boolean}
     * @memberof EarlyDepartureCriteriaType
     */
    postConsumedAllowanceToGuest?: boolean;
    /**
     * Indicates if the early departure penalty should be posted .
     * @type {boolean}
     * @memberof EarlyDepartureCriteriaType
     */
    postEarlyDeparturePenalty?: boolean;
    /**
     *
     * @type {ReservationIdList}
     * @memberof EarlyDepartureCriteriaType
     */
    reservationIdList?: ReservationIdList;
}
/**
 * Check if a given object implements the EarlyDepartureCriteriaType interface.
 */
export declare function instanceOfEarlyDepartureCriteriaType(value: object): boolean;
export declare function EarlyDepartureCriteriaTypeFromJSON(json: any): EarlyDepartureCriteriaType;
export declare function EarlyDepartureCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EarlyDepartureCriteriaType;
export declare function EarlyDepartureCriteriaTypeToJSON(value?: EarlyDepartureCriteriaType | null): any;

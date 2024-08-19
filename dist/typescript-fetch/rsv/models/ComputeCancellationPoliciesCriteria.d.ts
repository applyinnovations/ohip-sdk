/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import type { ReservationId } from './ReservationId';
/**
 * Criteria for calculating the deposit/cancellation amount based on a reservation, policy code, amount or percentage.
 * @export
 * @interface ComputeCancellationPoliciesCriteria
 */
export interface ComputeCancellationPoliciesCriteria {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    currencyCode?: string;
    /**
     * Property Code of the reservation.
     * @type {string}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    hotelId?: string;
    /**
     * The number of nights used in the calculation of the cancellation amount.
     * @type {number}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    nights?: number;
    /**
     * The percentage based on which the calculation of the amount and due date is to be done.
     * @type {number}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    percentage?: number;
    /**
     * The policy code based on which the calculation of the amount and due date is to be done.
     * @type {string}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    policyCode?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {DepositCancelRevenueType}
     * @memberof ComputeCancellationPoliciesCriteria
     */
    revenueType?: DepositCancelRevenueType;
}
/**
 * Check if a given object implements the ComputeCancellationPoliciesCriteria interface.
 */
export declare function instanceOfComputeCancellationPoliciesCriteria(value: object): boolean;
export declare function ComputeCancellationPoliciesCriteriaFromJSON(json: any): ComputeCancellationPoliciesCriteria;
export declare function ComputeCancellationPoliciesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeCancellationPoliciesCriteria;
export declare function ComputeCancellationPoliciesCriteriaToJSON(value?: ComputeCancellationPoliciesCriteria | null): any;

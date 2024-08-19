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
import type { OffsetUnitType } from './OffsetUnitType';
import type { PolicyAmountPercentType } from './PolicyAmountPercentType';
import type { PolicyDeadlineType } from './PolicyDeadlineType';
/**
 * The CancelPenalty class defines the cancellation policy of the hotel facility.
 * @export
 * @interface GuaranteePolicyTypeCancelPenalty
 */
export interface GuaranteePolicyTypeCancelPenalty {
    /**
     *
     * @type {PolicyAmountPercentType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     *
     * @type {PolicyDeadlineType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    deadline?: PolicyDeadlineType;
    /**
     * Indicator if Cancellation Penalty is currently applicable or not.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    effective?: boolean;
    /**
     * Message.
     * @type {number}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    estimatedAmount?: number;
    /**
     * Formatted Text Rule of the Cancellation Penalty.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    formattedRule?: string;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    manual?: boolean;
    /**
     * Indicates if the amount is refundable if booking is canceled.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    nonRefundable?: boolean;
    /**
     *
     * @type {OffsetUnitType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    offsetUnit?: OffsetUnitType;
    /**
     * Text description of the Penalty in a given language.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    penaltyDescription?: string;
    /**
     * Policy Code.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    policyCode?: string;
}
/**
 * Check if a given object implements the GuaranteePolicyTypeCancelPenalty interface.
 */
export declare function instanceOfGuaranteePolicyTypeCancelPenalty(value: object): boolean;
export declare function GuaranteePolicyTypeCancelPenaltyFromJSON(json: any): GuaranteePolicyTypeCancelPenalty;
export declare function GuaranteePolicyTypeCancelPenaltyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteePolicyTypeCancelPenalty;
export declare function GuaranteePolicyTypeCancelPenaltyToJSON(value?: GuaranteePolicyTypeCancelPenalty | null): any;

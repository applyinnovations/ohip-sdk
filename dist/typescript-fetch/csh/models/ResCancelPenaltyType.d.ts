/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface ResCancelPenaltyType
 */
export interface ResCancelPenaltyType {
    /**
     *
     * @type {PolicyAmountPercentType}
     * @memberof ResCancelPenaltyType
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     *
     * @type {PolicyDeadlineType}
     * @memberof ResCancelPenaltyType
     */
    deadline?: PolicyDeadlineType;
    /**
     * Indicator if Cancellation Penalty is currently applicable or not.
     * @type {boolean}
     * @memberof ResCancelPenaltyType
     */
    effective?: boolean;
    /**
     * Formatted Text Rule of the Cancellation Penalty.
     * @type {string}
     * @memberof ResCancelPenaltyType
     */
    formattedRule?: string;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof ResCancelPenaltyType
     */
    manual?: boolean;
    /**
     * Indicates if the amount is refundable if booking is canceled.
     * @type {boolean}
     * @memberof ResCancelPenaltyType
     */
    nonRefundable?: boolean;
    /**
     *
     * @type {OffsetUnitType}
     * @memberof ResCancelPenaltyType
     */
    offsetUnit?: OffsetUnitType;
    /**
     * Text description of the Penalty in a given language.
     * @type {string}
     * @memberof ResCancelPenaltyType
     */
    penaltyDescription?: string;
    /**
     * Policy Code.
     * @type {string}
     * @memberof ResCancelPenaltyType
     */
    policyCode?: string;
}
/**
 * Check if a given object implements the ResCancelPenaltyType interface.
 */
export declare function instanceOfResCancelPenaltyType(value: object): boolean;
export declare function ResCancelPenaltyTypeFromJSON(json: any): ResCancelPenaltyType;
export declare function ResCancelPenaltyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCancelPenaltyType;
export declare function ResCancelPenaltyTypeToJSON(value?: ResCancelPenaltyType | null): any;

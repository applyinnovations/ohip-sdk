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
import type { ReservationId } from './ReservationId';
/**
 * Criteria for retrieving one or more guest's folio transactions.
 * @export
 * @interface ApplyFlexibleBenefitPostingsCriteriaType
 */
export interface ApplyFlexibleBenefitPostingsCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ApplyFlexibleBenefitPostingsCriteriaType
     */
    cashierId?: number;
    /**
     * Hotel context for the Reservations.
     * @type {string}
     * @memberof ApplyFlexibleBenefitPostingsCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof ApplyFlexibleBenefitPostingsCriteriaType
     */
    reservationId?: ReservationId;
}
/**
 * Check if a given object implements the ApplyFlexibleBenefitPostingsCriteriaType interface.
 */
export declare function instanceOfApplyFlexibleBenefitPostingsCriteriaType(value: object): boolean;
export declare function ApplyFlexibleBenefitPostingsCriteriaTypeFromJSON(json: any): ApplyFlexibleBenefitPostingsCriteriaType;
export declare function ApplyFlexibleBenefitPostingsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyFlexibleBenefitPostingsCriteriaType;
export declare function ApplyFlexibleBenefitPostingsCriteriaTypeToJSON(value?: ApplyFlexibleBenefitPostingsCriteriaType | null): any;

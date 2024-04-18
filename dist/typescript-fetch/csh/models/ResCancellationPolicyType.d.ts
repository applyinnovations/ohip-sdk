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
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import type { ResCancelPenaltyType } from './ResCancelPenaltyType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * A cancellation policy attached with the reservation.
 * @export
 * @interface ResCancellationPolicyType
 */
export interface ResCancellationPolicyType {
    /**
     * Comments attached with the reservation cancellation.
     * @type {string}
     * @memberof ResCancellationPolicyType
     */
    comments?: string;
    /**
     * The percentage amount due for reservation cancellation.
     * @type {number}
     * @memberof ResCancellationPolicyType
     */
    percentageDue?: number;
    /**
     *
     * @type {ResCancelPenaltyType}
     * @memberof ResCancellationPolicyType
     */
    policy?: ResCancelPenaltyType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ResCancellationPolicyType
     */
    policyId?: UniqueIDType;
    /**
     *
     * @type {DepositCancelRevenueType}
     * @memberof ResCancellationPolicyType
     */
    revenueType?: DepositCancelRevenueType;
}
/**
 * Check if a given object implements the ResCancellationPolicyType interface.
 */
export declare function instanceOfResCancellationPolicyType(value: object): boolean;
export declare function ResCancellationPolicyTypeFromJSON(json: any): ResCancellationPolicyType;
export declare function ResCancellationPolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCancellationPolicyType;
export declare function ResCancellationPolicyTypeToJSON(value?: ResCancellationPolicyType | null): any;
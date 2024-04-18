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
import type { ResCancellationPolicyType } from './ResCancellationPolicyType';
import type { ResDepositPolicyType } from './ResDepositPolicyType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * A collection of reservation deposit and cancellation policies.
 * @export
 * @interface ReservationPolicySummaryType
 */
export interface ReservationPolicySummaryType {
    /**
     * A list of reservation cancellation policies.
     * @type {Array<ResCancellationPolicyType>}
     * @memberof ReservationPolicySummaryType
     */
    cancellationPolicies?: Array<ResCancellationPolicyType>;
    /**
     * A list of deposit policies attached with the reservation.
     * @type {Array<ResDepositPolicyType>}
     * @memberof ReservationPolicySummaryType
     */
    depositPolicies?: Array<ResDepositPolicyType>;
    /**
     * Name identifier for the reservation.
     * @type {string}
     * @memberof ReservationPolicySummaryType
     */
    name?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationPolicySummaryType
     */
    reservationIdList?: Array<UniqueIDType>;
}
/**
 * Check if a given object implements the ReservationPolicySummaryType interface.
 */
export declare function instanceOfReservationPolicySummaryType(value: object): boolean;
export declare function ReservationPolicySummaryTypeFromJSON(json: any): ReservationPolicySummaryType;
export declare function ReservationPolicySummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPolicySummaryType;
export declare function ReservationPolicySummaryTypeToJSON(value?: ReservationPolicySummaryType | null): any;
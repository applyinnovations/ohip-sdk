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
import type { ResCancellationPoliciesType } from './ResCancellationPoliciesType';
import type { ResDepositPoliciesType } from './ResDepositPoliciesType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * A collection of reservation deposit and cancellation policies.
 * @export
 * @interface ReservationPolicySummaryType
 */
export interface ReservationPolicySummaryType {
    /**
     *
     * @type {ResCancellationPoliciesType}
     * @memberof ReservationPolicySummaryType
     */
    cancellationPolicies?: ResCancellationPoliciesType;
    /**
     *
     * @type {ResDepositPoliciesType}
     * @memberof ReservationPolicySummaryType
     */
    depositPolicies?: ResDepositPoliciesType;
    /**
     * Name identifier for the reservation.
     * @type {string}
     * @memberof ReservationPolicySummaryType
     */
    name?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof ReservationPolicySummaryType
     */
    reservationIdList?: UniqueIDListType;
}
/**
 * Check if a given object implements the ReservationPolicySummaryType interface.
 */
export declare function instanceOfReservationPolicySummaryType(value: object): boolean;
export declare function ReservationPolicySummaryTypeFromJSON(json: any): ReservationPolicySummaryType;
export declare function ReservationPolicySummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPolicySummaryType;
export declare function ReservationPolicySummaryTypeToJSON(value?: ReservationPolicySummaryType | null): any;

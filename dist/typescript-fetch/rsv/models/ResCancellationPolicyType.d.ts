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

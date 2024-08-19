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
import type { DepositCancelConfigCriteriaType } from './DepositCancelConfigCriteriaType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Operation to fetch the details for deposit rules, applicable to a reservation. Based on the criteria the rule information can be retrieved for all deposit rules or for a particular rule.
 * @export
 * @interface ComputeDepositPolicies
 */
export interface ComputeDepositPolicies {
    /**
     *
     * @type {DepositCancelConfigCriteriaType}
     * @memberof ComputeDepositPolicies
     */
    criteria?: DepositCancelConfigCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ComputeDepositPolicies
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ComputeDepositPolicies
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ComputeDepositPolicies interface.
 */
export declare function instanceOfComputeDepositPolicies(value: object): boolean;
export declare function ComputeDepositPoliciesFromJSON(json: any): ComputeDepositPolicies;
export declare function ComputeDepositPoliciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeDepositPolicies;
export declare function ComputeDepositPoliciesToJSON(value?: ComputeDepositPolicies | null): any;

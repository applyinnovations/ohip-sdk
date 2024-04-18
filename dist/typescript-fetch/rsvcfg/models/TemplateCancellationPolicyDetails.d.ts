/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConfigCancelPenaltyType } from './ConfigCancelPenaltyType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response for fetch template Cancellation Policies.
 * @export
 * @interface TemplateCancellationPolicyDetails
 */
export interface TemplateCancellationPolicyDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateCancellationPolicyDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of template Cancel Penalty rules.
     * @type {Array<ConfigCancelPenaltyType>}
     * @memberof TemplateCancellationPolicyDetails
     */
    templateCancelPenaltyConfigs?: Array<ConfigCancelPenaltyType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateCancellationPolicyDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateCancellationPolicyDetails interface.
 */
export declare function instanceOfTemplateCancellationPolicyDetails(value: object): boolean;
export declare function TemplateCancellationPolicyDetailsFromJSON(json: any): TemplateCancellationPolicyDetails;
export declare function TemplateCancellationPolicyDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCancellationPolicyDetails;
export declare function TemplateCancellationPolicyDetailsToJSON(value?: TemplateCancellationPolicyDetails | null): any;
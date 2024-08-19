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
 * Request object that holds the details of template Cancellation Policy to be changed.
 * @export
 * @interface TemplateCancellationPolicyToBeChanged
 */
export interface TemplateCancellationPolicyToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateCancellationPolicyToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {ConfigCancelPenaltyType}
     * @memberof TemplateCancellationPolicyToBeChanged
     */
    templateCancelPenalty?: ConfigCancelPenaltyType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateCancellationPolicyToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateCancellationPolicyToBeChanged interface.
 */
export declare function instanceOfTemplateCancellationPolicyToBeChanged(value: object): boolean;
export declare function TemplateCancellationPolicyToBeChangedFromJSON(json: any): TemplateCancellationPolicyToBeChanged;
export declare function TemplateCancellationPolicyToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCancellationPolicyToBeChanged;
export declare function TemplateCancellationPolicyToBeChangedToJSON(value?: TemplateCancellationPolicyToBeChanged | null): any;

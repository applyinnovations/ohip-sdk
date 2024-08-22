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
 * Request object that holds the details of template Cancellation Policy to be created.
 * @export
 * @interface TemplateCancellationPolicyCriteria
 */
export interface TemplateCancellationPolicyCriteria {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateCancellationPolicyCriteria
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {ConfigCancelPenaltyType}
     * @memberof TemplateCancellationPolicyCriteria
     */
    templateCancelPenalty?: ConfigCancelPenaltyType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateCancellationPolicyCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateCancellationPolicyCriteria interface.
 */
export declare function instanceOfTemplateCancellationPolicyCriteria(value: object): boolean;
export declare function TemplateCancellationPolicyCriteriaFromJSON(json: any): TemplateCancellationPolicyCriteria;
export declare function TemplateCancellationPolicyCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCancellationPolicyCriteria;
export declare function TemplateCancellationPolicyCriteriaToJSON(value?: TemplateCancellationPolicyCriteria | null): any;

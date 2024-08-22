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
import type { InstanceLink } from './InstanceLink';
import type { PolicyApplyCriteriaType } from './PolicyApplyCriteriaType';
import type { WarningType } from './WarningType';
/**
 * Request to attach an existing Deposit Policy on a reservation towards an existing deposit payment on the same reservation.
 * @export
 * @interface AttachPolicyApplyCriteria
 */
export interface AttachPolicyApplyCriteria {
    /**
     *
     * @type {PolicyApplyCriteriaType}
     * @memberof AttachPolicyApplyCriteria
     */
    criteria?: PolicyApplyCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AttachPolicyApplyCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AttachPolicyApplyCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AttachPolicyApplyCriteria interface.
 */
export declare function instanceOfAttachPolicyApplyCriteria(value: object): boolean;
export declare function AttachPolicyApplyCriteriaFromJSON(json: any): AttachPolicyApplyCriteria;
export declare function AttachPolicyApplyCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachPolicyApplyCriteria;
export declare function AttachPolicyApplyCriteriaToJSON(value?: AttachPolicyApplyCriteria | null): any;

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
import type { PostBillingCheckChargesCriteriaType } from './PostBillingCheckChargesCriteriaType';
import type { WarningType } from './WarningType';
/**
 * Request object for PostBillingCheckCharges operation.
 * @export
 * @interface BillingCheckChargesCriteria
 */
export interface BillingCheckChargesCriteria {
    /**
     *
     * @type {PostBillingCheckChargesCriteriaType}
     * @memberof BillingCheckChargesCriteria
     */
    check?: PostBillingCheckChargesCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BillingCheckChargesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BillingCheckChargesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BillingCheckChargesCriteria interface.
 */
export declare function instanceOfBillingCheckChargesCriteria(value: object): boolean;
export declare function BillingCheckChargesCriteriaFromJSON(json: any): BillingCheckChargesCriteria;
export declare function BillingCheckChargesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingCheckChargesCriteria;
export declare function BillingCheckChargesCriteriaToJSON(value?: BillingCheckChargesCriteria | null): any;
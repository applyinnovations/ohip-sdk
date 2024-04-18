/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARPostChargesInBatchCriteriaType } from './ARPostChargesInBatchCriteriaType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request for posting a charge in a batch to list of accounts.
 * @export
 * @interface BatchChargesToPost
 */
export interface BatchChargesToPost {
    /**
     *
     * @type {ARPostChargesInBatchCriteriaType}
     * @memberof BatchChargesToPost
     */
    criteria?: ARPostChargesInBatchCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BatchChargesToPost
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchChargesToPost
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BatchChargesToPost interface.
 */
export declare function instanceOfBatchChargesToPost(value: object): boolean;
export declare function BatchChargesToPostFromJSON(json: any): BatchChargesToPost;
export declare function BatchChargesToPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchChargesToPost;
export declare function BatchChargesToPostToJSON(value?: BatchChargesToPost | null): any;
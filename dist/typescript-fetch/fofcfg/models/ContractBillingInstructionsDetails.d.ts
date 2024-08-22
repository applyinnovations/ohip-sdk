/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ContractBillingInstructionType } from './ContractBillingInstructionType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Contract Billing Instructions.
 * @export
 * @interface ContractBillingInstructionsDetails
 */
export interface ContractBillingInstructionsDetails {
    /**
     * List of Contract Billing Instructions.
     * @type {Array<ContractBillingInstructionType>}
     * @memberof ContractBillingInstructionsDetails
     */
    contractBillingInstructions?: Array<ContractBillingInstructionType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ContractBillingInstructionsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ContractBillingInstructionsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ContractBillingInstructionsDetails interface.
 */
export declare function instanceOfContractBillingInstructionsDetails(value: object): boolean;
export declare function ContractBillingInstructionsDetailsFromJSON(json: any): ContractBillingInstructionsDetails;
export declare function ContractBillingInstructionsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractBillingInstructionsDetails;
export declare function ContractBillingInstructionsDetailsToJSON(value?: ContractBillingInstructionsDetails | null): any;

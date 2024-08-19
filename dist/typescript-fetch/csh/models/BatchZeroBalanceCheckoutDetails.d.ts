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
import type { WarningType } from './WarningType';
/**
 * Response for batch zero balance check out.
 * @export
 * @interface BatchZeroBalanceCheckoutDetails
 */
export interface BatchZeroBalanceCheckoutDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BatchZeroBalanceCheckoutDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used for Character Strings, length 0 to 40.
     * @type {string}
     * @memberof BatchZeroBalanceCheckoutDetails
     */
    processId?: string;
    /**
     * Zero balance Reservations count identifier.
     * @type {number}
     * @memberof BatchZeroBalanceCheckoutDetails
     */
    resvCount?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchZeroBalanceCheckoutDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BatchZeroBalanceCheckoutDetails interface.
 */
export declare function instanceOfBatchZeroBalanceCheckoutDetails(value: object): boolean;
export declare function BatchZeroBalanceCheckoutDetailsFromJSON(json: any): BatchZeroBalanceCheckoutDetails;
export declare function BatchZeroBalanceCheckoutDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchZeroBalanceCheckoutDetails;
export declare function BatchZeroBalanceCheckoutDetailsToJSON(value?: BatchZeroBalanceCheckoutDetails | null): any;

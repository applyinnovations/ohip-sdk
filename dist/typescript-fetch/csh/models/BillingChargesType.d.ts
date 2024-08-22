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
import type { BillingChargeType } from './BillingChargeType';
/**
 * Criteria for the charge information list to be edited.
 * @export
 * @interface BillingChargesType
 */
export interface BillingChargesType {
    /**
     * Request to edit a billing charge information
     * @type {Array<BillingChargeType>}
     * @memberof BillingChargesType
     */
    billingCharges?: Array<BillingChargeType>;
    /**
     *
     * @type {string}
     * @memberof BillingChargesType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the BillingChargesType interface.
 */
export declare function instanceOfBillingChargesType(value: object): boolean;
export declare function BillingChargesTypeFromJSON(json: any): BillingChargesType;
export declare function BillingChargesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingChargesType;
export declare function BillingChargesTypeToJSON(value?: BillingChargesType | null): any;

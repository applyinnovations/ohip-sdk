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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Details regarding adjustments of transactions. Adjustment of transactions requires a amount/percentage and the adjustment reason.
 * @export
 * @interface AdjustmentDetailsType
 */
export interface AdjustmentDetailsType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AdjustmentDetailsType
     */
    amount?: CurrencyAmountType;
    /**
     * The department name or ID with which the adjustment is associated.
     * @type {string}
     * @memberof AdjustmentDetailsType
     */
    department?: string;
    /**
     * The percentage by which the transaction has to be adjusted.
     * @type {number}
     * @memberof AdjustmentDetailsType
     */
    percentage?: number;
    /**
     * The reason code for the adjustment.
     * @type {string}
     * @memberof AdjustmentDetailsType
     */
    reasonCode?: string;
    /**
     * The reason text for the adjustment.
     * @type {string}
     * @memberof AdjustmentDetailsType
     */
    reasonDescription?: string;
}
/**
 * Check if a given object implements the AdjustmentDetailsType interface.
 */
export declare function instanceOfAdjustmentDetailsType(value: object): boolean;
export declare function AdjustmentDetailsTypeFromJSON(json: any): AdjustmentDetailsType;
export declare function AdjustmentDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdjustmentDetailsType;
export declare function AdjustmentDetailsTypeToJSON(value?: AdjustmentDetailsType | null): any;

/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdditionalGuestAmountType } from './AdditionalGuestAmountType';
import type { DiscountType } from './DiscountType';
import type { PointsType } from './PointsType';
import type { ShareDistributionInstructionType } from './ShareDistributionInstructionType';
import type { TotalType } from './TotalType';
/**
 * Base charge and additional charges related to a room that includes such things as additional guest amounts, cancel fees, etc. Also includes Discount percentages, total amount, and the rate description.
 * @export
 * @interface AmountType
 */
export interface AmountType {
    /**
     * Collection of incremental charges per age qualifying code for additional guests. Amount charged for additional occupant is with respect to age group of the base guests.
     * @type {Array<AdditionalGuestAmountType>}
     * @memberof AmountType
     */
    additionalGuestAmounts?: Array<AdditionalGuestAmountType>;
    /**
     *
     * @type {TotalType}
     * @memberof AmountType
     */
    base?: TotalType;
    /**
     *
     * @type {DiscountType}
     * @memberof AmountType
     */
    discount?: DiscountType;
    /**
     *
     * @type {TotalType}
     * @memberof AmountType
     */
    effectiveRate?: TotalType;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof AmountType
     */
    end?: string;
    /**
     *
     * @type {PointsType}
     * @memberof AmountType
     */
    requiredPoints?: PointsType;
    /**
     *
     * @type {ShareDistributionInstructionType}
     * @memberof AmountType
     */
    shareDistributionInstruction?: ShareDistributionInstructionType;
    /**
     * Indicates the share rate percentage for the reservation if set to CUSTOMSPLIT.
     * @type {number}
     * @memberof AmountType
     */
    shareRatePercentage?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof AmountType
     */
    start?: string;
    /**
     *
     * @type {TotalType}
     * @memberof AmountType
     */
    total?: TotalType;
}
/**
 * Check if a given object implements the AmountType interface.
 */
export declare function instanceOfAmountType(value: object): boolean;
export declare function AmountTypeFromJSON(json: any): AmountType;
export declare function AmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountType;
export declare function AmountTypeToJSON(value?: AmountType | null): any;

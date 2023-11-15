/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Information of a reservation during the process of upgrade.
 * @export
 * @interface UpsellInfoTypeUpsellInfo
 */
export interface UpsellInfoTypeUpsellInfo {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    firstNightUpsellAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    firstNightUpsellCharge?: CurrencyAmountType;
    /**
     * Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered)
     * @type {number}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    percentageSavings?: number;
    /**
     * Detail description of the Room Type.
     * @type {string}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    roomLongDescription?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    roomType?: CodeDescriptionType;
    /**
     * Upsell rule code
     * @type {string}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    ruleCode?: string;
    /**
     * Upsell rule description
     * @type {string}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    ruleDescription?: string;
    /**
     * Upsell Rule Id.
     * @type {number}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    ruleId?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    totalActualRateAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    totalUpsellCharge?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    totalUpsellMoneyAmount?: CurrencyAmountType;
    /**
     * Total Upsell Points.
     * @type {number}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    totalUpsellPoints?: number;
    /**
     * The date on which reservation is upgraded.
     * @type {string}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    upsellDate?: string;
    /**
     * User who upgraded the reservation.
     * @type {string}
     * @memberof UpsellInfoTypeUpsellInfo
     */
    upsellUser?: string;
}
/**
 * Check if a given object implements the UpsellInfoTypeUpsellInfo interface.
 */
export declare function instanceOfUpsellInfoTypeUpsellInfo(value: object): boolean;
export declare function UpsellInfoTypeUpsellInfoFromJSON(json: any): UpsellInfoTypeUpsellInfo;
export declare function UpsellInfoTypeUpsellInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellInfoTypeUpsellInfo;
export declare function UpsellInfoTypeUpsellInfoToJSON(value?: UpsellInfoTypeUpsellInfo | null): any;

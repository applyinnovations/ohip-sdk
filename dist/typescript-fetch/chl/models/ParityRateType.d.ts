/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AdditionalAmountListType } from './AdditionalAmountListType';
import type { AdditionalDetailListType } from './AdditionalDetailListType';
import type { EnhancedDescriptionType } from './EnhancedDescriptionType';
import type { ParityRateTypeRateAmounts } from './ParityRateTypeRateAmounts';
import type { ParityRateTypeTotalPricingAmounts } from './ParityRateTypeTotalPricingAmounts';
/**
 * Minimum and Maximum Rate on specific arrival date.
 * @export
 * @interface ParityRateType
 */
export interface ParityRateType {
    /**
     *
     * @type {AdditionalAmountListType}
     * @memberof ParityRateType
     */
    additionalAmounts?: AdditionalAmountListType;
    /**
     *
     * @type {AdditionalDetailListType}
     * @memberof ParityRateType
     */
    additionalDetailList?: AdditionalDetailListType;
    /**
     * A monetary amount.
     * @type {number}
     * @memberof ParityRateType
     */
    amount?: number;
    /**
     * Arrival Date.
     * @type {Date}
     * @memberof ParityRateType
     */
    arrivalDate?: Date;
    /**
     *
     * @type {number}
     * @memberof ParityRateType
     */
    availableRooms?: number;
    /**
     *
     * @type {string}
     * @memberof ParityRateType
     */
    channelRatePlanCategory?: string;
    /**
     *
     * @type {boolean}
     * @memberof ParityRateType
     */
    closed?: boolean;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof ParityRateType
     */
    currencyCode?: string;
    /**
     *
     * @type {ParityRateTypeRateAmounts}
     * @memberof ParityRateType
     */
    rateAmounts?: ParityRateTypeRateAmounts;
    /**
     *
     * @type {boolean}
     * @memberof ParityRateType
     */
    rateChangesOverDays?: boolean;
    /**
     *
     * @type {EnhancedDescriptionType}
     * @memberof ParityRateType
     */
    rateDescription?: EnhancedDescriptionType;
    /**
     *
     * @type {string}
     * @memberof ParityRateType
     */
    rateFrequency?: string;
    /**
     *
     * @type {string}
     * @memberof ParityRateType
     */
    ratePlanDescription?: string;
    /**
     *
     * @type {EnhancedDescriptionType}
     * @memberof ParityRateType
     */
    roomTypeDescription?: EnhancedDescriptionType;
    /**
     * Status Code related to functionality.
     * @type {string}
     * @memberof ParityRateType
     */
    statusCode?: string;
    /**
     * Description of Status Code.
     * @type {string}
     * @memberof ParityRateType
     */
    statusDescription?: string;
    /**
     *
     * @type {ParityRateTypeTotalPricingAmounts}
     * @memberof ParityRateType
     */
    totalPricingAmounts?: ParityRateTypeTotalPricingAmounts;
    /**
     *
     * @type {boolean}
     * @memberof ParityRateType
     */
    weekendDay?: boolean;
}
/**
 * Check if a given object implements the ParityRateType interface.
 */
export declare function instanceOfParityRateType(value: object): boolean;
export declare function ParityRateTypeFromJSON(json: any): ParityRateType;
export declare function ParityRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParityRateType;
export declare function ParityRateTypeToJSON(value?: ParityRateType | null): any;

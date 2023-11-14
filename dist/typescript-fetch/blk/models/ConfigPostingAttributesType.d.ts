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
import type { FunctionArgumentsType } from './FunctionArgumentsType';
import type { PackageCalculationRuleType } from './PackageCalculationRuleType';
import type { PackagePostingRhythmType } from './PackagePostingRhythmType';
import type { PkgInventoryItemType } from './PkgInventoryItemType';
/**
 * A config Package posting attributes type.
 * @export
 * @interface ConfigPostingAttributesType
 */
export interface ConfigPostingAttributesType {
    /**
     * The package price is added to the room rate.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    addToRate?: boolean;
    /**
     * Calculated Package Price based from Number of Adults, Children and Calculation Rule.
     * @type {number}
     * @memberof ConfigPostingAttributesType
     */
    calculatedPrice?: number;
    /**
     * Is package used for catering?
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    catering?: boolean;
    /**
     * Indicates whether a delivery time is required for the package.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    deliveryTimeRequired?: boolean;
    /**
     * End time the package is valid.
     * @type {string}
     * @memberof ConfigPostingAttributesType
     */
    endTime?: string;
    /**
     * Package will be forecasted for consumption the next business day.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    forecastNextDay?: boolean;
    /**
     * The custom formula used for this package, if any.
     * @type {string}
     * @memberof ConfigPostingAttributesType
     */
    formula?: string;
    /**
     *
     * @type {FunctionArgumentsType}
     * @memberof ConfigPostingAttributesType
     */
    formulaFunctionArguments?: FunctionArgumentsType;
    /**
     * The custom formula function name used for this package, if any.
     * @type {string}
     * @memberof ConfigPostingAttributesType
     */
    formulaFunctionName?: string;
    /**
     * Package Code Inventory Items type.
     * @type {Array<PkgInventoryItemType>}
     * @memberof ConfigPostingAttributesType
     */
    inventoryItems?: Array<PkgInventoryItemType>;
    /**
     * package charges will be posted next business day.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    postNextDay?: boolean;
    /**
     *
     * @type {PackagePostingRhythmType}
     * @memberof ConfigPostingAttributesType
     */
    postingRhythm?: PackagePostingRhythmType;
    /**
     *
     * @type {PackageCalculationRuleType}
     * @memberof ConfigPostingAttributesType
     */
    priceCalculationRule?: PackageCalculationRuleType;
    /**
     * The package price is printed on separate line of the folio.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    printSeparateLine?: boolean;
    /**
     * Can the package be sold separate from rate plan code?
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    sellSeparate?: boolean;
    /**
     * Start time the package is valid.
     * @type {string}
     * @memberof ConfigPostingAttributesType
     */
    startTime?: string;
    /**
     * Indicates whether a package is configured as a ticket or not.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    ticket?: boolean;
    /**
     * Can package be sold via Web channel.
     * @type {boolean}
     * @memberof ConfigPostingAttributesType
     */
    webBookable?: boolean;
}
/**
 * Check if a given object implements the ConfigPostingAttributesType interface.
 */
export declare function instanceOfConfigPostingAttributesType(value: object): boolean;
export declare function ConfigPostingAttributesTypeFromJSON(json: any): ConfigPostingAttributesType;
export declare function ConfigPostingAttributesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPostingAttributesType;
export declare function ConfigPostingAttributesTypeToJSON(value?: ConfigPostingAttributesType | null): any;
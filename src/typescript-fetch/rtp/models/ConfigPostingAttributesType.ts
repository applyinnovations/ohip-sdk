/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FunctionArgumentType } from './FunctionArgumentType';
import {
    FunctionArgumentTypeFromJSON,
    FunctionArgumentTypeFromJSONTyped,
    FunctionArgumentTypeToJSON,
} from './FunctionArgumentType';
import type { PackageCalculationRuleType } from './PackageCalculationRuleType';
import {
    PackageCalculationRuleTypeFromJSON,
    PackageCalculationRuleTypeFromJSONTyped,
    PackageCalculationRuleTypeToJSON,
} from './PackageCalculationRuleType';
import type { PackagePostingRhythmType } from './PackagePostingRhythmType';
import {
    PackagePostingRhythmTypeFromJSON,
    PackagePostingRhythmTypeFromJSONTyped,
    PackagePostingRhythmTypeToJSON,
} from './PackagePostingRhythmType';
import type { PkgInventoryItemType } from './PkgInventoryItemType';
import {
    PkgInventoryItemTypeFromJSON,
    PkgInventoryItemTypeFromJSONTyped,
    PkgInventoryItemTypeToJSON,
} from './PkgInventoryItemType';

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
     * Collection of function arguments and their corresponding values.
     * @type {Array<FunctionArgumentType>}
     * @memberof ConfigPostingAttributesType
     */
    formulaFunctionArguments?: Array<FunctionArgumentType>;
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
export function instanceOfConfigPostingAttributesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigPostingAttributesTypeFromJSON(json: any): ConfigPostingAttributesType {
    return ConfigPostingAttributesTypeFromJSONTyped(json, false);
}

export function ConfigPostingAttributesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPostingAttributesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addToRate': !exists(json, 'addToRate') ? undefined : json['addToRate'],
        'calculatedPrice': !exists(json, 'calculatedPrice') ? undefined : json['calculatedPrice'],
        'catering': !exists(json, 'catering') ? undefined : json['catering'],
        'deliveryTimeRequired': !exists(json, 'deliveryTimeRequired') ? undefined : json['deliveryTimeRequired'],
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'forecastNextDay': !exists(json, 'forecastNextDay') ? undefined : json['forecastNextDay'],
        'formula': !exists(json, 'formula') ? undefined : json['formula'],
        'formulaFunctionArguments': !exists(json, 'formulaFunctionArguments') ? undefined : ((json['formulaFunctionArguments'] as Array<any>).map(FunctionArgumentTypeFromJSON)),
        'formulaFunctionName': !exists(json, 'formulaFunctionName') ? undefined : json['formulaFunctionName'],
        'inventoryItems': !exists(json, 'inventoryItems') ? undefined : ((json['inventoryItems'] as Array<any>).map(PkgInventoryItemTypeFromJSON)),
        'postNextDay': !exists(json, 'postNextDay') ? undefined : json['postNextDay'],
        'postingRhythm': !exists(json, 'postingRhythm') ? undefined : PackagePostingRhythmTypeFromJSON(json['postingRhythm']),
        'priceCalculationRule': !exists(json, 'priceCalculationRule') ? undefined : PackageCalculationRuleTypeFromJSON(json['priceCalculationRule']),
        'printSeparateLine': !exists(json, 'printSeparateLine') ? undefined : json['printSeparateLine'],
        'sellSeparate': !exists(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'ticket': !exists(json, 'ticket') ? undefined : json['ticket'],
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function ConfigPostingAttributesTypeToJSON(value?: ConfigPostingAttributesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addToRate': value.addToRate,
        'calculatedPrice': value.calculatedPrice,
        'catering': value.catering,
        'deliveryTimeRequired': value.deliveryTimeRequired,
        'endTime': value.endTime,
        'forecastNextDay': value.forecastNextDay,
        'formula': value.formula,
        'formulaFunctionArguments': value.formulaFunctionArguments === undefined ? undefined : ((value.formulaFunctionArguments as Array<any>).map(FunctionArgumentTypeToJSON)),
        'formulaFunctionName': value.formulaFunctionName,
        'inventoryItems': value.inventoryItems === undefined ? undefined : ((value.inventoryItems as Array<any>).map(PkgInventoryItemTypeToJSON)),
        'postNextDay': value.postNextDay,
        'postingRhythm': PackagePostingRhythmTypeToJSON(value.postingRhythm),
        'priceCalculationRule': PackageCalculationRuleTypeToJSON(value.priceCalculationRule),
        'printSeparateLine': value.printSeparateLine,
        'sellSeparate': value.sellSeparate,
        'startTime': value.startTime,
        'ticket': value.ticket,
        'webBookable': value.webBookable,
    };
}


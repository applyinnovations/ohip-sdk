/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdjustmentCategoryType } from './AdjustmentCategoryType';
import {
    AdjustmentCategoryTypeFromJSON,
    AdjustmentCategoryTypeFromJSONTyped,
    AdjustmentCategoryTypeToJSON,
} from './AdjustmentCategoryType';

/**
 * The complete Yield adjustment information for the rate schedule.
 * @export
 * @interface YieldInfoType
 */
export interface YieldInfoType {
    /**
     * Adjustment amount for the code.
     * @type {number}
     * @memberof YieldInfoType
     */
    adjustmentAmount?: number;
    /**
     * Whether the Adjustment amount is overridden? false, signifies the amount is current value of Adjustment code.
     * @type {boolean}
     * @memberof YieldInfoType
     */
    adjustmentAmountOverridden?: boolean;
    /**
     * 
     * @type {AdjustmentCategoryType}
     * @memberof YieldInfoType
     */
    adjustmentCategory?: AdjustmentCategoryType;
    /**
     * Adjustment Code.
     * @type {string}
     * @memberof YieldInfoType
     */
    adjustmentCode?: string;
    /**
     * The currency Code for this adjustment code.
     * @type {string}
     * @memberof YieldInfoType
     */
    currencyCode?: string;
    /**
     * Description of the adjustment code.
     * @type {string}
     * @memberof YieldInfoType
     */
    description?: string;
}

/**
 * Check if a given object implements the YieldInfoType interface.
 */
export function instanceOfYieldInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldInfoTypeFromJSON(json: any): YieldInfoType {
    return YieldInfoTypeFromJSONTyped(json, false);
}

export function YieldInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentAmount': !exists(json, 'adjustmentAmount') ? undefined : json['adjustmentAmount'],
        'adjustmentAmountOverridden': !exists(json, 'adjustmentAmountOverridden') ? undefined : json['adjustmentAmountOverridden'],
        'adjustmentCategory': !exists(json, 'adjustmentCategory') ? undefined : AdjustmentCategoryTypeFromJSON(json['adjustmentCategory']),
        'adjustmentCode': !exists(json, 'adjustmentCode') ? undefined : json['adjustmentCode'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function YieldInfoTypeToJSON(value?: YieldInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentAmount': value.adjustmentAmount,
        'adjustmentAmountOverridden': value.adjustmentAmountOverridden,
        'adjustmentCategory': AdjustmentCategoryTypeToJSON(value.adjustmentCategory),
        'adjustmentCode': value.adjustmentCode,
        'currencyCode': value.currencyCode,
        'description': value.description,
    };
}


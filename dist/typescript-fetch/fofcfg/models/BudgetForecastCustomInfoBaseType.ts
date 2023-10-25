/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomCodeInformationBaseType } from './CustomCodeInformationBaseType';
import {
    CustomCodeInformationBaseTypeFromJSON,
    CustomCodeInformationBaseTypeFromJSONTyped,
    CustomCodeInformationBaseTypeToJSON,
} from './CustomCodeInformationBaseType';

/**
 * Budget Forecast information for budget Custom codes.
 * @export
 * @interface BudgetForecastCustomInfoBaseType
 */
export interface BudgetForecastCustomInfoBaseType {
    /**
     * Budget Forecast information for Custom segment code .
     * @type {Array<CustomCodeInformationBaseType>}
     * @memberof BudgetForecastCustomInfoBaseType
     */
    customCodeInformation?: Array<CustomCodeInformationBaseType>;
    /**
     * Flag to indicate if values information has to be included.
     * @type {boolean}
     * @memberof BudgetForecastCustomInfoBaseType
     */
    customValue?: boolean;
}

/**
 * Check if a given object implements the BudgetForecastCustomInfoBaseType interface.
 */
export function instanceOfBudgetForecastCustomInfoBaseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BudgetForecastCustomInfoBaseTypeFromJSON(json: any): BudgetForecastCustomInfoBaseType {
    return BudgetForecastCustomInfoBaseTypeFromJSONTyped(json, false);
}

export function BudgetForecastCustomInfoBaseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastCustomInfoBaseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customCodeInformation': !exists(json, 'customCodeInformation') ? undefined : ((json['customCodeInformation'] as Array<any>).map(CustomCodeInformationBaseTypeFromJSON)),
        'customValue': !exists(json, 'customValue') ? undefined : json['customValue'],
    };
}

export function BudgetForecastCustomInfoBaseTypeToJSON(value?: BudgetForecastCustomInfoBaseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customCodeInformation': value.customCodeInformation === undefined ? undefined : ((value.customCodeInformation as Array<any>).map(CustomCodeInformationBaseTypeToJSON)),
        'customValue': value.customValue,
    };
}


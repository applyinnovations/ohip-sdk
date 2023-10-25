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
import type { CustomValueInfoType } from './CustomValueInfoType';
import {
    CustomValueInfoTypeFromJSON,
    CustomValueInfoTypeFromJSONTyped,
    CustomValueInfoTypeToJSON,
} from './CustomValueInfoType';

/**
 * Budget Forecast information for Custom segment code.
 * @export
 * @interface CustomCodeInformationBaseType
 */
export interface CustomCodeInformationBaseType {
    /**
     * 
     * @type {CustomValueInfoType}
     * @memberof CustomCodeInformationBaseType
     */
    budgetValueInfo?: CustomValueInfoType;
    /**
     * Custom code for which budget forecast information is fetched.
     * @type {string}
     * @memberof CustomCodeInformationBaseType
     */
    customCode?: string;
    /**
     * Custom code description for Custom code.
     * @type {string}
     * @memberof CustomCodeInformationBaseType
     */
    customCodeDescription?: string;
    /**
     * 
     * @type {CustomValueInfoType}
     * @memberof CustomCodeInformationBaseType
     */
    forecastValueInfo?: CustomValueInfoType;
}

/**
 * Check if a given object implements the CustomCodeInformationBaseType interface.
 */
export function instanceOfCustomCodeInformationBaseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomCodeInformationBaseTypeFromJSON(json: any): CustomCodeInformationBaseType {
    return CustomCodeInformationBaseTypeFromJSONTyped(json, false);
}

export function CustomCodeInformationBaseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomCodeInformationBaseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'budgetValueInfo': !exists(json, 'budgetValueInfo') ? undefined : CustomValueInfoTypeFromJSON(json['budgetValueInfo']),
        'customCode': !exists(json, 'customCode') ? undefined : json['customCode'],
        'customCodeDescription': !exists(json, 'customCodeDescription') ? undefined : json['customCodeDescription'],
        'forecastValueInfo': !exists(json, 'forecastValueInfo') ? undefined : CustomValueInfoTypeFromJSON(json['forecastValueInfo']),
    };
}

export function CustomCodeInformationBaseTypeToJSON(value?: CustomCodeInformationBaseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'budgetValueInfo': CustomValueInfoTypeToJSON(value.budgetValueInfo),
        'customCode': value.customCode,
        'customCodeDescription': value.customCodeDescription,
        'forecastValueInfo': CustomValueInfoTypeToJSON(value.forecastValueInfo),
    };
}


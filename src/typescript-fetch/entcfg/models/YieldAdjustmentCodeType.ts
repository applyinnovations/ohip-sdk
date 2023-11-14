/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { YieldAdjustmentTypeType } from './YieldAdjustmentTypeType';
import {
    YieldAdjustmentTypeTypeFromJSON,
    YieldAdjustmentTypeTypeFromJSONTyped,
    YieldAdjustmentTypeTypeToJSON,
} from './YieldAdjustmentTypeType';

/**
 * Provides information about the Adjustment Codes.
 * @export
 * @interface YieldAdjustmentCodeType
 */
export interface YieldAdjustmentCodeType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof YieldAdjustmentCodeType
     */
    amount?: number;
    /**
     * Code of the Adjustment Codes.
     * @type {string}
     * @memberof YieldAdjustmentCodeType
     */
    code?: string;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof YieldAdjustmentCodeType
     */
    currencyCode?: string;
    /**
     * Description of the Adjustment Codes.
     * @type {string}
     * @memberof YieldAdjustmentCodeType
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof YieldAdjustmentCodeType
     */
    hotelId?: string;
    /**
     * 
     * @type {YieldAdjustmentTypeType}
     * @memberof YieldAdjustmentCodeType
     */
    type?: YieldAdjustmentTypeType;
}

/**
 * Check if a given object implements the YieldAdjustmentCodeType interface.
 */
export function instanceOfYieldAdjustmentCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldAdjustmentCodeTypeFromJSON(json: any): YieldAdjustmentCodeType {
    return YieldAdjustmentCodeTypeFromJSONTyped(json, false);
}

export function YieldAdjustmentCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldAdjustmentCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'type': !exists(json, 'type') ? undefined : YieldAdjustmentTypeTypeFromJSON(json['type']),
    };
}

export function YieldAdjustmentCodeTypeToJSON(value?: YieldAdjustmentCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'code': value.code,
        'currencyCode': value.currencyCode,
        'description': value.description,
        'hotelId': value.hotelId,
        'type': YieldAdjustmentTypeTypeToJSON(value.type),
    };
}

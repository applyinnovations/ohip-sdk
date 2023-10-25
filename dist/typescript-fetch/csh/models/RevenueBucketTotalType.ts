/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { RevenueBucketCodeType } from './RevenueBucketCodeType';
import {
    RevenueBucketCodeTypeFromJSON,
    RevenueBucketCodeTypeFromJSONTyped,
    RevenueBucketCodeTypeToJSON,
} from './RevenueBucketCodeType';

/**
 * reservation revenue bucket total information.
 * @export
 * @interface RevenueBucketTotalType
 */
export interface RevenueBucketTotalType {
    /**
     * 
     * @type {RevenueBucketCodeType}
     * @memberof RevenueBucketTotalType
     */
    revenueBucketCode?: RevenueBucketCodeType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof RevenueBucketTotalType
     */
    totalAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the RevenueBucketTotalType interface.
 */
export function instanceOfRevenueBucketTotalType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueBucketTotalTypeFromJSON(json: any): RevenueBucketTotalType {
    return RevenueBucketTotalTypeFromJSONTyped(json, false);
}

export function RevenueBucketTotalTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueBucketTotalType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revenueBucketCode': !exists(json, 'revenueBucketCode') ? undefined : RevenueBucketCodeTypeFromJSON(json['revenueBucketCode']),
        'totalAmount': !exists(json, 'totalAmount') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmount']),
    };
}

export function RevenueBucketTotalTypeToJSON(value?: RevenueBucketTotalType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revenueBucketCode': RevenueBucketCodeTypeToJSON(value.revenueBucketCode),
        'totalAmount': CurrencyAmountTypeToJSON(value.totalAmount),
    };
}


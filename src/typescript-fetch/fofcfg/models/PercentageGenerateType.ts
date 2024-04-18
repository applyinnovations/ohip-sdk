/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GenerateCalcBucketType } from './GenerateCalcBucketType';
import {
    GenerateCalcBucketTypeFromJSON,
    GenerateCalcBucketTypeFromJSONTyped,
    GenerateCalcBucketTypeToJSON,
} from './GenerateCalcBucketType';

/**
 * Defines percentage rule for generates.
 * @export
 * @interface PercentageGenerateType
 */
export interface PercentageGenerateType {
    /**
     * Percentage Amount.
     * @type {number}
     * @memberof PercentageGenerateType
     */
    amount?: number;
    /**
     * 
     * @type {GenerateCalcBucketType}
     * @memberof PercentageGenerateType
     */
    calculatedOn?: GenerateCalcBucketType;
    /**
     * Determines if tax bracket calculations are to apply to generates.
     * @type {boolean}
     * @memberof PercentageGenerateType
     */
    useTaxBracket?: boolean;
}

/**
 * Check if a given object implements the PercentageGenerateType interface.
 */
export function instanceOfPercentageGenerateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PercentageGenerateTypeFromJSON(json: any): PercentageGenerateType {
    return PercentageGenerateTypeFromJSONTyped(json, false);
}

export function PercentageGenerateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PercentageGenerateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'calculatedOn': !exists(json, 'calculatedOn') ? undefined : GenerateCalcBucketTypeFromJSON(json['calculatedOn']),
        'useTaxBracket': !exists(json, 'useTaxBracket') ? undefined : json['useTaxBracket'],
    };
}

export function PercentageGenerateTypeToJSON(value?: PercentageGenerateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'calculatedOn': GenerateCalcBucketTypeToJSON(value.calculatedOn),
        'useTaxBracket': value.useTaxBracket,
    };
}

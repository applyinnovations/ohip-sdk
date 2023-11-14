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
import type { TaxTypeGenerateType } from './TaxTypeGenerateType';
import {
    TaxTypeGenerateTypeFromJSON,
    TaxTypeGenerateTypeFromJSONTyped,
    TaxTypeGenerateTypeToJSON,
} from './TaxTypeGenerateType';

/**
 * Defines the Calculation Rule for the Tax Type for a specific date schedule
 * @export
 * @interface TaxTypesGenerateType
 */
export interface TaxTypesGenerateType extends Array<TaxTypeGenerateType> {
}

/**
 * Check if a given object implements the TaxTypesGenerateType interface.
 */
export function instanceOfTaxTypesGenerateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxTypesGenerateTypeFromJSON(json: any): TaxTypesGenerateType {
    return TaxTypesGenerateTypeFromJSONTyped(json, false);
}

export function TaxTypesGenerateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypesGenerateType {
    return json;
}

export function TaxTypesGenerateTypeToJSON(value?: TaxTypesGenerateType | null): any {
    return value;
}

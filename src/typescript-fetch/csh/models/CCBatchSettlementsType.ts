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
import type { CCBatchSettlementType } from './CCBatchSettlementType';
import {
    CCBatchSettlementTypeFromJSON,
    CCBatchSettlementTypeFromJSONTyped,
    CCBatchSettlementTypeToJSON,
} from './CCBatchSettlementType';

/**
 * List of Settlement transaction details for credit card transaction.
 * @export
 * @interface CCBatchSettlementsType
 */
export interface CCBatchSettlementsType extends Array<CCBatchSettlementType> {
}

/**
 * Check if a given object implements the CCBatchSettlementsType interface.
 */
export function instanceOfCCBatchSettlementsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CCBatchSettlementsTypeFromJSON(json: any): CCBatchSettlementsType {
    return CCBatchSettlementsTypeFromJSONTyped(json, false);
}

export function CCBatchSettlementsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CCBatchSettlementsType {
    return json;
}

export function CCBatchSettlementsTypeToJSON(value?: CCBatchSettlementsType | null): any {
    return value;
}

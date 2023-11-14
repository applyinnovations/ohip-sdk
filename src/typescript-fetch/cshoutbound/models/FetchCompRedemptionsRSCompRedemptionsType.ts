/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering Outbound API
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FetchCompRedemptionsRSCompRedemptionType } from './FetchCompRedemptionsRSCompRedemptionType';
import {
    FetchCompRedemptionsRSCompRedemptionTypeFromJSON,
    FetchCompRedemptionsRSCompRedemptionTypeFromJSONTyped,
    FetchCompRedemptionsRSCompRedemptionTypeToJSON,
} from './FetchCompRedemptionsRSCompRedemptionType';

/**
 * Collection of Complimentary Redemption codes and their respective Available Amount.
 * @export
 * @interface FetchCompRedemptionsRSCompRedemptionsType
 */
export interface FetchCompRedemptionsRSCompRedemptionsType extends Array<FetchCompRedemptionsRSCompRedemptionType> {
}

/**
 * Check if a given object implements the FetchCompRedemptionsRSCompRedemptionsType interface.
 */
export function instanceOfFetchCompRedemptionsRSCompRedemptionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchCompRedemptionsRSCompRedemptionsTypeFromJSON(json: any): FetchCompRedemptionsRSCompRedemptionsType {
    return FetchCompRedemptionsRSCompRedemptionsTypeFromJSONTyped(json, false);
}

export function FetchCompRedemptionsRSCompRedemptionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchCompRedemptionsRSCompRedemptionsType {
    return json;
}

export function FetchCompRedemptionsRSCompRedemptionsTypeToJSON(value?: FetchCompRedemptionsRSCompRedemptionsType | null): any {
    return value;
}

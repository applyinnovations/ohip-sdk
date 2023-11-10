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
import type { FetchCompRedemptionsRSCompRedemptionsType } from './FetchCompRedemptionsRSCompRedemptionsType';
/**
 * Response type for retrieval of Complimentary Redemption codes and their respective Available Amount.
 * @export
 * @interface FetchCompRedemptionsRS
 */
export interface FetchCompRedemptionsRS {
    /**
     *
     * @type {FetchCompRedemptionsRSCompRedemptionsType}
     * @memberof FetchCompRedemptionsRS
     */
    compRedemptions?: FetchCompRedemptionsRSCompRedemptionsType;
}
/**
 * Check if a given object implements the FetchCompRedemptionsRS interface.
 */
export declare function instanceOfFetchCompRedemptionsRS(value: object): boolean;
export declare function FetchCompRedemptionsRSFromJSON(json: any): FetchCompRedemptionsRS;
export declare function FetchCompRedemptionsRSFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchCompRedemptionsRS;
export declare function FetchCompRedemptionsRSToJSON(value?: FetchCompRedemptionsRS | null): any;

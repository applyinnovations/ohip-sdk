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
import type { PrepaidCardRedemptionType } from './PrepaidCardRedemptionType';
/**
 * A prepaid redemption info object to be used for posting a payment.
 * @export
 * @interface PrepaidCardRedemptionsType
 */
export interface PrepaidCardRedemptionsType extends Array<PrepaidCardRedemptionType> {
}
/**
 * Check if a given object implements the PrepaidCardRedemptionsType interface.
 */
export declare function instanceOfPrepaidCardRedemptionsType(value: object): boolean;
export declare function PrepaidCardRedemptionsTypeFromJSON(json: any): PrepaidCardRedemptionsType;
export declare function PrepaidCardRedemptionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardRedemptionsType;
export declare function PrepaidCardRedemptionsTypeToJSON(value?: PrepaidCardRedemptionsType | null): any;

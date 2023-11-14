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
import type { DepositPostingType } from './DepositPostingType';
/**
 * A List of Deposit Payments.
 * @export
 * @interface DepositPostingsType
 */
export interface DepositPostingsType extends Array<DepositPostingType> {
}
/**
 * Check if a given object implements the DepositPostingsType interface.
 */
export declare function instanceOfDepositPostingsType(value: object): boolean;
export declare function DepositPostingsTypeFromJSON(json: any): DepositPostingsType;
export declare function DepositPostingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPostingsType;
export declare function DepositPostingsTypeToJSON(value?: DepositPostingsType | null): any;
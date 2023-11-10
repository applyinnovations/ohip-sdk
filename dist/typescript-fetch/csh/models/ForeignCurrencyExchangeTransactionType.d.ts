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
import type { FolioType } from './FolioType';
import type { SummaryPostingType } from './SummaryPostingType';
/**
 * Details about posting and generated folio on currency exchange.
 * @export
 * @interface ForeignCurrencyExchangeTransactionType
 */
export interface ForeignCurrencyExchangeTransactionType {
    /**
     *
     * @type {FolioType}
     * @memberof ForeignCurrencyExchangeTransactionType
     */
    folio?: FolioType;
    /**
     *
     * @type {SummaryPostingType}
     * @memberof ForeignCurrencyExchangeTransactionType
     */
    posting?: SummaryPostingType;
}
/**
 * Check if a given object implements the ForeignCurrencyExchangeTransactionType interface.
 */
export declare function instanceOfForeignCurrencyExchangeTransactionType(value: object): boolean;
export declare function ForeignCurrencyExchangeTransactionTypeFromJSON(json: any): ForeignCurrencyExchangeTransactionType;
export declare function ForeignCurrencyExchangeTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignCurrencyExchangeTransactionType;
export declare function ForeignCurrencyExchangeTransactionTypeToJSON(value?: ForeignCurrencyExchangeTransactionType | null): any;

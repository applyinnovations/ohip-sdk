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
import type { ArticleInfoType } from './ArticleInfoType';
/**
 * Transaction codes info.
 * @export
 * @interface TrxInfoType
 */
export interface TrxInfoType {
    /**
     * The List of Articles defined for this transaction code, when using the Articles functionality.
     * @type {Array<ArticleInfoType>}
     * @memberof TrxInfoType
     */
    articles?: Array<ArticleInfoType>;
    /**
     * Transaction codes info.
     * @type {string}
     * @memberof TrxInfoType
     */
    description?: string;
    /**
     * Hotel context of the Transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    hotelId?: string;
    /**
     * Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code.
     * @type {boolean}
     * @memberof TrxInfoType
     */
    printTrxReceipt?: boolean;
    /**
     * This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer.
     * @type {number}
     * @memberof TrxInfoType
     */
    routingInstructionsId?: number;
    /**
     * Unique identifier for the Transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    transactionCode?: string;
    /**
     * Category of the transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    transactionGroup?: string;
    /**
     * Sub category of the transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    transactionSubGroup?: string;
    /**
     * Contains service type for transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    trxServiceType?: string;
    /**
     * Unique Universal product code of the transaction code.
     * @type {string}
     * @memberof TrxInfoType
     */
    universalProductCode?: string;
}
/**
 * Check if a given object implements the TrxInfoType interface.
 */
export declare function instanceOfTrxInfoType(value: object): boolean;
export declare function TrxInfoTypeFromJSON(json: any): TrxInfoType;
export declare function TrxInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxInfoType;
export declare function TrxInfoTypeToJSON(value?: TrxInfoType | null): any;

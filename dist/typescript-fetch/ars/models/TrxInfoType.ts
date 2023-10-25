/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ArticleInfoType } from './ArticleInfoType';
import {
    ArticleInfoTypeFromJSON,
    ArticleInfoTypeFromJSONTyped,
    ArticleInfoTypeToJSON,
} from './ArticleInfoType';

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
export function instanceOfTrxInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrxInfoTypeFromJSON(json: any): TrxInfoType {
    return TrxInfoTypeFromJSONTyped(json, false);
}

export function TrxInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articles': !exists(json, 'articles') ? undefined : ((json['articles'] as Array<any>).map(ArticleInfoTypeFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'printTrxReceipt': !exists(json, 'printTrxReceipt') ? undefined : json['printTrxReceipt'],
        'routingInstructionsId': !exists(json, 'routingInstructionsId') ? undefined : json['routingInstructionsId'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionGroup': !exists(json, 'transactionGroup') ? undefined : json['transactionGroup'],
        'transactionSubGroup': !exists(json, 'transactionSubGroup') ? undefined : json['transactionSubGroup'],
        'trxServiceType': !exists(json, 'trxServiceType') ? undefined : json['trxServiceType'],
        'universalProductCode': !exists(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}

export function TrxInfoTypeToJSON(value?: TrxInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'articles': value.articles === undefined ? undefined : ((value.articles as Array<any>).map(ArticleInfoTypeToJSON)),
        'description': value.description,
        'hotelId': value.hotelId,
        'printTrxReceipt': value.printTrxReceipt,
        'routingInstructionsId': value.routingInstructionsId,
        'transactionCode': value.transactionCode,
        'transactionGroup': value.transactionGroup,
        'transactionSubGroup': value.transactionSubGroup,
        'trxServiceType': value.trxServiceType,
        'universalProductCode': value.universalProductCode,
    };
}


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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TransactionsType } from './TransactionsType';
import {
    TransactionsTypeFromJSON,
    TransactionsTypeFromJSONTyped,
    TransactionsTypeToJSON,
} from './TransactionsType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response after spliting deposit transaction.
 * @export
 * @interface SplitDepositTransactionStatus
 */
export interface SplitDepositTransactionStatus {
    /**
     * 
     * @type {Links}
     * @memberof SplitDepositTransactionStatus
     */
    links?: Links;
    /**
     * 
     * @type {TransactionsType}
     * @memberof SplitDepositTransactionStatus
     */
    transactions?: TransactionsType;
    /**
     * 
     * @type {WarningsType}
     * @memberof SplitDepositTransactionStatus
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the SplitDepositTransactionStatus interface.
 */
export function instanceOfSplitDepositTransactionStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SplitDepositTransactionStatusFromJSON(json: any): SplitDepositTransactionStatus {
    return SplitDepositTransactionStatusFromJSONTyped(json, false);
}

export function SplitDepositTransactionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SplitDepositTransactionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'transactions': !exists(json, 'transactions') ? undefined : TransactionsTypeFromJSON(json['transactions']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function SplitDepositTransactionStatusToJSON(value?: SplitDepositTransactionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'transactions': TransactionsTypeToJSON(value.transactions),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

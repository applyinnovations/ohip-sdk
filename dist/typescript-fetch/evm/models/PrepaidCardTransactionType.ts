/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { PrepaidCardTrxTypeType } from './PrepaidCardTrxTypeType';
import {
    PrepaidCardTrxTypeTypeFromJSON,
    PrepaidCardTrxTypeTypeFromJSONTyped,
    PrepaidCardTrxTypeTypeToJSON,
} from './PrepaidCardTrxTypeType';

/**
 * Prepaid Card transaction.
 * @export
 * @interface PrepaidCardTransactionType
 */
export interface PrepaidCardTransactionType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardTransactionType
     */
    amount?: CurrencyAmountType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PrepaidCardTransactionType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof PrepaidCardTransactionType
     */
    purgeDate?: Date;
    /**
     * Transaction number of the Prepaid card transaction.
     * @type {Date}
     * @memberof PrepaidCardTransactionType
     */
    transactionDate?: Date;
    /**
     * Transaction number of the Prepaid card transaction.
     * @type {number}
     * @memberof PrepaidCardTransactionType
     */
    transactionNo?: number;
    /**
     * 
     * @type {PrepaidCardTrxTypeType}
     * @memberof PrepaidCardTransactionType
     */
    transactionType?: PrepaidCardTrxTypeType;
}

/**
 * Check if a given object implements the PrepaidCardTransactionType interface.
 */
export function instanceOfPrepaidCardTransactionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardTransactionTypeFromJSON(json: any): PrepaidCardTransactionType {
    return PrepaidCardTransactionTypeFromJSONTyped(json, false);
}

export function PrepaidCardTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardTransactionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'transactionDate': !exists(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transactionType': !exists(json, 'transactionType') ? undefined : PrepaidCardTrxTypeTypeFromJSON(json['transactionType']),
    };
}

export function PrepaidCardTransactionTypeToJSON(value?: PrepaidCardTransactionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0,10)),
        'transactionNo': value.transactionNo,
        'transactionType': PrepaidCardTrxTypeTypeToJSON(value.transactionType),
    };
}


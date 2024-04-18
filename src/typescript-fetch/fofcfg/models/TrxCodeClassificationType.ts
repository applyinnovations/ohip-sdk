/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import {
    CashieringTransactionTypeTypeFromJSON,
    CashieringTransactionTypeTypeFromJSONTyped,
    CashieringTransactionTypeTypeToJSON,
} from './CashieringTransactionTypeType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { TrxCodeClassificationTypeTransactionType } from './TrxCodeClassificationTypeTransactionType';
import {
    TrxCodeClassificationTypeTransactionTypeFromJSON,
    TrxCodeClassificationTypeTransactionTypeFromJSONTyped,
    TrxCodeClassificationTypeTransactionTypeToJSON,
} from './TrxCodeClassificationTypeTransactionType';

/**
 * Transaction Code Classification details.
 * @export
 * @interface TrxCodeClassificationType
 */
export interface TrxCodeClassificationType {
    /**
     * Transaction code type for fiscal printing purposes.
     * @type {string}
     * @memberof TrxCodeClassificationType
     */
    fiscalTransactionType?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TrxCodeClassificationType
     */
    group?: CodeDescriptionType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TrxCodeClassificationType
     */
    subgroup?: CodeDescriptionType;
    /**
     * 
     * @type {TrxCodeClassificationTypeTransactionType}
     * @memberof TrxCodeClassificationType
     */
    transactionType?: TrxCodeClassificationTypeTransactionType;
    /**
     * 
     * @type {CashieringTransactionTypeType}
     * @memberof TrxCodeClassificationType
     */
    type?: CashieringTransactionTypeType;
}

/**
 * Check if a given object implements the TrxCodeClassificationType interface.
 */
export function instanceOfTrxCodeClassificationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrxCodeClassificationTypeFromJSON(json: any): TrxCodeClassificationType {
    return TrxCodeClassificationTypeFromJSONTyped(json, false);
}

export function TrxCodeClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxCodeClassificationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalTransactionType': !exists(json, 'fiscalTransactionType') ? undefined : json['fiscalTransactionType'],
        'group': !exists(json, 'group') ? undefined : CodeDescriptionTypeFromJSON(json['group']),
        'subgroup': !exists(json, 'subgroup') ? undefined : CodeDescriptionTypeFromJSON(json['subgroup']),
        'transactionType': !exists(json, 'transactionType') ? undefined : TrxCodeClassificationTypeTransactionTypeFromJSON(json['transactionType']),
        'type': !exists(json, 'type') ? undefined : CashieringTransactionTypeTypeFromJSON(json['type']),
    };
}

export function TrxCodeClassificationTypeToJSON(value?: TrxCodeClassificationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalTransactionType': value.fiscalTransactionType,
        'group': CodeDescriptionTypeToJSON(value.group),
        'subgroup': CodeDescriptionTypeToJSON(value.subgroup),
        'transactionType': TrxCodeClassificationTypeTransactionTypeToJSON(value.transactionType),
        'type': CashieringTransactionTypeTypeToJSON(value.type),
    };
}

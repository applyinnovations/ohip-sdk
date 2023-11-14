/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TransactionDiscountType } from './TransactionDiscountType';
import {
    TransactionDiscountTypeFromJSON,
    TransactionDiscountTypeFromJSONTyped,
    TransactionDiscountTypeToJSON,
} from './TransactionDiscountType';

/**
 * 
 * @export
 * @interface TransactionDiscountsAttributeType
 */
export interface TransactionDiscountsAttributeType {
    /**
     * 
     * @type {TransactionDiscountType}
     * @memberof TransactionDiscountsAttributeType
     */
    transactionDiscountType?: TransactionDiscountType;
    /**
     * Holds the value of transaction discount type. e.g the value of the membership type can be given when transactionDiscountType is set to MembershipType
     * @type {string}
     * @memberof TransactionDiscountsAttributeType
     */
    transactionDiscountTypeValue?: string;
}

/**
 * Check if a given object implements the TransactionDiscountsAttributeType interface.
 */
export function instanceOfTransactionDiscountsAttributeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionDiscountsAttributeTypeFromJSON(json: any): TransactionDiscountsAttributeType {
    return TransactionDiscountsAttributeTypeFromJSONTyped(json, false);
}

export function TransactionDiscountsAttributeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDiscountsAttributeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionDiscountType': !exists(json, 'transactionDiscountType') ? undefined : TransactionDiscountTypeFromJSON(json['transactionDiscountType']),
        'transactionDiscountTypeValue': !exists(json, 'transactionDiscountTypeValue') ? undefined : json['transactionDiscountTypeValue'],
    };
}

export function TransactionDiscountsAttributeTypeToJSON(value?: TransactionDiscountsAttributeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionDiscountType': TransactionDiscountTypeToJSON(value.transactionDiscountType),
        'transactionDiscountTypeValue': value.transactionDiscountTypeValue,
    };
}

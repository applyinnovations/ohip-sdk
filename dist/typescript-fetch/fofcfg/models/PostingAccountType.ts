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
/**
 * 
 * @export
 * @interface PostingAccountType
 */
export interface PostingAccountType {
    /**
     * Account of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    account?: string;
    /**
     * Account description of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    accountDescription?: string;
    /**
     * Auto balance flag of postings setup.
     * @type {boolean}
     * @memberof PostingAccountType
     */
    autoBalance?: boolean;
    /**
     * Description of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    description?: string;
    /**
     * Internal ID to reference the records.
     * @type {number}
     * @memberof PostingAccountType
     */
    id?: number;
    /**
     * Payment method of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    paymentMethod?: string;
    /**
     * Sales outlet of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    salesOutlet?: string;
    /**
     * Transaction code of posting accounts in transaction codes setup.
     * @type {string}
     * @memberof PostingAccountType
     */
    transactionCode?: string;
}

/**
 * Check if a given object implements the PostingAccountType interface.
 */
export function instanceOfPostingAccountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostingAccountTypeFromJSON(json: any): PostingAccountType {
    return PostingAccountTypeFromJSONTyped(json, false);
}

export function PostingAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingAccountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : json['account'],
        'accountDescription': !exists(json, 'accountDescription') ? undefined : json['accountDescription'],
        'autoBalance': !exists(json, 'autoBalance') ? undefined : json['autoBalance'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'salesOutlet': !exists(json, 'salesOutlet') ? undefined : json['salesOutlet'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
    };
}

export function PostingAccountTypeToJSON(value?: PostingAccountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': value.account,
        'accountDescription': value.accountDescription,
        'autoBalance': value.autoBalance,
        'description': value.description,
        'id': value.id,
        'paymentMethod': value.paymentMethod,
        'salesOutlet': value.salesOutlet,
        'transactionCode': value.transactionCode,
    };
}


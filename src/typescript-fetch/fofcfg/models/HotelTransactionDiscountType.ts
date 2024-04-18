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
import type { TransactionDiscountCodeType } from './TransactionDiscountCodeType';
import {
    TransactionDiscountCodeTypeFromJSON,
    TransactionDiscountCodeTypeFromJSONTyped,
    TransactionDiscountCodeTypeToJSON,
} from './TransactionDiscountCodeType';
import type { TransactionDiscountRuleType } from './TransactionDiscountRuleType';
import {
    TransactionDiscountRuleTypeFromJSON,
    TransactionDiscountRuleTypeFromJSONTyped,
    TransactionDiscountRuleTypeToJSON,
} from './TransactionDiscountRuleType';
import type { TransactionDiscountsAttributeType } from './TransactionDiscountsAttributeType';
import {
    TransactionDiscountsAttributeTypeFromJSON,
    TransactionDiscountsAttributeTypeFromJSONTyped,
    TransactionDiscountsAttributeTypeToJSON,
} from './TransactionDiscountsAttributeType';

/**
 * Provides information about Transaction Discount Configuration.
 * @export
 * @interface HotelTransactionDiscountType
 */
export interface HotelTransactionDiscountType {
    /**
     * The amount applicable to the transaction discount.This would be a positive amount indicating the discount.
     * @type {number}
     * @memberof HotelTransactionDiscountType
     */
    amount?: number;
    /**
     * Collection of article codes eligible for transaction discounts.
     * @type {Array<string>}
     * @memberof HotelTransactionDiscountType
     */
    articleCodes?: Array<string>;
    /**
     * 
     * @type {TransactionDiscountCodeType}
     * @memberof HotelTransactionDiscountType
     */
    codeType: TransactionDiscountCodeType;
    /**
     * Description of the transaction discount.
     * @type {string}
     * @memberof HotelTransactionDiscountType
     */
    description: string;
    /**
     * Holds Transaction Discounts Attributes details.If discount is applied to a membership type, only membership type details are required. If discount is applied on a membership level , membership type and membership level details are required.
     * @type {Array<TransactionDiscountsAttributeType>}
     * @memberof HotelTransactionDiscountType
     */
    discountAttributes: Array<TransactionDiscountsAttributeType>;
    /**
     * Indicates for which hotel this transaction discount apply to.
     * @type {string}
     * @memberof HotelTransactionDiscountType
     */
    hotelId: string;
    /**
     * Indicates whether the transaction discount is inactive or not.
     * @type {boolean}
     * @memberof HotelTransactionDiscountType
     */
    inactive?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof HotelTransactionDiscountType
     */
    orderSequence?: number;
    /**
     * A percentage value if the transaction discount is percentage based.
     * @type {number}
     * @memberof HotelTransactionDiscountType
     */
    percent?: number;
    /**
     * 
     * @type {TransactionDiscountRuleType}
     * @memberof HotelTransactionDiscountType
     */
    ruleType: TransactionDiscountRuleType;
    /**
     * Collection of transaction codes eligible for transaction discounts.
     * @type {Array<string>}
     * @memberof HotelTransactionDiscountType
     */
    transactionCodes?: Array<string>;
    /**
     * Unique code of the transaction discount.
     * @type {string}
     * @memberof HotelTransactionDiscountType
     */
    transactionDiscountCode: string;
    /**
     * Unique code of the transaction discount.
     * @type {number}
     * @memberof HotelTransactionDiscountType
     */
    transactionDiscountId?: number;
}

/**
 * Check if a given object implements the HotelTransactionDiscountType interface.
 */
export function instanceOfHotelTransactionDiscountType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "codeType" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "discountAttributes" in value;
    isInstance = isInstance && "hotelId" in value;
    isInstance = isInstance && "ruleType" in value;
    isInstance = isInstance && "transactionDiscountCode" in value;

    return isInstance;
}

export function HotelTransactionDiscountTypeFromJSON(json: any): HotelTransactionDiscountType {
    return HotelTransactionDiscountTypeFromJSONTyped(json, false);
}

export function HotelTransactionDiscountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelTransactionDiscountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'articleCodes': !exists(json, 'articleCodes') ? undefined : json['articleCodes'],
        'codeType': TransactionDiscountCodeTypeFromJSON(json['codeType']),
        'description': json['description'],
        'discountAttributes': ((json['discountAttributes'] as Array<any>).map(TransactionDiscountsAttributeTypeFromJSON)),
        'hotelId': json['hotelId'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
        'ruleType': TransactionDiscountRuleTypeFromJSON(json['ruleType']),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : json['transactionCodes'],
        'transactionDiscountCode': json['transactionDiscountCode'],
        'transactionDiscountId': !exists(json, 'transactionDiscountId') ? undefined : json['transactionDiscountId'],
    };
}

export function HotelTransactionDiscountTypeToJSON(value?: HotelTransactionDiscountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'articleCodes': value.articleCodes,
        'codeType': TransactionDiscountCodeTypeToJSON(value.codeType),
        'description': value.description,
        'discountAttributes': ((value.discountAttributes as Array<any>).map(TransactionDiscountsAttributeTypeToJSON)),
        'hotelId': value.hotelId,
        'inactive': value.inactive,
        'orderSequence': value.orderSequence,
        'percent': value.percent,
        'ruleType': TransactionDiscountRuleTypeToJSON(value.ruleType),
        'transactionCodes': value.transactionCodes,
        'transactionDiscountCode': value.transactionDiscountCode,
        'transactionDiscountId': value.transactionDiscountId,
    };
}

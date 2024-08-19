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
import type { CashierInfoType } from './CashierInfoType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ResPaymentCardType } from './ResPaymentCardType';
/**
 * Details of an AR Payment.
 * @export
 * @interface ARPaymentType
 */
export interface ARPaymentType {
    /**
     * The Aging age of the payment.
     * @type {number}
     * @memberof ARPaymentType
     */
    age?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    amountUsed?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    balance?: CurrencyAmountType;
    /**
     *
     * @type {CashierInfoType}
     * @memberof ARPaymentType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Property code.
     * @type {string}
     * @memberof ARPaymentType
     */
    hotelId?: string;
    /**
     *
     * @type {ResPaymentCardType}
     * @memberof ARPaymentType
     */
    paymentCard?: ResPaymentCardType;
    /**
     * Posting date of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    postingDate?: string;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof ARPaymentType
     */
    reference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof ARPaymentType
     */
    remark?: string;
    /**
     * Revenue date ID of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    revenueDate?: string;
    /**
     * When this PostingType is used to return the postings generated by a batch request, the sequence number is used to relate to the Request's sequence number.
     * @type {number}
     * @memberof ARPaymentType
     */
    sequenceNo?: number;
    /**
     * Transaction code of the Payment.
     * @type {string}
     * @memberof ARPaymentType
     */
    transactionCode?: string;
    /**
     * Date of the Payment.
     * @type {string}
     * @memberof ARPaymentType
     */
    transactionDate?: string;
    /**
     * Unique Transaction Identifier of the Payment.
     * @type {number}
     * @memberof ARPaymentType
     */
    transactionNo?: number;
    /**
     * Transfer of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    transferDate?: string;
    /**
     *
     * @type {boolean}
     * @memberof ARPaymentType
     */
    transferredIn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ARPaymentType
     */
    transferredOut?: boolean;
}
/**
 * Check if a given object implements the ARPaymentType interface.
 */
export declare function instanceOfARPaymentType(value: object): boolean;
export declare function ARPaymentTypeFromJSON(json: any): ARPaymentType;
export declare function ARPaymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARPaymentType;
export declare function ARPaymentTypeToJSON(value?: ARPaymentType | null): any;

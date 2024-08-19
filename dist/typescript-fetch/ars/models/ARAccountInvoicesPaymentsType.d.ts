/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARBalanceType } from './ARBalanceType';
import type { ARInvoiceType } from './ARInvoiceType';
import type { ARPaymentType } from './ARPaymentType';
import type { ProfileId } from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
/**
 * AR Account Invoices Information.
 * @export
 * @interface ARAccountInvoicesPaymentsType
 */
export interface ARAccountInvoicesPaymentsType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAccountInvoicesPaymentsType
     */
    accountId?: UniqueIDType;
    /**
     * Name of the AR Account.
     * @type {string}
     * @memberof ARAccountInvoicesPaymentsType
     */
    accountName?: string;
    /**
     * The Account Number for the Account.
     * @type {string}
     * @memberof ARAccountInvoicesPaymentsType
     */
    accountNo?: string;
    /**
     * Property where the Account exists.
     * @type {string}
     * @memberof ARAccountInvoicesPaymentsType
     */
    hotelId?: string;
    /**
     * A collection of AR Invoices.
     * @type {Array<ARInvoiceType>}
     * @memberof ARAccountInvoicesPaymentsType
     */
    invoices?: Array<ARInvoiceType>;
    /**
     * Month End Calculation.
     * @type {boolean}
     * @memberof ARAccountInvoicesPaymentsType
     */
    monthEndCalcYN?: boolean;
    /**
     * Number of days on which person can make payment.
     * @type {string}
     * @memberof ARAccountInvoicesPaymentsType
     */
    paymentDueDays?: string;
    /**
     * A collection of AR Payments.
     * @type {Array<ARPaymentType>}
     * @memberof ARAccountInvoicesPaymentsType
     */
    payments?: Array<ARPaymentType>;
    /**
     *
     * @type {ProfileId}
     * @memberof ARAccountInvoicesPaymentsType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {ARBalanceType}
     * @memberof ARAccountInvoicesPaymentsType
     */
    summary?: ARBalanceType;
}
/**
 * Check if a given object implements the ARAccountInvoicesPaymentsType interface.
 */
export declare function instanceOfARAccountInvoicesPaymentsType(value: object): boolean;
export declare function ARAccountInvoicesPaymentsTypeFromJSON(json: any): ARAccountInvoicesPaymentsType;
export declare function ARAccountInvoicesPaymentsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountInvoicesPaymentsType;
export declare function ARAccountInvoicesPaymentsTypeToJSON(value?: ARAccountInvoicesPaymentsType | null): any;

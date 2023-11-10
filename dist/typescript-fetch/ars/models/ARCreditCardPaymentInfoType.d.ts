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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ProfileId } from './ProfileId';
/**
 * AR Credit Card payment information.
 * @export
 * @interface ARCreditCardPaymentInfoType
 */
export interface ARCreditCardPaymentInfoType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARCreditCardPaymentInfoType
     */
    amount?: CurrencyAmountType;
    /**
     * Bill Number returned by the Fiscal Printer.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    fiscalFolioNo?: number;
    /**
     * The Folio number of this posting, if there was a Folio already generated.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    folioNo?: number;
    /**
     * Guest Name .
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    guestName?: string;
    /**
     * Date of posting.
     * @type {Date}
     * @memberof ARCreditCardPaymentInfoType
     */
    postingDate?: Date;
    /**
     *
     * @type {ProfileId}
     * @memberof ARCreditCardPaymentInfoType
     */
    profileId?: ProfileId;
    /**
     * Reference Text for the payment.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    reference?: string;
    /**
     * Remarks for payment.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    remark?: string;
    /**
     * Transaction Date of the payment.
     * @type {Date}
     * @memberof ARCreditCardPaymentInfoType
     */
    transactionDate?: Date;
    /**
     * Transaction number of the payment.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    transactionNo?: number;
}
/**
 * Check if a given object implements the ARCreditCardPaymentInfoType interface.
 */
export declare function instanceOfARCreditCardPaymentInfoType(value: object): boolean;
export declare function ARCreditCardPaymentInfoTypeFromJSON(json: any): ARCreditCardPaymentInfoType;
export declare function ARCreditCardPaymentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARCreditCardPaymentInfoType;
export declare function ARCreditCardPaymentInfoTypeToJSON(value?: ARCreditCardPaymentInfoType | null): any;

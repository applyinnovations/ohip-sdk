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
import type { CardPaymentTrxSetupType } from './CardPaymentTrxSetupType';
import type { PaymentTrxCodeTypeType } from './PaymentTrxCodeTypeType';
import type { PaymentTrxUsageType } from './PaymentTrxUsageType';
/**
 * Payment Transaction Code setup details.
 * @export
 * @interface PaymentTrxSetupType
 */
export interface PaymentTrxSetupType {
    /**
     *
     * @type {CardPaymentTrxSetupType}
     * @memberof PaymentTrxSetupType
     */
    card?: CardPaymentTrxSetupType;
    /**
     * Indicates if the Transaction Code payment will generate a Tax Invoice at the time of making a payment. Tax Invoices are used in Thailand.
     * @type {boolean}
     * @memberof PaymentTrxSetupType
     */
    generateTaxInvoice?: boolean;
    /**
     * True indicates the Transaction Code payment will be reposted to IRS according to the rule specified by IRS.
     * @type {boolean}
     * @memberof PaymentTrxSetupType
     */
    iRS8300Reporting?: boolean;
    /**
     *
     * @type {PaymentTrxCodeTypeType}
     * @memberof PaymentTrxSetupType
     */
    paymentType?: PaymentTrxCodeTypeType;
    /**
     * True indicates the Transaction Code posting will have a rounding effect.
     * @type {boolean}
     * @memberof PaymentTrxSetupType
     */
    roundingFactor?: boolean;
    /**
     *
     * @type {PaymentTrxUsageType}
     * @memberof PaymentTrxSetupType
     */
    usage?: PaymentTrxUsageType;
}
/**
 * Check if a given object implements the PaymentTrxSetupType interface.
 */
export declare function instanceOfPaymentTrxSetupType(value: object): boolean;
export declare function PaymentTrxSetupTypeFromJSON(json: any): PaymentTrxSetupType;
export declare function PaymentTrxSetupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTrxSetupType;
export declare function PaymentTrxSetupTypeToJSON(value?: PaymentTrxSetupType | null): any;

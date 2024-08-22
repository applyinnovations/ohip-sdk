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
import type { ARPaymentType } from './ARPaymentType';
import type { InstanceLink } from './InstanceLink';
import type { TrxInfoType } from './TrxInfoType';
import type { WarningType } from './WarningType';
/**
 * Response notifying if the posting of a payment to an AR Account.
 * @export
 * @interface ArPayments
 */
export interface ArPayments {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ArPayments
     */
    links?: Array<InstanceLink>;
    /**
     * A collection of AR Payments.
     * @type {Array<ARPaymentType>}
     * @memberof ArPayments
     */
    payments?: Array<ARPaymentType>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof ArPayments
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ArPayments
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ArPayments interface.
 */
export declare function instanceOfArPayments(value: object): boolean;
export declare function ArPaymentsFromJSON(json: any): ArPayments;
export declare function ArPaymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArPayments;
export declare function ArPaymentsToJSON(value?: ArPayments | null): any;

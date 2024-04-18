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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Redemption information.
 * @export
 * @interface PrepaidCardRedemptionType
 */
export interface PrepaidCardRedemptionType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardRedemptionType
     */
    amount?: CurrencyAmountType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof PrepaidCardRedemptionType
     */
    cardNo?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PrepaidCardRedemptionType
     */
    interfaceId?: UniqueIDType;
    /**
     * Prepaid card number.
     * @type {string}
     * @memberof PrepaidCardRedemptionType
     */
    pin?: string;
    /**
     * Additional information regarding the redemption.
     * @type {string}
     * @memberof PrepaidCardRedemptionType
     */
    reference?: string;
    /**
     * The associated redemption transaction code.
     * @type {string}
     * @memberof PrepaidCardRedemptionType
     */
    transactionCode?: string;
}
/**
 * Check if a given object implements the PrepaidCardRedemptionType interface.
 */
export declare function instanceOfPrepaidCardRedemptionType(value: object): boolean;
export declare function PrepaidCardRedemptionTypeFromJSON(json: any): PrepaidCardRedemptionType;
export declare function PrepaidCardRedemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardRedemptionType;
export declare function PrepaidCardRedemptionTypeToJSON(value?: PrepaidCardRedemptionType | null): any;
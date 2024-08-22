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
import type { HotelTransactionDiscountType } from './HotelTransactionDiscountType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface TransactionDiscounts
 */
export interface TransactionDiscounts {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TransactionDiscounts
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of Transaction Discount Configurations.
     * @type {Array<HotelTransactionDiscountType>}
     * @memberof TransactionDiscounts
     */
    transactionDiscounts?: Array<HotelTransactionDiscountType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TransactionDiscounts
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TransactionDiscounts interface.
 */
export declare function instanceOfTransactionDiscounts(value: object): boolean;
export declare function TransactionDiscountsFromJSON(json: any): TransactionDiscounts;
export declare function TransactionDiscountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDiscounts;
export declare function TransactionDiscountsToJSON(value?: TransactionDiscounts | null): any;

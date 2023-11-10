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
import type { CardOptionType } from './CardOptionType';
import type { CardProcessingType } from './CardProcessingType';
import type { CardTypeType } from './CardTypeType';
import type { CardUsageRulesType } from './CardUsageRulesType';
import type { PaymentMethodValidationRuleType } from './PaymentMethodValidationRuleType';
/**
 * Contains credit card information.
 * @export
 * @interface PaymentCardType
 */
export interface PaymentCardType {
    /**
     *
     * @type {CardTypeType}
     * @memberof PaymentCardType
     */
    cardType?: CardTypeType;
    /**
     *
     * @type {CardUsageRulesType}
     * @memberof PaymentCardType
     */
    cardUsageRules?: CardUsageRulesType;
    /**
     * The merchant number to use when settling or transmitting credit card information.
     * @type {string}
     * @memberof PaymentCardType
     */
    merchantNumber?: string;
    /**
     *
     * @type {CardOptionType}
     * @memberof PaymentCardType
     */
    option?: CardOptionType;
    /**
     *
     * @type {CardProcessingType}
     * @memberof PaymentCardType
     */
    processing?: CardProcessingType;
    /**
     * User defined credit card type if credit card type from a defined list is not provided.
     * @type {string}
     * @memberof PaymentCardType
     */
    userDefinedCardType?: string;
    /**
     *
     * @type {PaymentMethodValidationRuleType}
     * @memberof PaymentCardType
     */
    validation?: PaymentMethodValidationRuleType;
}
/**
 * Check if a given object implements the PaymentCardType interface.
 */
export declare function instanceOfPaymentCardType(value: object): boolean;
export declare function PaymentCardTypeFromJSON(json: any): PaymentCardType;
export declare function PaymentCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCardType;
export declare function PaymentCardTypeToJSON(value?: PaymentCardType | null): any;

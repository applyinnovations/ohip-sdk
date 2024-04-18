/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CardNumberTypeType } from './CardNumberTypeType';
import type { CardProcessingType } from './CardProcessingType';
import type { CardTypeType } from './CardTypeType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information on a credit card for the customer.
 * @export
 * @interface ResPaymentCardType
 */
export interface ResPaymentCardType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ResPaymentCardType
     */
    cardId?: UniqueIDType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ResPaymentCardType
     */
    currentAuthorizedAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ResPaymentCardType
     */
    approvalAmountNeeded?: CurrencyAmountType;
    /**
     *
     * @type {CardTypeType}
     * @memberof ResPaymentCardType
     */
    cardType?: CardTypeType;
    /**
     * Indicates the user defined credit card type if credit card type from a defined list is not provided
     * @type {string}
     * @memberof ResPaymentCardType
     */
    userDefinedCardType?: string;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardNumber?: string;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardNumberMasked?: string;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardNumberLast4Digits?: string;
    /**
     * Expiration date of the credit card
     * @type {string}
     * @memberof ResPaymentCardType
     */
    expirationDate?: string;
    /**
     * Masked Expiration date of the credit card
     * @type {string}
     * @memberof ResPaymentCardType
     */
    expirationDateMasked?: string;
    /**
     *
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    expirationDateExpired?: boolean;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardHolderName?: string;
    /**
     * Attach the credit card to profile.
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    attachCreditCardToProfile?: boolean;
    /**
     *
     * @type {CardProcessingType}
     * @memberof ResPaymentCardType
     */
    processing?: CardProcessingType;
    /**
     *
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    swiped?: boolean;
    /**
     * Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active.
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    cardPresent?: boolean;
    /**
     *
     * @type {CardNumberTypeType}
     * @memberof ResPaymentCardType
     */
    cardOrToken?: CardNumberTypeType;
    /**
     * Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
     * @type {string}
     * @memberof ResPaymentCardType
     */
    citId?: string;
}
/**
 * Check if a given object implements the ResPaymentCardType interface.
 */
export declare function instanceOfResPaymentCardType(value: object): boolean;
export declare function ResPaymentCardTypeFromJSON(json: any): ResPaymentCardType;
export declare function ResPaymentCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPaymentCardType;
export declare function ResPaymentCardTypeToJSON(value?: ResPaymentCardType | null): any;
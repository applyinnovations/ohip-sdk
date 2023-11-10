/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * @type {CurrencyAmountType}
     * @memberof ResPaymentCardType
     */
    approvalAmountNeeded?: CurrencyAmountType;
    /**
     * Approval code sent by the credit card company on a successful authorization.
     * @type {string}
     * @memberof ResPaymentCardType
     */
    approvalCode?: string;
    /**
     * Attach the credit card to profile.
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    attachCreditCardToProfile?: boolean;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardHolderName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ResPaymentCardType
     */
    cardId?: UniqueIDType;
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
    cardNumberLast4Digits?: string;
    /**
     *
     * @type {string}
     * @memberof ResPaymentCardType
     */
    cardNumberMasked?: string;
    /**
     *
     * @type {CardNumberTypeType}
     * @memberof ResPaymentCardType
     */
    cardOrToken?: CardNumberTypeType;
    /**
     * Flag to determine if the credit card was swiped/manually entered , This elementSpace is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active.
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    cardPresent?: boolean;
    /**
     *
     * @type {CardTypeType}
     * @memberof ResPaymentCardType
     */
    cardType?: CardTypeType;
    /**
     * Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
     * @type {string}
     * @memberof ResPaymentCardType
     */
    citId?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ResPaymentCardType
     */
    currentAuthorizedAmount?: CurrencyAmountType;
    /**
     * Expiration date of the credit card
     * @type {Date}
     * @memberof ResPaymentCardType
     */
    expirationDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof ResPaymentCardType
     */
    expirationDateExpired?: boolean;
    /**
     * Masked Expiration date of the credit card
     * @type {string}
     * @memberof ResPaymentCardType
     */
    expirationDateMasked?: string;
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
     * Indicates the user defined credit card type if credit card type from a defined list is not provided
     * @type {string}
     * @memberof ResPaymentCardType
     */
    userDefinedCardType?: string;
}
/**
 * Check if a given object implements the ResPaymentCardType interface.
 */
export declare function instanceOfResPaymentCardType(value: object): boolean;
export declare function ResPaymentCardTypeFromJSON(json: any): ResPaymentCardType;
export declare function ResPaymentCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPaymentCardType;
export declare function ResPaymentCardTypeToJSON(value?: ResPaymentCardType | null): any;

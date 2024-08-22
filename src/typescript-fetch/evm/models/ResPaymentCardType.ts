/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardNumberTypeType } from './CardNumberTypeType';
import {
    CardNumberTypeTypeFromJSON,
    CardNumberTypeTypeFromJSONTyped,
    CardNumberTypeTypeToJSON,
} from './CardNumberTypeType';
import type { CardProcessingType } from './CardProcessingType';
import {
    CardProcessingTypeFromJSON,
    CardProcessingTypeFromJSONTyped,
    CardProcessingTypeToJSON,
} from './CardProcessingType';
import type { CardTypeType } from './CardTypeType';
import {
    CardTypeTypeFromJSON,
    CardTypeTypeFromJSONTyped,
    CardTypeTypeToJSON,
} from './CardTypeType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

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
     * @type {string}
     * @memberof ResPaymentCardType
     */
    expirationDate?: string;
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
export function instanceOfResPaymentCardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResPaymentCardTypeFromJSON(json: any): ResPaymentCardType {
    return ResPaymentCardTypeFromJSONTyped(json, false);
}

export function ResPaymentCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPaymentCardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'approvalAmountNeeded': !exists(json, 'approvalAmountNeeded') ? undefined : CurrencyAmountTypeFromJSON(json['approvalAmountNeeded']),
        'approvalCode': !exists(json, 'approvalCode') ? undefined : json['approvalCode'],
        'attachCreditCardToProfile': !exists(json, 'attachCreditCardToProfile') ? undefined : json['attachCreditCardToProfile'],
        'cardHolderName': !exists(json, 'cardHolderName') ? undefined : json['cardHolderName'],
        'cardId': !exists(json, 'cardId') ? undefined : UniqueIDTypeFromJSON(json['cardId']),
        'cardNumber': !exists(json, 'cardNumber') ? undefined : json['cardNumber'],
        'cardNumberLast4Digits': !exists(json, 'cardNumberLast4Digits') ? undefined : json['cardNumberLast4Digits'],
        'cardNumberMasked': !exists(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'cardOrToken': !exists(json, 'cardOrToken') ? undefined : CardNumberTypeTypeFromJSON(json['cardOrToken']),
        'cardPresent': !exists(json, 'cardPresent') ? undefined : json['cardPresent'],
        'cardType': !exists(json, 'cardType') ? undefined : CardTypeTypeFromJSON(json['cardType']),
        'citId': !exists(json, 'citId') ? undefined : json['citId'],
        'currentAuthorizedAmount': !exists(json, 'currentAuthorizedAmount') ? undefined : CurrencyAmountTypeFromJSON(json['currentAuthorizedAmount']),
        'expirationDate': !exists(json, 'expirationDate') ? undefined : json['expirationDate'],
        'expirationDateExpired': !exists(json, 'expirationDateExpired') ? undefined : json['expirationDateExpired'],
        'expirationDateMasked': !exists(json, 'expirationDateMasked') ? undefined : json['expirationDateMasked'],
        'processing': !exists(json, 'processing') ? undefined : CardProcessingTypeFromJSON(json['processing']),
        'swiped': !exists(json, 'swiped') ? undefined : json['swiped'],
        'userDefinedCardType': !exists(json, 'userDefinedCardType') ? undefined : json['userDefinedCardType'],
    };
}

export function ResPaymentCardTypeToJSON(value?: ResPaymentCardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'approvalAmountNeeded': CurrencyAmountTypeToJSON(value.approvalAmountNeeded),
        'approvalCode': value.approvalCode,
        'attachCreditCardToProfile': value.attachCreditCardToProfile,
        'cardHolderName': value.cardHolderName,
        'cardId': UniqueIDTypeToJSON(value.cardId),
        'cardNumber': value.cardNumber,
        'cardNumberLast4Digits': value.cardNumberLast4Digits,
        'cardNumberMasked': value.cardNumberMasked,
        'cardOrToken': CardNumberTypeTypeToJSON(value.cardOrToken),
        'cardPresent': value.cardPresent,
        'cardType': CardTypeTypeToJSON(value.cardType),
        'citId': value.citId,
        'currentAuthorizedAmount': CurrencyAmountTypeToJSON(value.currentAuthorizedAmount),
        'expirationDate': value.expirationDate,
        'expirationDateExpired': value.expirationDateExpired,
        'expirationDateMasked': value.expirationDateMasked,
        'processing': CardProcessingTypeToJSON(value.processing),
        'swiped': value.swiped,
        'userDefinedCardType': value.userDefinedCardType,
    };
}


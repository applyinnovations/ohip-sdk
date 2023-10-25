/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CreditCardServiceActionType } from './CreditCardServiceActionType';
import {
    CreditCardServiceActionTypeFromJSON,
    CreditCardServiceActionTypeFromJSONTyped,
    CreditCardServiceActionTypeToJSON,
} from './CreditCardServiceActionType';

/**
 * Information about the credit card unique id.
 * @export
 * @interface CreditCardUniqueIdInfoType
 */
export interface CreditCardUniqueIdInfoType {
    /**
     * 
     * @type {CreditCardServiceActionType}
     * @memberof CreditCardUniqueIdInfoType
     */
    actionType?: CreditCardServiceActionType;
    /**
     * Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
     * @type {boolean}
     * @memberof CreditCardUniqueIdInfoType
     */
    cardPresent?: boolean;
    /**
     * Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    citId?: string;
    /**
     * Card name holder.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    creditCardName?: string;
    /**
     * Credit card number.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    creditCardNumber?: string;
    /**
     * Last 4 digits of a credit card.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    creditCardNumberLast4Digits?: string;
    /**
     * Credit card type.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    creditCardType?: string;
    /**
     * Error code for a unique id request failure.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    errorCode?: string;
    /**
     * Error message for a unique id request failure.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    errorMessage?: string;
    /**
     * Expiration date in string representation.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    expirationDateString?: string;
    /**
     * Success flag after requesting a unique id.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    successYn?: string;
    /**
     * Terminal ID from where this request originated.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    terminalId?: string;
    /**
     * Unique id of credit card.
     * @type {string}
     * @memberof CreditCardUniqueIdInfoType
     */
    uniqueId?: string;
}

/**
 * Check if a given object implements the CreditCardUniqueIdInfoType interface.
 */
export function instanceOfCreditCardUniqueIdInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreditCardUniqueIdInfoTypeFromJSON(json: any): CreditCardUniqueIdInfoType {
    return CreditCardUniqueIdInfoTypeFromJSONTyped(json, false);
}

export function CreditCardUniqueIdInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditCardUniqueIdInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionType': !exists(json, 'actionType') ? undefined : CreditCardServiceActionTypeFromJSON(json['actionType']),
        'cardPresent': !exists(json, 'cardPresent') ? undefined : json['cardPresent'],
        'citId': !exists(json, 'citId') ? undefined : json['citId'],
        'creditCardName': !exists(json, 'creditCardName') ? undefined : json['creditCardName'],
        'creditCardNumber': !exists(json, 'creditCardNumber') ? undefined : json['creditCardNumber'],
        'creditCardNumberLast4Digits': !exists(json, 'creditCardNumberLast4Digits') ? undefined : json['creditCardNumberLast4Digits'],
        'creditCardType': !exists(json, 'creditCardType') ? undefined : json['creditCardType'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'expirationDateString': !exists(json, 'expirationDateString') ? undefined : json['expirationDateString'],
        'successYn': !exists(json, 'successYn') ? undefined : json['successYn'],
        'terminalId': !exists(json, 'terminalId') ? undefined : json['terminalId'],
        'uniqueId': !exists(json, 'uniqueId') ? undefined : json['uniqueId'],
    };
}

export function CreditCardUniqueIdInfoTypeToJSON(value?: CreditCardUniqueIdInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionType': CreditCardServiceActionTypeToJSON(value.actionType),
        'cardPresent': value.cardPresent,
        'citId': value.citId,
        'creditCardName': value.creditCardName,
        'creditCardNumber': value.creditCardNumber,
        'creditCardNumberLast4Digits': value.creditCardNumberLast4Digits,
        'creditCardType': value.creditCardType,
        'errorCode': value.errorCode,
        'errorMessage': value.errorMessage,
        'expirationDateString': value.expirationDateString,
        'successYn': value.successYn,
        'terminalId': value.terminalId,
        'uniqueId': value.uniqueId,
    };
}


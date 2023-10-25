/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfo } from './AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfo';
import {
    AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfoFromJSON,
    AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfoFromJSONTyped,
    AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfoToJSON,
} from './AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfo';
import type { AuthorizationRuleType } from './AuthorizationRuleType';
import {
    AuthorizationRuleTypeFromJSON,
    AuthorizationRuleTypeFromJSONTyped,
    AuthorizationRuleTypeToJSON,
} from './AuthorizationRuleType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { ResPaymentCardType } from './ResPaymentCardType';
import {
    ResPaymentCardTypeFromJSON,
    ResPaymentCardTypeFromJSONTyped,
    ResPaymentCardTypeToJSON,
} from './ResPaymentCardType';

/**
 * Payment Card information that was sent for authorization
 * @export
 * @interface AuthorizationHistoryTypeCardPaymentInformation
 */
export interface AuthorizationHistoryTypeCardPaymentInformation {
    /**
     * 
     * @type {AuthorizationRuleType}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    authorizationRule?: AuthorizationRuleType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {string}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    description?: string;
    /**
     * 
     * @type {AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfo}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    emailFolioInfo?: AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfo;
    /**
     * 
     * @type {number}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    folioView?: number;
    /**
     * 
     * @type {ResPaymentCardType}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    paymentCard?: ResPaymentCardType;
    /**
     * 
     * @type {string}
     * @memberof AuthorizationHistoryTypeCardPaymentInformation
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the AuthorizationHistoryTypeCardPaymentInformation interface.
 */
export function instanceOfAuthorizationHistoryTypeCardPaymentInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationHistoryTypeCardPaymentInformationFromJSON(json: any): AuthorizationHistoryTypeCardPaymentInformation {
    return AuthorizationHistoryTypeCardPaymentInformationFromJSONTyped(json, false);
}

export function AuthorizationHistoryTypeCardPaymentInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationHistoryTypeCardPaymentInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizationRule': !exists(json, 'authorizationRule') ? undefined : AuthorizationRuleTypeFromJSON(json['authorizationRule']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emailFolioInfo': !exists(json, 'emailFolioInfo') ? undefined : AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfoFromJSON(json['emailFolioInfo']),
        'folioView': !exists(json, 'folioView') ? undefined : json['folioView'],
        'paymentCard': !exists(json, 'paymentCard') ? undefined : ResPaymentCardTypeFromJSON(json['paymentCard']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}

export function AuthorizationHistoryTypeCardPaymentInformationToJSON(value?: AuthorizationHistoryTypeCardPaymentInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorizationRule': AuthorizationRuleTypeToJSON(value.authorizationRule),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'description': value.description,
        'emailFolioInfo': AuthorizationHistoryTypeCardPaymentInformationEmailFolioInfoToJSON(value.emailFolioInfo),
        'folioView': value.folioView,
        'paymentCard': ResPaymentCardTypeToJSON(value.paymentCard),
        'paymentMethod': value.paymentMethod,
    };
}


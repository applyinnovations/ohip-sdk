/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
import type { ReservationPaymentMethodTypeEmailFolioInfo } from './ReservationPaymentMethodTypeEmailFolioInfo';
import {
    ReservationPaymentMethodTypeEmailFolioInfoFromJSON,
    ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped,
    ReservationPaymentMethodTypeEmailFolioInfoToJSON,
} from './ReservationPaymentMethodTypeEmailFolioInfo';

/**
 * 
 * @export
 * @interface ReservationPaymentMethodType
 */
export interface ReservationPaymentMethodType {
    /**
     * 
     * @type {AuthorizationRuleType}
     * @memberof ReservationPaymentMethodType
     */
    authorizationRule?: AuthorizationRuleType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationPaymentMethodType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {string}
     * @memberof ReservationPaymentMethodType
     */
    description?: string;
    /**
     * 
     * @type {ReservationPaymentMethodTypeEmailFolioInfo}
     * @memberof ReservationPaymentMethodType
     */
    emailFolioInfo?: ReservationPaymentMethodTypeEmailFolioInfo;
    /**
     * 
     * @type {number}
     * @memberof ReservationPaymentMethodType
     */
    folioView?: number;
    /**
     * 
     * @type {ResPaymentCardType}
     * @memberof ReservationPaymentMethodType
     */
    paymentCard?: ResPaymentCardType;
    /**
     * 
     * @type {string}
     * @memberof ReservationPaymentMethodType
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the ReservationPaymentMethodType interface.
 */
export function instanceOfReservationPaymentMethodType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationPaymentMethodTypeFromJSON(json: any): ReservationPaymentMethodType {
    return ReservationPaymentMethodTypeFromJSONTyped(json, false);
}

export function ReservationPaymentMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPaymentMethodType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorizationRule': !exists(json, 'authorizationRule') ? undefined : AuthorizationRuleTypeFromJSON(json['authorizationRule']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emailFolioInfo': !exists(json, 'emailFolioInfo') ? undefined : ReservationPaymentMethodTypeEmailFolioInfoFromJSON(json['emailFolioInfo']),
        'folioView': !exists(json, 'folioView') ? undefined : json['folioView'],
        'paymentCard': !exists(json, 'paymentCard') ? undefined : ResPaymentCardTypeFromJSON(json['paymentCard']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}

export function ReservationPaymentMethodTypeToJSON(value?: ReservationPaymentMethodType | null): any {
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
        'emailFolioInfo': ReservationPaymentMethodTypeEmailFolioInfoToJSON(value.emailFolioInfo),
        'folioView': value.folioView,
        'paymentCard': ResPaymentCardTypeToJSON(value.paymentCard),
        'paymentMethod': value.paymentMethod,
    };
}


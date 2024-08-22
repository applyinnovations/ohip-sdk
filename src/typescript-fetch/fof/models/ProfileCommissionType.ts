/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommissionPaymentMethods } from './CommissionPaymentMethods';
import {
    CommissionPaymentMethodsFromJSON,
    CommissionPaymentMethodsFromJSONTyped,
    CommissionPaymentMethodsToJSON,
} from './CommissionPaymentMethods';

/**
 * This is the preconfigured routing instruction type.
 * @export
 * @interface ProfileCommissionType
 */
export interface ProfileCommissionType {
    /**
     * Bank account used for the commission for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    bankAccount?: string;
    /**
     * commission Code for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    commissionCode?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof ProfileCommissionType
     */
    decimalPlaces?: number;
    /**
     * Hotel Code for the commission being used for a profile.
     * @type {string}
     * @memberof ProfileCommissionType
     */
    hotelId?: string;
    /**
     * 
     * @type {CommissionPaymentMethods}
     * @memberof ProfileCommissionType
     */
    paymentMethod?: CommissionPaymentMethods;
}

/**
 * Check if a given object implements the ProfileCommissionType interface.
 */
export function instanceOfProfileCommissionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileCommissionTypeFromJSON(json: any): ProfileCommissionType {
    return ProfileCommissionTypeFromJSONTyped(json, false);
}

export function ProfileCommissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCommissionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankAccount': !exists(json, 'bankAccount') ? undefined : json['bankAccount'],
        'commissionCode': !exists(json, 'commissionCode') ? undefined : json['commissionCode'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CommissionPaymentMethodsFromJSON(json['paymentMethod']),
    };
}

export function ProfileCommissionTypeToJSON(value?: ProfileCommissionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankAccount': value.bankAccount,
        'commissionCode': value.commissionCode,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'hotelId': value.hotelId,
        'paymentMethod': CommissionPaymentMethodsToJSON(value.paymentMethod),
    };
}


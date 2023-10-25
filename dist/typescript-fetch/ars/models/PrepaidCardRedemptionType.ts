/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
export function instanceOfPrepaidCardRedemptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrepaidCardRedemptionTypeFromJSON(json: any): PrepaidCardRedemptionType {
    return PrepaidCardRedemptionTypeFromJSONTyped(json, false);
}

export function PrepaidCardRedemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardRedemptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'cardNo': !exists(json, 'cardNo') ? undefined : json['cardNo'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'pin': !exists(json, 'pin') ? undefined : json['pin'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
    };
}

export function PrepaidCardRedemptionTypeToJSON(value?: PrepaidCardRedemptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'cardNo': value.cardNo,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'pin': value.pin,
        'reference': value.reference,
        'transactionCode': value.transactionCode,
    };
}


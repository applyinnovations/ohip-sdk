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
import type { CashierClosureAmountType } from './CashierClosureAmountType';
import {
    CashierClosureAmountTypeFromJSON,
    CashierClosureAmountTypeFromJSONTyped,
    CashierClosureAmountTypeToJSON,
} from './CashierClosureAmountType';

/**
 * Cashier Shift Currency Amount type - cash ,check ,credit and others elements.
 * @export
 * @interface CashierClosureCurrencyAmountType
 */
export interface CashierClosureCurrencyAmountType {
    /**
     * 
     * @type {CashierClosureAmountType}
     * @memberof CashierClosureCurrencyAmountType
     */
    cash?: CashierClosureAmountType;
    /**
     * 
     * @type {CashierClosureAmountType}
     * @memberof CashierClosureCurrencyAmountType
     */
    check?: CashierClosureAmountType;
    /**
     * 
     * @type {CashierClosureAmountType}
     * @memberof CashierClosureCurrencyAmountType
     */
    creditCard?: CashierClosureAmountType;
    /**
     * The Currency Code.
     * @type {string}
     * @memberof CashierClosureCurrencyAmountType
     */
    currencyCode?: string;
    /**
     * 
     * @type {CashierClosureAmountType}
     * @memberof CashierClosureCurrencyAmountType
     */
    others?: CashierClosureAmountType;
}

/**
 * Check if a given object implements the CashierClosureCurrencyAmountType interface.
 */
export function instanceOfCashierClosureCurrencyAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashierClosureCurrencyAmountTypeFromJSON(json: any): CashierClosureCurrencyAmountType {
    return CashierClosureCurrencyAmountTypeFromJSONTyped(json, false);
}

export function CashierClosureCurrencyAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierClosureCurrencyAmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cash': !exists(json, 'cash') ? undefined : CashierClosureAmountTypeFromJSON(json['cash']),
        'check': !exists(json, 'check') ? undefined : CashierClosureAmountTypeFromJSON(json['check']),
        'creditCard': !exists(json, 'creditCard') ? undefined : CashierClosureAmountTypeFromJSON(json['creditCard']),
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'others': !exists(json, 'others') ? undefined : CashierClosureAmountTypeFromJSON(json['others']),
    };
}

export function CashierClosureCurrencyAmountTypeToJSON(value?: CashierClosureCurrencyAmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cash': CashierClosureAmountTypeToJSON(value.cash),
        'check': CashierClosureAmountTypeToJSON(value.check),
        'creditCard': CashierClosureAmountTypeToJSON(value.creditCard),
        'currencyCode': value.currencyCode,
        'others': CashierClosureAmountTypeToJSON(value.others),
    };
}

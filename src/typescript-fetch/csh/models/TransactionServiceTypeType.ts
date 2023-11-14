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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Containsts service type posting information.
 * @export
 * @interface TransactionServiceTypeType
 */
export interface TransactionServiceTypeType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TransactionServiceTypeType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TransactionServiceTypeType
     */
    payment?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof TransactionServiceTypeType
     */
    revenue?: CurrencyAmountType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TransactionServiceTypeType
     */
    serviceType?: CodeDescriptionType;
    /**
     * Running total number of the service type.
     * @type {number}
     * @memberof TransactionServiceTypeType
     */
    totalPostings?: number;
}

/**
 * Check if a given object implements the TransactionServiceTypeType interface.
 */
export function instanceOfTransactionServiceTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionServiceTypeTypeFromJSON(json: any): TransactionServiceTypeType {
    return TransactionServiceTypeTypeFromJSONTyped(json, false);
}

export function TransactionServiceTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionServiceTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'payment': !exists(json, 'payment') ? undefined : CurrencyAmountTypeFromJSON(json['payment']),
        'revenue': !exists(json, 'revenue') ? undefined : CurrencyAmountTypeFromJSON(json['revenue']),
        'serviceType': !exists(json, 'serviceType') ? undefined : CodeDescriptionTypeFromJSON(json['serviceType']),
        'totalPostings': !exists(json, 'totalPostings') ? undefined : json['totalPostings'],
    };
}

export function TransactionServiceTypeTypeToJSON(value?: TransactionServiceTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'payment': CurrencyAmountTypeToJSON(value.payment),
        'revenue': CurrencyAmountTypeToJSON(value.revenue),
        'serviceType': CodeDescriptionTypeToJSON(value.serviceType),
        'totalPostings': value.totalPostings,
    };
}

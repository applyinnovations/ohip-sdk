/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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

/**
 * Redemption information.
 * @export
 * @interface RedemptionType
 */
export interface RedemptionType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof RedemptionType
     */
    amount?: CurrencyAmountType;
    /**
     * Approval Code of the Complimentary Bucket Redemption.
     * @type {string}
     * @memberof RedemptionType
     */
    approvalCode?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof RedemptionType
     */
    availableAmount?: CurrencyAmountType;
    /**
     * The associated redemption code.
     * @type {string}
     * @memberof RedemptionType
     */
    code?: string;
    /**
     * Description of the Complimentary Bucket Redemption.
     * @type {string}
     * @memberof RedemptionType
     */
    description?: string;
    /**
     * Additional information regarding the redemption.
     * @type {string}
     * @memberof RedemptionType
     */
    supplement?: string;
    /**
     * Transaction code of the Complimentary Bucket Redemption.
     * @type {string}
     * @memberof RedemptionType
     */
    transactionCode?: string;
    /**
     * Transaction Number of the Complimentary Bucket Redemption.
     * @type {number}
     * @memberof RedemptionType
     */
    transactionNo?: number;
}

/**
 * Check if a given object implements the RedemptionType interface.
 */
export function instanceOfRedemptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RedemptionTypeFromJSON(json: any): RedemptionType {
    return RedemptionTypeFromJSONTyped(json, false);
}

export function RedemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedemptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'approvalCode': !exists(json, 'approvalCode') ? undefined : json['approvalCode'],
        'availableAmount': !exists(json, 'availableAmount') ? undefined : CurrencyAmountTypeFromJSON(json['availableAmount']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'supplement': !exists(json, 'supplement') ? undefined : json['supplement'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}

export function RedemptionTypeToJSON(value?: RedemptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'approvalCode': value.approvalCode,
        'availableAmount': CurrencyAmountTypeToJSON(value.availableAmount),
        'code': value.code,
        'description': value.description,
        'supplement': value.supplement,
        'transactionCode': value.transactionCode,
        'transactionNo': value.transactionNo,
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

/**
 * 
 * @export
 * @interface PackageElementType
 */
export interface PackageElementType {
    /**
     * 
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateCombinedLine?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateSeprateLine?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    allowance?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    amount?: CurrencyAmountType;
    /**
     * 
     * @type {string}
     * @memberof PackageElementType
     */
    calculationRule?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PackageElementType
     */
    description?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof PackageElementType
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof PackageElementType
     */
    endTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PackageElementType
     */
    includedInRate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PackageElementType
     */
    packageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageElementType
     */
    postingRhythm?: string;
    /**
     * 
     * @type {number}
     * @memberof PackageElementType
     */
    quantity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PackageElementType
     */
    sellSeparate?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PackageElementType
     */
    startDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof PackageElementType
     */
    startTime?: string;
}

/**
 * Check if a given object implements the PackageElementType interface.
 */
export function instanceOfPackageElementType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageElementTypeFromJSON(json: any): PackageElementType {
    return PackageElementTypeFromJSONTyped(json, false);
}

export function PackageElementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageElementType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addRateCombinedLine': !exists(json, 'addRateCombinedLine') ? undefined : json['addRateCombinedLine'],
        'addRateSeprateLine': !exists(json, 'addRateSeprateLine') ? undefined : json['addRateSeprateLine'],
        'allowance': !exists(json, 'allowance') ? undefined : CurrencyAmountTypeFromJSON(json['allowance']),
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'calculationRule': !exists(json, 'calculationRule') ? undefined : json['calculationRule'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'includedInRate': !exists(json, 'includedInRate') ? undefined : json['includedInRate'],
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'postingRhythm': !exists(json, 'postingRhythm') ? undefined : json['postingRhythm'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'sellSeparate': !exists(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
    };
}

export function PackageElementTypeToJSON(value?: PackageElementType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addRateCombinedLine': value.addRateCombinedLine,
        'addRateSeprateLine': value.addRateSeprateLine,
        'allowance': CurrencyAmountTypeToJSON(value.allowance),
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'calculationRule': value.calculationRule,
        'description': value.description,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'endTime': value.endTime,
        'includedInRate': value.includedInRate,
        'packageCode': value.packageCode,
        'postingRhythm': value.postingRhythm,
        'quantity': value.quantity,
        'sellSeparate': value.sellSeparate,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'startTime': value.startTime,
    };
}


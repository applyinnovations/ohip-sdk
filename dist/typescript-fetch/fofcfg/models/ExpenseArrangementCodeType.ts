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
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request.
 * @export
 * @interface ExpenseArrangementCodeType
 */
export interface ExpenseArrangementCodeType {
    /**
     * Primay key of arrangement codes
     * @type {number}
     * @memberof ExpenseArrangementCodeType
     */
    arrangementId?: number;
    /**
     * Configuration code.
     * @type {string}
     * @memberof ExpenseArrangementCodeType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof ExpenseArrangementCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Hotel where the code is configured.
     * @type {string}
     * @memberof ExpenseArrangementCodeType
     */
    hotelId?: string;
    /**
     * specify whether the arrangement postings are classed as revenue.
     * @type {boolean}
     * @memberof ExpenseArrangementCodeType
     */
    revenue?: boolean;
    /**
     * information about the tax type code linked to the folio arrangment Code.
     * @type {string}
     * @memberof ExpenseArrangementCodeType
     */
    taxTypeCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExpenseArrangementCodeType
     */
    transactionCodes?: Array<string>;
}

/**
 * Check if a given object implements the ExpenseArrangementCodeType interface.
 */
export function instanceOfExpenseArrangementCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExpenseArrangementCodeTypeFromJSON(json: any): ExpenseArrangementCodeType {
    return ExpenseArrangementCodeTypeFromJSONTyped(json, false);
}

export function ExpenseArrangementCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpenseArrangementCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrangementId': !exists(json, 'arrangementId') ? undefined : json['arrangementId'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'taxTypeCode': !exists(json, 'taxTypeCode') ? undefined : json['taxTypeCode'],
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : json['transactionCodes'],
    };
}

export function ExpenseArrangementCodeTypeToJSON(value?: ExpenseArrangementCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrangementId': value.arrangementId,
        'code': value.code,
        'description': TranslationTextType2000ToJSON(value.description),
        'hotelId': value.hotelId,
        'revenue': value.revenue,
        'taxTypeCode': value.taxTypeCode,
        'transactionCodes': value.transactionCodes,
    };
}


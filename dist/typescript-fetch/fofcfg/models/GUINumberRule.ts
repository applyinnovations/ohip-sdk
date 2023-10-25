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
import type { GUINumberPeriodType } from './GUINumberPeriodType';
import {
    GUINumberPeriodTypeFromJSON,
    GUINumberPeriodTypeFromJSONTyped,
    GUINumberPeriodTypeToJSON,
} from './GUINumberPeriodType';

/**
 * GUI Number rule
 * @export
 * @interface GUINumberRule
 */
export interface GUINumberRule {
    /**
     * BeginNo associated with GUI number
     * @type {number}
     * @memberof GUINumberRule
     */
    beginNo?: number;
    /**
     * CurrentFiscalBillNo associated with GUI number
     * @type {number}
     * @memberof GUINumberRule
     */
    currentFiscalBillNo?: number;
    /**
     * EndNo associated with GUI number
     * @type {number}
     * @memberof GUINumberRule
     */
    endNo?: number;
    /**
     * Property associated with GUI number
     * @type {string}
     * @memberof GUINumberRule
     */
    hotelId?: string;
    /**
     * 
     * @type {GUINumberPeriodType}
     * @memberof GUINumberRule
     */
    period?: GUINumberPeriodType;
    /**
     * Period code associated with period
     * @type {string}
     * @memberof GUINumberRule
     */
    periodCode?: string;
    /**
     * Prefix associated with GUI number.
     * @type {string}
     * @memberof GUINumberRule
     */
    prefix?: string;
}

/**
 * Check if a given object implements the GUINumberRule interface.
 */
export function instanceOfGUINumberRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GUINumberRuleFromJSON(json: any): GUINumberRule {
    return GUINumberRuleFromJSONTyped(json, false);
}

export function GUINumberRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GUINumberRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'beginNo': !exists(json, 'beginNo') ? undefined : json['beginNo'],
        'currentFiscalBillNo': !exists(json, 'currentFiscalBillNo') ? undefined : json['currentFiscalBillNo'],
        'endNo': !exists(json, 'endNo') ? undefined : json['endNo'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'period': !exists(json, 'period') ? undefined : GUINumberPeriodTypeFromJSON(json['period']),
        'periodCode': !exists(json, 'periodCode') ? undefined : json['periodCode'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
    };
}

export function GUINumberRuleToJSON(value?: GUINumberRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'beginNo': value.beginNo,
        'currentFiscalBillNo': value.currentFiscalBillNo,
        'endNo': value.endNo,
        'hotelId': value.hotelId,
        'period': GUINumberPeriodTypeToJSON(value.period),
        'periodCode': value.periodCode,
        'prefix': value.prefix,
    };
}


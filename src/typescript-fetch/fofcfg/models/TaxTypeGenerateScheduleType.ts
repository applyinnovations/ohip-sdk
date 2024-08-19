/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TaxTypeCalcRuleType } from './TaxTypeCalcRuleType';
import {
    TaxTypeCalcRuleTypeFromJSON,
    TaxTypeCalcRuleTypeFromJSONTyped,
    TaxTypeCalcRuleTypeToJSON,
} from './TaxTypeCalcRuleType';

/**
 * Defines the Calculation Rule for the Tax Type for a specific date schedule
 * @export
 * @interface TaxTypeGenerateScheduleType
 */
export interface TaxTypeGenerateScheduleType {
    /**
     * 
     * @type {TaxTypeCalcRuleType}
     * @memberof TaxTypeGenerateScheduleType
     */
    rule?: TaxTypeCalcRuleType;
    /**
     * Date when this schedule will be effective.
     * @type {string}
     * @memberof TaxTypeGenerateScheduleType
     */
    startDate?: string;
}

/**
 * Check if a given object implements the TaxTypeGenerateScheduleType interface.
 */
export function instanceOfTaxTypeGenerateScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxTypeGenerateScheduleTypeFromJSON(json: any): TaxTypeGenerateScheduleType {
    return TaxTypeGenerateScheduleTypeFromJSONTyped(json, false);
}

export function TaxTypeGenerateScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypeGenerateScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rule': !exists(json, 'rule') ? undefined : TaxTypeCalcRuleTypeFromJSON(json['rule']),
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
    };
}

export function TaxTypeGenerateScheduleTypeToJSON(value?: TaxTypeGenerateScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rule': TaxTypeCalcRuleTypeToJSON(value.rule),
        'startDate': value.startDate,
    };
}


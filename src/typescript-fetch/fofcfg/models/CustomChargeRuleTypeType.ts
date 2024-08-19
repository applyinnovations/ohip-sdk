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
import type { CustomChargeRuleTypeOption } from './CustomChargeRuleTypeOption';
import {
    CustomChargeRuleTypeOptionFromJSON,
    CustomChargeRuleTypeOptionFromJSONTyped,
    CustomChargeRuleTypeOptionToJSON,
} from './CustomChargeRuleTypeOption';

/**
 * The rule types for custom charge.
 * @export
 * @interface CustomChargeRuleTypeType
 */
export interface CustomChargeRuleTypeType {
    /**
     * 
     * @type {CustomChargeRuleTypeOption}
     * @memberof CustomChargeRuleTypeType
     */
    customChargeRuleType?: CustomChargeRuleTypeOption;
    /**
     * Identifies the Custom Charge rule type value.
     * @type {number}
     * @memberof CustomChargeRuleTypeType
     */
    customChargeRuleTypeValue?: number;
}

/**
 * Check if a given object implements the CustomChargeRuleTypeType interface.
 */
export function instanceOfCustomChargeRuleTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomChargeRuleTypeTypeFromJSON(json: any): CustomChargeRuleTypeType {
    return CustomChargeRuleTypeTypeFromJSONTyped(json, false);
}

export function CustomChargeRuleTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeRuleTypeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customChargeRuleType': !exists(json, 'customChargeRuleType') ? undefined : CustomChargeRuleTypeOptionFromJSON(json['customChargeRuleType']),
        'customChargeRuleTypeValue': !exists(json, 'customChargeRuleTypeValue') ? undefined : json['customChargeRuleTypeValue'],
    };
}

export function CustomChargeRuleTypeTypeToJSON(value?: CustomChargeRuleTypeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customChargeRuleType': CustomChargeRuleTypeOptionToJSON(value.customChargeRuleType),
        'customChargeRuleTypeValue': value.customChargeRuleTypeValue,
    };
}


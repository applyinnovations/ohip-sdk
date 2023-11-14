/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardRangesType } from './CardRangesType';
import {
    CardRangesTypeFromJSON,
    CardRangesTypeFromJSONTyped,
    CardRangesTypeToJSON,
} from './CardRangesType';
import type { MembershipCardValidationRuleTypeType } from './MembershipCardValidationRuleTypeType';
import {
    MembershipCardValidationRuleTypeTypeFromJSON,
    MembershipCardValidationRuleTypeTypeFromJSONTyped,
    MembershipCardValidationRuleTypeTypeToJSON,
} from './MembershipCardValidationRuleTypeType';

/**
 * Payment method card validation rules.
 * @export
 * @interface MembershipCardValidationRuleType
 */
export interface MembershipCardValidationRuleType {
    /**
     * Formula used for card validation. Only valid in case of user defined validation.
     * @type {string}
     * @memberof MembershipCardValidationRuleType
     */
    formula?: string;
    /**
     * Valid lengths of card number.
     * @type {string}
     * @memberof MembershipCardValidationRuleType
     */
    length?: string;
    /**
     * Valid card number prefix.
     * @type {string}
     * @memberof MembershipCardValidationRuleType
     */
    prefix?: string;
    /**
     * 
     * @type {CardRangesType}
     * @memberof MembershipCardValidationRuleType
     */
    ranges?: CardRangesType;
    /**
     * 
     * @type {MembershipCardValidationRuleTypeType}
     * @memberof MembershipCardValidationRuleType
     */
    rule?: MembershipCardValidationRuleTypeType;
}

/**
 * Check if a given object implements the MembershipCardValidationRuleType interface.
 */
export function instanceOfMembershipCardValidationRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipCardValidationRuleTypeFromJSON(json: any): MembershipCardValidationRuleType {
    return MembershipCardValidationRuleTypeFromJSONTyped(json, false);
}

export function MembershipCardValidationRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipCardValidationRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formula': !exists(json, 'formula') ? undefined : json['formula'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'ranges': !exists(json, 'ranges') ? undefined : CardRangesTypeFromJSON(json['ranges']),
        'rule': !exists(json, 'rule') ? undefined : MembershipCardValidationRuleTypeTypeFromJSON(json['rule']),
    };
}

export function MembershipCardValidationRuleTypeToJSON(value?: MembershipCardValidationRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formula': value.formula,
        'length': value.length,
        'prefix': value.prefix,
        'ranges': CardRangesTypeToJSON(value.ranges),
        'rule': MembershipCardValidationRuleTypeTypeToJSON(value.rule),
    };
}

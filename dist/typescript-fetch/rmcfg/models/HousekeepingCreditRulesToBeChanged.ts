/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HousekeepingCreditRuleType } from './HousekeepingCreditRuleType';
import {
    HousekeepingCreditRuleTypeFromJSON,
    HousekeepingCreditRuleTypeFromJSONTyped,
    HousekeepingCreditRuleTypeToJSON,
} from './HousekeepingCreditRuleType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing housekeeping credit rules.
 * @export
 * @interface HousekeepingCreditRulesToBeChanged
 */
export interface HousekeepingCreditRulesToBeChanged {
    /**
     * The information of housekeeping credit rule for configuration.
     * @type {Array<HousekeepingCreditRuleType>}
     * @memberof HousekeepingCreditRulesToBeChanged
     */
    creditRules?: Array<HousekeepingCreditRuleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingCreditRulesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingCreditRulesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingCreditRulesToBeChanged interface.
 */
export function instanceOfHousekeepingCreditRulesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingCreditRulesToBeChangedFromJSON(json: any): HousekeepingCreditRulesToBeChanged {
    return HousekeepingCreditRulesToBeChangedFromJSONTyped(json, false);
}

export function HousekeepingCreditRulesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRulesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creditRules': !exists(json, 'creditRules') ? undefined : ((json['creditRules'] as Array<any>).map(HousekeepingCreditRuleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingCreditRulesToBeChangedToJSON(value?: HousekeepingCreditRulesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creditRules': value.creditRules === undefined ? undefined : ((value.creditRules as Array<any>).map(HousekeepingCreditRuleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


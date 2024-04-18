/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConfigUpsellRuleType } from './ConfigUpsellRuleType';
import {
    ConfigUpsellRuleTypeFromJSON,
    ConfigUpsellRuleTypeFromJSONTyped,
    ConfigUpsellRuleTypeToJSON,
} from './ConfigUpsellRuleType';
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
 * Response object for fetching upsell rules.
 * @export
 * @interface UpsellRules
 */
export interface UpsellRules {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof UpsellRules
     */
    links?: Array<InstanceLink>;
    /**
     * This type holds a collection of upsell rules.
     * @type {Array<ConfigUpsellRuleType>}
     * @memberof UpsellRules
     */
    upsellRules?: Array<ConfigUpsellRuleType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof UpsellRules
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the UpsellRules interface.
 */
export function instanceOfUpsellRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpsellRulesFromJSON(json: any): UpsellRules {
    return UpsellRulesFromJSONTyped(json, false);
}

export function UpsellRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'upsellRules': !exists(json, 'upsellRules') ? undefined : ((json['upsellRules'] as Array<any>).map(ConfigUpsellRuleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function UpsellRulesToJSON(value?: UpsellRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'upsellRules': value.upsellRules === undefined ? undefined : ((value.upsellRules as Array<any>).map(ConfigUpsellRuleTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

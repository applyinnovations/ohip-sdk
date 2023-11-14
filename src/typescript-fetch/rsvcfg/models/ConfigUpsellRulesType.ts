/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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

/**
 * This type holds a collection of upsell rules.
 * @export
 * @interface ConfigUpsellRulesType
 */
export interface ConfigUpsellRulesType extends Array<ConfigUpsellRuleType> {
}

/**
 * Check if a given object implements the ConfigUpsellRulesType interface.
 */
export function instanceOfConfigUpsellRulesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigUpsellRulesTypeFromJSON(json: any): ConfigUpsellRulesType {
    return ConfigUpsellRulesTypeFromJSONTyped(json, false);
}

export function ConfigUpsellRulesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigUpsellRulesType {
    return json;
}

export function ConfigUpsellRulesTypeToJSON(value?: ConfigUpsellRulesType | null): any {
    return value;
}

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
import type { ConfigTestUpsellRuleType } from './ConfigTestUpsellRuleType';
/**
 * This type holds a collection of upsell rules which are returned on testing a reservation.
 * @export
 * @interface ConfigTestUpsellRulesType
 */
export interface ConfigTestUpsellRulesType extends Array<ConfigTestUpsellRuleType> {
}
/**
 * Check if a given object implements the ConfigTestUpsellRulesType interface.
 */
export declare function instanceOfConfigTestUpsellRulesType(value: object): boolean;
export declare function ConfigTestUpsellRulesTypeFromJSON(json: any): ConfigTestUpsellRulesType;
export declare function ConfigTestUpsellRulesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigTestUpsellRulesType;
export declare function ConfigTestUpsellRulesTypeToJSON(value?: ConfigTestUpsellRulesType | null): any;

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
import type { ConfigUpsellRulesType } from './ConfigUpsellRulesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching upsell rules.
 * @export
 * @interface UpsellRules
 */
export interface UpsellRules {
    /**
     *
     * @type {Links}
     * @memberof UpsellRules
     */
    links?: Links;
    /**
     *
     * @type {ConfigUpsellRulesType}
     * @memberof UpsellRules
     */
    upsellRules?: ConfigUpsellRulesType;
    /**
     *
     * @type {WarningsType}
     * @memberof UpsellRules
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the UpsellRules interface.
 */
export declare function instanceOfUpsellRules(value: object): boolean;
export declare function UpsellRulesFromJSON(json: any): UpsellRules;
export declare function UpsellRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellRules;
export declare function UpsellRulesToJSON(value?: UpsellRules | null): any;

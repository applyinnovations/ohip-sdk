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
import type { ConfigTestUpsellRulesType } from './ConfigTestUpsellRulesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for testing upsell rules.
 * @export
 * @interface UpsellRulesToTestDetails
 */
export interface UpsellRulesToTestDetails {
    /**
     *
     * @type {Links}
     * @memberof UpsellRulesToTestDetails
     */
    links?: Links;
    /**
     *
     * @type {ConfigTestUpsellRulesType}
     * @memberof UpsellRulesToTestDetails
     */
    upsellRules?: ConfigTestUpsellRulesType;
    /**
     *
     * @type {WarningsType}
     * @memberof UpsellRulesToTestDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the UpsellRulesToTestDetails interface.
 */
export declare function instanceOfUpsellRulesToTestDetails(value: object): boolean;
export declare function UpsellRulesToTestDetailsFromJSON(json: any): UpsellRulesToTestDetails;
export declare function UpsellRulesToTestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsellRulesToTestDetails;
export declare function UpsellRulesToTestDetailsToJSON(value?: UpsellRulesToTestDetails | null): any;
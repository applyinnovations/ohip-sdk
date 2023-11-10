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
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface CopyUpsellRulesRequest
 */
export interface CopyUpsellRulesRequest {
    /**
     * List of the upsell rules to be copied to hotel code(s).
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyUpsellRulesRequest
     */
    upsellRules?: Array<CopyConfigurationCodeType>;
    /**
     *
     * @type {Links}
     * @memberof CopyUpsellRulesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CopyUpsellRulesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CopyUpsellRulesRequest interface.
 */
export declare function instanceOfCopyUpsellRulesRequest(value: object): boolean;
export declare function CopyUpsellRulesRequestFromJSON(json: any): CopyUpsellRulesRequest;
export declare function CopyUpsellRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyUpsellRulesRequest;
export declare function CopyUpsellRulesRequestToJSON(value?: CopyUpsellRulesRequest | null): any;

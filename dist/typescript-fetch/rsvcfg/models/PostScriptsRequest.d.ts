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
import type { Links } from './Links';
import type { ScriptsType } from './ScriptsType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostScriptsRequest
 */
export interface PostScriptsRequest {
    /**
     *
     * @type {Links}
     * @memberof PostScriptsRequest
     */
    links?: Links;
    /**
     *
     * @type {ScriptsType}
     * @memberof PostScriptsRequest
     */
    scripts?: ScriptsType;
    /**
     *
     * @type {WarningsType}
     * @memberof PostScriptsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostScriptsRequest interface.
 */
export declare function instanceOfPostScriptsRequest(value: object): boolean;
export declare function PostScriptsRequestFromJSON(json: any): PostScriptsRequest;
export declare function PostScriptsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostScriptsRequest;
export declare function PostScriptsRequestToJSON(value?: PostScriptsRequest | null): any;

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
import type { BuildingsType } from './BuildingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostBuildingsRequest
 */
export interface PostBuildingsRequest {
    /**
     *
     * @type {BuildingsType}
     * @memberof PostBuildingsRequest
     */
    buildings?: BuildingsType;
    /**
     *
     * @type {Links}
     * @memberof PostBuildingsRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostBuildingsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostBuildingsRequest interface.
 */
export declare function instanceOfPostBuildingsRequest(value: object): boolean;
export declare function PostBuildingsRequestFromJSON(json: any): PostBuildingsRequest;
export declare function PostBuildingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBuildingsRequest;
export declare function PostBuildingsRequestToJSON(value?: PostBuildingsRequest | null): any;

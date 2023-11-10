/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { JobTitlesType } from './JobTitlesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface ChangeJobTitlesRequest
 */
export interface ChangeJobTitlesRequest {
    /**
     *
     * @type {JobTitlesType}
     * @memberof ChangeJobTitlesRequest
     */
    jobTitles?: JobTitlesType;
    /**
     *
     * @type {Links}
     * @memberof ChangeJobTitlesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeJobTitlesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeJobTitlesRequest interface.
 */
export declare function instanceOfChangeJobTitlesRequest(value: object): boolean;
export declare function ChangeJobTitlesRequestFromJSON(json: any): ChangeJobTitlesRequest;
export declare function ChangeJobTitlesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeJobTitlesRequest;
export declare function ChangeJobTitlesRequestToJSON(value?: ChangeJobTitlesRequest | null): any;

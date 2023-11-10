/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AutoTraceDefinitionListType } from './AutoTraceDefinitionListType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object after fetching Auto Trace Definitions.
 * @export
 * @interface AutoTraceDefinitionsDetails
 */
export interface AutoTraceDefinitionsDetails {
    /**
     *
     * @type {AutoTraceDefinitionListType}
     * @memberof AutoTraceDefinitionsDetails
     */
    autoTraceDefinitions?: AutoTraceDefinitionListType;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AutoTraceDefinitionsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AutoTraceDefinitionsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AutoTraceDefinitionsDetails
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof AutoTraceDefinitionsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AutoTraceDefinitionsDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AutoTraceDefinitionsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AutoTraceDefinitionsDetails
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof AutoTraceDefinitionsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the AutoTraceDefinitionsDetails interface.
 */
export declare function instanceOfAutoTraceDefinitionsDetails(value: object): boolean;
export declare function AutoTraceDefinitionsDetailsFromJSON(json: any): AutoTraceDefinitionsDetails;
export declare function AutoTraceDefinitionsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionsDetails;
export declare function AutoTraceDefinitionsDetailsToJSON(value?: AutoTraceDefinitionsDetails | null): any;

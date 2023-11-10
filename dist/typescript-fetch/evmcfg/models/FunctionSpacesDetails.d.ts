/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FunctionSpacesSummaryType } from './FunctionSpacesSummaryType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching function spaces summary info at the property level.
 * @export
 * @interface FunctionSpacesDetails
 */
export interface FunctionSpacesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof FunctionSpacesDetails
     */
    count?: number;
    /**
     *
     * @type {FunctionSpacesSummaryType}
     * @memberof FunctionSpacesDetails
     */
    functionSpaces?: FunctionSpacesSummaryType;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FunctionSpacesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof FunctionSpacesDetails
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof FunctionSpacesDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof FunctionSpacesDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof FunctionSpacesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FunctionSpacesDetails
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof FunctionSpacesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FunctionSpacesDetails interface.
 */
export declare function instanceOfFunctionSpacesDetails(value: object): boolean;
export declare function FunctionSpacesDetailsFromJSON(json: any): FunctionSpacesDetails;
export declare function FunctionSpacesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpacesDetails;
export declare function FunctionSpacesDetailsToJSON(value?: FunctionSpacesDetails | null): any;

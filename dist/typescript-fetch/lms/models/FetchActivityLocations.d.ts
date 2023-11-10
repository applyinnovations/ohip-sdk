/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityLocationsType } from './ActivityLocationsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object after fetching the Activity Locations.
 * @export
 * @interface FetchActivityLocations
 */
export interface FetchActivityLocations {
    /**
     *
     * @type {ActivityLocationsType}
     * @memberof FetchActivityLocations
     */
    activityLocations?: ActivityLocationsType;
    /**
     *
     * @type {Links}
     * @memberof FetchActivityLocations
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FetchActivityLocations
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FetchActivityLocations interface.
 */
export declare function instanceOfFetchActivityLocations(value: object): boolean;
export declare function FetchActivityLocationsFromJSON(json: any): FetchActivityLocations;
export declare function FetchActivityLocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchActivityLocations;
export declare function FetchActivityLocationsToJSON(value?: FetchActivityLocations | null): any;

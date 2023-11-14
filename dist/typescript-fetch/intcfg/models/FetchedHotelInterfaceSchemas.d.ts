/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HotelInterfaceSchemasType } from './HotelInterfaceSchemasType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for retrieving Hotel Interface Schemas.
 * @export
 * @interface FetchedHotelInterfaceSchemas
 */
export interface FetchedHotelInterfaceSchemas {
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FetchedHotelInterfaceSchemas
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof FetchedHotelInterfaceSchemas
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof FetchedHotelInterfaceSchemas
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof FetchedHotelInterfaceSchemas
     */
    offset?: number;
    /**
     *
     * @type {HotelInterfaceSchemasType}
     * @memberof FetchedHotelInterfaceSchemas
     */
    schemas?: HotelInterfaceSchemasType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof FetchedHotelInterfaceSchemas
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FetchedHotelInterfaceSchemas
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof FetchedHotelInterfaceSchemas
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FetchedHotelInterfaceSchemas interface.
 */
export declare function instanceOfFetchedHotelInterfaceSchemas(value: object): boolean;
export declare function FetchedHotelInterfaceSchemasFromJSON(json: any): FetchedHotelInterfaceSchemas;
export declare function FetchedHotelInterfaceSchemasFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedHotelInterfaceSchemas;
export declare function FetchedHotelInterfaceSchemasToJSON(value?: FetchedHotelInterfaceSchemas | null): any;
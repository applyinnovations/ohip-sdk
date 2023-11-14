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
import type { FloorTypesType } from './FloorTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Floor Types.
 * @export
 * @interface FloorTypesDetails
 */
export interface FloorTypesDetails {
    /**
     *
     * @type {FloorTypesType}
     * @memberof FloorTypesDetails
     */
    floorTypes?: FloorTypesType;
    /**
     *
     * @type {Links}
     * @memberof FloorTypesDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FloorTypesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FloorTypesDetails interface.
 */
export declare function instanceOfFloorTypesDetails(value: object): boolean;
export declare function FloorTypesDetailsFromJSON(json: any): FloorTypesDetails;
export declare function FloorTypesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FloorTypesDetails;
export declare function FloorTypesDetailsToJSON(value?: FloorTypesDetails | null): any;
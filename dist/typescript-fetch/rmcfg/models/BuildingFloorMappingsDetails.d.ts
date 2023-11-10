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
import type { BuildingFloorMappingsType } from './BuildingFloorMappingsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching floor mappings to buildings.
 * @export
 * @interface BuildingFloorMappingsDetails
 */
export interface BuildingFloorMappingsDetails {
    /**
     *
     * @type {BuildingFloorMappingsType}
     * @memberof BuildingFloorMappingsDetails
     */
    buildingFloorMappings?: BuildingFloorMappingsType;
    /**
     *
     * @type {Links}
     * @memberof BuildingFloorMappingsDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BuildingFloorMappingsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BuildingFloorMappingsDetails interface.
 */
export declare function instanceOfBuildingFloorMappingsDetails(value: object): boolean;
export declare function BuildingFloorMappingsDetailsFromJSON(json: any): BuildingFloorMappingsDetails;
export declare function BuildingFloorMappingsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingFloorMappingsDetails;
export declare function BuildingFloorMappingsDetailsToJSON(value?: BuildingFloorMappingsDetails | null): any;

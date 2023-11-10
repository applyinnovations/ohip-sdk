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
import type { Links } from './Links';
import type { RevenueTypesType } from './RevenueTypesType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Revenue Types Setup configurations.
 * @export
 * @interface RevenueTypesInfo
 */
export interface RevenueTypesInfo {
    /**
     *
     * @type {Links}
     * @memberof RevenueTypesInfo
     */
    links?: Links;
    /**
     *
     * @type {RevenueTypesType}
     * @memberof RevenueTypesInfo
     */
    revenueTypes?: RevenueTypesType;
    /**
     *
     * @type {WarningsType}
     * @memberof RevenueTypesInfo
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RevenueTypesInfo interface.
 */
export declare function instanceOfRevenueTypesInfo(value: object): boolean;
export declare function RevenueTypesInfoFromJSON(json: any): RevenueTypesInfo;
export declare function RevenueTypesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypesInfo;
export declare function RevenueTypesInfoToJSON(value?: RevenueTypesInfo | null): any;

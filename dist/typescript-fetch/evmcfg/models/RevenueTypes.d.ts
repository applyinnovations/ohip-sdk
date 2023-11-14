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
 * Request object for changing existing Revenue Types Setup Configurations.
 * @export
 * @interface RevenueTypes
 */
export interface RevenueTypes {
    /**
     *
     * @type {Links}
     * @memberof RevenueTypes
     */
    links?: Links;
    /**
     *
     * @type {RevenueTypesType}
     * @memberof RevenueTypes
     */
    revenueTypes?: RevenueTypesType;
    /**
     *
     * @type {WarningsType}
     * @memberof RevenueTypes
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RevenueTypes interface.
 */
export declare function instanceOfRevenueTypes(value: object): boolean;
export declare function RevenueTypesFromJSON(json: any): RevenueTypes;
export declare function RevenueTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypes;
export declare function RevenueTypesToJSON(value?: RevenueTypes | null): any;
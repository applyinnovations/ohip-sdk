/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RevenueGroupType } from './RevenueGroupType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing existing Catering Revenue Groups Configurations.
 * @export
 * @interface RevenueGroups
 */
export interface RevenueGroups {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RevenueGroups
     */
    links?: Array<InstanceLink>;
    /**
     * Details for Catering Revenue Group along with associated Revenue Type codes.
     * @type {Array<RevenueGroupType>}
     * @memberof RevenueGroups
     */
    revenueGroups?: Array<RevenueGroupType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RevenueGroups
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RevenueGroups interface.
 */
export declare function instanceOfRevenueGroups(value: object): boolean;
export declare function RevenueGroupsFromJSON(json: any): RevenueGroups;
export declare function RevenueGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueGroups;
export declare function RevenueGroupsToJSON(value?: RevenueGroups | null): any;
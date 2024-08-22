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
 * Response object for fetching Catering Revenue Groups configurations.
 * @export
 * @interface RevenueGroupsInfo
 */
export interface RevenueGroupsInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RevenueGroupsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Details for Catering Revenue Group along with associated Revenue Type codes.
     * @type {Array<RevenueGroupType>}
     * @memberof RevenueGroupsInfo
     */
    revenueGroups?: Array<RevenueGroupType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RevenueGroupsInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RevenueGroupsInfo interface.
 */
export declare function instanceOfRevenueGroupsInfo(value: object): boolean;
export declare function RevenueGroupsInfoFromJSON(json: any): RevenueGroupsInfo;
export declare function RevenueGroupsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueGroupsInfo;
export declare function RevenueGroupsInfoToJSON(value?: RevenueGroupsInfo | null): any;

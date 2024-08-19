/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BuildingGroupType } from './BuildingGroupType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object to change the Building Group details of the Hotel.
 * @export
 * @interface BuildingGroupsToBeChanged
 */
export interface BuildingGroupsToBeChanged {
    /**
     * Collection of Building Group details.
     * @type {Array<BuildingGroupType>}
     * @memberof BuildingGroupsToBeChanged
     */
    buildingGroups?: Array<BuildingGroupType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BuildingGroupsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BuildingGroupsToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BuildingGroupsToBeChanged interface.
 */
export declare function instanceOfBuildingGroupsToBeChanged(value: object): boolean;
export declare function BuildingGroupsToBeChangedFromJSON(json: any): BuildingGroupsToBeChanged;
export declare function BuildingGroupsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingGroupsToBeChanged;
export declare function BuildingGroupsToBeChangedToJSON(value?: BuildingGroupsToBeChanged | null): any;

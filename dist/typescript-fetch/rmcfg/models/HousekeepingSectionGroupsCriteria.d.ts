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
import type { HousekeepingSectionGroupsType } from './HousekeepingSectionGroupsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object to create House Keeping Section Groups for resort.
 * @export
 * @interface HousekeepingSectionGroupsCriteria
 */
export interface HousekeepingSectionGroupsCriteria {
    /**
     *
     * @type {HousekeepingSectionGroupsType}
     * @memberof HousekeepingSectionGroupsCriteria
     */
    housekeepingSectionGroups?: HousekeepingSectionGroupsType;
    /**
     *
     * @type {Links}
     * @memberof HousekeepingSectionGroupsCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HousekeepingSectionGroupsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HousekeepingSectionGroupsCriteria interface.
 */
export declare function instanceOfHousekeepingSectionGroupsCriteria(value: object): boolean;
export declare function HousekeepingSectionGroupsCriteriaFromJSON(json: any): HousekeepingSectionGroupsCriteria;
export declare function HousekeepingSectionGroupsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionGroupsCriteria;
export declare function HousekeepingSectionGroupsCriteriaToJSON(value?: HousekeepingSectionGroupsCriteria | null): any;

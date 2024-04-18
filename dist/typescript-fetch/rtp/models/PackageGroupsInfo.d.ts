/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import type { PackageGroupsInfoPackageGroupList } from './PackageGroupsInfoPackageGroupList';
import type { WarningType } from './WarningType';
/**
 * Response object to fetch package groups.
 * @export
 * @interface PackageGroupsInfo
 */
export interface PackageGroupsInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PackageGroupsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof PackageGroupsInfo
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     *
     * @type {PackageGroupsInfoPackageGroupList}
     * @memberof PackageGroupsInfo
     */
    packageGroupList?: PackageGroupsInfoPackageGroupList;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PackageGroupsInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PackageGroupsInfo interface.
 */
export declare function instanceOfPackageGroupsInfo(value: object): boolean;
export declare function PackageGroupsInfoFromJSON(json: any): PackageGroupsInfo;
export declare function PackageGroupsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageGroupsInfo;
export declare function PackageGroupsInfoToJSON(value?: PackageGroupsInfo | null): any;
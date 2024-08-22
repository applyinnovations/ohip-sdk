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
import type { PackageCodeType } from './PackageCodeType';
import type { WarningType } from './WarningType';
/**
 * Request object to create a package.
 * @export
 * @interface PackageInfo
 */
export interface PackageInfo {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PackageInfo
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {PackageCodeType}
     * @memberof PackageInfo
     */
    packageCode?: PackageCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PackageInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PackageInfo interface.
 */
export declare function instanceOfPackageInfo(value: object): boolean;
export declare function PackageInfoFromJSON(json: any): PackageInfo;
export declare function PackageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageInfo;
export declare function PackageInfoToJSON(value?: PackageInfo | null): any;

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
import type { PackageCodeType } from './PackageCodeType';
/**
 * Information about a package group common to all usages.
 * @export
 * @interface PackageGroupType
 */
export interface PackageGroupType {
    /**
     * Package group Code.
     * @type {string}
     * @memberof PackageGroupType
     */
    code?: string;
    /**
     * Package group description.
     * @type {string}
     * @memberof PackageGroupType
     */
    description?: string;
    /**
     * Package Full Information
     * @type {Array<PackageCodeType>}
     * @memberof PackageGroupType
     */
    membersList?: Array<PackageCodeType>;
    /**
     * Can Package group be sold separately?
     * @type {boolean}
     * @memberof PackageGroupType
     */
    sellSeparate?: boolean;
    /**
     * The short description of the package group.
     * @type {string}
     * @memberof PackageGroupType
     */
    shortDescription?: string;
    /**
     * Is Package group web bookable?
     * @type {boolean}
     * @memberof PackageGroupType
     */
    webBookable?: boolean;
}
/**
 * Check if a given object implements the PackageGroupType interface.
 */
export declare function instanceOfPackageGroupType(value: object): boolean;
export declare function PackageGroupTypeFromJSON(json: any): PackageGroupType;
export declare function PackageGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageGroupType;
export declare function PackageGroupTypeToJSON(value?: PackageGroupType | null): any;

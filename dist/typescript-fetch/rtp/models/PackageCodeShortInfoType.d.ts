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
import type { ConfigPackagePrimaryDetailsType } from './ConfigPackagePrimaryDetailsType';
import type { ConfigPackageTransactionType } from './ConfigPackageTransactionType';
import type { ConfigPostingAttributesType } from './ConfigPostingAttributesType';
/**
 *
 * @export
 * @interface PackageCodeShortInfoType
 */
export interface PackageCodeShortInfoType {
    /**
     * Package Code.
     * @type {string}
     * @memberof PackageCodeShortInfoType
     */
    code?: string;
    /**
     * Indicates if it is a Package Group or not.
     * @type {boolean}
     * @memberof PackageCodeShortInfoType
     */
    group?: boolean;
    /**
     *
     * @type {ConfigPostingAttributesType}
     * @memberof PackageCodeShortInfoType
     */
    postingAttributes?: ConfigPostingAttributesType;
    /**
     *
     * @type {ConfigPackagePrimaryDetailsType}
     * @memberof PackageCodeShortInfoType
     */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /**
     * Indicates if package is a redemption package.
     * @type {string}
     * @memberof PackageCodeShortInfoType
     */
    redemptionProductYn?: string;
    /**
     *
     * @type {ConfigPackageTransactionType}
     * @memberof PackageCodeShortInfoType
     */
    transactionDetails?: ConfigPackageTransactionType;
    /**
     * Flag to check the package code is used in application setting.
     * @type {boolean}
     * @memberof PackageCodeShortInfoType
     */
    usedInAppSetting?: boolean;
}
/**
 * Check if a given object implements the PackageCodeShortInfoType interface.
 */
export declare function instanceOfPackageCodeShortInfoType(value: object): boolean;
export declare function PackageCodeShortInfoTypeFromJSON(json: any): PackageCodeShortInfoType;
export declare function PackageCodeShortInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageCodeShortInfoType;
export declare function PackageCodeShortInfoTypeToJSON(value?: PackageCodeShortInfoType | null): any;
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PackageCodeHeaderType } from './PackageCodeHeaderType';
import type { PackageConsumptionType } from './PackageConsumptionType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * This contains the full information and schedule of the block package.
 * @export
 * @interface BlockPackageType
 */
export interface BlockPackageType {
    /**
     *
     * @type {PackageConsumptionType}
     * @memberof BlockPackageType
     */
    consumptionDetails?: PackageConsumptionType;
    /**
     * Required value when changing a package. If the original end date was null, then null is required.
     * @type {string}
     * @memberof BlockPackageType
     */
    endDate?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof BlockPackageType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * Package code. This is the unique code used for the package and is a required element.
     * @type {string}
     * @memberof BlockPackageType
     */
    packageCode?: string;
    /**
     * Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record .
     * @type {string}
     * @memberof BlockPackageType
     */
    packageGroup?: string;
    /**
     *
     * @type {PackageCodeHeaderType}
     * @memberof BlockPackageType
     */
    packageHeaderType?: PackageCodeHeaderType;
    /**
     * The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record.
     * @type {string}
     * @memberof BlockPackageType
     */
    ratePlanCode?: string;
    /**
     * Required value when changing a package. If the original start date was null, then null is required.
     * @type {string}
     * @memberof BlockPackageType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the BlockPackageType interface.
 */
export declare function instanceOfBlockPackageType(value: object): boolean;
export declare function BlockPackageTypeFromJSON(json: any): BlockPackageType;
export declare function BlockPackageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockPackageType;
export declare function BlockPackageTypeToJSON(value?: BlockPackageType | null): any;

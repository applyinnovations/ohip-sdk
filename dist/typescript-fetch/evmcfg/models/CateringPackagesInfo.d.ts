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
import type { CateringPackageType } from './CateringPackageType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface CateringPackagesInfo
 */
export interface CateringPackagesInfo {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CateringPackagesInfo
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CateringPackagesInfo
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof CateringPackagesInfo
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CateringPackagesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof CateringPackagesInfo
     */
    offset?: number;
    /**
     * Collection of multiple Catering Packages.
     * @type {Array<CateringPackageType>}
     * @memberof CateringPackagesInfo
     */
    pkgTmplts?: Array<CateringPackageType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof CateringPackagesInfo
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CateringPackagesInfo
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringPackagesInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CateringPackagesInfo interface.
 */
export declare function instanceOfCateringPackagesInfo(value: object): boolean;
export declare function CateringPackagesInfoFromJSON(json: any): CateringPackagesInfo;
export declare function CateringPackagesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackagesInfo;
export declare function CateringPackagesInfoToJSON(value?: CateringPackagesInfo | null): any;

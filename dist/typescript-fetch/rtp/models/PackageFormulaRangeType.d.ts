/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Package Formula Ranges data.
 * @export
 * @interface PackageFormulaRangeType
 */
export interface PackageFormulaRangeType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageFormulaRangeType
     */
    amountFrom?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageFormulaRangeType
     */
    amountTo?: CurrencyAmountType;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof PackageFormulaRangeType
     */
    hotelId?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageFormulaRangeType
     */
    intervalAmount?: CurrencyAmountType;
    /**
     * Package Formula Range Id.
     * @type {number}
     * @memberof PackageFormulaRangeType
     */
    pkgFormulaRangeId?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageFormulaRangeType
     */
    taxAmount?: CurrencyAmountType;
    /**
     * Tax Range Type.
     * @type {string}
     * @memberof PackageFormulaRangeType
     */
    taxRangeType?: string;
}
/**
 * Check if a given object implements the PackageFormulaRangeType interface.
 */
export declare function instanceOfPackageFormulaRangeType(value: object): boolean;
export declare function PackageFormulaRangeTypeFromJSON(json: any): PackageFormulaRangeType;
export declare function PackageFormulaRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageFormulaRangeType;
export declare function PackageFormulaRangeTypeToJSON(value?: PackageFormulaRangeType | null): any;

/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 *
 * @export
 * @interface PackageElementType
 */
export interface PackageElementType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    allowance?: CurrencyAmountType;
    /**
     *
     * @type {Array<string>}
     * @memberof PackageElementType
     */
    description?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    startDate?: string;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    endDate?: string;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    packageCode?: string;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    calculationRule?: string;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    postingRhythm?: string;
    /**
     *
     * @type {number}
     * @memberof PackageElementType
     */
    quantity?: number;
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    includedInRate?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateSeprateLine?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateCombinedLine?: boolean;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    startTime?: string;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    endTime?: string;
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    sellSeparate?: boolean;
}
/**
 * Check if a given object implements the PackageElementType interface.
 */
export declare function instanceOfPackageElementType(value: object): boolean;
export declare function PackageElementTypeFromJSON(json: any): PackageElementType;
export declare function PackageElementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageElementType;
export declare function PackageElementTypeToJSON(value?: PackageElementType | null): any;

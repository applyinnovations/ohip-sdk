/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 *
 * @export
 * @interface PackageElementType
 */
export interface PackageElementType {
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateCombinedLine?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PackageElementType
     */
    addRateSeprateLine?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    allowance?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PackageElementType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    calculationRule?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PackageElementType
     */
    description?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof PackageElementType
     */
    endDate?: Date;
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
    includedInRate?: boolean;
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
    sellSeparate?: boolean;
    /**
     *
     * @type {Date}
     * @memberof PackageElementType
     */
    startDate?: Date;
    /**
     *
     * @type {string}
     * @memberof PackageElementType
     */
    startTime?: string;
}
/**
 * Check if a given object implements the PackageElementType interface.
 */
export declare function instanceOfPackageElementType(value: object): boolean;
export declare function PackageElementTypeFromJSON(json: any): PackageElementType;
export declare function PackageElementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageElementType;
export declare function PackageElementTypeToJSON(value?: PackageElementType | null): any;

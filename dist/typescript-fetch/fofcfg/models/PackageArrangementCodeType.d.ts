/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Generic Type to specify unique/primary id for the code. mostly used for Hotel level configuration codes removal request.
 * @export
 * @interface PackageArrangementCodeType
 */
export interface PackageArrangementCodeType {
    /**
     * Primay key of arrangement codes
     * @type {number}
     * @memberof PackageArrangementCodeType
     */
    arrangementId?: number;
    /**
     * Configuration code.
     * @type {string}
     * @memberof PackageArrangementCodeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof PackageArrangementCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Hotel where the code is configured.
     * @type {string}
     * @memberof PackageArrangementCodeType
     */
    hotelId?: string;
    /**
     * Represents whether the package arrangement code is inactive or not
     * @type {boolean}
     * @memberof PackageArrangementCodeType
     */
    inactive?: boolean;
    /**
     * specify whether the arrangement postings are classed as revenue.
     * @type {boolean}
     * @memberof PackageArrangementCodeType
     */
    revenue?: boolean;
    /**
     * information about the tax type code linked to the folio arrangment Code.
     * @type {string}
     * @memberof PackageArrangementCodeType
     */
    taxTypeCode?: string;
}
/**
 * Check if a given object implements the PackageArrangementCodeType interface.
 */
export declare function instanceOfPackageArrangementCodeType(value: object): boolean;
export declare function PackageArrangementCodeTypeFromJSON(json: any): PackageArrangementCodeType;
export declare function PackageArrangementCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageArrangementCodeType;
export declare function PackageArrangementCodeTypeToJSON(value?: PackageArrangementCodeType | null): any;

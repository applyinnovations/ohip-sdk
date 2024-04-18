/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { SourceCodeType } from './SourceCodeType';
import type { TranslationTextType50 } from './TranslationTextType50';
/**
 * Common code type for code, description, seq and inactive
 * @export
 * @interface SourceGroupType
 */
export interface SourceGroupType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof SourceGroupType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof SourceGroupType
     */
    description?: TranslationTextType50;
    /**
     * Hotel code for the code type.
     * @type {string}
     * @memberof SourceGroupType
     */
    hotelId?: string;
    /**
     * Indicates the code type is inactive or not.
     * @type {boolean}
     * @memberof SourceGroupType
     */
    inactive?: boolean;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof SourceGroupType
     */
    sequence?: number;
    /**
     * Collection of Source Codes.
     * @type {Array<SourceCodeType>}
     * @memberof SourceGroupType
     */
    sourceCodes?: Array<SourceCodeType>;
}
/**
 * Check if a given object implements the SourceGroupType interface.
 */
export declare function instanceOfSourceGroupType(value: object): boolean;
export declare function SourceGroupTypeFromJSON(json: any): SourceGroupType;
export declare function SourceGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceGroupType;
export declare function SourceGroupTypeToJSON(value?: SourceGroupType | null): any;
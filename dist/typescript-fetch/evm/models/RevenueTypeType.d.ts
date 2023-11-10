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
import type { RevenueTypeDetailsType } from './RevenueTypeDetailsType';
import type { TranslationTextType200 } from './TranslationTextType200';
/**
 * Base type provides information about Catering Revenue Types Configuration.
 * @export
 * @interface RevenueTypeType
 */
export interface RevenueTypeType {
    /**
     * Code is used to identify a Catering Revenue Type/Code.
     * @type {string}
     * @memberof RevenueTypeType
     */
    code?: string;
    /**
     * Revenue Types display sequence Number
     * @type {number}
     * @memberof RevenueTypeType
     */
    displaySequence?: number;
    /**
     * Flag for Food and Beverages.
     * @type {boolean}
     * @memberof RevenueTypeType
     */
    foodAndBeverage?: boolean;
    /**
     * Indicates if the Revenue type Code is inactive.
     * @type {boolean}
     * @memberof RevenueTypeType
     */
    inactive?: boolean;
    /**
     *
     * @type {RevenueTypeDetailsType}
     * @memberof RevenueTypeType
     */
    revenueDetails?: RevenueTypeDetailsType;
    /**
     * Revenue Group
     * @type {string}
     * @memberof RevenueTypeType
     */
    revenueGroup?: string;
    /**
     *
     * @type {TranslationTextType200}
     * @memberof RevenueTypeType
     */
    translatableDescription?: TranslationTextType200;
}
/**
 * Check if a given object implements the RevenueTypeType interface.
 */
export declare function instanceOfRevenueTypeType(value: object): boolean;
export declare function RevenueTypeTypeFromJSON(json: any): RevenueTypeType;
export declare function RevenueTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypeType;
export declare function RevenueTypeTypeToJSON(value?: RevenueTypeType | null): any;

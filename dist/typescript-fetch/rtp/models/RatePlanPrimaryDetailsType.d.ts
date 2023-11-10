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
import type { BaseType } from './BaseType';
import type { RateCodeLockStatusType } from './RateCodeLockStatusType';
import type { RatePlanApprovalStatusType } from './RatePlanApprovalStatusType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 *
 * @export
 * @interface RatePlanPrimaryDetailsType
 */
export interface RatePlanPrimaryDetailsType {
    /**
     *
     * @type {RatePlanApprovalStatusType}
     * @memberof RatePlanPrimaryDetailsType
     */
    approvalStatus?: RatePlanApprovalStatusType;
    /**
     *
     * @type {BaseType}
     * @memberof RatePlanPrimaryDetailsType
     */
    baseType?: BaseType;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof RatePlanPrimaryDetailsType
     */
    description?: TranslationTextType2000;
    /**
     * End sell date of the rate plan.
     * @type {Date}
     * @memberof RatePlanPrimaryDetailsType
     */
    endSellDate?: Date;
    /**
     *
     * @type {RateCodeLockStatusType}
     * @memberof RatePlanPrimaryDetailsType
     */
    lockStatus?: RateCodeLockStatusType;
    /**
     * The particular rate code is marked as privileged making it restrictive on who can update information.
     * @type {boolean}
     * @memberof RatePlanPrimaryDetailsType
     */
    privilegedRate?: boolean;
    /**
     * The restrictions marked on the rate code are marked as privileged making it restrictive on who can update information.
     * @type {boolean}
     * @memberof RatePlanPrimaryDetailsType
     */
    privilegedRateRestriction?: boolean;
    /**
     * Sell Sequence for the rate plan.
     * @type {number}
     * @memberof RatePlanPrimaryDetailsType
     */
    sellSequence?: number;
    /**
     * Start sell date of the rate plan.
     * @type {Date}
     * @memberof RatePlanPrimaryDetailsType
     */
    startSellDate?: Date;
}
/**
 * Check if a given object implements the RatePlanPrimaryDetailsType interface.
 */
export declare function instanceOfRatePlanPrimaryDetailsType(value: object): boolean;
export declare function RatePlanPrimaryDetailsTypeFromJSON(json: any): RatePlanPrimaryDetailsType;
export declare function RatePlanPrimaryDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanPrimaryDetailsType;
export declare function RatePlanPrimaryDetailsTypeToJSON(value?: RatePlanPrimaryDetailsType | null): any;

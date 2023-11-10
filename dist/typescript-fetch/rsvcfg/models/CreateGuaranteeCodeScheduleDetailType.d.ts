/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CreatePolicyApplicableCodesType } from './CreatePolicyApplicableCodesType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * The Guarantee Code Schedule detail Type.
 * @export
 * @interface CreateGuaranteeCodeScheduleDetailType
 */
export interface CreateGuaranteeCodeScheduleDetailType {
    /**
     *
     * @type {CreatePolicyApplicableCodesType}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    applicableCodes?: CreatePolicyApplicableCodesType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    guaranteeCode?: CodeDescriptionType;
    /**
     * schedule Inactive?
     * @type {boolean}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    inactive?: boolean;
    /**
     * override the schedule?
     * @type {boolean}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    override?: boolean;
    /**
     * Sequence for the schedule.
     * @type {number}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    sequence?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof CreateGuaranteeCodeScheduleDetailType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the CreateGuaranteeCodeScheduleDetailType interface.
 */
export declare function instanceOfCreateGuaranteeCodeScheduleDetailType(value: object): boolean;
export declare function CreateGuaranteeCodeScheduleDetailTypeFromJSON(json: any): CreateGuaranteeCodeScheduleDetailType;
export declare function CreateGuaranteeCodeScheduleDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGuaranteeCodeScheduleDetailType;
export declare function CreateGuaranteeCodeScheduleDetailTypeToJSON(value?: CreateGuaranteeCodeScheduleDetailType | null): any;

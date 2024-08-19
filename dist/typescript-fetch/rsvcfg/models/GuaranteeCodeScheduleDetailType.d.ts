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
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { PolicyApplicableCodesType } from './PolicyApplicableCodesType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * The Guarantee Code Schedule detail Type.
 * @export
 * @interface GuaranteeCodeScheduleDetailType
 */
export interface GuaranteeCodeScheduleDetailType {
    /**
     *
     * @type {PolicyApplicableCodesType}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    applicableCodes?: PolicyApplicableCodesType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    guaranteeCode?: CodeDescriptionType;
    /**
     * schedule Inactive?
     * @type {boolean}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    inactive?: boolean;
    /**
     * override the schedule?
     * @type {boolean}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    override?: boolean;
    /**
     * Sequence for the schedule.
     * @type {number}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    sequence?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof GuaranteeCodeScheduleDetailType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the GuaranteeCodeScheduleDetailType interface.
 */
export declare function instanceOfGuaranteeCodeScheduleDetailType(value: object): boolean;
export declare function GuaranteeCodeScheduleDetailTypeFromJSON(json: any): GuaranteeCodeScheduleDetailType;
export declare function GuaranteeCodeScheduleDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeCodeScheduleDetailType;
export declare function GuaranteeCodeScheduleDetailTypeToJSON(value?: GuaranteeCodeScheduleDetailType | null): any;

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
import type { CopySchedulesType } from './CopySchedulesType';
/**
 * The Criteria for Schedules to be copied.
 * @export
 * @interface CopySchedulesCriteriaType
 */
export interface CopySchedulesCriteriaType {
    /**
     *
     * @type {CopySchedulesType}
     * @memberof CopySchedulesCriteriaType
     */
    copySchedules?: CopySchedulesType;
}
/**
 * Check if a given object implements the CopySchedulesCriteriaType interface.
 */
export declare function instanceOfCopySchedulesCriteriaType(value: object): boolean;
export declare function CopySchedulesCriteriaTypeFromJSON(json: any): CopySchedulesCriteriaType;
export declare function CopySchedulesCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopySchedulesCriteriaType;
export declare function CopySchedulesCriteriaTypeToJSON(value?: CopySchedulesCriteriaType | null): any;

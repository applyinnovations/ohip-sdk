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
import type { CopySchedulesCriteriaType } from './CopySchedulesCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object that provides the criteria to copy policy schedules to different hotels.
 * @export
 * @interface CopyPolicySchedules
 */
export interface CopyPolicySchedules {
    /**
     *
     * @type {CopySchedulesCriteriaType}
     * @memberof CopyPolicySchedules
     */
    criteria?: CopySchedulesCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof CopyPolicySchedules
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CopyPolicySchedules
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CopyPolicySchedules interface.
 */
export declare function instanceOfCopyPolicySchedules(value: object): boolean;
export declare function CopyPolicySchedulesFromJSON(json: any): CopyPolicySchedules;
export declare function CopyPolicySchedulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyPolicySchedules;
export declare function CopyPolicySchedulesToJSON(value?: CopyPolicySchedules | null): any;

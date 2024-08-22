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
import type { PolicyScheduleDetailType } from './PolicyScheduleDetailType';
import type { PolicyTypeType } from './PolicyTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * The Policy Schedule Type.
 * @export
 * @interface PolicyScheduleType
 */
export interface PolicyScheduleType {
    /**
     * Hotel code for the Policy Schedules.
     * @type {string}
     * @memberof PolicyScheduleType
     */
    hotelId?: string;
    /**
     *
     * @type {PolicyTypeType}
     * @memberof PolicyScheduleType
     */
    policyType?: PolicyTypeType;
    /**
     *
     * @type {PolicyScheduleDetailType}
     * @memberof PolicyScheduleType
     */
    scheduleDetail?: PolicyScheduleDetailType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PolicyScheduleType
     */
    scheduleId?: UniqueIDType;
}
/**
 * Check if a given object implements the PolicyScheduleType interface.
 */
export declare function instanceOfPolicyScheduleType(value: object): boolean;
export declare function PolicyScheduleTypeFromJSON(json: any): PolicyScheduleType;
export declare function PolicyScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyScheduleType;
export declare function PolicyScheduleTypeToJSON(value?: PolicyScheduleType | null): any;

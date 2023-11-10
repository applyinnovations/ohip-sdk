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
import type { CodeListType } from './CodeListType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * The Schedule copy criteria type.
 * @export
 * @interface CopyScheduleType
 */
export interface CopyScheduleType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyScheduleType
     */
    scheduleId?: UniqueIDType;
    /**
     *
     * @type {CodeListType}
     * @memberof CopyScheduleType
     */
    targetHotelCodes?: CodeListType;
}
/**
 * Check if a given object implements the CopyScheduleType interface.
 */
export declare function instanceOfCopyScheduleType(value: object): boolean;
export declare function CopyScheduleTypeFromJSON(json: any): CopyScheduleType;
export declare function CopyScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyScheduleType;
export declare function CopyScheduleTypeToJSON(value?: CopyScheduleType | null): any;

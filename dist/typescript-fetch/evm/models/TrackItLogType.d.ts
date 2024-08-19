/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TrackItId } from './TrackItId';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Individual activity log related to the Track It ticket.
 * @export
 * @interface TrackItLogType
 */
export interface TrackItLogType {
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    businessDate?: string;
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    logDate?: string;
    /**
     *
     * @type {number}
     * @memberof TrackItLogType
     */
    logUserId?: number;
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    logUserName?: string;
    /**
     *
     * @type {TrackItId}
     * @memberof TrackItLogType
     */
    trackItId?: TrackItId;
    /**
     *
     * @type {UniqueIDType}
     * @memberof TrackItLogType
     */
    trackItLogId?: UniqueIDType;
    /**
     *
     * @type {string}
     * @memberof TrackItLogType
     */
    type?: string;
}
/**
 * Check if a given object implements the TrackItLogType interface.
 */
export declare function instanceOfTrackItLogType(value: object): boolean;
export declare function TrackItLogTypeFromJSON(json: any): TrackItLogType;
export declare function TrackItLogTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItLogType;
export declare function TrackItLogTypeToJSON(value?: TrackItLogType | null): any;

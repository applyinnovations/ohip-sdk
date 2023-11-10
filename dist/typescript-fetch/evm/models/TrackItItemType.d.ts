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
import type { ApplicationUserType } from './ApplicationUserType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { TrackItActionType } from './TrackItActionType';
import type { TrackItGroup } from './TrackItGroup';
import type { TrackItId } from './TrackItId';
import type { TrackItLogListType } from './TrackItLogListType';
import type { TrackItReservationInfoType } from './TrackItReservationInfoType';
import type { TrackItType } from './TrackItType';
/**
 * Detailed information of a Track It item.
 * @export
 * @interface TrackItItemType
 */
export interface TrackItItemType {
    /**
     *
     * @type {TrackItActionType}
     * @memberof TrackItItemType
     */
    action?: TrackItActionType;
    /**
     *
     * @type {ApplicationUserType}
     * @memberof TrackItItemType
     */
    assignedTo?: ApplicationUserType;
    /**
     *
     * @type {string}
     * @memberof TrackItItemType
     */
    description?: string;
    /**
     *
     * @type {Date}
     * @memberof TrackItItemType
     */
    followUpDate?: Date;
    /**
     *
     * @type {TrackItGroup}
     * @memberof TrackItItemType
     */
    group?: TrackItGroup;
    /**
     *
     * @type {string}
     * @memberof TrackItItemType
     */
    hotelId?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof TrackItItemType
     */
    location?: CodeDescriptionType;
    /**
     *
     * @type {number}
     * @memberof TrackItItemType
     */
    quantity?: number;
    /**
     *
     * @type {string}
     * @memberof TrackItItemType
     */
    referenceNumber?: string;
    /**
     *
     * @type {TrackItReservationInfoType}
     * @memberof TrackItItemType
     */
    reservationInfo?: TrackItReservationInfoType;
    /**
     *
     * @type {string}
     * @memberof TrackItItemType
     */
    ticketNumber?: string;
    /**
     *
     * @type {TrackItId}
     * @memberof TrackItItemType
     */
    trackItId?: TrackItId;
    /**
     *
     * @type {TrackItLogListType}
     * @memberof TrackItItemType
     */
    trackItLogList?: TrackItLogListType;
    /**
     *
     * @type {TrackItType}
     * @memberof TrackItItemType
     */
    type?: TrackItType;
}
/**
 * Check if a given object implements the TrackItItemType interface.
 */
export declare function instanceOfTrackItItemType(value: object): boolean;
export declare function TrackItItemTypeFromJSON(json: any): TrackItItemType;
export declare function TrackItItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItItemType;
export declare function TrackItItemTypeToJSON(value?: TrackItItemType | null): any;

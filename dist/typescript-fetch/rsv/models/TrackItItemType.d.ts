/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import type { ResGuestInfoType } from './ResGuestInfoType';
import type { ReservationIdList } from './ReservationIdList';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Reservation info associated with a Track It item.
 * @export
 * @interface TrackItReservationInfoType
 */
export interface TrackItReservationInfoType {
    /**
     *
     * @type {PMSResStatusType}
     * @memberof TrackItReservationInfoType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     *
     * @type {ResGuaranteeType}
     * @memberof TrackItReservationInfoType
     */
    guarantee?: ResGuaranteeType;
    /**
     *
     * @type {ResGuestInfoType}
     * @memberof TrackItReservationInfoType
     */
    guestInfo?: ResGuestInfoType;
    /**
     *
     * @type {ReservationIdList}
     * @memberof TrackItReservationInfoType
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof TrackItReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {string}
     * @memberof TrackItReservationInfoType
     */
    roomId?: string;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof TrackItReservationInfoType
     */
    roomStatus?: HousekeepingRoomStatusType;
    /**
     *
     * @type {string}
     * @memberof TrackItReservationInfoType
     */
    roomType?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof TrackItReservationInfoType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the TrackItReservationInfoType interface.
 */
export declare function instanceOfTrackItReservationInfoType(value: object): boolean;
export declare function TrackItReservationInfoTypeFromJSON(json: any): TrackItReservationInfoType;
export declare function TrackItReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItReservationInfoType;
export declare function TrackItReservationInfoTypeToJSON(value?: TrackItReservationInfoType | null): any;

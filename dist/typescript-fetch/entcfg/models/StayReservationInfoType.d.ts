/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PMSResStatusType } from './PMSResStatusType';
import type { ResAttachedProfileListType } from './ResAttachedProfileListType';
import type { ReservationIdList } from './ReservationIdList';
import type { StayInfoType } from './StayInfoType';
/**
 * The Reservation class contains the current reservation being created or altered.
 * @export
 * @interface StayReservationInfoType
 */
export interface StayReservationInfoType {
    /**
     *
     * @type {ResAttachedProfileListType}
     * @memberof StayReservationInfoType
     */
    attachedProfiles?: ResAttachedProfileListType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof StayReservationInfoType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     *
     * @type {string}
     * @memberof StayReservationInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {ReservationIdList}
     * @memberof StayReservationInfoType
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof StayReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {StayInfoType}
     * @memberof StayReservationInfoType
     */
    roomStay?: StayInfoType;
}
/**
 * Check if a given object implements the StayReservationInfoType interface.
 */
export declare function instanceOfStayReservationInfoType(value: object): boolean;
export declare function StayReservationInfoTypeFromJSON(json: any): StayReservationInfoType;
export declare function StayReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayReservationInfoType;
export declare function StayReservationInfoTypeToJSON(value?: StayReservationInfoType | null): any;

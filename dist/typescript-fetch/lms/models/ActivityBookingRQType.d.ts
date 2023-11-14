/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityList } from './ActivityList';
import type { UniqueIDType } from './UniqueIDType';
/**
 * The choice between a reservation header or a profile ID. One or the other is required.
 * @export
 * @interface ActivityBookingRQType
 */
export interface ActivityBookingRQType {
    /**
     *
     * @type {ActivityList}
     * @memberof ActivityBookingRQType
     */
    activities?: ActivityList;
    /**
     * This is not required if a Reservation Id is provided
     * @type {string}
     * @memberof ActivityBookingRQType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ActivityBookingRQType
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ActivityBookingRQType
     */
    reservationId?: UniqueIDType;
}
/**
 * Check if a given object implements the ActivityBookingRQType interface.
 */
export declare function instanceOfActivityBookingRQType(value: object): boolean;
export declare function ActivityBookingRQTypeFromJSON(json: any): ActivityBookingRQType;
export declare function ActivityBookingRQTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityBookingRQType;
export declare function ActivityBookingRQTypeToJSON(value?: ActivityBookingRQType | null): any;
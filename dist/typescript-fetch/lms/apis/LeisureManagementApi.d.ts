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
import * as runtime from '../runtime';
import type { ActivityBookingModified, ActivityBookingsDetails, PostActivityBookingRequest, PostLocationNotificationRequest, PutActivityBookingRequest, Status } from '../models';
export interface DeleteActivityBookingRequest {
    reservationId?: string;
    hotelId?: string;
    activityId?: string;
    activityIdType?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetActivityBookingsRequest {
    hotelId?: string;
    profileIds?: Array<string>;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    profileIdContext?: Array<string>;
    profileIdsType?: Array<string>;
    reservationIds?: Array<string>;
    reservationIdContext?: Array<string>;
    reservationIdsType?: Array<string>;
    activityIds?: Array<string>;
    activityIdContext?: Array<string>;
    activityIdsType?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostActivityBookingOperationRequest {
    reservationId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    createActivityBooking?: PostActivityBookingRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostLocationNotificationOperationRequest {
    reservationId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    locationNotificationToBeCreated?: PostLocationNotificationRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutActivityBookingOperationRequest {
    reservationId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    changeActivityBooking?: PutActivityBookingRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class LeisureManagementApi extends runtime.BaseAPI {
    /**
     * This API will send a response to Cancellation of an Activity Booking. <p><strong>OperationId:</strong>deleteActivityBooking</p>
     * Send a response to Cancellation of an Activity Booking
     */
    deleteActivityBookingRaw(requestParameters: DeleteActivityBookingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API will send a response to Cancellation of an Activity Booking. <p><strong>OperationId:</strong>deleteActivityBooking</p>
     * Send a response to Cancellation of an Activity Booking
     */
    deleteActivityBooking(requestParameters: DeleteActivityBookingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * This API will send a response to Look-up of Activity Bookings. <p><strong>OperationId:</strong>getActivityBookings</p>
     * Send a response to Look-up of Activity Bookings
     */
    getActivityBookingsRaw(requestParameters: GetActivityBookingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActivityBookingsDetails>>;
    /**
     * This API will send a response to Look-up of Activity Bookings. <p><strong>OperationId:</strong>getActivityBookings</p>
     * Send a response to Look-up of Activity Bookings
     */
    getActivityBookings(requestParameters: GetActivityBookingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActivityBookingsDetails>;
    /**
     * This API will send a response to Creation of Activity Booking. <p><strong>OperationId:</strong>postActivityBooking</p>
     * Send a response to Creation of Activity Booking
     */
    postActivityBookingRaw(requestParameters: PostActivityBookingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API will send a response to Creation of Activity Booking. <p><strong>OperationId:</strong>postActivityBooking</p>
     * Send a response to Creation of Activity Booking
     */
    postActivityBooking(requestParameters: PostActivityBookingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * This API will send a response to a Location Notification. <p><strong>OperationId:</strong>postLocationNotification</p>
     * Send a response to Location Notification
     */
    postLocationNotificationRaw(requestParameters: PostLocationNotificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API will send a response to a Location Notification. <p><strong>OperationId:</strong>postLocationNotification</p>
     * Send a response to Location Notification
     */
    postLocationNotification(requestParameters: PostLocationNotificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * This API will send a response to a  Change in Activity Booking request from external Activity Scheduler system. <p><strong>OperationId:</strong>putActivityBooking</p>
     * Send a response to Change in Activity Booking
     */
    putActivityBookingRaw(requestParameters: PutActivityBookingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActivityBookingModified>>;
    /**
     * This API will send a response to a  Change in Activity Booking request from external Activity Scheduler system. <p><strong>OperationId:</strong>putActivityBooking</p>
     * Send a response to Change in Activity Booking
     */
    putActivityBooking(requestParameters: PutActivityBookingOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActivityBookingModified>;
}

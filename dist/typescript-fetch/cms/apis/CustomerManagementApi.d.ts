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
import * as runtime from '../runtime';
import type { CalendarTask, CalendarTaskAttachments, CalendarTasks, PostCalendarTaskRequest, PutTrackItItemsRequest, Status, TrackItItems } from '../models';
export interface DeleteCalendarTaskRequest {
    activityId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteCalendarTaskAttachmentRequest {
    linkedToId?: string;
    attachId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteTrackItItemsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    trackItId?: Array<string>;
    trackItIdContext?: Array<string>;
    trackItIdType?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetCalendarTaskRequest {
    activityId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    idContext?: string;
    idType?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetCalendarTaskAttachmentsRequest {
    taskId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    idContext?: string;
    idType?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetCalendarTasksRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    countSummary?: boolean;
    taskSummary?: boolean;
    hotelIds?: Array<string>;
    startDate?: Date;
    endDate?: Date;
    duration?: string;
    completionStatus?: GetCalendarTasksCompletionStatusEnum;
    priorityCodes?: Array<string>;
    classCodes?: Set<GetCalendarTasksClassCodesEnum>;
    typeCodes?: Array<string>;
    purpose?: string;
    taskOwner?: string;
    author?: string;
    accountId?: string;
    accountIdContext?: string;
    accountIdType?: string;
    contactId?: string;
    contactIdContext?: string;
    contactIdType?: string;
    blockId?: string;
    blockIdContext?: string;
    blockIdType?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetTrackItItemsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    ticketId?: string;
    reservationId?: string;
    reservationIdContext?: string;
    reservationIdType?: string;
    givenName?: string;
    surname?: string;
    trackItGroups?: Set<GetTrackItItemsTrackItGroupsEnum>;
    types?: Array<string>;
    locations?: Array<string>;
    actions?: Array<string>;
    actionStatuses?: Set<GetTrackItItemsActionStatusesEnum>;
    appUserId?: string;
    appUserIdContext?: string;
    appUserIdType?: string;
    assignedStatuses?: Set<GetTrackItItemsAssignedStatusesEnum>;
    room?: string;
    followUpDate?: Date;
    createdOn?: Date;
    createdByUserId?: string;
    createdByUserIdContext?: string;
    createdByUserIdType?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostCalendarTaskOperationRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    calendarTask?: PostCalendarTaskRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostTrackItItemsRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    trackItItems?: PutTrackItItemsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutCalendarTaskRequest {
    activityId?: string;
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    calendarTask?: PostCalendarTaskRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutTrackItItemsOperationRequest {
    hotelId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    trackItItems?: PutTrackItItemsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class CustomerManagementApi extends runtime.BaseAPI {
    /**
     * This API will allow you to delete a Calendar Task. <p><strong>OperationId:</strong>deleteCalendarTask</p>
     * Delete a Calendar Task
     */
    deleteCalendarTaskRaw(requestParameters: DeleteCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API will allow you to delete a Calendar Task. <p><strong>OperationId:</strong>deleteCalendarTask</p>
     * Delete a Calendar Task
     */
    deleteCalendarTask(requestParameters: DeleteCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Delete an attachment associated with the calendar task <p><strong>OperationId:</strong>deleteCalendarTaskAttachment</p>
     * Delete a Calendar Task attachment
     */
    deleteCalendarTaskAttachmentRaw(requestParameters: DeleteCalendarTaskAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Delete an attachment associated with the calendar task <p><strong>OperationId:</strong>deleteCalendarTaskAttachment</p>
     * Delete a Calendar Task attachment
     */
    deleteCalendarTaskAttachment(requestParameters: DeleteCalendarTaskAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Delete a Track It Item for a property. <p><strong>OperationId:</strong>deleteTrackItItems</p>
     * Deletes track it items
     */
    deleteTrackItItemsRaw(requestParameters: DeleteTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Delete a Track It Item for a property. <p><strong>OperationId:</strong>deleteTrackItItems</p>
     * Deletes track it items
     */
    deleteTrackItItems(requestParameters: DeleteTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * With this API you can get a Calendar Task. <p><strong>OperationId:</strong>getCalendarTask</p>
     * Get a Calendar Task
     */
    getCalendarTaskRaw(requestParameters: GetCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalendarTask>>;
    /**
     * With this API you can get a Calendar Task. <p><strong>OperationId:</strong>getCalendarTask</p>
     * Get a Calendar Task
     */
    getCalendarTask(requestParameters: GetCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalendarTask>;
    /**
     * Retrieve the attachments on a Calendar task. <p><strong>OperationId:</strong>getCalendarTaskAttachments</p>
     * Get calendar task attachments
     */
    getCalendarTaskAttachmentsRaw(requestParameters: GetCalendarTaskAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalendarTaskAttachments>>;
    /**
     * Retrieve the attachments on a Calendar task. <p><strong>OperationId:</strong>getCalendarTaskAttachments</p>
     * Get calendar task attachments
     */
    getCalendarTaskAttachments(requestParameters: GetCalendarTaskAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalendarTaskAttachments>;
    /**
     * You can fetch a list of Calendar Tasks for with this API, for one or more properties. <p><strong>OperationId:</strong>getCalendarTasks</p>
     * Get Calendar Tasks
     */
    getCalendarTasksRaw(requestParameters: GetCalendarTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalendarTasks>>;
    /**
     * You can fetch a list of Calendar Tasks for with this API, for one or more properties. <p><strong>OperationId:</strong>getCalendarTasks</p>
     * Get Calendar Tasks
     */
    getCalendarTasks(requestParameters: GetCalendarTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalendarTasks>;
    /**
     * Retrieve a list of all Track It Items for a property. <p><strong>OperationId:</strong>getTrackItItems</p>
     * Fetches track it items
     */
    getTrackItItemsRaw(requestParameters: GetTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackItItems>>;
    /**
     * Retrieve a list of all Track It Items for a property. <p><strong>OperationId:</strong>getTrackItItems</p>
     * Fetches track it items
     */
    getTrackItItems(requestParameters: GetTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackItItems>;
    /**
     * This API will allow you to create a new Calendar Task. <p><strong>OperationId:</strong>postCalendarTask</p>
     * Create Calendar Task
     */
    postCalendarTaskRaw(requestParameters: PostCalendarTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API will allow you to create a new Calendar Task. <p><strong>OperationId:</strong>postCalendarTask</p>
     * Create Calendar Task
     */
    postCalendarTask(requestParameters: PostCalendarTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Create a new Track It Item. Track It manages storage and delivery of guest luggage, parcels, vehicles (valet), and lost items.  They can optionally be linked to a reservation if related or an arrival, in-house or departure reservation. <p><strong>OperationId:</strong>postTrackItItems</p>
     * Creates track it items
     */
    postTrackItItemsRaw(requestParameters: PostTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Create a new Track It Item. Track It manages storage and delivery of guest luggage, parcels, vehicles (valet), and lost items.  They can optionally be linked to a reservation if related or an arrival, in-house or departure reservation. <p><strong>OperationId:</strong>postTrackItItems</p>
     * Creates track it items
     */
    postTrackItItems(requestParameters: PostTrackItItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * This API will allow you to update an existing Calendar Task. <p><strong>OperationId:</strong>putCalendarTask</p>
     * Update Calendar Task
     */
    putCalendarTaskRaw(requestParameters: PutCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalendarTask>>;
    /**
     * This API will allow you to update an existing Calendar Task. <p><strong>OperationId:</strong>putCalendarTask</p>
     * Update Calendar Task
     */
    putCalendarTask(requestParameters: PutCalendarTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalendarTask>;
    /**
     * Update the details of a Track It Item for a property. <p><strong>OperationId:</strong>putTrackItItems</p>
     * Updates track it items
     */
    putTrackItItemsRaw(requestParameters: PutTrackItItemsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrackItItems>>;
    /**
     * Update the details of a Track It Item for a property. <p><strong>OperationId:</strong>putTrackItItems</p>
     * Updates track it items
     */
    putTrackItItems(requestParameters: PutTrackItItemsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrackItItems>;
}
/**
 * @export
 */
export declare const GetCalendarTasksCompletionStatusEnum: {
    readonly All: "All";
    readonly Completed: "Completed";
    readonly Outstanding: "Outstanding";
};
export type GetCalendarTasksCompletionStatusEnum = typeof GetCalendarTasksCompletionStatusEnum[keyof typeof GetCalendarTasksCompletionStatusEnum];
/**
 * @export
 */
export declare const GetCalendarTasksClassCodesEnum: {
    readonly Correspondence: "Correspondence";
    readonly Meeting: "Meeting";
    readonly Todolist: "Todolist";
    readonly Call: "Call";
    readonly Appointment: "Appointment";
};
export type GetCalendarTasksClassCodesEnum = typeof GetCalendarTasksClassCodesEnum[keyof typeof GetCalendarTasksClassCodesEnum];
/**
 * @export
 */
export declare const GetTrackItItemsTrackItGroupsEnum: {
    readonly Parcel: "Parcel";
    readonly Valet: "Valet";
    readonly Baggage: "Baggage";
    readonly Lost: "Lost";
};
export type GetTrackItItemsTrackItGroupsEnum = typeof GetTrackItItemsTrackItGroupsEnum[keyof typeof GetTrackItItemsTrackItGroupsEnum];
/**
 * @export
 */
export declare const GetTrackItItemsActionStatusesEnum: {
    readonly Open: "Open";
    readonly Closed: "Closed";
};
export type GetTrackItItemsActionStatusesEnum = typeof GetTrackItItemsActionStatusesEnum[keyof typeof GetTrackItItemsActionStatusesEnum];
/**
 * @export
 */
export declare const GetTrackItItemsAssignedStatusesEnum: {
    readonly Assigned: "Assigned";
    readonly Unassigned: "Unassigned";
};
export type GetTrackItItemsAssignedStatusesEnum = typeof GetTrackItItemsAssignedStatusesEnum[keyof typeof GetTrackItItemsAssignedStatusesEnum];

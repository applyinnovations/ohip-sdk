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
import type { ChangeActivityLocations, ChangeActivityLocationsRS, ChangeActivityStatusCodes, ChangeActivityStatusCodesRS, ChangeActivityTypes, ChangeActivityTypesRS, CopyActivityLocations, CopyActivityLocationsRS, CopyActivityTypes, CopyActivityTypesRS, CreateActivityLocations, CreateActivityStatusCodes, CreateActivityTypes, FetchActivityLocations, FetchActivityStatusCodes, FetchActivityTypes, Status } from '../models/index';
export interface CopyActivityLocationsRequest {
    activityLocationsId: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    copyActivityLocations: CopyActivityLocations;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface CopyActivityTypesRequest {
    activityTypesId: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    copyActivityTypes: CopyActivityTypes;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteActivityLocationsRequest {
    activityLocationsId: string;
    hotelIds: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteActivityStatusCodesRequest {
    activityStatusCodesId: string;
    hotelIds: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteActivityTypesRequest {
    activityTypesId: string;
    hotelIds: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetActivityLocationsRequest {
    hotelIds: Array<string>;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    criteriaCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetActivityStatusCodesRequest {
    hotelIds: Array<string>;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    criteriaCodes?: Array<string>;
    applicationCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetActivityTypesRequest {
    hotelIds: Array<string>;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    typeCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostActivityLocationsRequest {
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    createActivityLocations: CreateActivityLocations;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostActivityStatusCodesRequest {
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    createActivityStatusCodes: CreateActivityStatusCodes;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostActivityTypesRequest {
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    createActivityTypes: CreateActivityTypes;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutActivityLocationsRequest {
    activityLocationsId: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    changeActivityLocations: ChangeActivityLocations;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutActivityStatusCodesRequest {
    activityStatusCodesId: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    changeActivityStatusCodes: ChangeActivityStatusCodes;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutActivityTypesRequest {
    activityTypesId: string;
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    changeActivityTypes: ChangeActivityTypes;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class LeisureManagementConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to copy an Activity location for a property. <p><strong>OperationId:</strong>copyActivityLocations</p>
     * Copy Activity Locations
     */
    copyActivityLocationsRaw(requestParameters: CopyActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CopyActivityLocationsRS>>;
    /**
     * Use this API to copy an Activity location for a property. <p><strong>OperationId:</strong>copyActivityLocations</p>
     * Copy Activity Locations
     */
    copyActivityLocations(requestParameters: CopyActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CopyActivityLocationsRS>;
    /**
     * Copy existing Activity Types from source property to target properties. <p><strong>OperationId:</strong>copyActivityTypes</p>
     * Copy Activity Types
     */
    copyActivityTypesRaw(requestParameters: CopyActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CopyActivityTypesRS>>;
    /**
     * Copy existing Activity Types from source property to target properties. <p><strong>OperationId:</strong>copyActivityTypes</p>
     * Copy Activity Types
     */
    copyActivityTypes(requestParameters: CopyActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CopyActivityTypesRS>;
    /**
     * Use this API to delete an Activity location for a property. <p><strong>OperationId:</strong>deleteActivityLocations</p>
     * Remove Activity Locations
     */
    deleteActivityLocationsRaw(requestParameters: DeleteActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete an Activity location for a property. <p><strong>OperationId:</strong>deleteActivityLocations</p>
     * Remove Activity Locations
     */
    deleteActivityLocations(requestParameters: DeleteActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Remove an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>deleteActivityStatusCodes</p>
     * Remove Activity Status Code
     */
    deleteActivityStatusCodesRaw(requestParameters: DeleteActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Remove an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>deleteActivityStatusCodes</p>
     * Remove Activity Status Code
     */
    deleteActivityStatusCodes(requestParameters: DeleteActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Delete an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>deleteActivityTypes</p>
     * Remove Activity Types
     */
    deleteActivityTypesRaw(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Delete an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>deleteActivityTypes</p>
     * Remove Activity Types
     */
    deleteActivityTypes(requestParameters: DeleteActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to fetch Activity location codes for a property. <p><strong>OperationId:</strong>getActivityLocations</p>
     * Look up of Activity Locations
     */
    getActivityLocationsRaw(requestParameters: GetActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchActivityLocations>>;
    /**
     * Use this API to fetch Activity location codes for a property. <p><strong>OperationId:</strong>getActivityLocations</p>
     * Look up of Activity Locations
     */
    getActivityLocations(requestParameters: GetActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchActivityLocations>;
    /**
     * Fetch Activity Status Codes that are configured for a property.  <p><strong>OperationId:</strong>getActivityStatusCodes</p>
     * Get Activity Status Codes
     */
    getActivityStatusCodesRaw(requestParameters: GetActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchActivityStatusCodes>>;
    /**
     * Fetch Activity Status Codes that are configured for a property.  <p><strong>OperationId:</strong>getActivityStatusCodes</p>
     * Get Activity Status Codes
     */
    getActivityStatusCodes(requestParameters: GetActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchActivityStatusCodes>;
    /**
     * Retrieve Activity Types that are configured for a property.  Activity Types are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>getActivityTypes</p>
     * Fetch Activity Types
     */
    getActivityTypesRaw(requestParameters: GetActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FetchActivityTypes>>;
    /**
     * Retrieve Activity Types that are configured for a property.  Activity Types are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>getActivityTypes</p>
     * Fetch Activity Types
     */
    getActivityTypes(requestParameters: GetActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FetchActivityTypes>;
    /**
     * Use this API to create a new Activity location for a property. <p><strong>OperationId:</strong>postActivityLocations</p>
     * Create an Activity Locations
     */
    postActivityLocationsRaw(requestParameters: PostActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create a new Activity location for a property. <p><strong>OperationId:</strong>postActivityLocations</p>
     * Create an Activity Locations
     */
    postActivityLocations(requestParameters: PostActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Retrieve Activity Status Code that are configured for a property.  Activity Status Codes are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>postActivityStatusCodes</p>
     * Create Activity Status Code
     */
    postActivityStatusCodesRaw(requestParameters: PostActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Retrieve Activity Status Code that are configured for a property.  Activity Status Codes are typically used when an EAS (External Activities Scheduler system) interface is connected to OPERA.   <p><strong>OperationId:</strong>postActivityStatusCodes</p>
     * Create Activity Status Code
     */
    postActivityStatusCodes(requestParameters: PostActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Create a new Activity Type Code for a specific property. <p><strong>OperationId:</strong>postActivityTypes</p>
     * Create Activity Types
     */
    postActivityTypesRaw(requestParameters: PostActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Create a new Activity Type Code for a specific property. <p><strong>OperationId:</strong>postActivityTypes</p>
     * Create Activity Types
     */
    postActivityTypes(requestParameters: PostActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update an existing Activity location Code for a property. <p><strong>OperationId:</strong>putActivityLocations</p>
     * Change in Activity Locations
     */
    putActivityLocationsRaw(requestParameters: PutActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangeActivityLocationsRS>>;
    /**
     * Use this API to update an existing Activity location Code for a property. <p><strong>OperationId:</strong>putActivityLocations</p>
     * Change in Activity Locations
     */
    putActivityLocations(requestParameters: PutActivityLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangeActivityLocationsRS>;
    /**
     * Modify an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>putActivityStatusCodes</p>
     * Change Activity Status Code
     */
    putActivityStatusCodesRaw(requestParameters: PutActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangeActivityStatusCodesRS>>;
    /**
     * Modify an Activity Status Code that is configured for a property.  <p><strong>OperationId:</strong>putActivityStatusCodes</p>
     * Change Activity Status Code
     */
    putActivityStatusCodes(requestParameters: PutActivityStatusCodesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangeActivityStatusCodesRS>;
    /**
     * Modify an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
     * Change Activity Types
     */
    putActivityTypesRaw(requestParameters: PutActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChangeActivityTypesRS>>;
    /**
     * Modify an Activity Type Code that is configured for a property. <p><strong>OperationId:</strong>putActivityTypes</p>
     * Change Activity Types
     */
    putActivityTypes(requestParameters: PutActivityTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChangeActivityTypesRS>;
}
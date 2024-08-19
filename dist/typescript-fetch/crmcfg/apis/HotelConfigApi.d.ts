/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { AvailablePreferencesDetails, CommunicationTypeCriteria, CommunicationTypeToBeChanged, CommunicationTypesDetails, OperaVersion, Status } from '../models/index';
export interface ChangeCommunicationTypeRequest {
    communicationTypeCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    communicationTypeToBeChanged: CommunicationTypeToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteHotelConfigServicesCacheRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetAvailablePreferencesRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    isOnlyForReservation?: boolean;
    preferenceType?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetCommunicationTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    codes?: Array<string>;
    roles?: Set<GetCommunicationTypesRolesEnum>;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PingHotelConfigServicesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostCommunicationTypeRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    communicationTypeCriteria: CommunicationTypeCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface RemoveCommunicationTypeRequest {
    communicationTypeCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class HotelConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
     * Change a  communication type
     */
    changeCommunicationTypeRaw(requestParameters: ChangeCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
     * Change a  communication type
     */
    changeCommunicationType(requestParameters: ChangeCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Clear Hotel Configuration Cache <p><strong>OperationId:</strong>deleteHotelConfigServicesCache</p>
     *  clear cache
     */
    deleteHotelConfigServicesCacheRaw(requestParameters: DeleteHotelConfigServicesCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Clear Hotel Configuration Cache <p><strong>OperationId:</strong>deleteHotelConfigServicesCache</p>
     *  clear cache
     */
    deleteHotelConfigServicesCache(requestParameters: DeleteHotelConfigServicesCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to Fetch Available Preferences for a Property. The request can be filtered to search only for preferences marked for reservation. <p><strong>OperationId:</strong>getAvailablePreferences</p>
     * Get available Preferences
     */
    getAvailablePreferencesRaw(requestParameters: GetAvailablePreferencesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AvailablePreferencesDetails>>;
    /**
     * Use this API to Fetch Available Preferences for a Property. The request can be filtered to search only for preferences marked for reservation. <p><strong>OperationId:</strong>getAvailablePreferences</p>
     * Get available Preferences
     */
    getAvailablePreferences(requestParameters: GetAvailablePreferencesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AvailablePreferencesDetails>;
    /**
     * Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
     * Get communication types
     */
    getCommunicationTypesRaw(requestParameters: GetCommunicationTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommunicationTypesDetails>>;
    /**
     * Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
     * Get communication types
     */
    getCommunicationTypes(requestParameters: GetCommunicationTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommunicationTypesDetails>;
    /**
     * Ping Hotel Configuration Service <p><strong>OperationId:</strong>pingHotelConfigServices</p>
     *  ping
     */
    pingHotelConfigServicesRaw(requestParameters: PingHotelConfigServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OperaVersion>>;
    /**
     * Ping Hotel Configuration Service <p><strong>OperationId:</strong>pingHotelConfigServices</p>
     *  ping
     */
    pingHotelConfigServices(requestParameters: PingHotelConfigServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OperaVersion>;
    /**
     * Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
     * Create a  communication type
     */
    postCommunicationTypeRaw(requestParameters: PostCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
     * Create a  communication type
     */
    postCommunicationType(requestParameters: PostCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
     * Delete a communication type
     */
    removeCommunicationTypeRaw(requestParameters: RemoveCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
     * Delete a communication type
     */
    removeCommunicationType(requestParameters: RemoveCommunicationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
}
/**
 * @export
 */
export declare const GetCommunicationTypesRolesEnum: {
    readonly Email: "Email";
    readonly Fax: "Fax";
    readonly EmailForRequest: "EmailForRequest";
    readonly Webpage: "Webpage";
    readonly Phone: "Phone";
};
export type GetCommunicationTypesRolesEnum = typeof GetCommunicationTypesRolesEnum[keyof typeof GetCommunicationTypesRolesEnum];

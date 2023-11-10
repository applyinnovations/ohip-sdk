/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { BedTypeRequestsDetails, BedTypesDetails, ChangeRoomMoveReasonsRequest, FloorTypesDetails, PostBedTypeRequestsRequest, PostBedTypesRequest, PostFloorTypesRequest, PostRoomMoveReasonsRequest, PostRoomPotentialsRequest, PostRoomPreferencePrioritiesRequest, PostSmokingTypesRequest, PutBedTypeRequestsRequest, PutBedTypesRequest, PutFloorTypesRequest, PutRoomPotentialsRequest, PutRoomPreferencePrioritiesRequest, PutSmokingTypesRequest, RoomMoveReasonsDetails, RoomPotentialsDetails, RoomPreferencePrioritiesDetails, SmokingTypesDetails, Status } from '../models';
export interface ChangeRoomMoveReasonsOperationRequest {
    reasonCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomMoveReasonsToBeChanged?: ChangeRoomMoveReasonsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteBedTypeRequestsRequest {
    bedTypeRequestsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypeRequestsCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteBedTypesRequest {
    bedTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypeCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteFloorTypesRequest {
    floorTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    floorTypesCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteRoomPotentialsRequest {
    roomPotentialsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPotentialsCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteRoomPreferencePrioritiesRequest {
    roomPreferencePrioritiesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPreferencePrioritiesCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteSmokingTypesRequest {
    smokingTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    smokingTypesCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetBedTypeRequestsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetBedTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetFloorTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRoomMoveReasonsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRoomPotentialsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRoomPreferencePrioritiesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetSmokingTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostBedTypeRequestsOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypeRequestsCriteria?: PostBedTypeRequestsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostBedTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypesCriteria?: PostBedTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostFloorTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    floorTypesCriteria?: PostFloorTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRoomMoveReasonsOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomMoveReasonsCriteria?: PostRoomMoveReasonsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRoomPotentialsOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPotentialsCriteria?: PostRoomPotentialsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRoomPreferencePrioritiesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPreferencePrioritiesCriteria?: PostRoomPreferencePrioritiesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostSmokingTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    smokingTypesCriteria?: PostSmokingTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutBedTypeRequestsOperationRequest {
    bedTypeRequestsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypeRequestsToBeChanged?: PutBedTypeRequestsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutBedTypesOperationRequest {
    bedTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    bedTypesToBeChanged?: PutBedTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutFloorTypesOperationRequest {
    floorTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    floorTypesToBeChanged?: PutFloorTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutRoomPotentialsOperationRequest {
    roomPotentialsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPotentialsToBeChanged?: PutRoomPotentialsRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutRoomPreferencePrioritiesOperationRequest {
    roomPreferencePrioritiesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomPreferencePrioritiesToBeChanged?: PutRoomPreferencePrioritiesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutSmokingTypesOperationRequest {
    smokingTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    smokingTypesToBeChanged?: PutSmokingTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface RemoveRoomMoveReasonsRequest {
    reasonCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    roomMoveReasonsCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ChainConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to update room move reasons based on reasonCode, roomMoveReasonsToBeChanged. Room move reasons are used when moving a guest from one room in a property to another room in the same property after the reservation has been checked in. <p><strong>OperationId:</strong>changeRoomMoveReasons</p>
     * Change Room Move Reasons
     */
    changeRoomMoveReasonsRaw(requestParameters: ChangeRoomMoveReasonsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update room move reasons based on reasonCode, roomMoveReasonsToBeChanged. Room move reasons are used when moving a guest from one room in a property to another room in the same property after the reservation has been checked in. <p><strong>OperationId:</strong>changeRoomMoveReasons</p>
     * Change Room Move Reasons
     */
    changeRoomMoveReasons(requestParameters: ChangeRoomMoveReasonsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete bed type requests based on the bedTypeRequestsId, bedTypeRequestsCodes. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>deleteBedTypeRequests</p>
     * Delete Bed Type Requests
     */
    deleteBedTypeRequestsRaw(requestParameters: DeleteBedTypeRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete bed type requests based on the bedTypeRequestsId, bedTypeRequestsCodes. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>deleteBedTypeRequests</p>
     * Delete Bed Type Requests
     */
    deleteBedTypeRequests(requestParameters: DeleteBedTypeRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete an existing Bed type. <p><strong>OperationId:</strong>deleteBedTypes</p>
     * Delete an existing Bed type
     */
    deleteBedTypesRaw(requestParameters: DeleteBedTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete an existing Bed type. <p><strong>OperationId:</strong>deleteBedTypes</p>
     * Delete an existing Bed type
     */
    deleteBedTypes(requestParameters: DeleteBedTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete floor types based on floorTypesId, floorTypesCodes. <p><strong>OperationId:</strong>deleteFloorTypes</p>
     * Delete Floor Types
     */
    deleteFloorTypesRaw(requestParameters: DeleteFloorTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete floor types based on floorTypesId, floorTypesCodes. <p><strong>OperationId:</strong>deleteFloorTypes</p>
     * Delete Floor Types
     */
    deleteFloorTypes(requestParameters: DeleteFloorTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete Room Potentials. <p><strong>OperationId:</strong>deleteRoomPotentials</p>
     * Delete Room Potentials
     */
    deleteRoomPotentialsRaw(requestParameters: DeleteRoomPotentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Room Potentials. <p><strong>OperationId:</strong>deleteRoomPotentials</p>
     * Delete Room Potentials
     */
    deleteRoomPotentials(requestParameters: DeleteRoomPotentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete Room Preference Priorities. <p><strong>OperationId:</strong>deleteRoomPreferencePriorities</p>
     * Delete Room Preference Priorities
     */
    deleteRoomPreferencePrioritiesRaw(requestParameters: DeleteRoomPreferencePrioritiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Room Preference Priorities. <p><strong>OperationId:</strong>deleteRoomPreferencePriorities</p>
     * Delete Room Preference Priorities
     */
    deleteRoomPreferencePriorities(requestParameters: DeleteRoomPreferencePrioritiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete Smoking Types. <p><strong>OperationId:</strong>deleteSmokingTypes</p>
     * Delete Smoking Types
     */
    deleteSmokingTypesRaw(requestParameters: DeleteSmokingTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Smoking Types. <p><strong>OperationId:</strong>deleteSmokingTypes</p>
     * Delete Smoking Types
     */
    deleteSmokingTypes(requestParameters: DeleteSmokingTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to return bed type requests based on search criteria such as fetchInactive, codes, wildCard, description.  <p> Bed types are referenced in room type configuration to identify the bed configuration in the room. <p>  <p><strong>OperationId:</strong>getBedTypeRequests</p>
     * Get Bed Type Requests
     */
    getBedTypeRequestsRaw(requestParameters: GetBedTypeRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BedTypeRequestsDetails>>;
    /**
     * Use this API to return bed type requests based on search criteria such as fetchInactive, codes, wildCard, description.  <p> Bed types are referenced in room type configuration to identify the bed configuration in the room. <p>  <p><strong>OperationId:</strong>getBedTypeRequests</p>
     * Get Bed Type Requests
     */
    getBedTypeRequests(requestParameters: GetBedTypeRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BedTypeRequestsDetails>;
    /**
     * Use this API to return bed types based on search criteria such as fetchInactive, codes, wildCard, description.<p><strong>OperationId:</strong>getBedTypes</p>
     * Get bed types
     */
    getBedTypesRaw(requestParameters: GetBedTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BedTypesDetails>>;
    /**
     * Use this API to return bed types based on search criteria such as fetchInactive, codes, wildCard, description.<p><strong>OperationId:</strong>getBedTypes</p>
     * Get bed types
     */
    getBedTypes(requestParameters: GetBedTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BedTypesDetails>;
    /**
     * Use this API to return floor types based on search criteria such as fetchInactive, codes, wildCard, description. <p><strong>OperationId:</strong>getFloorTypes</p>
     * Get Floor Types
     */
    getFloorTypesRaw(requestParameters: GetFloorTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FloorTypesDetails>>;
    /**
     * Use this API to return floor types based on search criteria such as fetchInactive, codes, wildCard, description. <p><strong>OperationId:</strong>getFloorTypes</p>
     * Get Floor Types
     */
    getFloorTypes(requestParameters: GetFloorTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FloorTypesDetails>;
    /**
     * Use this API to get Room Move Reasons. <p><strong>OperationId:</strong>getRoomMoveReasons</p>
     * Get Room Move Reasons
     */
    getRoomMoveReasonsRaw(requestParameters: GetRoomMoveReasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoomMoveReasonsDetails>>;
    /**
     * Use this API to get Room Move Reasons. <p><strong>OperationId:</strong>getRoomMoveReasons</p>
     * Get Room Move Reasons
     */
    getRoomMoveReasons(requestParameters: GetRoomMoveReasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoomMoveReasonsDetails>;
    /**
     * Use this API to get Room Potentials. <p><strong>OperationId:</strong>getRoomPotentials</p>
     * Get Room Potentials
     */
    getRoomPotentialsRaw(requestParameters: GetRoomPotentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoomPotentialsDetails>>;
    /**
     * Use this API to get Room Potentials. <p><strong>OperationId:</strong>getRoomPotentials</p>
     * Get Room Potentials
     */
    getRoomPotentials(requestParameters: GetRoomPotentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoomPotentialsDetails>;
    /**
     * Use this API to get Room Preference Priorities. <p><strong>OperationId:</strong>getRoomPreferencePriorities</p>
     * Get Room Preference Priorities
     */
    getRoomPreferencePrioritiesRaw(requestParameters: GetRoomPreferencePrioritiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoomPreferencePrioritiesDetails>>;
    /**
     * Use this API to get Room Preference Priorities. <p><strong>OperationId:</strong>getRoomPreferencePriorities</p>
     * Get Room Preference Priorities
     */
    getRoomPreferencePriorities(requestParameters: GetRoomPreferencePrioritiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoomPreferencePrioritiesDetails>;
    /**
     * Use this API to get Smoking Types. <p><strong>OperationId:</strong>getSmokingTypes</p>
     * Get Smoking Types
     */
    getSmokingTypesRaw(requestParameters: GetSmokingTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SmokingTypesDetails>>;
    /**
     * Use this API to get Smoking Types. <p><strong>OperationId:</strong>getSmokingTypes</p>
     * Get Smoking Types
     */
    getSmokingTypes(requestParameters: GetSmokingTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SmokingTypesDetails>;
    /**
     * Use this API to create bed type requests. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>postBedTypeRequests</p>
     * Create Bed Type Requests
     */
    postBedTypeRequestsRaw(requestParameters: PostBedTypeRequestsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create bed type requests. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>postBedTypeRequests</p>
     * Create Bed Type Requests
     */
    postBedTypeRequests(requestParameters: PostBedTypeRequestsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create a new Bed type. <p><strong>OperationId:</strong>postBedTypes</p>
     * Create a new Bed type
     */
    postBedTypesRaw(requestParameters: PostBedTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create a new Bed type. <p><strong>OperationId:</strong>postBedTypes</p>
     * Create a new Bed type
     */
    postBedTypes(requestParameters: PostBedTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create floor types. <p><strong>OperationId:</strong>postFloorTypes</p>
     * Create Floor Types
     */
    postFloorTypesRaw(requestParameters: PostFloorTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create floor types. <p><strong>OperationId:</strong>postFloorTypes</p>
     * Create Floor Types
     */
    postFloorTypes(requestParameters: PostFloorTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Room Move Reasons. <p><strong>OperationId:</strong>postRoomMoveReasons</p>
     * Create Room Move Reasons
     */
    postRoomMoveReasonsRaw(requestParameters: PostRoomMoveReasonsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Room Move Reasons. <p><strong>OperationId:</strong>postRoomMoveReasons</p>
     * Create Room Move Reasons
     */
    postRoomMoveReasons(requestParameters: PostRoomMoveReasonsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Room Potentials. <p><strong>OperationId:</strong>postRoomPotentials</p>
     * Create Room Potentials
     */
    postRoomPotentialsRaw(requestParameters: PostRoomPotentialsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Room Potentials. <p><strong>OperationId:</strong>postRoomPotentials</p>
     * Create Room Potentials
     */
    postRoomPotentials(requestParameters: PostRoomPotentialsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Room Preference Priorities. <p><strong>OperationId:</strong>postRoomPreferencePriorities</p>
     * Create Room Preference Priorities
     */
    postRoomPreferencePrioritiesRaw(requestParameters: PostRoomPreferencePrioritiesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Room Preference Priorities. <p><strong>OperationId:</strong>postRoomPreferencePriorities</p>
     * Create Room Preference Priorities
     */
    postRoomPreferencePriorities(requestParameters: PostRoomPreferencePrioritiesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Smoking Types. <p><strong>OperationId:</strong>postSmokingTypes</p>
     * Create Smoking Types
     */
    postSmokingTypesRaw(requestParameters: PostSmokingTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Smoking Types. <p><strong>OperationId:</strong>postSmokingTypes</p>
     * Create Smoking Types
     */
    postSmokingTypes(requestParameters: PostSmokingTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update bed type requests based on the bedTypeRequestsId, bedTypeRequestsToBeChanged. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>putBedTypeRequests</p>
     * Change Bed Type Requests
     */
    putBedTypeRequestsRaw(requestParameters: PutBedTypeRequestsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update bed type requests based on the bedTypeRequestsId, bedTypeRequestsToBeChanged. <p>Bed types are referenced in room type configuration to identify the bed configuration in the room.</p>  <p><strong>OperationId:</strong>putBedTypeRequests</p>
     * Change Bed Type Requests
     */
    putBedTypeRequests(requestParameters: PutBedTypeRequestsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update bed type based on the bedTypesId, bedTypesToBeChanged. Bed types are referenced in room type configuration to identify the bed configuration in the room. <p><strong>OperationId:</strong>putBedTypes</p>
     * Change an existing Bed type
     */
    putBedTypesRaw(requestParameters: PutBedTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update bed type based on the bedTypesId, bedTypesToBeChanged. Bed types are referenced in room type configuration to identify the bed configuration in the room. <p><strong>OperationId:</strong>putBedTypes</p>
     * Change an existing Bed type
     */
    putBedTypes(requestParameters: PutBedTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Floor Types. <p><strong>OperationId:</strong>putFloorTypes</p>
     * Change Floor Types
     */
    putFloorTypesRaw(requestParameters: PutFloorTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Floor Types. <p><strong>OperationId:</strong>putFloorTypes</p>
     * Change Floor Types
     */
    putFloorTypes(requestParameters: PutFloorTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Room Potentials. <p><strong>OperationId:</strong>putRoomPotentials</p>
     * Change Room Potentials
     */
    putRoomPotentialsRaw(requestParameters: PutRoomPotentialsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Room Potentials. <p><strong>OperationId:</strong>putRoomPotentials</p>
     * Change Room Potentials
     */
    putRoomPotentials(requestParameters: PutRoomPotentialsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Room Preference Priorities. <p><strong>OperationId:</strong>putRoomPreferencePriorities</p>
     * Change Room Preference Priorities
     */
    putRoomPreferencePrioritiesRaw(requestParameters: PutRoomPreferencePrioritiesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Room Preference Priorities. <p><strong>OperationId:</strong>putRoomPreferencePriorities</p>
     * Change Room Preference Priorities
     */
    putRoomPreferencePriorities(requestParameters: PutRoomPreferencePrioritiesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Smoking Types. <p><strong>OperationId:</strong>putSmokingTypes</p>
     * Change Smoking Types
     */
    putSmokingTypesRaw(requestParameters: PutSmokingTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Smoking Types. <p><strong>OperationId:</strong>putSmokingTypes</p>
     * Change Smoking Types
     */
    putSmokingTypes(requestParameters: PutSmokingTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete room move reasons based on reasonCode, roomMoveReasonsCodes. Room move reasons are used when moving a guest from one room in a property to another room in the same property after the reservation has been checked in. <p><strong>OperationId:</strong>removeRoomMoveReasons</p>
     * Delete Room Move Reasons
     */
    removeRoomMoveReasonsRaw(requestParameters: RemoveRoomMoveReasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete room move reasons based on reasonCode, roomMoveReasonsCodes. Room move reasons are used when moving a guest from one room in a property to another room in the same property after the reservation has been checked in. <p><strong>OperationId:</strong>removeRoomMoveReasons</p>
     * Delete Room Move Reasons
     */
    removeRoomMoveReasons(requestParameters: RemoveRoomMoveReasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
}

/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { MultiRoomRateAvailabilityResponseType, PostMultiRoomRateAvailabilityRequest, SearchPropertyRequestType, SearchPropertyResponseType } from '../models/index';
export interface PostMinimumRateAvailabilityRequest {
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
    body?: SearchPropertyRequestType;
}
export interface PostMultiRoomRateAvailabilityOperationRequest {
    authorization: string;
    xAppKey: string;
    xHotelid: string;
    request: PostMultiRoomRateAvailabilityRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class AvailabilityApi extends runtime.BaseAPI {
    /**
     * List the availability status and rate range at multiple properties for given list of properties and multiple combinations of rate plan codes and negotiated rates. <p><strong>OperationId:</strong>postMinimumRateAvailability</p>
     * Advanced Property Search with minimum rates.
     */
    postMinimumRateAvailabilityRaw(requestParameters: PostMinimumRateAvailabilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchPropertyResponseType>>;
    /**
     * List the availability status and rate range at multiple properties for given list of properties and multiple combinations of rate plan codes and negotiated rates. <p><strong>OperationId:</strong>postMinimumRateAvailability</p>
     * Advanced Property Search with minimum rates.
     */
    postMinimumRateAvailability(requestParameters: PostMinimumRateAvailabilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchPropertyResponseType>;
    /**
     * List availability across requested properties matching given rooms with quantity, occupancy and rates.
     * Advanced multi property search with multiple room and rates.
     */
    postMultiRoomRateAvailabilityRaw(requestParameters: PostMultiRoomRateAvailabilityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiRoomRateAvailabilityResponseType>>;
    /**
     * List availability across requested properties matching given rooms with quantity, occupancy and rates.
     * Advanced multi property search with multiple room and rates.
     */
    postMultiRoomRateAvailability(requestParameters: PostMultiRoomRateAvailabilityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiRoomRateAvailabilityResponseType>;
}
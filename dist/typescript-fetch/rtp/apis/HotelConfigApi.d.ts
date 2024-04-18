/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { RateCategoryCriteria, RateCategoryDetails, RateCategoryToBeChanged, RateClassCriteria, RateClassDetails, RateClassToBeChanged, RateSeasonsCriteria, RateSeasonsDetails, RateSeasonsToBeChanged, Status, TemplateRateCategoryCriteria, TemplateRateCategoryDetails, TemplateRateCategoryToBeChanged, TemplateRateClassCriteria, TemplateRateClassDetails, TemplateRateClassToBeChanged, TemplateRateSeasonsCriteria, TemplateRateSeasonsDetails, TemplateRateSeasonsToBeChanged } from '../models/index';
export interface ChangeRateCategoryRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateCategoryToBeChanged: RateCategoryToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface ChangeRateClassRequest {
    rateClassCode: string;
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateClassToBeChanged: RateClassToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface ChangeRateSeasonsRequest {
    seasonCode: string;
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateSeasonsToBeChanged: RateSeasonsToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface ChangeTemplateRateCategoryRequest {
    rateCategoryCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateCategoryToBeChanged: TemplateRateCategoryToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface ChangeTemplateRateClassRequest {
    rateClassCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateClassToBeChanged: TemplateRateClassToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface ChangeTemplateRateSeasonsRequest {
    seasonCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateSeasonsToBeChanged: TemplateRateSeasonsToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteRateCategoryRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateCategory?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteRateClassRequest {
    rateClassCode: string;
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteTemplateRateCategoryRequest {
    rateCategoryCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface DeleteTemplateRateClassRequest {
    rateClassCode: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRateCategoryRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelIds?: Array<string>;
    limit?: number;
    offset?: number;
    rateCategoryListCodes?: Array<string>;
    rateCategoryDescription?: string;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRateClassRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelIds?: Array<string>;
    limit?: number;
    offset?: number;
    rateClassListCodes?: Array<string>;
    description?: string;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetRateSeasonsRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    hotelIds?: Array<string>;
    limit?: number;
    offset?: number;
    seasonsCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetTemplateRateCategoryRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateCategoryListCodes?: Array<string>;
    rateCategoryDescription?: string;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetTemplateRateClassRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    limit?: number;
    offset?: number;
    hotelIds?: Array<string>;
    rateClassListCodes?: Array<string>;
    description?: string;
    includeInactive?: boolean;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetTemplateRateSeasonsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    seasonCodes?: Array<string>;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRateCategoryRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateCategoryCriteria: RateCategoryCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRateClassRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateClassCriteria: RateClassCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostRateSeasonsRequest {
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    rateSeasonsCriteria: RateSeasonsCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostTemplateRateCategoryRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateCategoryCriteria: TemplateRateCategoryCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostTemplateRateClassRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateClassCriteria: TemplateRateClassCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PostTemplateRateSeasonsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateRateSeasonsCriteria: TemplateRateSeasonsCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface RemoveRateSeasonsRequest {
    seasonCode: string;
    hotelId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface RemoveTemplateRateSeasonsRequest {
    seasonCode: string;
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
     * This API can be used to Modify a Rate Category e.g.  RACK. Only one rate category can be modified at a time. <p><strong>OperationId:</strong>changeRateCategory</p>
     * Change Rate Category
     */
    changeRateCategoryRaw(requestParameters: ChangeRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API can be used to Modify a Rate Category e.g.  RACK. Only one rate category can be modified at a time. <p><strong>OperationId:</strong>changeRateCategory</p>
     * Change Rate Category
     */
    changeRateCategory(requestParameters: ChangeRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to updates to rate class. <p><strong>OperationId:</strong>changeRateClass</p>
     * Changes to rate class
     */
    changeRateClassRaw(requestParameters: ChangeRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to updates to rate class. <p><strong>OperationId:</strong>changeRateClass</p>
     * Changes to rate class
     */
    changeRateClass(requestParameters: ChangeRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Hotel Rate Seasons. <p><strong>OperationId:</strong>changeRateSeasons</p>
     * Change Hotel Rate Seasons
     */
    changeRateSeasonsRaw(requestParameters: ChangeRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Hotel Rate Seasons. <p><strong>OperationId:</strong>changeRateSeasons</p>
     * Change Hotel Rate Seasons
     */
    changeRateSeasons(requestParameters: ChangeRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to Modify a Template Rate Category. Only one template can be updated at a time. <p><strong>OperationId:</strong>changeTemplateRateCategory</p>
     * Change Template Rate Category
     */
    changeTemplateRateCategoryRaw(requestParameters: ChangeTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to Modify a Template Rate Category. Only one template can be updated at a time. <p><strong>OperationId:</strong>changeTemplateRateCategory</p>
     * Change Template Rate Category
     */
    changeTemplateRateCategory(requestParameters: ChangeTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to modify template rate class. <p><strong>OperationId:</strong>changeTemplateRateClass</p>
     * Change template rate class
     */
    changeTemplateRateClassRaw(requestParameters: ChangeTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to modify template rate class. <p><strong>OperationId:</strong>changeTemplateRateClass</p>
     * Change template rate class
     */
    changeTemplateRateClass(requestParameters: ChangeTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Template Rate Seasons. <p><strong>OperationId:</strong>changeTemplateRateSeasons</p>
     * Change Template Rate Seasons
     */
    changeTemplateRateSeasonsRaw(requestParameters: ChangeTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Template Rate Seasons. <p><strong>OperationId:</strong>changeTemplateRateSeasons</p>
     * Change Template Rate Seasons
     */
    changeTemplateRateSeasons(requestParameters: ChangeTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this  delete a Rate Category e.g. RACK. <p><strong>OperationId:</strong>deleteRateCategory</p>
     * Delete Rate Category
     */
    deleteRateCategoryRaw(requestParameters: DeleteRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this  delete a Rate Category e.g. RACK. <p><strong>OperationId:</strong>deleteRateCategory</p>
     * Delete Rate Category
     */
    deleteRateCategory(requestParameters: DeleteRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete rate class. <p><strong>OperationId:</strong>deleteRateClass</p>
     * Delete rate class
     */
    deleteRateClassRaw(requestParameters: DeleteRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete rate class. <p><strong>OperationId:</strong>deleteRateClass</p>
     * Delete rate class
     */
    deleteRateClass(requestParameters: DeleteRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete a Template Rate Category. Only one rate category template can be sent as part of the request. <p><strong>OperationId:</strong>deleteTemplateRateCategory</p>
     * Delete a Template Rate Category
     */
    deleteTemplateRateCategoryRaw(requestParameters: DeleteTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete a Template Rate Category. Only one rate category template can be sent as part of the request. <p><strong>OperationId:</strong>deleteTemplateRateCategory</p>
     * Delete a Template Rate Category
     */
    deleteTemplateRateCategory(requestParameters: DeleteTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete template rate class. <p><strong>OperationId:</strong>deleteTemplateRateClass</p>
     * Delete template rate class
     */
    deleteTemplateRateClassRaw(requestParameters: DeleteTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete template rate class. <p><strong>OperationId:</strong>deleteTemplateRateClass</p>
     * Delete template rate class
     */
    deleteTemplateRateClass(requestParameters: DeleteTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to search for Rate Categories. The search criteria can include a Rate category, the list of hotelIds and the description of the Rate Category.<p><strong>OperationId:</strong>getRateCategory</p>
     * Get rate category
     */
    getRateCategoryRaw(requestParameters: GetRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RateCategoryDetails>>;
    /**
     * Use this API to search for Rate Categories. The search criteria can include a Rate category, the list of hotelIds and the description of the Rate Category.<p><strong>OperationId:</strong>getRateCategory</p>
     * Get rate category
     */
    getRateCategory(requestParameters: GetRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RateCategoryDetails>;
    /**
     * Use this API to get rate classes. <p><strong>OperationId:</strong>getRateClass</p>
     * Get rate classes
     */
    getRateClassRaw(requestParameters: GetRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RateClassDetails>>;
    /**
     * Use this API to get rate classes. <p><strong>OperationId:</strong>getRateClass</p>
     * Get rate classes
     */
    getRateClass(requestParameters: GetRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RateClassDetails>;
    /**
     * Use this API to get Hotel Rate Seasons. <p><strong>OperationId:</strong>getRateSeasons</p>
     * Get Hotel Rate Seasons
     */
    getRateSeasonsRaw(requestParameters: GetRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RateSeasonsDetails>>;
    /**
     * Use this API to get Hotel Rate Seasons. <p><strong>OperationId:</strong>getRateSeasons</p>
     * Get Hotel Rate Seasons
     */
    getRateSeasons(requestParameters: GetRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RateSeasonsDetails>;
    /**
     * Use this API to fetch a Template Rate Category. The search criteria can include rate category and the property code. <p><strong>OperationId:</strong>getTemplateRateCategory</p>
     * Get Template Rate Categories
     */
    getTemplateRateCategoryRaw(requestParameters: GetTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateRateCategoryDetails>>;
    /**
     * Use this API to fetch a Template Rate Category. The search criteria can include rate category and the property code. <p><strong>OperationId:</strong>getTemplateRateCategory</p>
     * Get Template Rate Categories
     */
    getTemplateRateCategory(requestParameters: GetTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateRateCategoryDetails>;
    /**
     * Use this API to get template rate classes. <p><strong>OperationId:</strong>getTemplateRateClass</p>
     * Get template rate classes
     */
    getTemplateRateClassRaw(requestParameters: GetTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateRateClassDetails>>;
    /**
     * Use this API to get template rate classes. <p><strong>OperationId:</strong>getTemplateRateClass</p>
     * Get template rate classes
     */
    getTemplateRateClass(requestParameters: GetTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateRateClassDetails>;
    /**
     * Use this API to get Template Rate Seasons. <p><strong>OperationId:</strong>getTemplateRateSeasons</p>
     * Get Template Rate Seasons
     */
    getTemplateRateSeasonsRaw(requestParameters: GetTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateRateSeasonsDetails>>;
    /**
     * Use this API to get Template Rate Seasons. <p><strong>OperationId:</strong>getTemplateRateSeasons</p>
     * Get Template Rate Seasons
     */
    getTemplateRateSeasons(requestParameters: GetTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateRateSeasonsDetails>;
    /**
     * This API can be used to Use this API to create a Rate Category e.g.  RACK. Only one rate category can be Use this API to created at a time. <p><strong>OperationId:</strong>postRateCategory</p>
     * Create Rate Category
     */
    postRateCategoryRaw(requestParameters: PostRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * This API can be used to Use this API to create a Rate Category e.g.  RACK. Only one rate category can be Use this API to created at a time. <p><strong>OperationId:</strong>postRateCategory</p>
     * Create Rate Category
     */
    postRateCategory(requestParameters: PostRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create new rate class. <p><strong>OperationId:</strong>postRateClass</p>
     * Create new rate class
     */
    postRateClassRaw(requestParameters: PostRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create new rate class. <p><strong>OperationId:</strong>postRateClass</p>
     * Create new rate class
     */
    postRateClass(requestParameters: PostRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Hotel Rate Seasons. <p><strong>OperationId:</strong>postRateSeasons</p>
     * Create Hotel Rate Seasons
     */
    postRateSeasonsRaw(requestParameters: PostRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Hotel Rate Seasons. <p><strong>OperationId:</strong>postRateSeasons</p>
     * Create Hotel Rate Seasons
     */
    postRateSeasons(requestParameters: PostRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create a new Template Rate Category. <p><strong>OperationId:</strong>postTemplateRateCategory</p>
     * Create a Template Rate Category
     */
    postTemplateRateCategoryRaw(requestParameters: PostTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create a new Template Rate Category. <p><strong>OperationId:</strong>postTemplateRateCategory</p>
     * Create a Template Rate Category
     */
    postTemplateRateCategory(requestParameters: PostTemplateRateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create new template rate class. <p><strong>OperationId:</strong>postTemplateRateClass</p>
     * Create new template rate class
     */
    postTemplateRateClassRaw(requestParameters: PostTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create new template rate class. <p><strong>OperationId:</strong>postTemplateRateClass</p>
     * Create new template rate class
     */
    postTemplateRateClass(requestParameters: PostTemplateRateClassRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to create Template Rate Seasons. <p><strong>OperationId:</strong>postTemplateRateSeasons</p>
     * Create Template Rate Seasons
     */
    postTemplateRateSeasonsRaw(requestParameters: PostTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Template Rate Seasons. <p><strong>OperationId:</strong>postTemplateRateSeasons</p>
     * Create Template Rate Seasons
     */
    postTemplateRateSeasons(requestParameters: PostTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete Hotel Rate Seasons. <p><strong>OperationId:</strong>removeRateSeasons</p>
     * Delete Hotel Rate Seasons
     */
    removeRateSeasonsRaw(requestParameters: RemoveRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Hotel Rate Seasons. <p><strong>OperationId:</strong>removeRateSeasons</p>
     * Delete Hotel Rate Seasons
     */
    removeRateSeasons(requestParameters: RemoveRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete Template Rate Seasons. <p><strong>OperationId:</strong>removeTemplateRateSeasons</p>
     * Delete Template Rate Seasons
     */
    removeTemplateRateSeasonsRaw(requestParameters: RemoveTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Template Rate Seasons. <p><strong>OperationId:</strong>removeTemplateRateSeasons</p>
     * Delete Template Rate Seasons
     */
    removeTemplateRateSeasons(requestParameters: RemoveTemplateRateSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
}
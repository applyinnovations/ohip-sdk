/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { DisplaySetsCriteria, DisplaySetsDetails, DisplaySetsToBeChanged, Status } from '../models/index';
export interface DeleteDisplaySetsRequest {
    displaySetsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetDisplaySetsRequest {
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
export interface PostDisplaySetsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    displaySetsCriteria?: DisplaySetsCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface PutDisplaySetsRequest {
    displaySetsId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    displaySetsToBeChanged?: DisplaySetsToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ChainConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to delete Display Sets. <p><strong>OperationId:</strong>deleteDisplaySets</p>
     * Delete Display Sets
     */
    deleteDisplaySetsRaw(requestParameters: DeleteDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete Display Sets. <p><strong>OperationId:</strong>deleteDisplaySets</p>
     * Delete Display Sets
     */
    deleteDisplaySets(requestParameters: DeleteDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to get Display Sets. <p><strong>OperationId:</strong>getDisplaySets</p>
     * Get Display Sets
     */
    getDisplaySetsRaw(requestParameters: GetDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DisplaySetsDetails>>;
    /**
     * Use this API to get Display Sets. <p><strong>OperationId:</strong>getDisplaySets</p>
     * Get Display Sets
     */
    getDisplaySets(requestParameters: GetDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DisplaySetsDetails>;
    /**
     * Use this API to create Display Sets. <p><strong>OperationId:</strong>postDisplaySets</p>
     * Create Display Sets
     */
    postDisplaySetsRaw(requestParameters: PostDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create Display Sets. <p><strong>OperationId:</strong>postDisplaySets</p>
     * Create Display Sets
     */
    postDisplaySets(requestParameters: PostDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to update Display Sets. <p><strong>OperationId:</strong>putDisplaySets</p>
     * Change Display Sets
     */
    putDisplaySetsRaw(requestParameters: PutDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update Display Sets. <p><strong>OperationId:</strong>putDisplaySets</p>
     * Change Display Sets
     */
    putDisplaySets(requestParameters: PutDisplaySetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
}

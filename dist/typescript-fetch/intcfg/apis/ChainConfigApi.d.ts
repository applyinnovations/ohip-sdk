/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { Status, TemplateDeviceLocationsCriteria, TemplateDeviceLocationsDetails, TemplateDeviceLocationsToBeChanged } from '../models/index';
export interface ChangeTemplateDeviceLocationsRequest {
    deviceLocationId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateDeviceLocationsToBeChanged: TemplateDeviceLocationsToBeChanged;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface GetTemplateDeviceLocationsRequest {
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
export interface PostTemplateDeviceLocationsRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    templateDeviceLocationsCriteria: TemplateDeviceLocationsCriteria;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
export interface RemoveTemplateDeviceLocationsRequest {
    deviceLocationId: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ChainConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to update the template device locations. <p><strong>OperationId:</strong>changeTemplateDeviceLocations</p>
     * Change the template device locations
     */
    changeTemplateDeviceLocationsRaw(requestParameters: ChangeTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to update the template device locations. <p><strong>OperationId:</strong>changeTemplateDeviceLocations</p>
     * Change the template device locations
     */
    changeTemplateDeviceLocations(requestParameters: ChangeTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to get the template device locations. <p><strong>OperationId:</strong>getTemplateDeviceLocations</p>
     * Get the template device locations
     */
    getTemplateDeviceLocationsRaw(requestParameters: GetTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TemplateDeviceLocationsDetails>>;
    /**
     * Use this API to get the template device locations. <p><strong>OperationId:</strong>getTemplateDeviceLocations</p>
     * Get the template device locations
     */
    getTemplateDeviceLocations(requestParameters: GetTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TemplateDeviceLocationsDetails>;
    /**
     * Use this API to create the template device locations. <p><strong>OperationId:</strong>postTemplateDeviceLocations</p>
     * Create the template device locations
     */
    postTemplateDeviceLocationsRaw(requestParameters: PostTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to create the template device locations. <p><strong>OperationId:</strong>postTemplateDeviceLocations</p>
     * Create the template device locations
     */
    postTemplateDeviceLocations(requestParameters: PostTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
    /**
     * Use this API to delete the template device locations. <p><strong>OperationId:</strong>removeTemplateDeviceLocations</p>
     * Delete the template device locations
     */
    removeTemplateDeviceLocationsRaw(requestParameters: RemoveTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>>;
    /**
     * Use this API to delete the template device locations. <p><strong>OperationId:</strong>removeTemplateDeviceLocations</p>
     * Delete the template device locations
     */
    removeTemplateDeviceLocations(requestParameters: RemoveTemplateDeviceLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status>;
}

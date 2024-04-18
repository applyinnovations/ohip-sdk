/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { TemplateHotelDetailType } from './TemplateHotelDetailType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching hotel details at the template level.
 * @export
 * @interface TemplateHotelDetailsDetails
 */
export interface TemplateHotelDetailsDetails {
    /**
     * Collection of template level hotel details.
     * @type {Array<TemplateHotelDetailType>}
     * @memberof TemplateHotelDetailsDetails
     */
    templateHotelDetails?: Array<TemplateHotelDetailType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateHotelDetailsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateHotelDetailsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateHotelDetailsDetails interface.
 */
export declare function instanceOfTemplateHotelDetailsDetails(value: object): boolean;
export declare function TemplateHotelDetailsDetailsFromJSON(json: any): TemplateHotelDetailsDetails;
export declare function TemplateHotelDetailsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateHotelDetailsDetails;
export declare function TemplateHotelDetailsDetailsToJSON(value?: TemplateHotelDetailsDetails | null): any;
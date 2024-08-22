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
import type { HotelSummaryType } from './HotelSummaryType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching lists of Property summary information.
 * @export
 * @interface HotelsDetails
 */
export interface HotelsDetails {
    /**
     * Lists of Hotel summary information.
     * @type {Array<HotelSummaryType>}
     * @memberof HotelsDetails
     */
    hotelSummaryInfoList?: Array<HotelSummaryType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof HotelsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the HotelsDetails interface.
 */
export declare function instanceOfHotelsDetails(value: object): boolean;
export declare function HotelsDetailsFromJSON(json: any): HotelsDetails;
export declare function HotelsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelsDetails;
export declare function HotelsDetailsToJSON(value?: HotelsDetails | null): any;

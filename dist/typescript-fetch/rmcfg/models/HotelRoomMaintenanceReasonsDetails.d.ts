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
import type { HotelRoomMaintenanceReasonsType } from './HotelRoomMaintenanceReasonsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching room maintenance reasons for a hotel.
 * @export
 * @interface HotelRoomMaintenanceReasonsDetails
 */
export interface HotelRoomMaintenanceReasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    hasMore?: boolean;
    /**
     *
     * @type {HotelRoomMaintenanceReasonsType}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    hotelRoomMaintenanceReasons?: HotelRoomMaintenanceReasonsType;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof HotelRoomMaintenanceReasonsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HotelRoomMaintenanceReasonsDetails interface.
 */
export declare function instanceOfHotelRoomMaintenanceReasonsDetails(value: object): boolean;
export declare function HotelRoomMaintenanceReasonsDetailsFromJSON(json: any): HotelRoomMaintenanceReasonsDetails;
export declare function HotelRoomMaintenanceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRoomMaintenanceReasonsDetails;
export declare function HotelRoomMaintenanceReasonsDetailsToJSON(value?: HotelRoomMaintenanceReasonsDetails | null): any;

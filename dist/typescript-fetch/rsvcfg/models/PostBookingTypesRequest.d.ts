/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BookingTypesType } from './BookingTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostBookingTypesRequest
 */
export interface PostBookingTypesRequest {
    /**
     *
     * @type {BookingTypesType}
     * @memberof PostBookingTypesRequest
     */
    bookingTypes?: BookingTypesType;
    /**
     *
     * @type {Links}
     * @memberof PostBookingTypesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostBookingTypesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostBookingTypesRequest interface.
 */
export declare function instanceOfPostBookingTypesRequest(value: object): boolean;
export declare function PostBookingTypesRequestFromJSON(json: any): PostBookingTypesRequest;
export declare function PostBookingTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBookingTypesRequest;
export declare function PostBookingTypesRequestToJSON(value?: PostBookingTypesRequest | null): any;

/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about a tour series block.
 * @export
 * @interface TourSeriesBlockType
 */
export interface TourSeriesBlockType {
    /**
     * The block code of the tour series block.
     * @type {string}
     * @memberof TourSeriesBlockType
     */
    blockCode?: string;
    /**
     * The block name of the tour series block.
     * @type {string}
     * @memberof TourSeriesBlockType
     */
    blockName?: string;
    /**
     * The booking status of the tour series block.
     * @type {string}
     * @memberof TourSeriesBlockType
     */
    blockStatus?: string;
    /**
     * The hotel code of the tour series block.
     * @type {string}
     * @memberof TourSeriesBlockType
     */
    hotelId?: string;
    /**
     * The start date of the tour series block.
     * @type {Date}
     * @memberof TourSeriesBlockType
     */
    startDate?: Date;
}
/**
 * Check if a given object implements the TourSeriesBlockType interface.
 */
export declare function instanceOfTourSeriesBlockType(value: object): boolean;
export declare function TourSeriesBlockTypeFromJSON(json: any): TourSeriesBlockType;
export declare function TourSeriesBlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TourSeriesBlockType;
export declare function TourSeriesBlockTypeToJSON(value?: TourSeriesBlockType | null): any;

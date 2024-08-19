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
import type { HotelInterfaceFailedMessageType } from './HotelInterfaceFailedMessageType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for retrieving Hotel Interface Failed Messages.
 * @export
 * @interface FetchedHotelInterfaceFailedMessages
 */
export interface FetchedHotelInterfaceFailedMessages {
    /**
     * Collection of Hotel Interface Failed Messages.
     * @type {Array<HotelInterfaceFailedMessageType>}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    messages?: Array<HotelInterfaceFailedMessageType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    totalPages?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    offset?: number;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    limit?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    totalResults?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchedHotelInterfaceFailedMessages
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FetchedHotelInterfaceFailedMessages interface.
 */
export declare function instanceOfFetchedHotelInterfaceFailedMessages(value: object): boolean;
export declare function FetchedHotelInterfaceFailedMessagesFromJSON(json: any): FetchedHotelInterfaceFailedMessages;
export declare function FetchedHotelInterfaceFailedMessagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedHotelInterfaceFailedMessages;
export declare function FetchedHotelInterfaceFailedMessagesToJSON(value?: FetchedHotelInterfaceFailedMessages | null): any;

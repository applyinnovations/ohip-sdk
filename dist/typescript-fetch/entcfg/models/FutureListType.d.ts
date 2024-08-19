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
import type { ReservationInfoType } from './ReservationInfoType';
/**
 * A collection of reservation history details attached to Profiles.
 * @export
 * @interface FutureListType
 */
export interface FutureListType {
    /**
     * Additional reservation information attached to the profile . Eg : Future reservation details
     * @type {Array<ReservationInfoType>}
     * @memberof FutureListType
     */
    reservationInfo?: Array<ReservationInfoType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof FutureListType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof FutureListType
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof FutureListType
     */
    count?: number;
}
/**
 * Check if a given object implements the FutureListType interface.
 */
export declare function instanceOfFutureListType(value: object): boolean;
export declare function FutureListTypeFromJSON(json: any): FutureListType;
export declare function FutureListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FutureListType;
export declare function FutureListTypeToJSON(value?: FutureListType | null): any;

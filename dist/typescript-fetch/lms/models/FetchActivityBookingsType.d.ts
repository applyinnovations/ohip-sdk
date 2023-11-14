/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityList } from './ActivityList';
import type { AddressType } from './AddressType';
import type { PersonNameType } from './PersonNameType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * Used in the request message to describe the "filtering Criteria" when executing an activity lookup.
 * @export
 * @interface FetchActivityBookingsType
 */
export interface FetchActivityBookingsType {
    /**
     *
     * @type {ActivityList}
     * @memberof FetchActivityBookingsType
     */
    activities?: ActivityList;
    /**
     *
     * @type {AddressType}
     * @memberof FetchActivityBookingsType
     */
    address?: AddressType;
    /**
     * Hotel Code, It is used to filter hotel specific children to this specific hotel code.
     * @type {string}
     * @memberof FetchActivityBookingsType
     */
    hotelId?: string;
    /**
     *
     * @type {PersonNameType}
     * @memberof FetchActivityBookingsType
     */
    personName?: PersonNameType;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof FetchActivityBookingsType
     */
    profileId?: UniqueIDListType;
}
/**
 * Check if a given object implements the FetchActivityBookingsType interface.
 */
export declare function instanceOfFetchActivityBookingsType(value: object): boolean;
export declare function FetchActivityBookingsTypeFromJSON(json: any): FetchActivityBookingsType;
export declare function FetchActivityBookingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchActivityBookingsType;
export declare function FetchActivityBookingsTypeToJSON(value?: FetchActivityBookingsType | null): any;
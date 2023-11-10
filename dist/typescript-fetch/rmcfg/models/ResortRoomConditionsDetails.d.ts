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
import type { Links } from './Links';
import type { RoomCondtionsType } from './RoomCondtionsType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for information regarding room condition configuration in a resort.
 * @export
 * @interface ResortRoomConditionsDetails
 */
export interface ResortRoomConditionsDetails {
    /**
     *
     * @type {Links}
     * @memberof ResortRoomConditionsDetails
     */
    links?: Links;
    /**
     *
     * @type {RoomCondtionsType}
     * @memberof ResortRoomConditionsDetails
     */
    roomConditions?: RoomCondtionsType;
    /**
     *
     * @type {WarningsType}
     * @memberof ResortRoomConditionsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ResortRoomConditionsDetails interface.
 */
export declare function instanceOfResortRoomConditionsDetails(value: object): boolean;
export declare function ResortRoomConditionsDetailsFromJSON(json: any): ResortRoomConditionsDetails;
export declare function ResortRoomConditionsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResortRoomConditionsDetails;
export declare function ResortRoomConditionsDetailsToJSON(value?: ResortRoomConditionsDetails | null): any;

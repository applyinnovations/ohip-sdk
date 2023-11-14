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
import type { ConfigHousekeepingRoomSchedulesType } from './ConfigHousekeepingRoomSchedulesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing housekeeping tasks and housekeeping codes associated to a room type.
 * @export
 * @interface HousekeepingRoomSchedulesToBeChanged
 */
export interface HousekeepingRoomSchedulesToBeChanged {
    /**
     *
     * @type {ConfigHousekeepingRoomSchedulesType}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    housekeepingRoomSchedules?: ConfigHousekeepingRoomSchedulesType;
    /**
     *
     * @type {Links}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the HousekeepingRoomSchedulesToBeChanged interface.
 */
export declare function instanceOfHousekeepingRoomSchedulesToBeChanged(value: object): boolean;
export declare function HousekeepingRoomSchedulesToBeChangedFromJSON(json: any): HousekeepingRoomSchedulesToBeChanged;
export declare function HousekeepingRoomSchedulesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomSchedulesToBeChanged;
export declare function HousekeepingRoomSchedulesToBeChangedToJSON(value?: HousekeepingRoomSchedulesToBeChanged | null): any;
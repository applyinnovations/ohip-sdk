/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomPreferencePriorityType } from './RoomPreferencePriorityType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating Room Preference Priorities.
 * @export
 * @interface RoomPreferencePrioritiesCriteria
 */
export interface RoomPreferencePrioritiesCriteria {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * List of Room Preference Priorities.
     * @type {Array<RoomPreferencePriorityType>}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    roomPreferencePriorities?: Array<RoomPreferencePriorityType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomPreferencePrioritiesCriteria interface.
 */
export declare function instanceOfRoomPreferencePrioritiesCriteria(value: object): boolean;
export declare function RoomPreferencePrioritiesCriteriaFromJSON(json: any): RoomPreferencePrioritiesCriteria;
export declare function RoomPreferencePrioritiesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomPreferencePrioritiesCriteria;
export declare function RoomPreferencePrioritiesCriteriaToJSON(value?: RoomPreferencePrioritiesCriteria | null): any;

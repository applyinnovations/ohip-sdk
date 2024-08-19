/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockWashScheduleType } from './BlockWashScheduleType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object to fetch all the Block Wash Schedules. Each Block Wash Schedule will contain all the information like Wash Date, Room Type, Occupancy detail, Sell limit and Wash by percent value if exists.
 * @export
 * @interface BlockWashSchedules
 */
export interface BlockWashSchedules {
    /**
     * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
     * @type {Array<BlockWashScheduleType>}
     * @memberof BlockWashSchedules
     */
    blockWashSchedules?: Array<BlockWashScheduleType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockWashSchedules
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockWashSchedules
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockWashSchedules interface.
 */
export declare function instanceOfBlockWashSchedules(value: object): boolean;
export declare function BlockWashSchedulesFromJSON(json: any): BlockWashSchedules;
export declare function BlockWashSchedulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockWashSchedules;
export declare function BlockWashSchedulesToJSON(value?: BlockWashSchedules | null): any;

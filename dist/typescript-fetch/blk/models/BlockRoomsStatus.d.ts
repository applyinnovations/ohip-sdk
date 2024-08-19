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
import type { InstanceLink } from './InstanceLink';
import type { RoomsStatusSummaryType } from './RoomsStatusSummaryType';
import type { WarningType } from './WarningType';
/**
 * It also contains Success,Warnings and Errors related to this operation.
 * @export
 * @interface BlockRoomsStatus
 */
export interface BlockRoomsStatus {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockRoomsStatus
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {RoomsStatusSummaryType}
     * @memberof BlockRoomsStatus
     */
    roomsStatusSummary?: RoomsStatusSummaryType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockRoomsStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockRoomsStatus interface.
 */
export declare function instanceOfBlockRoomsStatus(value: object): boolean;
export declare function BlockRoomsStatusFromJSON(json: any): BlockRoomsStatus;
export declare function BlockRoomsStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRoomsStatus;
export declare function BlockRoomsStatusToJSON(value?: BlockRoomsStatus | null): any;

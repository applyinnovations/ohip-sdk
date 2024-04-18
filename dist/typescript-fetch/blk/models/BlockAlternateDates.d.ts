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
import type { BlockAlternateDateType } from './BlockAlternateDateType';
import type { InstanceLink } from './InstanceLink';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningType } from './WarningType';
/**
 * Request object to create block alternate dates.
 * @export
 * @interface BlockAlternateDates
 */
export interface BlockAlternateDates {
    /**
     * Contains a list of Block Alternate Dates.
     * @type {Array<BlockAlternateDateType>}
     * @memberof BlockAlternateDates
     */
    blockAlternateDates?: Array<BlockAlternateDateType>;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof BlockAlternateDates
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof BlockAlternateDates
     */
    hotelId?: string;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockAlternateDates
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockAlternateDates
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockAlternateDates interface.
 */
export declare function instanceOfBlockAlternateDates(value: object): boolean;
export declare function BlockAlternateDatesFromJSON(json: any): BlockAlternateDates;
export declare function BlockAlternateDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAlternateDates;
export declare function BlockAlternateDatesToJSON(value?: BlockAlternateDates | null): any;
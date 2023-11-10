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
import type { BlocksType } from './BlocksType';
import type { CateringEventsProcessedInfoList } from './CateringEventsProcessedInfoList';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for change/modification of block details. This object contains the block details with unique identifiers for each block. Also Success,Warnings and Errors related to this operation.
 * @export
 * @interface BlockChanged
 */
export interface BlockChanged {
    /**
     *
     * @type {BlocksType}
     * @memberof BlockChanged
     */
    blocks?: BlocksType;
    /**
     *
     * @type {CateringEventsProcessedInfoList}
     * @memberof BlockChanged
     */
    cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
    /**
     *
     * @type {Links}
     * @memberof BlockChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockChanged interface.
 */
export declare function instanceOfBlockChanged(value: object): boolean;
export declare function BlockChangedFromJSON(json: any): BlockChanged;
export declare function BlockChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockChanged;
export declare function BlockChangedToJSON(value?: BlockChanged | null): any;

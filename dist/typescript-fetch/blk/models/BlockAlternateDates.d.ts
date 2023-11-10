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
import type { BlockAlternateDatesType } from './BlockAlternateDatesType';
import type { BlockIdList } from './BlockIdList';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object to create block alternate dates.
 * @export
 * @interface BlockAlternateDates
 */
export interface BlockAlternateDates {
    /**
     *
     * @type {BlockAlternateDatesType}
     * @memberof BlockAlternateDates
     */
    blockAlternateDates?: BlockAlternateDatesType;
    /**
     *
     * @type {BlockIdList}
     * @memberof BlockAlternateDates
     */
    blockIdList?: BlockIdList;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof BlockAlternateDates
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof BlockAlternateDates
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof BlockAlternateDates
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the BlockAlternateDates interface.
 */
export declare function instanceOfBlockAlternateDates(value: object): boolean;
export declare function BlockAlternateDatesFromJSON(json: any): BlockAlternateDates;
export declare function BlockAlternateDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAlternateDates;
export declare function BlockAlternateDatesToJSON(value?: BlockAlternateDates | null): any;

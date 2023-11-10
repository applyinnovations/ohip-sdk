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
import type { BlockId } from './BlockId';
import type { RestrictionStatusType } from './RestrictionStatusType';
/**
 * Information for creating restrictions for a block.
 * @export
 * @interface CreateBlockRestrictionType
 */
export interface CreateBlockRestrictionType {
    /**
     *
     * @type {BlockId}
     * @memberof CreateBlockRestrictionType
     */
    blockId?: BlockId;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof CreateBlockRestrictionType
     */
    end?: Date;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    friday?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateBlockRestrictionType
     */
    hotelId?: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    monday?: boolean;
    /**
     *
     * @type {RestrictionStatusType}
     * @memberof CreateBlockRestrictionType
     */
    restrictionStatus?: RestrictionStatusType;
    /**
     * Room type for which restriction is being applied.
     * @type {Array<string>}
     * @memberof CreateBlockRestrictionType
     */
    roomTypes?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    saturday?: boolean;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof CreateBlockRestrictionType
     */
    start?: Date;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateBlockRestrictionType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the CreateBlockRestrictionType interface.
 */
export declare function instanceOfCreateBlockRestrictionType(value: object): boolean;
export declare function CreateBlockRestrictionTypeFromJSON(json: any): CreateBlockRestrictionType;
export declare function CreateBlockRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBlockRestrictionType;
export declare function CreateBlockRestrictionTypeToJSON(value?: CreateBlockRestrictionType | null): any;

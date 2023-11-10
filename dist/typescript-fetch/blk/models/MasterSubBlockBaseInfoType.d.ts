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
import type { BlockClassificationType } from './BlockClassificationType';
import type { BlockIdList } from './BlockIdList';
import type { BookingStatusType } from './BookingStatusType';
import type { TimeSpanType } from './TimeSpanType';
/**
 *
 * @export
 * @interface MasterSubBlockBaseInfoType
 */
export interface MasterSubBlockBaseInfoType {
    /**
     *
     * @type {BlockIdList}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockIdList?: BlockIdList;
    /**
     * Block description.
     * @type {string}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockName?: string;
    /**
     *
     * @type {BookingStatusType}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockStatus?: BookingStatusType;
    /**
     *
     * @type {BlockClassificationType}
     * @memberof MasterSubBlockBaseInfoType
     */
    blockType?: BlockClassificationType;
    /**
     *
     * @type {BookingStatusType}
     * @memberof MasterSubBlockBaseInfoType
     */
    cateringStatus?: BookingStatusType;
    /**
     * Master/Sub Block's Hotel Code.
     * @type {string}
     * @memberof MasterSubBlockBaseInfoType
     */
    hotelId?: string;
    /**
     * Pertain value for blocked rooms for a block.
     * @type {number}
     * @memberof MasterSubBlockBaseInfoType
     */
    roomNights?: number;
    /**
     * Pertain value for reserved rooms for a block.
     * @type {number}
     * @memberof MasterSubBlockBaseInfoType
     */
    roomNightsPickedup?: number;
    /**
     * Indicates to check if Block Dates to be in sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncBlockDates?: boolean;
    /**
     * Indicates if Block Status Details to be in sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncBlockStatusDetails?: boolean;
    /**
     * Indicates whether other BlockDetails to be in Sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncOtherBlockDetails?: boolean;
    /**
     * Indicates if packages to be in Sync.
     * @type {boolean}
     * @memberof MasterSubBlockBaseInfoType
     */
    syncPackages?: boolean;
    /**
     *
     * @type {TimeSpanType}
     * @memberof MasterSubBlockBaseInfoType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the MasterSubBlockBaseInfoType interface.
 */
export declare function instanceOfMasterSubBlockBaseInfoType(value: object): boolean;
export declare function MasterSubBlockBaseInfoTypeFromJSON(json: any): MasterSubBlockBaseInfoType;
export declare function MasterSubBlockBaseInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterSubBlockBaseInfoType;
export declare function MasterSubBlockBaseInfoTypeToJSON(value?: MasterSubBlockBaseInfoType | null): any;

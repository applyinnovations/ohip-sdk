/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';

/**
 * 
 * @export
 * @interface ShiftBlockCriteriaType
 */
export interface ShiftBlockCriteriaType {
    /**
     * 
     * @type {BlockId}
     * @memberof ShiftBlockCriteriaType
     */
    blockId?: BlockId;
    /**
     * Hotel code of the business block.
     * @type {string}
     * @memberof ShiftBlockCriteriaType
     */
    hotelId?: string;
    /**
     * When true, this will shift the block even if there are rooms pre-allocated.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    ignorePreAllocatedRooms?: boolean;
    /**
     * When true, this will shift the block even if there are active traces.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    ignoreTraces?: boolean;
    /**
     * New start date of the business block.
     * @type {string}
     * @memberof ShiftBlockCriteriaType
     */
    newStartDate?: string;
    /**
     * When true, this will overbook allocated rooms if needed.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    overbookAll?: boolean;
    /**
     * Indicates whether to ignore any warning during applying the changes to the events associated with the current block.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    overrideEventsProcessingWarnings?: boolean;
    /**
     * When true, this will remove alternate dates for this block before shifting dates.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    removeAlternateDates?: boolean;
    /**
     * When true, this will validate alternate dates for this block before shifting dates.
     * @type {boolean}
     * @memberof ShiftBlockCriteriaType
     */
    validateAlternateDates?: boolean;
}

/**
 * Check if a given object implements the ShiftBlockCriteriaType interface.
 */
export function instanceOfShiftBlockCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShiftBlockCriteriaTypeFromJSON(json: any): ShiftBlockCriteriaType {
    return ShiftBlockCriteriaTypeFromJSONTyped(json, false);
}

export function ShiftBlockCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShiftBlockCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ignorePreAllocatedRooms': !exists(json, 'ignorePreAllocatedRooms') ? undefined : json['ignorePreAllocatedRooms'],
        'ignoreTraces': !exists(json, 'ignoreTraces') ? undefined : json['ignoreTraces'],
        'newStartDate': !exists(json, 'newStartDate') ? undefined : json['newStartDate'],
        'overbookAll': !exists(json, 'overbookAll') ? undefined : json['overbookAll'],
        'overrideEventsProcessingWarnings': !exists(json, 'overrideEventsProcessingWarnings') ? undefined : json['overrideEventsProcessingWarnings'],
        'removeAlternateDates': !exists(json, 'removeAlternateDates') ? undefined : json['removeAlternateDates'],
        'validateAlternateDates': !exists(json, 'validateAlternateDates') ? undefined : json['validateAlternateDates'],
    };
}

export function ShiftBlockCriteriaTypeToJSON(value?: ShiftBlockCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'hotelId': value.hotelId,
        'ignorePreAllocatedRooms': value.ignorePreAllocatedRooms,
        'ignoreTraces': value.ignoreTraces,
        'newStartDate': value.newStartDate,
        'overbookAll': value.overbookAll,
        'overrideEventsProcessingWarnings': value.overrideEventsProcessingWarnings,
        'removeAlternateDates': value.removeAlternateDates,
        'validateAlternateDates': value.validateAlternateDates,
    };
}


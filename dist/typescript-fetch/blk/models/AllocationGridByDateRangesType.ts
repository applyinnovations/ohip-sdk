/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AllocationGridByDateRangeType } from './AllocationGridByDateRangeType';
import {
    AllocationGridByDateRangeTypeFromJSON,
    AllocationGridByDateRangeTypeFromJSONTyped,
    AllocationGridByDateRangeTypeToJSON,
} from './AllocationGridByDateRangeType';

/**
 * A collection of Allocation objects for a block, such as Current Rooms, Original Rooms, Rate Amounts, etc.
 * @export
 * @interface AllocationGridByDateRangesType
 */
export interface AllocationGridByDateRangesType {
    /**
     * Indicates the type of the Allocation objects.
     * @type {string}
     * @memberof AllocationGridByDateRangesType
     */
    allocation?: string;
    /**
     * Allocation objects for a block.
     * @type {Array<AllocationGridByDateRangeType>}
     * @memberof AllocationGridByDateRangesType
     */
    roomAllocationInfo?: Array<AllocationGridByDateRangeType>;
}

/**
 * Check if a given object implements the AllocationGridByDateRangesType interface.
 */
export function instanceOfAllocationGridByDateRangesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AllocationGridByDateRangesTypeFromJSON(json: any): AllocationGridByDateRangesType {
    return AllocationGridByDateRangesTypeFromJSONTyped(json, false);
}

export function AllocationGridByDateRangesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationGridByDateRangesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocation': !exists(json, 'allocation') ? undefined : json['allocation'],
        'roomAllocationInfo': !exists(json, 'roomAllocationInfo') ? undefined : ((json['roomAllocationInfo'] as Array<any>).map(AllocationGridByDateRangeTypeFromJSON)),
    };
}

export function AllocationGridByDateRangesTypeToJSON(value?: AllocationGridByDateRangesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocation': value.allocation,
        'roomAllocationInfo': value.roomAllocationInfo === undefined ? undefined : ((value.roomAllocationInfo as Array<any>).map(AllocationGridByDateRangeTypeToJSON)),
    };
}


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
import type { CancellationDetailsType } from './CancellationDetailsType';
import {
    CancellationDetailsTypeFromJSON,
    CancellationDetailsTypeFromJSONTyped,
    CancellationDetailsTypeToJSON,
} from './CancellationDetailsType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * ID information of the cancelled Block.
 * @export
 * @interface CancelBlockType
 */
export interface CancelBlockType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CancelBlockType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {CancellationDetailsType}
     * @memberof CancelBlockType
     */
    cancellationDetails?: CancellationDetailsType;
    /**
     * Opera Hotel code for the cancel block operation.
     * @type {string}
     * @memberof CancelBlockType
     */
    hotelId?: string;
    /**
     * 
     * @type {CancellationDetailsType}
     * @memberof CancelBlockType
     */
    pMReservationsCancellationDetails?: CancellationDetailsType;
    /**
     * Start date of the block to be cancelled.
     * @type {Date}
     * @memberof CancelBlockType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the CancelBlockType interface.
 */
export function instanceOfCancelBlockType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CancelBlockTypeFromJSON(json: any): CancelBlockType {
    return CancelBlockTypeFromJSONTyped(json, false);
}

export function CancelBlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelBlockType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'cancellationDetails': !exists(json, 'cancellationDetails') ? undefined : CancellationDetailsTypeFromJSON(json['cancellationDetails']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'pMReservationsCancellationDetails': !exists(json, 'pMReservationsCancellationDetails') ? undefined : CancellationDetailsTypeFromJSON(json['pMReservationsCancellationDetails']),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function CancelBlockTypeToJSON(value?: CancelBlockType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'cancellationDetails': CancellationDetailsTypeToJSON(value.cancellationDetails),
        'hotelId': value.hotelId,
        'pMReservationsCancellationDetails': CancellationDetailsTypeToJSON(value.pMReservationsCancellationDetails),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}


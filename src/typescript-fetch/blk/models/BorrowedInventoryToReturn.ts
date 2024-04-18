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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { InventoryToReturnType } from './InventoryToReturnType';
import {
    InventoryToReturnTypeFromJSON,
    InventoryToReturnTypeFromJSONTyped,
    InventoryToReturnTypeToJSON,
} from './InventoryToReturnType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * The standard optional Opera Context element is also included.
 * @export
 * @interface BorrowedInventoryToReturn
 */
export interface BorrowedInventoryToReturn {
    /**
     * The number of adults that are expected to stay in a room.
     * @type {number}
     * @memberof BorrowedInventoryToReturn
     */
    adultCount?: number;
    /**
     * 
     * @type {BlockId}
     * @memberof BorrowedInventoryToReturn
     */
    blockId?: BlockId;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BorrowedInventoryToReturn
     */
    existingReservationId?: UniqueIDType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof BorrowedInventoryToReturn
     */
    hotelId?: string;
    /**
     * The date and number of rooms to return to either a room type or House.
     * @type {Array<InventoryToReturnType>}
     * @memberof BorrowedInventoryToReturn
     */
    inventoryToReturnList?: Array<InventoryToReturnType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BorrowedInventoryToReturn
     */
    links?: Array<InstanceLink>;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof BorrowedInventoryToReturn
     */
    roomType?: string;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BorrowedInventoryToReturn
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BorrowedInventoryToReturn interface.
 */
export function instanceOfBorrowedInventoryToReturn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BorrowedInventoryToReturnFromJSON(json: any): BorrowedInventoryToReturn {
    return BorrowedInventoryToReturnFromJSONTyped(json, false);
}

export function BorrowedInventoryToReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): BorrowedInventoryToReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adultCount': !exists(json, 'adultCount') ? undefined : json['adultCount'],
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'existingReservationId': !exists(json, 'existingReservationId') ? undefined : UniqueIDTypeFromJSON(json['existingReservationId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryToReturnList': !exists(json, 'inventoryToReturnList') ? undefined : ((json['inventoryToReturnList'] as Array<any>).map(InventoryToReturnTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BorrowedInventoryToReturnToJSON(value?: BorrowedInventoryToReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adultCount': value.adultCount,
        'blockId': BlockIdToJSON(value.blockId),
        'existingReservationId': UniqueIDTypeToJSON(value.existingReservationId),
        'hotelId': value.hotelId,
        'inventoryToReturnList': value.inventoryToReturnList === undefined ? undefined : ((value.inventoryToReturnList as Array<any>).map(InventoryToReturnTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomType': value.roomType,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

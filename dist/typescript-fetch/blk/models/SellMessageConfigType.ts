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
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UsedInModuleType } from './UsedInModuleType';
import {
    UsedInModuleTypeFromJSON,
    UsedInModuleTypeFromJSONTyped,
    UsedInModuleTypeToJSON,
} from './UsedInModuleType';

/**
 * Only one of the following can hold a value: HotelCode, CROCode or ChainCode
 * @export
 * @interface SellMessageConfigType
 */
export interface SellMessageConfigType {
    /**
     * Block Code to which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    blockCode?: string;
    /**
     * 
     * @type {BlockId}
     * @memberof SellMessageConfigType
     */
    blockId?: BlockId;
    /**
     * Chain Code for which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    chainCode?: string;
    /**
     * CRO Code for which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    croCode?: string;
    /**
     * Hotel Code for which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof SellMessageConfigType
     */
    idContext?: string;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    instance?: string;
    /**
     * Language in which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    languageCode?: string;
    /**
     * Sell message text.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    message?: string;
    /**
     * Rate Plan Code for which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    ratePlanCode?: string;
    /**
     * Room type for which the sell message is defined.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    roomType?: string;
    /**
     * This number indicates the display order of the sell message.
     * @type {number}
     * @memberof SellMessageConfigType
     */
    sellSequence?: number;
    /**
     * Sticky flag is used to define if the sell message should display on the block screen by default.
     * @type {boolean}
     * @memberof SellMessageConfigType
     */
    stickyFlag?: boolean;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof SellMessageConfigType
     */
    timespan?: TimeSpanType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof SellMessageConfigType
     */
    type?: string;
    /**
     * This represents the moduleType where we want to display this SellMessage.
     * @type {Array<UsedInModuleType>}
     * @memberof SellMessageConfigType
     */
    usedInModule?: Array<UsedInModuleType>;
}

/**
 * Check if a given object implements the SellMessageConfigType interface.
 */
export function instanceOfSellMessageConfigType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SellMessageConfigTypeFromJSON(json: any): SellMessageConfigType {
    return SellMessageConfigTypeFromJSONTyped(json, false);
}

export function SellMessageConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellMessageConfigType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockCode': !exists(json, 'blockCode') ? undefined : json['blockCode'],
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'croCode': !exists(json, 'croCode') ? undefined : json['croCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
        'stickyFlag': !exists(json, 'stickyFlag') ? undefined : json['stickyFlag'],
        'timespan': !exists(json, 'timespan') ? undefined : TimeSpanTypeFromJSON(json['timespan']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'usedInModule': !exists(json, 'usedInModule') ? undefined : ((json['usedInModule'] as Array<any>).map(UsedInModuleTypeFromJSON)),
    };
}

export function SellMessageConfigTypeToJSON(value?: SellMessageConfigType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockCode': value.blockCode,
        'blockId': BlockIdToJSON(value.blockId),
        'chainCode': value.chainCode,
        'croCode': value.croCode,
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'instance': value.instance,
        'languageCode': value.languageCode,
        'message': value.message,
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
        'sellSequence': value.sellSequence,
        'stickyFlag': value.stickyFlag,
        'timespan': TimeSpanTypeToJSON(value.timespan),
        'type': value.type,
        'usedInModule': value.usedInModule === undefined ? undefined : ((value.usedInModule as Array<any>).map(UsedInModuleTypeToJSON)),
    };
}


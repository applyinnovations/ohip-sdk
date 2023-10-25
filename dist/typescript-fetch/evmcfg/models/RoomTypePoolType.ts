/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoomPoolRoomTypeType } from './RoomPoolRoomTypeType';
import {
    RoomPoolRoomTypeTypeFromJSON,
    RoomPoolRoomTypeTypeFromJSONTyped,
    RoomPoolRoomTypeTypeToJSON,
} from './RoomPoolRoomTypeType';
import type { TranslationTextType1000 } from './TranslationTextType1000';
import {
    TranslationTextType1000FromJSON,
    TranslationTextType1000FromJSONTyped,
    TranslationTextType1000ToJSON,
} from './TranslationTextType1000';

/**
 * This type represents complete information of room type pool and Associated Room Type(s).
 * @export
 * @interface RoomTypePoolType
 */
export interface RoomTypePoolType {
    /**
     * Collection of room type pool mapping type.
     * @type {Array<RoomPoolRoomTypeType>}
     * @memberof RoomTypePoolType
     */
    associatedRoomTypes?: Array<RoomPoolRoomTypeType>;
    /**
     * The description of room pool type.
     * @type {string}
     * @memberof RoomTypePoolType
     */
    description?: string;
    /**
     * Hotel Code where room pool belongs to.
     * @type {string}
     * @memberof RoomTypePoolType
     */
    hotelId?: string;
    /**
     * Room type pool Code.
     * @type {string}
     * @memberof RoomTypePoolType
     */
    roomTypePoolCode?: string;
    /**
     * Sequence for representing room type pool record.
     * @type {number}
     * @memberof RoomTypePoolType
     */
    sequence?: number;
    /**
     * 
     * @type {TranslationTextType1000}
     * @memberof RoomTypePoolType
     */
    shortDescription?: TranslationTextType1000;
}

/**
 * Check if a given object implements the RoomTypePoolType interface.
 */
export function instanceOfRoomTypePoolType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypePoolTypeFromJSON(json: any): RoomTypePoolType {
    return RoomTypePoolTypeFromJSONTyped(json, false);
}

export function RoomTypePoolTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypePoolType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associatedRoomTypes': !exists(json, 'associatedRoomTypes') ? undefined : ((json['associatedRoomTypes'] as Array<any>).map(RoomPoolRoomTypeTypeFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'roomTypePoolCode': !exists(json, 'roomTypePoolCode') ? undefined : json['roomTypePoolCode'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : TranslationTextType1000FromJSON(json['shortDescription']),
    };
}

export function RoomTypePoolTypeToJSON(value?: RoomTypePoolType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associatedRoomTypes': value.associatedRoomTypes === undefined ? undefined : ((value.associatedRoomTypes as Array<any>).map(RoomPoolRoomTypeTypeToJSON)),
        'description': value.description,
        'hotelId': value.hotelId,
        'roomTypePoolCode': value.roomTypePoolCode,
        'sequence': value.sequence,
        'shortDescription': TranslationTextType1000ToJSON(value.shortDescription),
    };
}


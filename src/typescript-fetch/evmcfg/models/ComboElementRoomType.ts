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
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Details of each combo element room.
 * @export
 * @interface ComboElementRoomType
 */
export interface ComboElementRoomType {
    /**
     * Configured code of the room.
     * @type {string}
     * @memberof ComboElementRoomType
     */
    roomCode?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof ComboElementRoomType
     */
    roomDescription?: TranslationTextType2000;
    /**
     * Percentage occupied by the room.
     * @type {number}
     * @memberof ComboElementRoomType
     */
    roomProportion?: number;
    /**
     * Configured size of the room.
     * @type {number}
     * @memberof ComboElementRoomType
     */
    roomSize?: number;
}

/**
 * Check if a given object implements the ComboElementRoomType interface.
 */
export function instanceOfComboElementRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComboElementRoomTypeFromJSON(json: any): ComboElementRoomType {
    return ComboElementRoomTypeFromJSONTyped(json, false);
}

export function ComboElementRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComboElementRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomCode': !exists(json, 'roomCode') ? undefined : json['roomCode'],
        'roomDescription': !exists(json, 'roomDescription') ? undefined : TranslationTextType2000FromJSON(json['roomDescription']),
        'roomProportion': !exists(json, 'roomProportion') ? undefined : json['roomProportion'],
        'roomSize': !exists(json, 'roomSize') ? undefined : json['roomSize'],
    };
}

export function ComboElementRoomTypeToJSON(value?: ComboElementRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomCode': value.roomCode,
        'roomDescription': TranslationTextType2000ToJSON(value.roomDescription),
        'roomProportion': value.roomProportion,
        'roomSize': value.roomSize,
    };
}

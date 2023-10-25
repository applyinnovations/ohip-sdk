/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A representation of the single entry information for 'Wash by number of rooms' type.
 * @export
 * @interface WashByRoomType
 */
export interface WashByRoomType {
    /**
     * Contains the number of 'Occupancy1'. Based on the parameter it should be replaced by the number of 'Rooms'.
     * @type {number}
     * @memberof WashByRoomType
     */
    occupancy1?: number;
    /**
     * Contains the number of 'Occupancy2'.
     * @type {number}
     * @memberof WashByRoomType
     */
    occupancy2?: number;
    /**
     * Contains the number of 'Occupancy3'.
     * @type {number}
     * @memberof WashByRoomType
     */
    occupancy3?: number;
    /**
     * Contains the number of 'Occupancy4'.
     * @type {number}
     * @memberof WashByRoomType
     */
    occupancy4?: number;
    /**
     * Contains the available Sell Limit rooms for a Sell Limit block.
     * @type {number}
     * @memberof WashByRoomType
     */
    sell?: number;
}

/**
 * Check if a given object implements the WashByRoomType interface.
 */
export function instanceOfWashByRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WashByRoomTypeFromJSON(json: any): WashByRoomType {
    return WashByRoomTypeFromJSONTyped(json, false);
}

export function WashByRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WashByRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'occupancy1': !exists(json, 'occupancy1') ? undefined : json['occupancy1'],
        'occupancy2': !exists(json, 'occupancy2') ? undefined : json['occupancy2'],
        'occupancy3': !exists(json, 'occupancy3') ? undefined : json['occupancy3'],
        'occupancy4': !exists(json, 'occupancy4') ? undefined : json['occupancy4'],
        'sell': !exists(json, 'sell') ? undefined : json['sell'],
    };
}

export function WashByRoomTypeToJSON(value?: WashByRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'occupancy1': value.occupancy1,
        'occupancy2': value.occupancy2,
        'occupancy3': value.occupancy3,
        'occupancy4': value.occupancy4,
        'sell': value.sell,
    };
}


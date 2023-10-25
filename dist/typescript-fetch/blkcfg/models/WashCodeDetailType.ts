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
import type { WashByRoomType } from './WashByRoomType';
import {
    WashByRoomTypeFromJSON,
    WashByRoomTypeFromJSONTyped,
    WashByRoomTypeToJSON,
} from './WashByRoomType';

/**
 * Allows for a choice to populate the detail information based on the choice between 'Wash by number of rooms' and 'Wash by %'.
 * @export
 * @interface WashCodeDetailType
 */
export interface WashCodeDetailType {
    /**
     * Number of days prior to arrival of a block or block's cutoff day.
     * @type {number}
     * @memberof WashCodeDetailType
     */
    daysPriorToArrival?: number;
    /**
     * 
     * @type {number}
     * @memberof WashCodeDetailType
     */
    washByPercent?: number;
    /**
     * 
     * @type {WashByRoomType}
     * @memberof WashCodeDetailType
     */
    washByRoom?: WashByRoomType;
}

/**
 * Check if a given object implements the WashCodeDetailType interface.
 */
export function instanceOfWashCodeDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WashCodeDetailTypeFromJSON(json: any): WashCodeDetailType {
    return WashCodeDetailTypeFromJSONTyped(json, false);
}

export function WashCodeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WashCodeDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'daysPriorToArrival': !exists(json, 'daysPriorToArrival') ? undefined : json['daysPriorToArrival'],
        'washByPercent': !exists(json, 'washByPercent') ? undefined : json['washByPercent'],
        'washByRoom': !exists(json, 'washByRoom') ? undefined : WashByRoomTypeFromJSON(json['washByRoom']),
    };
}

export function WashCodeDetailTypeToJSON(value?: WashCodeDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'daysPriorToArrival': value.daysPriorToArrival,
        'washByPercent': value.washByPercent,
        'washByRoom': WashByRoomTypeToJSON(value.washByRoom),
    };
}


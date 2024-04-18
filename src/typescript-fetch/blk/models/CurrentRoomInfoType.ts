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
/**
 * Room information of the reservation for the current day.
 * @export
 * @interface CurrentRoomInfoType
 */
export interface CurrentRoomInfoType {
    /**
     * Represents the room was assigned by AI Room Assignment.
     * @type {boolean}
     * @memberof CurrentRoomInfoType
     */
    assignedByAI?: boolean;
    /**
     * Current room description.
     * @type {string}
     * @memberof CurrentRoomInfoType
     */
    roomDescription?: string;
    /**
     * Current room number.
     * @type {string}
     * @memberof CurrentRoomInfoType
     */
    roomId?: string;
    /**
     * Current room type.
     * @type {string}
     * @memberof CurrentRoomInfoType
     */
    roomType?: string;
    /**
     * Represents the room view code like City view, River view, Ocean view etc.
     * @type {string}
     * @memberof CurrentRoomInfoType
     */
    roomViewCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentRoomInfoType
     */
    suggestedRoomNumbers?: Array<string>;
    /**
     * Represents the room was upgraded by AI Room Assignment.
     * @type {boolean}
     * @memberof CurrentRoomInfoType
     */
    upgradedByAI?: boolean;
}

/**
 * Check if a given object implements the CurrentRoomInfoType interface.
 */
export function instanceOfCurrentRoomInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrentRoomInfoTypeFromJSON(json: any): CurrentRoomInfoType {
    return CurrentRoomInfoTypeFromJSONTyped(json, false);
}

export function CurrentRoomInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentRoomInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assignedByAI': !exists(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'roomDescription': !exists(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomViewCode': !exists(json, 'roomViewCode') ? undefined : json['roomViewCode'],
        'suggestedRoomNumbers': !exists(json, 'suggestedRoomNumbers') ? undefined : json['suggestedRoomNumbers'],
        'upgradedByAI': !exists(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
    };
}

export function CurrentRoomInfoTypeToJSON(value?: CurrentRoomInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignedByAI': value.assignedByAI,
        'roomDescription': value.roomDescription,
        'roomId': value.roomId,
        'roomType': value.roomType,
        'roomViewCode': value.roomViewCode,
        'suggestedRoomNumbers': value.suggestedRoomNumbers,
        'upgradedByAI': value.upgradedByAI,
    };
}

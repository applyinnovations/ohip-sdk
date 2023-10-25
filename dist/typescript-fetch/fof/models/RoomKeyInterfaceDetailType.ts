/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoomKeyEncoderType } from './RoomKeyEncoderType';
import {
    RoomKeyEncoderTypeFromJSON,
    RoomKeyEncoderTypeFromJSONTyped,
    RoomKeyEncoderTypeToJSON,
} from './RoomKeyEncoderType';
import type { RoomKeyInterfaceRightType } from './RoomKeyInterfaceRightType';
import {
    RoomKeyInterfaceRightTypeFromJSON,
    RoomKeyInterfaceRightTypeFromJSONTyped,
    RoomKeyInterfaceRightTypeToJSON,
} from './RoomKeyInterfaceRightType';

/**
 * 
 * @export
 * @interface RoomKeyInterfaceDetailType
 */
export interface RoomKeyInterfaceDetailType {
    /**
     * Maximum number of additional rooms allowed.
     * @type {number}
     * @memberof RoomKeyInterfaceDetailType
     */
    additionalRoomsLimit?: number;
    /**
     * Holds the key encoder right.
     * @type {Array<RoomKeyEncoderType>}
     * @memberof RoomKeyInterfaceDetailType
     */
    encoders?: Array<RoomKeyEncoderType>;
    /**
     * Hotel code of the interface.
     * @type {string}
     * @memberof RoomKeyInterfaceDetailType
     */
    hotelId?: string;
    /**
     * Description of the interface.
     * @type {string}
     * @memberof RoomKeyInterfaceDetailType
     */
    interfaceDescription?: string;
    /**
     * Name of the interface.
     * @type {string}
     * @memberof RoomKeyInterfaceDetailType
     */
    interfaceName?: string;
    /**
     * Holds the key encoder right.
     * @type {Array<RoomKeyInterfaceRightType>}
     * @memberof RoomKeyInterfaceDetailType
     */
    interfaceRights?: Array<RoomKeyInterfaceRightType>;
    /**
     * Indicator if additional rooms are allowed to be included in key creation.
     * @type {boolean}
     * @memberof RoomKeyInterfaceDetailType
     */
    multipleRoomKeys?: boolean;
    /**
     * Current property date and time.
     * @type {string}
     * @memberof RoomKeyInterfaceDetailType
     */
    propertyDateTime?: string;
    /**
     * Indicator if the DLS Interface allows to send valid start date and time.
     * @type {boolean}
     * @memberof RoomKeyInterfaceDetailType
     */
    sendValidStartDateTime?: boolean;
}

/**
 * Check if a given object implements the RoomKeyInterfaceDetailType interface.
 */
export function instanceOfRoomKeyInterfaceDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomKeyInterfaceDetailTypeFromJSON(json: any): RoomKeyInterfaceDetailType {
    return RoomKeyInterfaceDetailTypeFromJSONTyped(json, false);
}

export function RoomKeyInterfaceDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomKeyInterfaceDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalRoomsLimit': !exists(json, 'additionalRoomsLimit') ? undefined : json['additionalRoomsLimit'],
        'encoders': !exists(json, 'encoders') ? undefined : ((json['encoders'] as Array<any>).map(RoomKeyEncoderTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceDescription': !exists(json, 'interfaceDescription') ? undefined : json['interfaceDescription'],
        'interfaceName': !exists(json, 'interfaceName') ? undefined : json['interfaceName'],
        'interfaceRights': !exists(json, 'interfaceRights') ? undefined : ((json['interfaceRights'] as Array<any>).map(RoomKeyInterfaceRightTypeFromJSON)),
        'multipleRoomKeys': !exists(json, 'multipleRoomKeys') ? undefined : json['multipleRoomKeys'],
        'propertyDateTime': !exists(json, 'propertyDateTime') ? undefined : json['propertyDateTime'],
        'sendValidStartDateTime': !exists(json, 'sendValidStartDateTime') ? undefined : json['sendValidStartDateTime'],
    };
}

export function RoomKeyInterfaceDetailTypeToJSON(value?: RoomKeyInterfaceDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalRoomsLimit': value.additionalRoomsLimit,
        'encoders': value.encoders === undefined ? undefined : ((value.encoders as Array<any>).map(RoomKeyEncoderTypeToJSON)),
        'hotelId': value.hotelId,
        'interfaceDescription': value.interfaceDescription,
        'interfaceName': value.interfaceName,
        'interfaceRights': value.interfaceRights === undefined ? undefined : ((value.interfaceRights as Array<any>).map(RoomKeyInterfaceRightTypeToJSON)),
        'multipleRoomKeys': value.multipleRoomKeys,
        'propertyDateTime': value.propertyDateTime,
        'sendValidStartDateTime': value.sendValidStartDateTime,
    };
}


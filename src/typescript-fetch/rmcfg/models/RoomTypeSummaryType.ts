/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * This type represents the summary of room type attributes.
 * @export
 * @interface RoomTypeSummaryType
 */
export interface RoomTypeSummaryType {
    /**
     * Indicates if room type is accessible.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    accessible?: boolean;
    /**
     * Active date of the room type.
     * @type {string}
     * @memberof RoomTypeSummaryType
     */
    activeDate?: string;
    /**
     * Indicates the room type is inactive or not.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    inactive?: boolean;
    /**
     * Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    meetingRoom?: boolean;
    /**
     * Number of rooms for this room type.
     * @type {number}
     * @memberof RoomTypeSummaryType
     */
    numberOfRooms?: number;
    /**
     * Indicates if room type is pseudo.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    pseudo?: boolean;
    /**
     * Room class for the room type code.
     * @type {string}
     * @memberof RoomTypeSummaryType
     */
    roomClass?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomTypeSummaryType
     */
    roomType?: string;
    /**
     * Indicates room types sell sequence.
     * @type {number}
     * @memberof RoomTypeSummaryType
     */
    sellSequence?: number;
    /**
     * Indicates if room type is sent to interface.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    sendToInterface?: boolean;
    /**
     * Short Description of room type.
     * @type {string}
     * @memberof RoomTypeSummaryType
     */
    shortDescription?: string;
    /**
     * Indicates room type is a suite.
     * @type {boolean}
     * @memberof RoomTypeSummaryType
     */
    suite?: boolean;
}

/**
 * Check if a given object implements the RoomTypeSummaryType interface.
 */
export function instanceOfRoomTypeSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeSummaryTypeFromJSON(json: any): RoomTypeSummaryType {
    return RoomTypeSummaryTypeFromJSONTyped(json, false);
}

export function RoomTypeSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessible': !exists(json, 'accessible') ? undefined : json['accessible'],
        'activeDate': !exists(json, 'activeDate') ? undefined : json['activeDate'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'meetingRoom': !exists(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'numberOfRooms': !exists(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'roomClass': !exists(json, 'roomClass') ? undefined : json['roomClass'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'sellSequence': !exists(json, 'sellSequence') ? undefined : json['sellSequence'],
        'sendToInterface': !exists(json, 'sendToInterface') ? undefined : json['sendToInterface'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'suite': !exists(json, 'suite') ? undefined : json['suite'],
    };
}

export function RoomTypeSummaryTypeToJSON(value?: RoomTypeSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessible': value.accessible,
        'activeDate': value.activeDate,
        'inactive': value.inactive,
        'meetingRoom': value.meetingRoom,
        'numberOfRooms': value.numberOfRooms,
        'pseudo': value.pseudo,
        'roomClass': value.roomClass,
        'roomType': value.roomType,
        'sellSequence': value.sellSequence,
        'sendToInterface': value.sendToInterface,
        'shortDescription': value.shortDescription,
        'suite': value.suite,
    };
}


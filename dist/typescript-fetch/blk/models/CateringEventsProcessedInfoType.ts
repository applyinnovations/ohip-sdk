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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Status/Info of the processed events.
 * @export
 * @interface CateringEventsProcessedInfoType
 */
export interface CateringEventsProcessedInfoType {
    /**
     * 
     * @type {BlockId}
     * @memberof CateringEventsProcessedInfoType
     */
    blockId?: BlockId;
    /**
     * Date of the event
     * @type {Date}
     * @memberof CateringEventsProcessedInfoType
     */
    eventDate?: Date;
    /**
     * Name of event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    eventName?: string;
    /**
     * Type of event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    eventType?: string;
    /**
     * Hotel code where event will be copied.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    hotelId?: string;
    /**
     * Erorr/Warning code for not processing th event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    processingInfoCode?: string;
    /**
     * Flag to indicate the warning messages from the API
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    processingInfoType?: string;
    /**
     * Reason for not processing the event.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    reason?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CateringEventsProcessedInfoType
     */
    room?: CodeDescriptionType;
    /**
     * Status of the processed event. e.g Completed, Not Processed.
     * @type {string}
     * @memberof CateringEventsProcessedInfoType
     */
    status?: string;
}

/**
 * Check if a given object implements the CateringEventsProcessedInfoType interface.
 */
export function instanceOfCateringEventsProcessedInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringEventsProcessedInfoTypeFromJSON(json: any): CateringEventsProcessedInfoType {
    return CateringEventsProcessedInfoTypeFromJSONTyped(json, false);
}

export function CateringEventsProcessedInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventsProcessedInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'eventDate': !exists(json, 'eventDate') ? undefined : (new Date(json['eventDate'])),
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
        'eventType': !exists(json, 'eventType') ? undefined : json['eventType'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'processingInfoCode': !exists(json, 'processingInfoCode') ? undefined : json['processingInfoCode'],
        'processingInfoType': !exists(json, 'processingInfoType') ? undefined : json['processingInfoType'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'room': !exists(json, 'room') ? undefined : CodeDescriptionTypeFromJSON(json['room']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function CateringEventsProcessedInfoTypeToJSON(value?: CateringEventsProcessedInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'eventDate': value.eventDate === undefined ? undefined : (value.eventDate.toISOString().substr(0,10)),
        'eventName': value.eventName,
        'eventType': value.eventType,
        'hotelId': value.hotelId,
        'processingInfoCode': value.processingInfoCode,
        'processingInfoType': value.processingInfoType,
        'reason': value.reason,
        'room': CodeDescriptionTypeToJSON(value.room),
        'status': value.status,
    };
}


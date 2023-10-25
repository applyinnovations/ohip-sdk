/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationUserType } from './ApplicationUserType';
import {
    ApplicationUserTypeFromJSON,
    ApplicationUserTypeFromJSONTyped,
    ApplicationUserTypeToJSON,
} from './ApplicationUserType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { TrackItActionType } from './TrackItActionType';
import {
    TrackItActionTypeFromJSON,
    TrackItActionTypeFromJSONTyped,
    TrackItActionTypeToJSON,
} from './TrackItActionType';
import type { TrackItGroup } from './TrackItGroup';
import {
    TrackItGroupFromJSON,
    TrackItGroupFromJSONTyped,
    TrackItGroupToJSON,
} from './TrackItGroup';
import type { TrackItId } from './TrackItId';
import {
    TrackItIdFromJSON,
    TrackItIdFromJSONTyped,
    TrackItIdToJSON,
} from './TrackItId';
import type { TrackItLogType } from './TrackItLogType';
import {
    TrackItLogTypeFromJSON,
    TrackItLogTypeFromJSONTyped,
    TrackItLogTypeToJSON,
} from './TrackItLogType';
import type { TrackItReservationInfoType } from './TrackItReservationInfoType';
import {
    TrackItReservationInfoTypeFromJSON,
    TrackItReservationInfoTypeFromJSONTyped,
    TrackItReservationInfoTypeToJSON,
} from './TrackItReservationInfoType';
import type { TrackItType } from './TrackItType';
import {
    TrackItTypeFromJSON,
    TrackItTypeFromJSONTyped,
    TrackItTypeToJSON,
} from './TrackItType';

/**
 * Detailed information of a Track It item.
 * @export
 * @interface TrackItItemType
 */
export interface TrackItItemType {
    /**
     * 
     * @type {TrackItActionType}
     * @memberof TrackItItemType
     */
    action?: TrackItActionType;
    /**
     * 
     * @type {ApplicationUserType}
     * @memberof TrackItItemType
     */
    assignedTo?: ApplicationUserType;
    /**
     * 
     * @type {string}
     * @memberof TrackItItemType
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof TrackItItemType
     */
    followUpDate?: Date;
    /**
     * 
     * @type {TrackItGroup}
     * @memberof TrackItItemType
     */
    group?: TrackItGroup;
    /**
     * 
     * @type {string}
     * @memberof TrackItItemType
     */
    hotelId?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TrackItItemType
     */
    location?: CodeDescriptionType;
    /**
     * 
     * @type {number}
     * @memberof TrackItItemType
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackItItemType
     */
    referenceNumber?: string;
    /**
     * 
     * @type {TrackItReservationInfoType}
     * @memberof TrackItItemType
     */
    reservationInfo?: TrackItReservationInfoType;
    /**
     * 
     * @type {string}
     * @memberof TrackItItemType
     */
    ticketNumber?: string;
    /**
     * 
     * @type {TrackItId}
     * @memberof TrackItItemType
     */
    trackItId?: TrackItId;
    /**
     * 
     * @type {Array<TrackItLogType>}
     * @memberof TrackItItemType
     */
    trackItLogList?: Array<TrackItLogType>;
    /**
     * 
     * @type {TrackItType}
     * @memberof TrackItItemType
     */
    type?: TrackItType;
}

/**
 * Check if a given object implements the TrackItItemType interface.
 */
export function instanceOfTrackItItemType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItItemTypeFromJSON(json: any): TrackItItemType {
    return TrackItItemTypeFromJSONTyped(json, false);
}

export function TrackItItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItItemType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : TrackItActionTypeFromJSON(json['action']),
        'assignedTo': !exists(json, 'assignedTo') ? undefined : ApplicationUserTypeFromJSON(json['assignedTo']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'followUpDate': !exists(json, 'followUpDate') ? undefined : (new Date(json['followUpDate'])),
        'group': !exists(json, 'group') ? undefined : TrackItGroupFromJSON(json['group']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'location': !exists(json, 'location') ? undefined : CodeDescriptionTypeFromJSON(json['location']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'referenceNumber': !exists(json, 'referenceNumber') ? undefined : json['referenceNumber'],
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : TrackItReservationInfoTypeFromJSON(json['reservationInfo']),
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'trackItId': !exists(json, 'trackItId') ? undefined : TrackItIdFromJSON(json['trackItId']),
        'trackItLogList': !exists(json, 'trackItLogList') ? undefined : ((json['trackItLogList'] as Array<any>).map(TrackItLogTypeFromJSON)),
        'type': !exists(json, 'type') ? undefined : TrackItTypeFromJSON(json['type']),
    };
}

export function TrackItItemTypeToJSON(value?: TrackItItemType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': TrackItActionTypeToJSON(value.action),
        'assignedTo': ApplicationUserTypeToJSON(value.assignedTo),
        'description': value.description,
        'followUpDate': value.followUpDate === undefined ? undefined : (value.followUpDate.toISOString().substr(0,10)),
        'group': TrackItGroupToJSON(value.group),
        'hotelId': value.hotelId,
        'location': CodeDescriptionTypeToJSON(value.location),
        'quantity': value.quantity,
        'referenceNumber': value.referenceNumber,
        'reservationInfo': TrackItReservationInfoTypeToJSON(value.reservationInfo),
        'ticketNumber': value.ticketNumber,
        'trackItId': TrackItIdToJSON(value.trackItId),
        'trackItLogList': value.trackItLogList === undefined ? undefined : ((value.trackItLogList as Array<any>).map(TrackItLogTypeToJSON)),
        'type': TrackItTypeToJSON(value.type),
    };
}


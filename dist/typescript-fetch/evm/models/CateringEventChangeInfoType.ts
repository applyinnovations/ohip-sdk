/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringEventChangeActions } from './CateringEventChangeActions';
import {
    CateringEventChangeActionsFromJSON,
    CateringEventChangeActionsFromJSONTyped,
    CateringEventChangeActionsToJSON,
} from './CateringEventChangeActions';
import type { CateringEventChangeDetailType } from './CateringEventChangeDetailType';
import {
    CateringEventChangeDetailTypeFromJSON,
    CateringEventChangeDetailTypeFromJSONTyped,
    CateringEventChangeDetailTypeToJSON,
} from './CateringEventChangeDetailType';
import type { CateringEventChangeSources } from './CateringEventChangeSources';
import {
    CateringEventChangeSourcesFromJSON,
    CateringEventChangeSourcesFromJSONTyped,
    CateringEventChangeSourcesToJSON,
} from './CateringEventChangeSources';
import type { LogUserInfoType } from './LogUserInfoType';
import {
    LogUserInfoTypeFromJSON,
    LogUserInfoTypeFromJSONTyped,
    LogUserInfoTypeToJSON,
} from './LogUserInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface CateringEventChangeInfoType
 */
export interface CateringEventChangeInfoType {
    /**
     * 
     * @type {CateringEventChangeActions}
     * @memberof CateringEventChangeInfoType
     */
    action?: CateringEventChangeActions;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringEventChangeInfoType
     */
    changeId?: UniqueIDType;
    /**
     * 
     * @type {CateringEventChangeSources}
     * @memberof CateringEventChangeInfoType
     */
    changeSource?: CateringEventChangeSources;
    /**
     * 
     * @type {LogUserInfoType}
     * @memberof CateringEventChangeInfoType
     */
    changeUserInfo?: LogUserInfoType;
    /**
     * 
     * @type {Array<CateringEventChangeDetailType>}
     * @memberof CateringEventChangeInfoType
     */
    eventChangeDetailList?: Array<CateringEventChangeDetailType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringEventChangeInfoType
     */
    eventId?: UniqueIDType;
    /**
     * Name of the event
     * @type {string}
     * @memberof CateringEventChangeInfoType
     */
    eventName?: string;
    /**
     * HotelCode associated with the event
     * @type {string}
     * @memberof CateringEventChangeInfoType
     */
    hotelId?: string;
    /**
     * Description of the Resource
     * @type {string}
     * @memberof CateringEventChangeInfoType
     */
    resourceName?: string;
}

/**
 * Check if a given object implements the CateringEventChangeInfoType interface.
 */
export function instanceOfCateringEventChangeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringEventChangeInfoTypeFromJSON(json: any): CateringEventChangeInfoType {
    return CateringEventChangeInfoTypeFromJSONTyped(json, false);
}

export function CateringEventChangeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringEventChangeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : CateringEventChangeActionsFromJSON(json['action']),
        'changeId': !exists(json, 'changeId') ? undefined : UniqueIDTypeFromJSON(json['changeId']),
        'changeSource': !exists(json, 'changeSource') ? undefined : CateringEventChangeSourcesFromJSON(json['changeSource']),
        'changeUserInfo': !exists(json, 'changeUserInfo') ? undefined : LogUserInfoTypeFromJSON(json['changeUserInfo']),
        'eventChangeDetailList': !exists(json, 'eventChangeDetailList') ? undefined : ((json['eventChangeDetailList'] as Array<any>).map(CateringEventChangeDetailTypeFromJSON)),
        'eventId': !exists(json, 'eventId') ? undefined : UniqueIDTypeFromJSON(json['eventId']),
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'resourceName': !exists(json, 'resourceName') ? undefined : json['resourceName'],
    };
}

export function CateringEventChangeInfoTypeToJSON(value?: CateringEventChangeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': CateringEventChangeActionsToJSON(value.action),
        'changeId': UniqueIDTypeToJSON(value.changeId),
        'changeSource': CateringEventChangeSourcesToJSON(value.changeSource),
        'changeUserInfo': LogUserInfoTypeToJSON(value.changeUserInfo),
        'eventChangeDetailList': value.eventChangeDetailList === undefined ? undefined : ((value.eventChangeDetailList as Array<any>).map(CateringEventChangeDetailTypeToJSON)),
        'eventId': UniqueIDTypeToJSON(value.eventId),
        'eventName': value.eventName,
        'hotelId': value.hotelId,
        'resourceName': value.resourceName,
    };
}


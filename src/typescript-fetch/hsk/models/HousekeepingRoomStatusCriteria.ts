/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FrontOfficeRoomStatusType } from './FrontOfficeRoomStatusType';
import {
    FrontOfficeRoomStatusTypeFromJSON,
    FrontOfficeRoomStatusTypeFromJSONTyped,
    FrontOfficeRoomStatusTypeToJSON,
} from './FrontOfficeRoomStatusType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
import {
    HousekeepingRoomStatusTypeFromJSON,
    HousekeepingRoomStatusTypeFromJSONTyped,
    HousekeepingRoomStatusTypeToJSON,
} from './HousekeepingRoomStatusType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RoomInformationType } from './RoomInformationType';
import {
    RoomInformationTypeFromJSON,
    RoomInformationTypeFromJSONTyped,
    RoomInformationTypeToJSON,
} from './RoomInformationType';
import type { TurndownStatusType } from './TurndownStatusType';
import {
    TurndownStatusTypeFromJSON,
    TurndownStatusTypeFromJSONTyped,
    TurndownStatusTypeToJSON,
} from './TurndownStatusType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface HousekeepingRoomStatusCriteria
 */
export interface HousekeepingRoomStatusCriteria {
    /**
     * 
     * @type {HousekeepingRoomStatusType}
     * @memberof HousekeepingRoomStatusCriteria
     */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
    /**
     * 
     * @type {FrontOfficeRoomStatusType}
     * @memberof HousekeepingRoomStatusCriteria
     */
    housekeepingStatus?: FrontOfficeRoomStatusType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingRoomStatusCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of room numbers for which the status is to be updated.
     * @type {Array<RoomInformationType>}
     * @memberof HousekeepingRoomStatusCriteria
     */
    roomList?: Array<RoomInformationType>;
    /**
     * 
     * @type {TurndownStatusType}
     * @memberof HousekeepingRoomStatusCriteria
     */
    turndownStatus?: TurndownStatusType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingRoomStatusCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingRoomStatusCriteria interface.
 */
export function instanceOfHousekeepingRoomStatusCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingRoomStatusCriteriaFromJSON(json: any): HousekeepingRoomStatusCriteria {
    return HousekeepingRoomStatusCriteriaFromJSONTyped(json, false);
}

export function HousekeepingRoomStatusCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomStatusCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingRoomStatus': !exists(json, 'housekeepingRoomStatus') ? undefined : HousekeepingRoomStatusTypeFromJSON(json['housekeepingRoomStatus']),
        'housekeepingStatus': !exists(json, 'housekeepingStatus') ? undefined : FrontOfficeRoomStatusTypeFromJSON(json['housekeepingStatus']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomList': !exists(json, 'roomList') ? undefined : ((json['roomList'] as Array<any>).map(RoomInformationTypeFromJSON)),
        'turndownStatus': !exists(json, 'turndownStatus') ? undefined : TurndownStatusTypeFromJSON(json['turndownStatus']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingRoomStatusCriteriaToJSON(value?: HousekeepingRoomStatusCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'housekeepingRoomStatus': HousekeepingRoomStatusTypeToJSON(value.housekeepingRoomStatus),
        'housekeepingStatus': FrontOfficeRoomStatusTypeToJSON(value.housekeepingStatus),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomList': value.roomList === undefined ? undefined : ((value.roomList as Array<any>).map(RoomInformationTypeToJSON)),
        'turndownStatus': TurndownStatusTypeToJSON(value.turndownStatus),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

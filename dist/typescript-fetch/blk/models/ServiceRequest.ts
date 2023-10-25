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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ServiceRequestStatusType } from './ServiceRequestStatusType';
import {
    ServiceRequestStatusTypeFromJSON,
    ServiceRequestStatusTypeFromJSONTyped,
    ServiceRequestStatusTypeToJSON,
} from './ServiceRequestStatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Service request.
 * @export
 * @interface ServiceRequest
 */
export interface ServiceRequest {
    /**
     * Description of the action taken to complete the request.
     * @type {string}
     * @memberof ServiceRequest
     */
    action?: string;
    /**
     * The follow up description.
     * @type {string}
     * @memberof ServiceRequest
     */
    closeDescription?: string;
    /**
     * The user who closed the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    closedBy?: string;
    /**
     * The date-time in which the service request was closed.
     * @type {string}
     * @memberof ServiceRequest
     */
    closedDate?: string;
    /**
     * Service request code.
     * @type {string}
     * @memberof ServiceRequest
     */
    code?: string;
    /**
     * Description of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    comment?: string;
    /**
     * The date-time in which the service request was completed.
     * @type {string}
     * @memberof ServiceRequest
     */
    completionDate?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ServiceRequest
     */
    department?: CodeDescriptionType;
    /**
     * The user who guaranteed the completion of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    guaranteedBy?: string;
    /**
     * Communication method picked from guest profile.
     * @type {string}
     * @memberof ServiceRequest
     */
    guestContactMethod?: string;
    /**
     * The guest name.
     * @type {string}
     * @memberof ServiceRequest
     */
    guestName?: string;
    /**
     * Hotel Code of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    hotelId?: string;
    /**
     * The date-time in which the service request was opened.
     * @type {string}
     * @memberof ServiceRequest
     */
    openDate?: string;
    /**
     * The priority level of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    priority?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof ServiceRequest
     */
    profileId?: ProfileId;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ServiceRequest
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * The room number in which the service request was created.
     * @type {string}
     * @memberof ServiceRequest
     */
    room?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ServiceRequest
     */
    serviceRequestId?: UniqueIDType;
    /**
     * 
     * @type {ServiceRequestStatusType}
     * @memberof ServiceRequest
     */
    status?: ServiceRequestStatusType;
}

/**
 * Check if a given object implements the ServiceRequest interface.
 */
export function instanceOfServiceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceRequestFromJSON(json: any): ServiceRequest {
    return ServiceRequestFromJSONTyped(json, false);
}

export function ServiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'closeDescription': !exists(json, 'closeDescription') ? undefined : json['closeDescription'],
        'closedBy': !exists(json, 'closedBy') ? undefined : json['closedBy'],
        'closedDate': !exists(json, 'closedDate') ? undefined : json['closedDate'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'completionDate': !exists(json, 'completionDate') ? undefined : json['completionDate'],
        'department': !exists(json, 'department') ? undefined : CodeDescriptionTypeFromJSON(json['department']),
        'guaranteedBy': !exists(json, 'guaranteedBy') ? undefined : json['guaranteedBy'],
        'guestContactMethod': !exists(json, 'guestContactMethod') ? undefined : json['guestContactMethod'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'openDate': !exists(json, 'openDate') ? undefined : json['openDate'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'room': !exists(json, 'room') ? undefined : json['room'],
        'serviceRequestId': !exists(json, 'serviceRequestId') ? undefined : UniqueIDTypeFromJSON(json['serviceRequestId']),
        'status': !exists(json, 'status') ? undefined : ServiceRequestStatusTypeFromJSON(json['status']),
    };
}

export function ServiceRequestToJSON(value?: ServiceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'closeDescription': value.closeDescription,
        'closedBy': value.closedBy,
        'closedDate': value.closedDate,
        'code': value.code,
        'comment': value.comment,
        'completionDate': value.completionDate,
        'department': CodeDescriptionTypeToJSON(value.department),
        'guaranteedBy': value.guaranteedBy,
        'guestContactMethod': value.guestContactMethod,
        'guestName': value.guestName,
        'hotelId': value.hotelId,
        'openDate': value.openDate,
        'priority': value.priority,
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'room': value.room,
        'serviceRequestId': UniqueIDTypeToJSON(value.serviceRequestId),
        'status': ServiceRequestStatusTypeToJSON(value.status),
    };
}


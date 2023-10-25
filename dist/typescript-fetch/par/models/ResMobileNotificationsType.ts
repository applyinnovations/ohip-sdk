/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommunicationStatusType } from './CommunicationStatusType';
import {
    CommunicationStatusTypeFromJSON,
    CommunicationStatusTypeFromJSONTyped,
    CommunicationStatusTypeToJSON,
} from './CommunicationStatusType';

/**
 * Contains the status of Room Ready and Key Ready messages.
 * @export
 * @interface ResMobileNotificationsType
 */
export interface ResMobileNotificationsType {
    /**
     * Indicates if the Mobile checkout message is received.
     * @type {boolean}
     * @memberof ResMobileNotificationsType
     */
    checkoutMessageReceived?: boolean;
    /**
     * Error message when Mobile Notification has failed.
     * @type {string}
     * @memberof ResMobileNotificationsType
     */
    errorMessage?: string;
    /**
     * 
     * @type {CommunicationStatusType}
     * @memberof ResMobileNotificationsType
     */
    keyReady?: CommunicationStatusType;
    /**
     * Indicates if user action is required. The action could be for sending Room Ready or Key Ready Notification. It could also be for initiating Checkout
     * @type {boolean}
     * @memberof ResMobileNotificationsType
     */
    requiresAction?: boolean;
    /**
     * 
     * @type {CommunicationStatusType}
     * @memberof ResMobileNotificationsType
     */
    roomReady?: CommunicationStatusType;
}

/**
 * Check if a given object implements the ResMobileNotificationsType interface.
 */
export function instanceOfResMobileNotificationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResMobileNotificationsTypeFromJSON(json: any): ResMobileNotificationsType {
    return ResMobileNotificationsTypeFromJSONTyped(json, false);
}

export function ResMobileNotificationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResMobileNotificationsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkoutMessageReceived': !exists(json, 'checkoutMessageReceived') ? undefined : json['checkoutMessageReceived'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'keyReady': !exists(json, 'keyReady') ? undefined : CommunicationStatusTypeFromJSON(json['keyReady']),
        'requiresAction': !exists(json, 'requiresAction') ? undefined : json['requiresAction'],
        'roomReady': !exists(json, 'roomReady') ? undefined : CommunicationStatusTypeFromJSON(json['roomReady']),
    };
}

export function ResMobileNotificationsTypeToJSON(value?: ResMobileNotificationsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkoutMessageReceived': value.checkoutMessageReceived,
        'errorMessage': value.errorMessage,
        'keyReady': CommunicationStatusTypeToJSON(value.keyReady),
        'requiresAction': value.requiresAction,
        'roomReady': CommunicationStatusTypeToJSON(value.roomReady),
    };
}


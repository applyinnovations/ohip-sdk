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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * This contains assignment information for the maintenance request.
 * @export
 * @interface AssignedUserType
 */
export interface AssignedUserType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AssignedUserType
     */
    assignedByUser?: UniqueIDType;
    /**
     * Name of user who assigned this maintenance request.
     * @type {string}
     * @memberof AssignedUserType
     */
    assignedByUserName?: string;
    /**
     * Date when this task was assigned.
     * @type {string}
     * @memberof AssignedUserType
     */
    assignedDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AssignedUserType
     */
    assignedToUser?: UniqueIDType;
    /**
     * Name of user to whom this maintenance request has been assigned.
     * @type {string}
     * @memberof AssignedUserType
     */
    assignedToUserName?: string;
    /**
     * Date when this task is due.
     * @type {string}
     * @memberof AssignedUserType
     */
    expectedByDate?: string;
}

/**
 * Check if a given object implements the AssignedUserType interface.
 */
export function instanceOfAssignedUserType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssignedUserTypeFromJSON(json: any): AssignedUserType {
    return AssignedUserTypeFromJSONTyped(json, false);
}

export function AssignedUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignedUserType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assignedByUser': !exists(json, 'assignedByUser') ? undefined : UniqueIDTypeFromJSON(json['assignedByUser']),
        'assignedByUserName': !exists(json, 'assignedByUserName') ? undefined : json['assignedByUserName'],
        'assignedDate': !exists(json, 'assignedDate') ? undefined : json['assignedDate'],
        'assignedToUser': !exists(json, 'assignedToUser') ? undefined : UniqueIDTypeFromJSON(json['assignedToUser']),
        'assignedToUserName': !exists(json, 'assignedToUserName') ? undefined : json['assignedToUserName'],
        'expectedByDate': !exists(json, 'expectedByDate') ? undefined : json['expectedByDate'],
    };
}

export function AssignedUserTypeToJSON(value?: AssignedUserType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignedByUser': UniqueIDTypeToJSON(value.assignedByUser),
        'assignedByUserName': value.assignedByUserName,
        'assignedDate': value.assignedDate,
        'assignedToUser': UniqueIDTypeToJSON(value.assignedToUser),
        'assignedToUserName': value.assignedToUserName,
        'expectedByDate': value.expectedByDate,
    };
}

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
/**
 * 
 * @export
 * @interface ActivityLogType
 */
export interface ActivityLogType {
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    actionDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    actionType?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    croCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    hotelId?: string;
    /**
     * The IP Address of the machine that performed the activity
     * @type {string}
     * @memberof ActivityLogType
     */
    iPAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    logDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ActivityLogType
     */
    logUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    logUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    machineStation?: string;
    /**
     * 
     * @type {string}
     * @memberof ActivityLogType
     */
    module?: string;
    /**
     * 
     * @type {number}
     * @memberof ActivityLogType
     */
    refActionId?: number;
}

/**
 * Check if a given object implements the ActivityLogType interface.
 */
export function instanceOfActivityLogType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityLogTypeFromJSON(json: any): ActivityLogType {
    return ActivityLogTypeFromJSONTyped(json, false);
}

export function ActivityLogTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLogType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionDescription': !exists(json, 'actionDescription') ? undefined : json['actionDescription'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'croCode': !exists(json, 'croCode') ? undefined : json['croCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'iPAddress': !exists(json, 'iPAddress') ? undefined : json['iPAddress'],
        'logDate': !exists(json, 'logDate') ? undefined : json['logDate'],
        'logUserId': !exists(json, 'logUserId') ? undefined : json['logUserId'],
        'logUserName': !exists(json, 'logUserName') ? undefined : json['logUserName'],
        'machineStation': !exists(json, 'machineStation') ? undefined : json['machineStation'],
        'module': !exists(json, 'module') ? undefined : json['module'],
        'refActionId': !exists(json, 'refActionId') ? undefined : json['refActionId'],
    };
}

export function ActivityLogTypeToJSON(value?: ActivityLogType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionDescription': value.actionDescription,
        'actionType': value.actionType,
        'croCode': value.croCode,
        'hotelId': value.hotelId,
        'iPAddress': value.iPAddress,
        'logDate': value.logDate,
        'logUserId': value.logUserId,
        'logUserName': value.logUserName,
        'machineStation': value.machineStation,
        'module': value.module,
        'refActionId': value.refActionId,
    };
}


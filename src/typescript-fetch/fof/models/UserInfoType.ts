/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Opera User Information
 * @export
 * @interface UserInfoType
 */
export interface UserInfoType {
    /**
     * User Id of the Opera User
     * @type {number}
     * @memberof UserInfoType
     */
    userId?: number;
    /**
     * Name of the Opera User
     * @type {string}
     * @memberof UserInfoType
     */
    userName?: string;
}

/**
 * Check if a given object implements the UserInfoType interface.
 */
export function instanceOfUserInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserInfoTypeFromJSON(json: any): UserInfoType {
    return UserInfoTypeFromJSONTyped(json, false);
}

export function UserInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
    };
}

export function UserInfoTypeToJSON(value?: UserInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'userName': value.userName,
    };
}


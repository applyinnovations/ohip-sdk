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
 * Creation date time, Creator Id, last modification date time and last Modifier Id.
 * @export
 * @interface WebUserHistoryType
 */
export interface WebUserHistoryType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    creatorId?: string;
    /**
     * Inactive date.
     * @type {Date}
     * @memberof WebUserHistoryType
     */
    inactiveDate?: Date;
    /**
     * Last login date.
     * @type {Date}
     * @memberof WebUserHistoryType
     */
    lastLogin?: Date;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastModifyDateTime?: string;
    /**
     * Last Password change date.
     * @type {Date}
     * @memberof WebUserHistoryType
     */
    lastPasswordChange?: Date;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof WebUserHistoryType
     */
    purgeDate?: Date;
}

/**
 * Check if a given object implements the WebUserHistoryType interface.
 */
export function instanceOfWebUserHistoryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebUserHistoryTypeFromJSON(json: any): WebUserHistoryType {
    return WebUserHistoryTypeFromJSONTyped(json, false);
}

export function WebUserHistoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebUserHistoryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : (new Date(json['inactiveDate'])),
        'lastLogin': !exists(json, 'lastLogin') ? undefined : (new Date(json['lastLogin'])),
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastPasswordChange': !exists(json, 'lastPasswordChange') ? undefined : (new Date(json['lastPasswordChange'])),
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
    };
}

export function WebUserHistoryTypeToJSON(value?: WebUserHistoryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'inactiveDate': value.inactiveDate === undefined ? undefined : (value.inactiveDate.toISOString().substr(0,10)),
        'lastLogin': value.lastLogin === undefined ? undefined : (value.lastLogin.toISOString().substr(0,10)),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastPasswordChange': value.lastPasswordChange === undefined ? undefined : (value.lastPasswordChange.toISOString().substr(0,10)),
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
    };
}


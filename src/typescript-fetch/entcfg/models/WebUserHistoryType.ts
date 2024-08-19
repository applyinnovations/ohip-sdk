/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
     * Time stamp of last modification.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof WebUserHistoryType
     */
    purgeDate?: string;
    /**
     * Last login date.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastLogin?: string;
    /**
     * Last Password change date.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastPasswordChange?: string;
    /**
     * Inactive date.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    inactiveDate?: string;
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
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'lastLogin': !exists(json, 'lastLogin') ? undefined : json['lastLogin'],
        'lastPasswordChange': !exists(json, 'lastPasswordChange') ? undefined : json['lastPasswordChange'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
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
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
        'lastLogin': value.lastLogin,
        'lastPasswordChange': value.lastPasswordChange,
        'inactiveDate': value.inactiveDate,
    };
}


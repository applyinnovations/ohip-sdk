/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * @type {string}
     * @memberof WebUserHistoryType
     */
    inactiveDate?: string;
    /**
     * Last login date.
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastLogin?: string;
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
     * @type {string}
     * @memberof WebUserHistoryType
     */
    lastPasswordChange?: string;
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
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'lastLogin': !exists(json, 'lastLogin') ? undefined : json['lastLogin'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastPasswordChange': !exists(json, 'lastPasswordChange') ? undefined : json['lastPasswordChange'],
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
        'inactiveDate': value.inactiveDate,
        'lastLogin': value.lastLogin,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastPasswordChange': value.lastPasswordChange,
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information on an email for the customer.
 * @export
 * @interface EmailType
 */
export interface EmailType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof EmailType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof EmailType
     */
    creatorId?: string;
    /**
     * Defines the e-mail address.
     * @type {string}
     * @memberof EmailType
     */
    emailAddress?: string;
    /**
     * Supported Email format.
     * @type {string}
     * @memberof EmailType
     */
    emailFormat?: EmailTypeEmailFormatEnum;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof EmailType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof EmailType
     */
    lastModifyDateTime?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof EmailType
     */
    orderSequence?: number;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof EmailType
     */
    primaryInd?: boolean;
    /**
     * Defines the purpose of the e-mail address (e.g. personal, business, listserve).
     * @type {string}
     * @memberof EmailType
     */
    type?: string;
    /**
     * Describes the Type code
     * @type {string}
     * @memberof EmailType
     */
    typeDescription?: string;
}


/**
 * @export
 */
export const EmailTypeEmailFormatEnum = {
    Html: 'Html',
    Text: 'Text'
} as const;
export type EmailTypeEmailFormatEnum = typeof EmailTypeEmailFormatEnum[keyof typeof EmailTypeEmailFormatEnum];


/**
 * Check if a given object implements the EmailType interface.
 */
export function instanceOfEmailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailTypeFromJSON(json: any): EmailType {
    return EmailTypeFromJSONTyped(json, false);
}

export function EmailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'emailFormat': !exists(json, 'emailFormat') ? undefined : json['emailFormat'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
    };
}

export function EmailTypeToJSON(value?: EmailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'emailAddress': value.emailAddress,
        'emailFormat': value.emailFormat,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
        'type': value.type,
        'typeDescription': value.typeDescription,
    };
}


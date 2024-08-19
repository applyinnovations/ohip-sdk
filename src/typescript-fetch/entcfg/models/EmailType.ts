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
 * Information on an email for the customer.
 * @export
 * @interface EmailType
 */
export interface EmailType {
    /**
     * Defines the e-mail address.
     * @type {string}
     * @memberof EmailType
     */
    emailAddress?: string;
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
    /**
     * Supported Email format.
     * @type {string}
     * @memberof EmailType
     */
    emailFormat?: EmailTypeEmailFormatEnum;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof EmailType
     */
    primaryInd?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof EmailType
     */
    orderSequence?: number;
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
     * Time stamp of last modification.
     * @type {string}
     * @memberof EmailType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof EmailType
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof EmailType
     */
    purgeDate?: string;
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
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
        'emailFormat': !exists(json, 'emailFormat') ? undefined : json['emailFormat'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
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
        
        'emailAddress': value.emailAddress,
        'type': value.type,
        'typeDescription': value.typeDescription,
        'emailFormat': value.emailFormat,
        'primaryInd': value.primaryInd,
        'orderSequence': value.orderSequence,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
    };
}


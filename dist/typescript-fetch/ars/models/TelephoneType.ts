/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information on a telephone number for the customer.
 * @export
 * @interface TelephoneType
 */
export interface TelephoneType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof TelephoneType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof TelephoneType
     */
    creatorId?: string;
    /**
     * Extension to reach a specific party at the phone number.
     * @type {string}
     * @memberof TelephoneType
     */
    extension?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof TelephoneType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof TelephoneType
     */
    lastModifyDateTime?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof TelephoneType
     */
    orderSequence?: number;
    /**
     * Telephone number assigned to a single location.
     * @type {string}
     * @memberof TelephoneType
     */
    phoneNumber?: string;
    /**
     * Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc.
     * @type {string}
     * @memberof TelephoneType
     */
    phoneTechType?: string;
    /**
     * Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening).
     * @type {string}
     * @memberof TelephoneType
     */
    phoneUseType?: string;
    /**
     * Description of the PhoneUseType code
     * @type {string}
     * @memberof TelephoneType
     */
    phoneUseTypeDescription?: string;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof TelephoneType
     */
    primaryInd?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof TelephoneType
     */
    purgeDate?: Date;
}

/**
 * Check if a given object implements the TelephoneType interface.
 */
export function instanceOfTelephoneType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TelephoneTypeFromJSON(json: any): TelephoneType {
    return TelephoneTypeFromJSONTyped(json, false);
}

export function TelephoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelephoneType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneTechType': !exists(json, 'phoneTechType') ? undefined : json['phoneTechType'],
        'phoneUseType': !exists(json, 'phoneUseType') ? undefined : json['phoneUseType'],
        'phoneUseTypeDescription': !exists(json, 'phoneUseTypeDescription') ? undefined : json['phoneUseTypeDescription'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
    };
}

export function TelephoneTypeToJSON(value?: TelephoneType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'extension': value.extension,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'orderSequence': value.orderSequence,
        'phoneNumber': value.phoneNumber,
        'phoneTechType': value.phoneTechType,
        'phoneUseType': value.phoneUseType,
        'phoneUseTypeDescription': value.phoneUseTypeDescription,
        'primaryInd': value.primaryInd,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0,10)),
    };
}


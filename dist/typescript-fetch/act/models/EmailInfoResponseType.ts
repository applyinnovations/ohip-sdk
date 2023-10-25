/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountId } from './AccountId';
import {
    AccountIdFromJSON,
    AccountIdFromJSONTyped,
    AccountIdToJSON,
} from './AccountId';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { ContactId } from './ContactId';
import {
    ContactIdFromJSON,
    ContactIdFromJSONTyped,
    ContactIdToJSON,
} from './ContactId';
import type { EmailID } from './EmailID';
import {
    EmailIDFromJSON,
    EmailIDFromJSONTyped,
    EmailIDToJSON,
} from './EmailID';

/**
 * Defines elements related to fetched external emails stored.
 * @export
 * @interface EmailInfoResponseType
 */
export interface EmailInfoResponseType {
    /**
     * 
     * @type {AccountId}
     * @memberof EmailInfoResponseType
     */
    accountId?: AccountId;
    /**
     * 
     * @type {BlockId}
     * @memberof EmailInfoResponseType
     */
    blockId?: BlockId;
    /**
     * 
     * @type {ContactId}
     * @memberof EmailInfoResponseType
     */
    contactId?: ContactId;
    /**
     * Email Attachment Id for stored external emails.
     * @type {number}
     * @memberof EmailInfoResponseType
     */
    emailAttachmentId?: number;
    /**
     * 
     * @type {EmailID}
     * @memberof EmailInfoResponseType
     */
    emailID?: EmailID;
    /**
     * Email Recieved Date Time of the Sender.
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    emailReceivedDateTime?: string;
    /**
     * List of Email TO Recipients separated by ";"
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    emailRecipients?: string;
    /**
     * Subject of the email.
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    emailSubject?: string;
    /**
     * Indicates if the Email body has attachments included.
     * @type {boolean}
     * @memberof EmailInfoResponseType
     */
    hasEmailAttachments?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailInfoResponseType
     */
    hotelCodes?: Array<string>;
    /**
     * Email address of the Sender.
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    senderEmailAddress?: string;
    /**
     * Given name or first name of the Sender.
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    senderFirstName?: string;
    /**
     * Family name or last name of the Sender.
     * @type {string}
     * @memberof EmailInfoResponseType
     */
    senderLastName?: string;
}

/**
 * Check if a given object implements the EmailInfoResponseType interface.
 */
export function instanceOfEmailInfoResponseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailInfoResponseTypeFromJSON(json: any): EmailInfoResponseType {
    return EmailInfoResponseTypeFromJSONTyped(json, false);
}

export function EmailInfoResponseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailInfoResponseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : AccountIdFromJSON(json['accountId']),
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'contactId': !exists(json, 'contactId') ? undefined : ContactIdFromJSON(json['contactId']),
        'emailAttachmentId': !exists(json, 'emailAttachmentId') ? undefined : json['emailAttachmentId'],
        'emailID': !exists(json, 'emailID') ? undefined : EmailIDFromJSON(json['emailID']),
        'emailReceivedDateTime': !exists(json, 'emailReceivedDateTime') ? undefined : json['emailReceivedDateTime'],
        'emailRecipients': !exists(json, 'emailRecipients') ? undefined : json['emailRecipients'],
        'emailSubject': !exists(json, 'emailSubject') ? undefined : json['emailSubject'],
        'hasEmailAttachments': !exists(json, 'hasEmailAttachments') ? undefined : json['hasEmailAttachments'],
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : json['hotelCodes'],
        'senderEmailAddress': !exists(json, 'senderEmailAddress') ? undefined : json['senderEmailAddress'],
        'senderFirstName': !exists(json, 'senderFirstName') ? undefined : json['senderFirstName'],
        'senderLastName': !exists(json, 'senderLastName') ? undefined : json['senderLastName'],
    };
}

export function EmailInfoResponseTypeToJSON(value?: EmailInfoResponseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': AccountIdToJSON(value.accountId),
        'blockId': BlockIdToJSON(value.blockId),
        'contactId': ContactIdToJSON(value.contactId),
        'emailAttachmentId': value.emailAttachmentId,
        'emailID': EmailIDToJSON(value.emailID),
        'emailReceivedDateTime': value.emailReceivedDateTime,
        'emailRecipients': value.emailRecipients,
        'emailSubject': value.emailSubject,
        'hasEmailAttachments': value.hasEmailAttachments,
        'hotelCodes': value.hotelCodes,
        'senderEmailAddress': value.senderEmailAddress,
        'senderFirstName': value.senderFirstName,
        'senderLastName': value.senderLastName,
    };
}


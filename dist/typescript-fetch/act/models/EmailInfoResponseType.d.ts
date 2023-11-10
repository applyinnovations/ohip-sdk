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
import type { AccountId } from './AccountId';
import type { BlockId } from './BlockId';
import type { CodeListType } from './CodeListType';
import type { ContactId } from './ContactId';
import type { EmailID } from './EmailID';
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
     * @type {CodeListType}
     * @memberof EmailInfoResponseType
     */
    hotelCodes?: CodeListType;
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
export declare function instanceOfEmailInfoResponseType(value: object): boolean;
export declare function EmailInfoResponseTypeFromJSON(json: any): EmailInfoResponseType;
export declare function EmailInfoResponseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailInfoResponseType;
export declare function EmailInfoResponseTypeToJSON(value?: EmailInfoResponseType | null): any;

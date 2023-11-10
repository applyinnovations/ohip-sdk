/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof EmailType
     */
    purgeDate?: Date;
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
export declare const EmailTypeEmailFormatEnum: {
    readonly Html: "Html";
    readonly Text: "Text";
};
export type EmailTypeEmailFormatEnum = typeof EmailTypeEmailFormatEnum[keyof typeof EmailTypeEmailFormatEnum];
/**
 * Check if a given object implements the EmailType interface.
 */
export declare function instanceOfEmailType(value: object): boolean;
export declare function EmailTypeFromJSON(json: any): EmailType;
export declare function EmailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailType;
export declare function EmailTypeToJSON(value?: EmailType | null): any;

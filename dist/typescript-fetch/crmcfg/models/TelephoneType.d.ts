/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information on a telephone number for the customer.
 * @export
 * @interface TelephoneType
 */
export interface TelephoneType {
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
     * Telephone number assigned to a single location.
     * @type {string}
     * @memberof TelephoneType
     */
    phoneNumber?: string;
    /**
     * Extension to reach a specific party at the phone number.
     * @type {string}
     * @memberof TelephoneType
     */
    extension?: string;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof TelephoneType
     */
    primaryInd?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof TelephoneType
     */
    orderSequence?: number;
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
     * Time stamp of last modification.
     * @type {string}
     * @memberof TelephoneType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof TelephoneType
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof TelephoneType
     */
    purgeDate?: string;
}
/**
 * Check if a given object implements the TelephoneType interface.
 */
export declare function instanceOfTelephoneType(value: object): boolean;
export declare function TelephoneTypeFromJSON(json: any): TelephoneType;
export declare function TelephoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelephoneType;
export declare function TelephoneTypeToJSON(value?: TelephoneType | null): any;

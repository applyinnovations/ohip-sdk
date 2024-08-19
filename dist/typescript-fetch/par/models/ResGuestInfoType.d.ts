/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddressSearchType } from './AddressSearchType';
import type { AnonymizationType } from './AnonymizationType';
import type { CountryNameType } from './CountryNameType';
import type { GuestLastStayInfoType } from './GuestLastStayInfoType';
import type { MembershipInfoType } from './MembershipInfoType';
import type { NameTypeType } from './NameTypeType';
import type { ResAccompanyGuestInfoType } from './ResAccompanyGuestInfoType';
import type { ResGuestExternalInfoType } from './ResGuestExternalInfoType';
import type { VIPType } from './VIPType';
/**
 * Specifies Company or Travel Agent profile using IATA or Corp. No.
 * @export
 * @interface ResGuestInfoType
 */
export interface ResGuestInfoType {
    /**
     * Collection of accompany guests
     * @type {Array<ResAccompanyGuestInfoType>}
     * @memberof ResGuestInfoType
     */
    accompanyGuests?: Array<ResAccompanyGuestInfoType>;
    /**
     *
     * @type {AddressSearchType}
     * @memberof ResGuestInfoType
     */
    address?: AddressSearchType;
    /**
     * Altername full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateFullName?: string;
    /**
     * Alternate given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateGivenName?: string;
    /**
     * Alternate family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateSurname?: string;
    /**
     *
     * @type {AnonymizationType}
     * @memberof ResGuestInfoType
     */
    anonymization?: AnonymizationType;
    /**
     * Date of birth
     * @type {string}
     * @memberof ResGuestInfoType
     */
    birthDate?: string;
    /**
     * Email address
     * @type {string}
     * @memberof ResGuestInfoType
     */
    email?: string;
    /**
     *
     * @type {ResGuestExternalInfoType}
     * @memberof ResGuestInfoType
     */
    externalInfo?: ResGuestExternalInfoType;
    /**
     * Full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    fullName?: string;
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    givenName?: string;
    /**
     *
     * @type {GuestLastStayInfoType}
     * @memberof ResGuestInfoType
     */
    guestLastStayInfo?: GuestLastStayInfoType;
    /**
     * True indicates there are restrictions associated with the current profile.
     * @type {boolean}
     * @memberof ResGuestInfoType
     */
    guestRestricted?: boolean;
    /**
     * Guest profile restricted reason code
     * @type {string}
     * @memberof ResGuestInfoType
     */
    guestRestrictedCode?: string;
    /**
     * Guest profile restricted reason description
     * @type {string}
     * @memberof ResGuestInfoType
     */
    guestRestrictedReasonDesc?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    id?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    language?: string;
    /**
     *
     * @type {MembershipInfoType}
     * @memberof ResGuestInfoType
     */
    membership?: MembershipInfoType;
    /**
     * The middle name of the person name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    middleName?: string;
    /**
     * Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ResGuestInfoType
     */
    namePrefix?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.).
     * @type {string}
     * @memberof ResGuestInfoType
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof ResGuestInfoType
     */
    nameTitle?: string;
    /**
     *
     * @type {NameTypeType}
     * @memberof ResGuestInfoType
     */
    nameType?: NameTypeType;
    /**
     *
     * @type {CountryNameType}
     * @memberof ResGuestInfoType
     */
    nationality?: CountryNameType;
    /**
     * Phone number
     * @type {string}
     * @memberof ResGuestInfoType
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the police registration card number.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    registrationCardNo?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surname?: string;
    /**
     * e.g "van der", "von", "de"
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surnamePrefix?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    type?: string;
    /**
     *
     * @type {VIPType}
     * @memberof ResGuestInfoType
     */
    vip?: VIPType;
}
/**
 * Check if a given object implements the ResGuestInfoType interface.
 */
export declare function instanceOfResGuestInfoType(value: object): boolean;
export declare function ResGuestInfoTypeFromJSON(json: any): ResGuestInfoType;
export declare function ResGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestInfoType;
export declare function ResGuestInfoTypeToJSON(value?: ResGuestInfoType | null): any;

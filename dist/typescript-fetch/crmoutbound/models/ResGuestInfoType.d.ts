/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { ResAccompanyGuestListType } from './ResAccompanyGuestListType';
import type { ResGuestExternalInfoType } from './ResGuestExternalInfoType';
import type { VIPType } from './VIPType';
/**
 * Specifies Company or Travel Agent profile using IATA or Corp. No.
 * @export
 * @interface ResGuestInfoType
 */
export interface ResGuestInfoType {
    /**
     *
     * @type {MembershipInfoType}
     * @memberof ResGuestInfoType
     */
    membership?: MembershipInfoType;
    /**
     * Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ResGuestInfoType
     */
    namePrefix?: string;
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    givenName?: string;
    /**
     * Alternate given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    altGivenName?: string;
    /**
     * The middle name of the person name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    middleName?: string;
    /**
     * e.g "van der", "von", "de"
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surnamePrefix?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surname?: string;
    /**
     * Alternate family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    altSurname?: string;
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
     * Full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    fullName?: string;
    /**
     * Altername full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    altFullName?: string;
    /**
     * Phone number
     * @type {string}
     * @memberof ResGuestInfoType
     */
    phoneNumber?: string;
    /**
     * Email address
     * @type {string}
     * @memberof ResGuestInfoType
     */
    email?: string;
    /**
     * Date of birth
     * @type {Date}
     * @memberof ResGuestInfoType
     */
    birthDate?: Date;
    /**
     * Language identification.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    language?: string;
    /**
     *
     * @type {CountryNameType}
     * @memberof ResGuestInfoType
     */
    nationality?: CountryNameType;
    /**
     *
     * @type {VIPType}
     * @memberof ResGuestInfoType
     */
    vip?: VIPType;
    /**
     *
     * @type {AddressSearchType}
     * @memberof ResGuestInfoType
     */
    address?: AddressSearchType;
    /**
     *
     * @type {AnonymizationType}
     * @memberof ResGuestInfoType
     */
    anonymization?: AnonymizationType;
    /**
     *
     * @type {ResAccompanyGuestListType}
     * @memberof ResGuestInfoType
     */
    accompanyGuests?: ResAccompanyGuestListType;
    /**
     *
     * @type {ResGuestExternalInfoType}
     * @memberof ResGuestInfoType
     */
    externalInfo?: ResGuestExternalInfoType;
    /**
     *
     * @type {GuestLastStayInfoType}
     * @memberof ResGuestInfoType
     */
    guestLastStayInfo?: GuestLastStayInfoType;
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
     * True indicates there are restrictions associated with the current profile.
     * @type {boolean}
     * @memberof ResGuestInfoType
     */
    guestRestricted?: boolean;
    /**
     * Unique identifier of the police registration card number.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    registrationCardNo?: string;
    /**
     *
     * @type {NameTypeType}
     * @memberof ResGuestInfoType
     */
    nameType?: NameTypeType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    type?: string;
}
/**
 * Check if a given object implements the ResGuestInfoType interface.
 */
export declare function instanceOfResGuestInfoType(value: object): boolean;
export declare function ResGuestInfoTypeFromJSON(json: any): ResGuestInfoType;
export declare function ResGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestInfoType;
export declare function ResGuestInfoTypeToJSON(value?: ResGuestInfoType | null): any;

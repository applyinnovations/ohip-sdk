/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileStatusType } from './ProfileStatusType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { RelationshipAddressType } from './RelationshipAddressType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface RelationshipProfileSummaryType
 */
export interface RelationshipProfileSummaryType {
    /**
     *
     * @type {RelationshipAddressType}
     * @memberof RelationshipProfileSummaryType
     */
    address?: RelationshipAddressType;
    /**
     * Name of the company.
     * @type {string}
     * @memberof RelationshipProfileSummaryType
     */
    companyName?: string;
    /**
     * Name of the customer
     * @type {string}
     * @memberof RelationshipProfileSummaryType
     */
    customerName?: string;
    /**
     * Defines the e-mail address.
     * @type {string}
     * @memberof RelationshipProfileSummaryType
     */
    emailAddress?: string;
    /**
     * Unique Code to identify the owner.
     * @type {string}
     * @memberof RelationshipProfileSummaryType
     */
    ownerCode?: string;
    /**
     * Indicates if this relationship is the primary relationship.
     * @type {boolean}
     * @memberof RelationshipProfileSummaryType
     */
    primary?: boolean;
    /**
     * When true, this is a primary owner.
     * @type {boolean}
     * @memberof RelationshipProfileSummaryType
     */
    primaryOwnerCode?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof RelationshipProfileSummaryType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof RelationshipProfileSummaryType
     */
    profileStatus?: ProfileStatusType;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof RelationshipProfileSummaryType
     */
    profileType?: ProfileTypeType;
    /**
     * Telephone number assigned to a single location
     * @type {string}
     * @memberof RelationshipProfileSummaryType
     */
    telephoneNumber?: string;
}
/**
 * Check if a given object implements the RelationshipProfileSummaryType interface.
 */
export declare function instanceOfRelationshipProfileSummaryType(value: object): boolean;
export declare function RelationshipProfileSummaryTypeFromJSON(json: any): RelationshipProfileSummaryType;
export declare function RelationshipProfileSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipProfileSummaryType;
export declare function RelationshipProfileSummaryTypeToJSON(value?: RelationshipProfileSummaryType | null): any;
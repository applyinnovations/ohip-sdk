/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
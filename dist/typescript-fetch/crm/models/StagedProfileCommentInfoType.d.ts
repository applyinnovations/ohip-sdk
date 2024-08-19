/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CommentType } from './CommentType';
/**
 * Comment related to the profile/reservation.
 * @export
 * @interface StagedProfileCommentInfoType
 */
export interface StagedProfileCommentInfoType {
    /**
     *
     * @type {CommentType}
     * @memberof StagedProfileCommentInfoType
     */
    comment?: CommentType;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof StagedProfileCommentInfoType
     */
    count?: number;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    creatorId?: string;
    /**
     * The error in a user defined field in a staged profile with an invalid status.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    errorDescription?: string;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof StagedProfileCommentInfoType
     */
    hasMore?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    id?: string;
    /**
     * Indicates comment inactive date.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    inActiveDate?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    lastModifyDateTime?: string;
    /**
     * The line number of the comment.
     * @type {number}
     * @memberof StagedProfileCommentInfoType
     */
    lineNo?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof StagedProfileCommentInfoType
     */
    totalResults?: number;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileCommentInfoType
     */
    type?: string;
    /**
     * Indicates whether the comment information is valid.
     * @type {boolean}
     * @memberof StagedProfileCommentInfoType
     */
    valid?: boolean;
}
/**
 * Check if a given object implements the StagedProfileCommentInfoType interface.
 */
export declare function instanceOfStagedProfileCommentInfoType(value: object): boolean;
export declare function StagedProfileCommentInfoTypeFromJSON(json: any): StagedProfileCommentInfoType;
export declare function StagedProfileCommentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileCommentInfoType;
export declare function StagedProfileCommentInfoTypeToJSON(value?: StagedProfileCommentInfoType | null): any;

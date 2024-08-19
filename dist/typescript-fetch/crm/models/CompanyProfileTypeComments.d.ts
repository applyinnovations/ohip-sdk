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
import type { CommentInfoType } from './CommentInfoType';
/**
 * List of Notes for the customer.
 * @export
 * @interface CompanyProfileTypeComments
 */
export interface CompanyProfileTypeComments {
    /**
     * Collection of Detailed information on comments for the customer.
     * @type {Array<CommentInfoType>}
     * @memberof CompanyProfileTypeComments
     */
    commentInfo?: Array<CommentInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeComments
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CompanyProfileTypeComments
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeComments
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the CompanyProfileTypeComments interface.
 */
export declare function instanceOfCompanyProfileTypeComments(value: object): boolean;
export declare function CompanyProfileTypeCommentsFromJSON(json: any): CompanyProfileTypeComments;
export declare function CompanyProfileTypeCommentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeComments;
export declare function CompanyProfileTypeCommentsToJSON(value?: CompanyProfileTypeComments | null): any;

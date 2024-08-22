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
import type { InstanceLink } from './InstanceLink';
import type { StagedProfileSummariesType } from './StagedProfileSummariesType';
import type { WarningType } from './WarningType';
/**
 * Response object for the staged profiles.
 * @export
 * @interface StagedProfiles
 */
export interface StagedProfiles {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof StagedProfiles
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {StagedProfileSummariesType}
     * @memberof StagedProfiles
     */
    stagedProfiles?: StagedProfileSummariesType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof StagedProfiles
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the StagedProfiles interface.
 */
export declare function instanceOfStagedProfiles(value: object): boolean;
export declare function StagedProfilesFromJSON(json: any): StagedProfiles;
export declare function StagedProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfiles;
export declare function StagedProfilesToJSON(value?: StagedProfiles | null): any;

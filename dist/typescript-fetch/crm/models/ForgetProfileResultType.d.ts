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
import type { AnonymizationStatusType } from './AnonymizationStatusType';
import type { ForgetProfileFailureReasonType } from './ForgetProfileFailureReasonType';
import type { ProfileId } from './ProfileId';
/**
 * Results of Anonymization processing/validation.
 * @export
 * @interface ForgetProfileResultType
 */
export interface ForgetProfileResultType {
    /**
     * Indicates if the profile is eligible to be anonymized.
     * @type {boolean}
     * @memberof ForgetProfileResultType
     */
    canBeForgotten?: boolean;
    /**
     * Reason describing why the profile is not eligible to be forgotten.
     * @type {Array<ForgetProfileFailureReasonType>}
     * @memberof ForgetProfileResultType
     */
    failureReasons?: Array<ForgetProfileFailureReasonType>;
    /**
     *
     * @type {ProfileId}
     * @memberof ForgetProfileResultType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {AnonymizationStatusType}
     * @memberof ForgetProfileResultType
     */
    status?: AnonymizationStatusType;
}
/**
 * Check if a given object implements the ForgetProfileResultType interface.
 */
export declare function instanceOfForgetProfileResultType(value: object): boolean;
export declare function ForgetProfileResultTypeFromJSON(json: any): ForgetProfileResultType;
export declare function ForgetProfileResultTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForgetProfileResultType;
export declare function ForgetProfileResultTypeToJSON(value?: ForgetProfileResultType | null): any;
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MembershipEnrollmentCodesInfoType } from './MembershipEnrollmentCodesInfoType';
/**
 * Base type provides information about Membership Market/Property Groups Configuration.
 * @export
 * @interface MembershipEnrollmentGroupType
 */
export interface MembershipEnrollmentGroupType {
    /**
     * Code is used to identify a Membership Market/Resort Group.
     * @type {string}
     * @memberof MembershipEnrollmentGroupType
     */
    code?: string;
    /**
     * Description of the Membership Market/Propety Group.
     * @type {string}
     * @memberof MembershipEnrollmentGroupType
     */
    description?: string;
    /**
     * Membership Market/Property Groups display sequence Number
     * @type {number}
     * @memberof MembershipEnrollmentGroupType
     */
    displaySequence?: number;
    /**
     *
     * @type {MembershipEnrollmentCodesInfoType}
     * @memberof MembershipEnrollmentGroupType
     */
    enrollmentCodes?: MembershipEnrollmentCodesInfoType;
}
/**
 * Check if a given object implements the MembershipEnrollmentGroupType interface.
 */
export declare function instanceOfMembershipEnrollmentGroupType(value: object): boolean;
export declare function MembershipEnrollmentGroupTypeFromJSON(json: any): MembershipEnrollmentGroupType;
export declare function MembershipEnrollmentGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipEnrollmentGroupType;
export declare function MembershipEnrollmentGroupTypeToJSON(value?: MembershipEnrollmentGroupType | null): any;
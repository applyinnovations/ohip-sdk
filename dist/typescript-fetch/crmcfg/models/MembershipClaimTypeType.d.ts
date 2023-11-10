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
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface MembershipClaimTypeType
 */
export interface MembershipClaimTypeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof MembershipClaimTypeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof MembershipClaimTypeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof MembershipClaimTypeType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the MembershipClaimTypeType interface.
 */
export declare function instanceOfMembershipClaimTypeType(value: object): boolean;
export declare function MembershipClaimTypeTypeFromJSON(json: any): MembershipClaimTypeType;
export declare function MembershipClaimTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipClaimTypeType;
export declare function MembershipClaimTypeTypeToJSON(value?: MembershipClaimTypeType | null): any;

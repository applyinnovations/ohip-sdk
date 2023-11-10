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
 * @interface MembershipClaimOriginType
 */
export interface MembershipClaimOriginType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof MembershipClaimOriginType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof MembershipClaimOriginType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof MembershipClaimOriginType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the MembershipClaimOriginType interface.
 */
export declare function instanceOfMembershipClaimOriginType(value: object): boolean;
export declare function MembershipClaimOriginTypeFromJSON(json: any): MembershipClaimOriginType;
export declare function MembershipClaimOriginTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipClaimOriginType;
export declare function MembershipClaimOriginTypeToJSON(value?: MembershipClaimOriginType | null): any;

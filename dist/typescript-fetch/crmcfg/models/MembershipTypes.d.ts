/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { MembershipTypeType } from './MembershipTypeType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Membership Types.
 * @export
 * @interface MembershipTypes
 */
export interface MembershipTypes {
    /**
     * Membership Type
     * @type {Array<MembershipTypeType>}
     * @memberof MembershipTypes
     */
    membershipTypes?: Array<MembershipTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof MembershipTypes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipTypes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the MembershipTypes interface.
 */
export declare function instanceOfMembershipTypes(value: object): boolean;
export declare function MembershipTypesFromJSON(json: any): MembershipTypes;
export declare function MembershipTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypes;
export declare function MembershipTypesToJSON(value?: MembershipTypes | null): any;
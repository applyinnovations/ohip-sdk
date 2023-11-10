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
import type { MembershipPropertyCodesType } from './MembershipPropertyCodesType';
/**
 * Base type provides information about Membership Market/Property Groups Configuration.
 * @export
 * @interface MembershipPropertyGroupType
 */
export interface MembershipPropertyGroupType {
    /**
     * Code is used to identify a Membership Market/Resort Group.
     * @type {string}
     * @memberof MembershipPropertyGroupType
     */
    code?: string;
    /**
     * Description of the Membership Market/Propety Group.
     * @type {string}
     * @memberof MembershipPropertyGroupType
     */
    description?: string;
    /**
     * Membership Market/Property Groups display sequence Number
     * @type {number}
     * @memberof MembershipPropertyGroupType
     */
    displaySequence?: number;
    /**
     *
     * @type {MembershipPropertyCodesType}
     * @memberof MembershipPropertyGroupType
     */
    hotels?: MembershipPropertyCodesType;
}
/**
 * Check if a given object implements the MembershipPropertyGroupType interface.
 */
export declare function instanceOfMembershipPropertyGroupType(value: object): boolean;
export declare function MembershipPropertyGroupTypeFromJSON(json: any): MembershipPropertyGroupType;
export declare function MembershipPropertyGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipPropertyGroupType;
export declare function MembershipPropertyGroupTypeToJSON(value?: MembershipPropertyGroupType | null): any;

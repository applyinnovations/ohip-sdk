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
import type { MembershipClassType } from './MembershipClassType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Membership Class.
 * @export
 * @interface MembershipClassesInfo
 */
export interface MembershipClassesInfo {
    /**
     * List of the Membership Class to be configured or fetched
     * @type {Array<MembershipClassType>}
     * @memberof MembershipClassesInfo
     */
    membershipClasses?: Array<MembershipClassType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof MembershipClassesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipClassesInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the MembershipClassesInfo interface.
 */
export declare function instanceOfMembershipClassesInfo(value: object): boolean;
export declare function MembershipClassesInfoFromJSON(json: any): MembershipClassesInfo;
export declare function MembershipClassesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipClassesInfo;
export declare function MembershipClassesInfoToJSON(value?: MembershipClassesInfo | null): any;
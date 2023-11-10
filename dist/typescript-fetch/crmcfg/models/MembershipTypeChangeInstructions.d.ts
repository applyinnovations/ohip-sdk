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
import type { Links } from './Links';
import type { MembershipTypeChangeInstructionType } from './MembershipTypeChangeInstructionType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing membership type.
 * @export
 * @interface MembershipTypeChangeInstructions
 */
export interface MembershipTypeChangeInstructions {
    /**
     *
     * @type {Links}
     * @memberof MembershipTypeChangeInstructions
     */
    links?: Links;
    /**
     * A collection of MembershipTypes with information that needs to be changed.
     * @type {Array<MembershipTypeChangeInstructionType>}
     * @memberof MembershipTypeChangeInstructions
     */
    membershipTypeChangeInstructions?: Array<MembershipTypeChangeInstructionType>;
    /**
     *
     * @type {WarningsType}
     * @memberof MembershipTypeChangeInstructions
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MembershipTypeChangeInstructions interface.
 */
export declare function instanceOfMembershipTypeChangeInstructions(value: object): boolean;
export declare function MembershipTypeChangeInstructionsFromJSON(json: any): MembershipTypeChangeInstructions;
export declare function MembershipTypeChangeInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeChangeInstructions;
export declare function MembershipTypeChangeInstructionsToJSON(value?: MembershipTypeChangeInstructions | null): any;

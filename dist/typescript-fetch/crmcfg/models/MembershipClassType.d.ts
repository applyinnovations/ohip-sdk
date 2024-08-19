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
/**
 * Base type provides information about Membership Market/Property Groups Configuration.
 * @export
 * @interface MembershipClassType
 */
export interface MembershipClassType {
    /**
     * Code is used to identify a Membership Market/Resort Group.
     * @type {string}
     * @memberof MembershipClassType
     */
    code?: string;
    /**
     * Description of the Membership Market/Propety Group.
     * @type {string}
     * @memberof MembershipClassType
     */
    description?: string;
    /**
     * Membership Market/Property Groups display sequence Number
     * @type {number}
     * @memberof MembershipClassType
     */
    displaySequence?: number;
    /**
     * This flag indicates whether the membership class is eligible for loyalty program or not.
     * @type {boolean}
     * @memberof MembershipClassType
     */
    loyaltyProgram?: boolean;
    /**
     * This flag indicates whether the membership class is eligible for frequent flyer or not.
     * @type {boolean}
     * @memberof MembershipClassType
     */
    frequentFlyer?: boolean;
}
/**
 * Check if a given object implements the MembershipClassType interface.
 */
export declare function instanceOfMembershipClassType(value: object): boolean;
export declare function MembershipClassTypeFromJSON(json: any): MembershipClassType;
export declare function MembershipClassTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipClassType;
export declare function MembershipClassTypeToJSON(value?: MembershipClassType | null): any;

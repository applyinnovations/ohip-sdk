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
 * Information related to Other Award.
 * @export
 * @interface MembershipAwardOtherInfoType
 */
export interface MembershipAwardOtherInfoType {
    /**
     * Points required to avail/redeem this award.
     * @type {number}
     * @memberof MembershipAwardOtherInfoType
     */
    pointsRequired?: number;
    /**
     * The actual value of the award, in the amount of currency.
     * @type {number}
     * @memberof MembershipAwardOtherInfoType
     */
    awardValue?: number;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardOtherInfoType
     */
    messageLine1?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardOtherInfoType
     */
    messageLine2?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardOtherInfoType
     */
    messageLine3?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardOtherInfoType
     */
    messageLine4?: string;
    /**
     * Display set for other type of awards for export purpose.
     * @type {string}
     * @memberof MembershipAwardOtherInfoType
     */
    displaySet?: string;
}
/**
 * Check if a given object implements the MembershipAwardOtherInfoType interface.
 */
export declare function instanceOfMembershipAwardOtherInfoType(value: object): boolean;
export declare function MembershipAwardOtherInfoTypeFromJSON(json: any): MembershipAwardOtherInfoType;
export declare function MembershipAwardOtherInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardOtherInfoType;
export declare function MembershipAwardOtherInfoTypeToJSON(value?: MembershipAwardOtherInfoType | null): any;

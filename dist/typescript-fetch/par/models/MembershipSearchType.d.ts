/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Identifies criteria for searching frequent customer reward program.
 * @export
 * @interface MembershipSearchType
 */
export interface MembershipSearchType {
    /**
     * If this is true,the reservations which has membership information associated will be resulted .
     * @type {boolean}
     * @memberof MembershipSearchType
     */
    associatedReservationsOnly?: boolean;
    /**
     * Membership ID criteria.
     * @type {string}
     * @memberof MembershipSearchType
     */
    membershipId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof MembershipSearchType
     */
    membershipLevel?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof MembershipSearchType
     */
    membershipType?: Array<string>;
}
/**
 * Check if a given object implements the MembershipSearchType interface.
 */
export declare function instanceOfMembershipSearchType(value: object): boolean;
export declare function MembershipSearchTypeFromJSON(json: any): MembershipSearchType;
export declare function MembershipSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipSearchType;
export declare function MembershipSearchTypeToJSON(value?: MembershipSearchType | null): any;
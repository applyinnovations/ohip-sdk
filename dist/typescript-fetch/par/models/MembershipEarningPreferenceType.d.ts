/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points.
 * @export
 */
export declare const MembershipEarningPreferenceType: {
    readonly Points: "Points";
    readonly Miles: "Miles";
};
export type MembershipEarningPreferenceType = typeof MembershipEarningPreferenceType[keyof typeof MembershipEarningPreferenceType];
export declare function MembershipEarningPreferenceTypeFromJSON(json: any): MembershipEarningPreferenceType;
export declare function MembershipEarningPreferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipEarningPreferenceType;
export declare function MembershipEarningPreferenceTypeToJSON(value?: MembershipEarningPreferenceType | null): any;

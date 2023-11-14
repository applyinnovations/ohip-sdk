/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * A Traveling Rule will add extra credit to a task assignment sheet when rooms from multiple Buildings, Section Groups, Sections and/or Floors are assigned.
 * @export
 */
export declare const HousekeepingCreditRuleTypeType: {
    readonly FacilityTask: "FacilityTask";
    readonly Miscellaneous: "Miscellaneous";
    readonly Special: "Special";
    readonly Travelling: "Travelling";
};
export type HousekeepingCreditRuleTypeType = typeof HousekeepingCreditRuleTypeType[keyof typeof HousekeepingCreditRuleTypeType];
export declare function HousekeepingCreditRuleTypeTypeFromJSON(json: any): HousekeepingCreditRuleTypeType;
export declare function HousekeepingCreditRuleTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRuleTypeType;
export declare function HousekeepingCreditRuleTypeTypeToJSON(value?: HousekeepingCreditRuleTypeType | null): any;
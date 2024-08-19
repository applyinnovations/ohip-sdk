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
 * 12 month period based on starting month.
 * @export
 */
export declare const CalendarPeriodType: {
    readonly Calendar: "Calendar";
    readonly Rolling: "Rolling";
};
export type CalendarPeriodType = typeof CalendarPeriodType[keyof typeof CalendarPeriodType];
export declare function CalendarPeriodTypeFromJSON(json: any): CalendarPeriodType;
export declare function CalendarPeriodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarPeriodType;
export declare function CalendarPeriodTypeToJSON(value?: CalendarPeriodType | null): any;

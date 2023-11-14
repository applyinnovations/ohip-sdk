/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { RulePointsTypeType } from './RulePointsTypeType';
/**
 * Information related to a Calculated Points.
 * @export
 * @interface CalculatedPointType
 */
export interface CalculatedPointType {
    /**
     * Indicates the billing group the points belong to.
     * @type {string}
     * @memberof CalculatedPointType
     */
    billingGroup?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CalculatedPointType
     */
    costPerNight?: CurrencyAmountType;
    /**
     * Indicates the total award/tier points generated.
     * @type {number}
     * @memberof CalculatedPointType
     */
    points?: number;
    /**
     * Indicates the validated rules to generate points.
     * @type {string}
     * @memberof CalculatedPointType
     */
    rule?: string;
    /**
     * Indicates rule code for the rule.
     * @type {string}
     * @memberof CalculatedPointType
     */
    ruleCode?: string;
    /**
     *
     * @type {RulePointsTypeType}
     * @memberof CalculatedPointType
     */
    type?: RulePointsTypeType;
}
/**
 * Check if a given object implements the CalculatedPointType interface.
 */
export declare function instanceOfCalculatedPointType(value: object): boolean;
export declare function CalculatedPointTypeFromJSON(json: any): CalculatedPointType;
export declare function CalculatedPointTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalculatedPointType;
export declare function CalculatedPointTypeToJSON(value?: CalculatedPointType | null): any;
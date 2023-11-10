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
import type { CodeListType } from './CodeListType';
import type { HousekeepingCreditRuleTravelTypeType } from './HousekeepingCreditRuleTravelTypeType';
import type { HousekeepingCreditRuleTypeFacilityTaskRule } from './HousekeepingCreditRuleTypeFacilityTaskRule';
import type { HousekeepingCreditRuleTypeType } from './HousekeepingCreditRuleTypeType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
/**
 * The information of housekeeping credit rule for configuration.
 * @export
 * @interface HousekeepingCreditRuleType
 */
export interface HousekeepingCreditRuleType {
    /**
     *
     * @type {CodeListType}
     * @memberof HousekeepingCreditRuleType
     */
    buildings?: CodeListType;
    /**
     * The additional credits which are applied to the task assignment sheet when the rule criteria has been met.
     * @type {number}
     * @memberof HousekeepingCreditRuleType
     */
    creditValue?: number;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof HousekeepingCreditRuleType
     */
    daysOfWeek?: TimeSpanDaysOfWeekType;
    /**
     * Description of housekeeping credit rule.
     * @type {string}
     * @memberof HousekeepingCreditRuleType
     */
    description?: string;
    /**
     *
     * @type {HousekeepingCreditRuleTypeFacilityTaskRule}
     * @memberof HousekeepingCreditRuleType
     */
    facilityTaskRule?: HousekeepingCreditRuleTypeFacilityTaskRule;
    /**
     * Hotel Code where housekeeping credit rule belongs to.
     * @type {string}
     * @memberof HousekeepingCreditRuleType
     */
    hotelId?: string;
    /**
     * Indicates if the Housekeeping Credit Rule is inactive.
     * @type {boolean}
     * @memberof HousekeepingCreditRuleType
     */
    inactive?: boolean;
    /**
     * Rule Code of housekeeping credit rule.
     * @type {string}
     * @memberof HousekeepingCreditRuleType
     */
    ruleCode?: string;
    /**
     *
     * @type {HousekeepingCreditRuleTypeType}
     * @memberof HousekeepingCreditRuleType
     */
    ruleType?: HousekeepingCreditRuleTypeType;
    /**
     * When RuleType is set to Special, specifies which special makes this credit rule applicable. For example, the credit value will be added to the task assignment sheet when the assigned room has this specific special applied to the reservation.
     * @type {string}
     * @memberof HousekeepingCreditRuleType
     */
    special?: string;
    /**
     *
     * @type {HousekeepingCreditRuleTravelTypeType}
     * @memberof HousekeepingCreditRuleType
     */
    travelType?: HousekeepingCreditRuleTravelTypeType;
}
/**
 * Check if a given object implements the HousekeepingCreditRuleType interface.
 */
export declare function instanceOfHousekeepingCreditRuleType(value: object): boolean;
export declare function HousekeepingCreditRuleTypeFromJSON(json: any): HousekeepingCreditRuleType;
export declare function HousekeepingCreditRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRuleType;
export declare function HousekeepingCreditRuleTypeToJSON(value?: HousekeepingCreditRuleType | null): any;

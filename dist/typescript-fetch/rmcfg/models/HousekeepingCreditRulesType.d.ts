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
import type { HousekeepingCreditRuleType } from './HousekeepingCreditRuleType';
/**
 * The information of housekeeping credit rule for configuration.
 * @export
 * @interface HousekeepingCreditRulesType
 */
export interface HousekeepingCreditRulesType extends Array<HousekeepingCreditRuleType> {
}
/**
 * Check if a given object implements the HousekeepingCreditRulesType interface.
 */
export declare function instanceOfHousekeepingCreditRulesType(value: object): boolean;
export declare function HousekeepingCreditRulesTypeFromJSON(json: any): HousekeepingCreditRulesType;
export declare function HousekeepingCreditRulesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingCreditRulesType;
export declare function HousekeepingCreditRulesTypeToJSON(value?: HousekeepingCreditRulesType | null): any;

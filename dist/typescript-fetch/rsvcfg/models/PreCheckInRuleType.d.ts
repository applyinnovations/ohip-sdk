/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MembershipTypeLevelType } from './MembershipTypeLevelType';
import type { PreCheckInRuleTypeType } from './PreCheckInRuleTypeType';
import type { PreCheckInTimeRuleTypes } from './PreCheckInTimeRuleTypes';
import type { TimeSpanType } from './TimeSpanType';
/**
 * A Internet Pre Check-In Rule
 * @export
 * @interface PreCheckInRuleType
 */
export interface PreCheckInRuleType {
    /**
     * Hotel code of Pre Check-In Rule to be searched
     * @type {string}
     * @memberof PreCheckInRuleType
     */
    hotelId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    marketCodes?: Array<string>;
    /**
     * Code type for Rule Details
     * @type {Array<MembershipTypeLevelType>}
     * @memberof PreCheckInRuleType
     */
    memberships?: Array<MembershipTypeLevelType>;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PreCheckInRuleType
     */
    newTimeSpan?: TimeSpanType;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    originCodes?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    ratePlans?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    reservationTypes?: Array<string>;
    /**
     *
     * @type {PreCheckInRuleTypeType}
     * @memberof PreCheckInRuleType
     */
    ruleType?: PreCheckInRuleTypeType;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    specials?: Array<string>;
    /**
     *
     * @type {PreCheckInTimeRuleTypes}
     * @memberof PreCheckInRuleType
     */
    timeLimit?: PreCheckInTimeRuleTypes;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PreCheckInRuleType
     */
    timeSpan?: TimeSpanType;
    /**
     *
     * @type {Array<string>}
     * @memberof PreCheckInRuleType
     */
    vIPCodes?: Array<string>;
}
/**
 * Check if a given object implements the PreCheckInRuleType interface.
 */
export declare function instanceOfPreCheckInRuleType(value: object): boolean;
export declare function PreCheckInRuleTypeFromJSON(json: any): PreCheckInRuleType;
export declare function PreCheckInRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreCheckInRuleType;
export declare function PreCheckInRuleTypeToJSON(value?: PreCheckInRuleType | null): any;

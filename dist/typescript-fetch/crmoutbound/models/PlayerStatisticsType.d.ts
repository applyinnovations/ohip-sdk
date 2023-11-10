/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Contains Player Statistics information
 * @export
 * @interface PlayerStatisticsType
 */
export interface PlayerStatisticsType {
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    enrollmentDate?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    compDollars?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    actualTableWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    actualOtherWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    tableTimePlayed?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    otherTimePlayed?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    averageSlotBet?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    skillRating?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    playerTableWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    playerOtherWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    theoriticalTableWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    theoriticalOtherWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    expectedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    grossMarkers?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    compPoints?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    totalComps?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    actualSlotWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    creditLimit?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    slotTimePlayed?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    avgTableBet?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    avgOtherBet?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    preferredGame?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    playerSlotWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    noOfRatings?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    theoSlotWins?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    theoProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    bettingLimit?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    netMarkers?: string;
    /**
     *
     * @type {string}
     * @memberof PlayerStatisticsType
     */
    notes?: string;
}
/**
 * Check if a given object implements the PlayerStatisticsType interface.
 */
export declare function instanceOfPlayerStatisticsType(value: object): boolean;
export declare function PlayerStatisticsTypeFromJSON(json: any): PlayerStatisticsType;
export declare function PlayerStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerStatisticsType;
export declare function PlayerStatisticsTypeToJSON(value?: PlayerStatisticsType | null): any;

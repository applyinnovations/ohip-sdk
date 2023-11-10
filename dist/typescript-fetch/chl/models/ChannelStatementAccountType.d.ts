/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ChannelStatementDetailsType } from './ChannelStatementDetailsType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Channel account statement type to hold statement details. WS wont update any statement account information except Note and account details information.
 * @export
 * @interface ChannelStatementAccountType
 */
export interface ChannelStatementAccountType {
    /**
     * Holds Account code of the channel account statement.
     * @type {string}
     * @memberof ChannelStatementAccountType
     */
    accountCode?: string;
    /**
     * Holds begin date of the account statement.
     * @type {Date}
     * @memberof ChannelStatementAccountType
     */
    beginDate?: Date;
    /**
     *
     * @type {ChannelStatementDetailsType}
     * @memberof ChannelStatementAccountType
     */
    channelAccountStatementDetails?: ChannelStatementDetailsType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChannelStatementAccountType
     */
    contractId?: UniqueIDType;
    /**
     * Holds end date of the account statement.
     * @type {Date}
     * @memberof ChannelStatementAccountType
     */
    endDate?: Date;
    /**
     * Holds Note for the account statement.
     * @type {string}
     * @memberof ChannelStatementAccountType
     */
    note?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChannelStatementAccountType
     */
    profileId?: UniqueIDType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ChannelStatementAccountType
     */
    totalDetailsAmount?: CurrencyAmountType;
}
/**
 * Check if a given object implements the ChannelStatementAccountType interface.
 */
export declare function instanceOfChannelStatementAccountType(value: object): boolean;
export declare function ChannelStatementAccountTypeFromJSON(json: any): ChannelStatementAccountType;
export declare function ChannelStatementAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelStatementAccountType;
export declare function ChannelStatementAccountTypeToJSON(value?: ChannelStatementAccountType | null): any;

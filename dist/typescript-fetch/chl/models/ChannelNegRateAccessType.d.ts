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
import type { ChannelNegRateAccessDetailType } from './ChannelNegRateAccessDetailType';
/**
 *
 * @export
 * @interface ChannelNegRateAccessType
 */
export interface ChannelNegRateAccessType {
    /**
     *
     * @type {string}
     * @memberof ChannelNegRateAccessType
     */
    accessCode?: string;
    /**
     *
     * @type {ChannelNegRateAccessDetailType}
     * @memberof ChannelNegRateAccessType
     */
    accessInfoDetail?: ChannelNegRateAccessDetailType;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof ChannelNegRateAccessType
     */
    end?: Date;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof ChannelNegRateAccessType
     */
    start?: Date;
}
/**
 * Check if a given object implements the ChannelNegRateAccessType interface.
 */
export declare function instanceOfChannelNegRateAccessType(value: object): boolean;
export declare function ChannelNegRateAccessTypeFromJSON(json: any): ChannelNegRateAccessType;
export declare function ChannelNegRateAccessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelNegRateAccessType;
export declare function ChannelNegRateAccessTypeToJSON(value?: ChannelNegRateAccessType | null): any;
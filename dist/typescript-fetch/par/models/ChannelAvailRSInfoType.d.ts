/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ChannelMarketingInfoTypeInner } from './ChannelMarketingInfoTypeInner';
import type { ChannelSummaryInfoType } from './ChannelSummaryInfoType';
/**
 * Channel specific information to be returned in availability response.
 * @export
 * @interface ChannelAvailRSInfoType
 */
export interface ChannelAvailRSInfoType {
    /**
     * Marketing Text like cancel policy, deposit policy etc.
     * @type {Array<ChannelMarketingInfoTypeInner>}
     * @memberof ChannelAvailRSInfoType
     */
    channelMarketingInfo?: Array<ChannelMarketingInfoTypeInner>;
    /**
     *
     * @type {ChannelSummaryInfoType}
     * @memberof ChannelAvailRSInfoType
     */
    channelSummaryInfo?: ChannelSummaryInfoType;
}
/**
 * Check if a given object implements the ChannelAvailRSInfoType interface.
 */
export declare function instanceOfChannelAvailRSInfoType(value: object): boolean;
export declare function ChannelAvailRSInfoTypeFromJSON(json: any): ChannelAvailRSInfoType;
export declare function ChannelAvailRSInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAvailRSInfoType;
export declare function ChannelAvailRSInfoTypeToJSON(value?: ChannelAvailRSInfoType | null): any;

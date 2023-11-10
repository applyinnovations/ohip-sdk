/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MarketingPolicyType } from './MarketingPolicyType';
/**
 *
 * @export
 * @interface ChannelMarketingInfoTypeInner
 */
export interface ChannelMarketingInfoTypeInner {
    /**
     * Marketing Text like cancel policy, deposit policy etc.
     * @type {string}
     * @memberof ChannelMarketingInfoTypeInner
     */
    description?: string;
    /**
     *
     * @type {MarketingPolicyType}
     * @memberof ChannelMarketingInfoTypeInner
     */
    policyType?: MarketingPolicyType;
    /**
     * Indicates the rate code for which the policy is associated with.
     * @type {string}
     * @memberof ChannelMarketingInfoTypeInner
     */
    ratePlanCode?: string;
}
/**
 * Check if a given object implements the ChannelMarketingInfoTypeInner interface.
 */
export declare function instanceOfChannelMarketingInfoTypeInner(value: object): boolean;
export declare function ChannelMarketingInfoTypeInnerFromJSON(json: any): ChannelMarketingInfoTypeInner;
export declare function ChannelMarketingInfoTypeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMarketingInfoTypeInner;
export declare function ChannelMarketingInfoTypeInnerToJSON(value?: ChannelMarketingInfoTypeInner | null): any;

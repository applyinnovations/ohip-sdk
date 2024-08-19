/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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

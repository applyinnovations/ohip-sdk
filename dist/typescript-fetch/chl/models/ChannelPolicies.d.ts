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
import type { ChannelPolicyType } from './ChannelPolicyType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for fetching Policies, guarantee, and deposit Details.
 * @export
 * @interface ChannelPolicies
 */
export interface ChannelPolicies {
    /**
     * To list down all the policies associated with the relevant input request.
     * @type {Array<ChannelPolicyType>}
     * @memberof ChannelPolicies
     */
    channelPoliciesInfo?: Array<ChannelPolicyType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelPolicies
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelPolicies
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelPolicies interface.
 */
export declare function instanceOfChannelPolicies(value: object): boolean;
export declare function ChannelPoliciesFromJSON(json: any): ChannelPolicies;
export declare function ChannelPoliciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPolicies;
export declare function ChannelPoliciesToJSON(value?: ChannelPolicies | null): any;

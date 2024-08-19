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
import type { InstanceLink } from './InstanceLink';
import type { PublishRatePlanType } from './PublishRatePlanType';
import type { WarningType } from './WarningType';
/**
 * Request object for publishing rate restrictions to channels.
 * @export
 * @interface ChannelRestrictions
 */
export interface ChannelRestrictions {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelRestrictions
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {PublishRatePlanType}
     * @memberof ChannelRestrictions
     */
    publishRestriction?: PublishRatePlanType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelRestrictions
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelRestrictions interface.
 */
export declare function instanceOfChannelRestrictions(value: object): boolean;
export declare function ChannelRestrictionsFromJSON(json: any): ChannelRestrictions;
export declare function ChannelRestrictionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRestrictions;
export declare function ChannelRestrictionsToJSON(value?: ChannelRestrictions | null): any;

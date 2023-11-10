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
import type { Links } from './Links';
import type { PublishRatePlanType } from './PublishRatePlanType';
import type { WarningsType } from './WarningsType';
/**
 * Request object for publishing rate codes to GDS.
 * @export
 * @interface ChannelRatePlans
 */
export interface ChannelRatePlans {
    /**
     *
     * @type {Links}
     * @memberof ChannelRatePlans
     */
    links?: Links;
    /**
     *
     * @type {PublishRatePlanType}
     * @memberof ChannelRatePlans
     */
    publishRatePlan?: PublishRatePlanType;
    /**
     *
     * @type {WarningsType}
     * @memberof ChannelRatePlans
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChannelRatePlans interface.
 */
export declare function instanceOfChannelRatePlans(value: object): boolean;
export declare function ChannelRatePlansFromJSON(json: any): ChannelRatePlans;
export declare function ChannelRatePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRatePlans;
export declare function ChannelRatePlansToJSON(value?: ChannelRatePlans | null): any;

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
import type { ChannelNegRateType } from './ChannelNegRateType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing Negotiated channel rates.
 * @export
 * @interface ChannelNegotiatedRates
 */
export interface ChannelNegotiatedRates {
    /**
     * Negotiated channel rate details to be modified.
     * @type {Array<ChannelNegRateType>}
     * @memberof ChannelNegotiatedRates
     */
    channelNegRates?: Array<ChannelNegRateType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelNegotiatedRates
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelNegotiatedRates
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelNegotiatedRates interface.
 */
export declare function instanceOfChannelNegotiatedRates(value: object): boolean;
export declare function ChannelNegotiatedRatesFromJSON(json: any): ChannelNegotiatedRates;
export declare function ChannelNegotiatedRatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelNegotiatedRates;
export declare function ChannelNegotiatedRatesToJSON(value?: ChannelNegotiatedRates | null): any;

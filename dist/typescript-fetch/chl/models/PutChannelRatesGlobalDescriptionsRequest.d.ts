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
import type { ChannelGlobalDescriptionsType } from './ChannelGlobalDescriptionsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutChannelRatesGlobalDescriptionsRequest
 */
export interface PutChannelRatesGlobalDescriptionsRequest {
    /**
     *
     * @type {ChannelGlobalDescriptionsType}
     * @memberof PutChannelRatesGlobalDescriptionsRequest
     */
    channelGlobalDescriptions?: ChannelGlobalDescriptionsType;
    /**
     *
     * @type {Links}
     * @memberof PutChannelRatesGlobalDescriptionsRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutChannelRatesGlobalDescriptionsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutChannelRatesGlobalDescriptionsRequest interface.
 */
export declare function instanceOfPutChannelRatesGlobalDescriptionsRequest(value: object): boolean;
export declare function PutChannelRatesGlobalDescriptionsRequestFromJSON(json: any): PutChannelRatesGlobalDescriptionsRequest;
export declare function PutChannelRatesGlobalDescriptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutChannelRatesGlobalDescriptionsRequest;
export declare function PutChannelRatesGlobalDescriptionsRequestToJSON(value?: PutChannelRatesGlobalDescriptionsRequest | null): any;

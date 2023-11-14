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
import type { ChannelBillingStatementType } from './ChannelBillingStatementType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object of the channel billing statement fetch request.
 * @export
 * @interface ChannelBillingStatement
 */
export interface ChannelBillingStatement {
    /**
     *
     * @type {ChannelBillingStatementType}
     * @memberof ChannelBillingStatement
     */
    channelBillingStatement?: ChannelBillingStatementType;
    /**
     *
     * @type {Links}
     * @memberof ChannelBillingStatement
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChannelBillingStatement
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChannelBillingStatement interface.
 */
export declare function instanceOfChannelBillingStatement(value: object): boolean;
export declare function ChannelBillingStatementFromJSON(json: any): ChannelBillingStatement;
export declare function ChannelBillingStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelBillingStatement;
export declare function ChannelBillingStatementToJSON(value?: ChannelBillingStatement | null): any;
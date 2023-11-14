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
/**
 * Provides detailed information regarding channel billing statement.
 * @export
 * @interface ChannelBillingStatementsType
 */
export interface ChannelBillingStatementsType extends Array<ChannelBillingStatementType> {
}
/**
 * Check if a given object implements the ChannelBillingStatementsType interface.
 */
export declare function instanceOfChannelBillingStatementsType(value: object): boolean;
export declare function ChannelBillingStatementsTypeFromJSON(json: any): ChannelBillingStatementsType;
export declare function ChannelBillingStatementsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelBillingStatementsType;
export declare function ChannelBillingStatementsTypeToJSON(value?: ChannelBillingStatementsType | null): any;
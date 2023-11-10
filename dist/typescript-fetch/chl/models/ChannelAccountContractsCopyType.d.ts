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
import type { ChannelAccountContractCopyType } from './ChannelAccountContractCopyType';
/**
 * List of channel account contracts information to create a copy of.
 * @export
 * @interface ChannelAccountContractsCopyType
 */
export interface ChannelAccountContractsCopyType extends Array<ChannelAccountContractCopyType> {
}
/**
 * Check if a given object implements the ChannelAccountContractsCopyType interface.
 */
export declare function instanceOfChannelAccountContractsCopyType(value: object): boolean;
export declare function ChannelAccountContractsCopyTypeFromJSON(json: any): ChannelAccountContractsCopyType;
export declare function ChannelAccountContractsCopyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountContractsCopyType;
export declare function ChannelAccountContractsCopyTypeToJSON(value?: ChannelAccountContractsCopyType | null): any;

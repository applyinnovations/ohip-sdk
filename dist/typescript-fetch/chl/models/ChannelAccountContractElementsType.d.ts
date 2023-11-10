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
import type { ContractElementInformationType } from './ContractElementInformationType';
/**
 * Channel account contract elements information object to hold details of contract elements.
 * @export
 * @interface ChannelAccountContractElementsType
 */
export interface ChannelAccountContractElementsType extends Array<ContractElementInformationType> {
}
/**
 * Check if a given object implements the ChannelAccountContractElementsType interface.
 */
export declare function instanceOfChannelAccountContractElementsType(value: object): boolean;
export declare function ChannelAccountContractElementsTypeFromJSON(json: any): ChannelAccountContractElementsType;
export declare function ChannelAccountContractElementsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountContractElementsType;
export declare function ChannelAccountContractElementsTypeToJSON(value?: ChannelAccountContractElementsType | null): any;

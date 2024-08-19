/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { SerialPortConfigType } from './SerialPortConfigType';
import type { TCPConfigType } from './TCPConfigType';
/**
 *
 * @export
 * @interface InterfaceCommunicationInfoType
 */
export interface InterfaceCommunicationInfoType {
    /**
     *
     * @type {SerialPortConfigType}
     * @memberof InterfaceCommunicationInfoType
     */
    serialPortConfig?: SerialPortConfigType;
    /**
     *
     * @type {TCPConfigType}
     * @memberof InterfaceCommunicationInfoType
     */
    tCPConfig?: TCPConfigType;
}
/**
 * Check if a given object implements the InterfaceCommunicationInfoType interface.
 */
export declare function instanceOfInterfaceCommunicationInfoType(value: object): boolean;
export declare function InterfaceCommunicationInfoTypeFromJSON(json: any): InterfaceCommunicationInfoType;
export declare function InterfaceCommunicationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceCommunicationInfoType;
export declare function InterfaceCommunicationInfoTypeToJSON(value?: InterfaceCommunicationInfoType | null): any;

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
import type { AddressInfoType } from './AddressInfoType';
/**
 * List of customer addresses.
 * @export
 * @interface ChannelAccountCommunicationTypeAddresses
 */
export interface ChannelAccountCommunicationTypeAddresses {
    /**
     * Collection of Detailed information on an address for the customer.
     * @type {Array<AddressInfoType>}
     * @memberof ChannelAccountCommunicationTypeAddresses
     */
    addressInfo?: Array<AddressInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ChannelAccountCommunicationTypeAddresses
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ChannelAccountCommunicationTypeAddresses
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ChannelAccountCommunicationTypeAddresses
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ChannelAccountCommunicationTypeAddresses interface.
 */
export declare function instanceOfChannelAccountCommunicationTypeAddresses(value: object): boolean;
export declare function ChannelAccountCommunicationTypeAddressesFromJSON(json: any): ChannelAccountCommunicationTypeAddresses;
export declare function ChannelAccountCommunicationTypeAddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountCommunicationTypeAddresses;
export declare function ChannelAccountCommunicationTypeAddressesToJSON(value?: ChannelAccountCommunicationTypeAddresses | null): any;
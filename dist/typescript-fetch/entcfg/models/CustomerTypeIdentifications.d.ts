/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { IdentificationInfoType } from './IdentificationInfoType';
/**
 * List of identification of the customer.
 * @export
 * @interface CustomerTypeIdentifications
 */
export interface CustomerTypeIdentifications {
    /**
     * Collection of detailed information on the identification of the customer.
     * @type {Array<IdentificationInfoType>}
     * @memberof CustomerTypeIdentifications
     */
    identificationInfo?: Array<IdentificationInfoType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CustomerTypeIdentifications
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    count?: number;
}
/**
 * Check if a given object implements the CustomerTypeIdentifications interface.
 */
export declare function instanceOfCustomerTypeIdentifications(value: object): boolean;
export declare function CustomerTypeIdentificationsFromJSON(json: any): CustomerTypeIdentifications;
export declare function CustomerTypeIdentificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTypeIdentifications;
export declare function CustomerTypeIdentificationsToJSON(value?: CustomerTypeIdentifications | null): any;
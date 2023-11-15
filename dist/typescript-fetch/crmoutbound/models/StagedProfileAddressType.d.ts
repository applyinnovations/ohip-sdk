/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddressType } from './AddressType';
import type { StagedAddressCleansStatus } from './StagedAddressCleansStatus';
/**
 * Provides address information.
 * @export
 * @interface StagedProfileAddressType
 */
export interface StagedProfileAddressType {
    /**
     *
     * @type {AddressType}
     * @memberof StagedProfileAddressType
     */
    address?: AddressType;
    /**
     * The error in address information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    errorDescription?: string;
    /**
     * Inactivation date of the record.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    inactiveDate?: string;
    /**
     * Postal code extension.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    postalCodeExtension?: string;
    /**
     * The postal barcode for the address.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    barCode?: string;
    /**
     *
     * @type {StagedAddressCleansStatus}
     * @memberof StagedProfileAddressType
     */
    cleansStatus?: StagedAddressCleansStatus;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    type?: string;
}
/**
 * Check if a given object implements the StagedProfileAddressType interface.
 */
export declare function instanceOfStagedProfileAddressType(value: object): boolean;
export declare function StagedProfileAddressTypeFromJSON(json: any): StagedProfileAddressType;
export declare function StagedProfileAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileAddressType;
export declare function StagedProfileAddressTypeToJSON(value?: StagedProfileAddressType | null): any;

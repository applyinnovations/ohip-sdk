/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddressType } from './AddressType';
/**
 * Provides address information.
 * @export
 * @interface AddressInfoType
 */
export interface AddressInfoType {
    /**
     *
     * @type {AddressType}
     * @memberof AddressInfoType
     */
    address?: AddressType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof AddressInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof AddressInfoType
     */
    type?: string;
}
/**
 * Check if a given object implements the AddressInfoType interface.
 */
export declare function instanceOfAddressInfoType(value: object): boolean;
export declare function AddressInfoTypeFromJSON(json: any): AddressInfoType;
export declare function AddressInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoType;
export declare function AddressInfoTypeToJSON(value?: AddressInfoType | null): any;

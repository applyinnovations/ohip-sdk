/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ProfileId } from './ProfileId';
/**
 * Details of the Item Vendor.
 * @export
 * @interface ItemVendorType
 */
export interface ItemVendorType {
    /**
     * The email address of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    email?: string;
    /**
     * The fax number of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    fax?: string;
    /**
     * Lead time for ordering.
     * @type {string}
     * @memberof ItemVendorType
     */
    leadTime?: string;
    /**
     * The Name of the vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    name?: string;
    /**
     * The phone number of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    phone?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ItemVendorType
     */
    price?: CurrencyAmountType;
    /**
     * The Priority of the Vendor.
     * @type {number}
     * @memberof ItemVendorType
     */
    priority?: number;
    /**
     *
     * @type {ProfileId}
     * @memberof ItemVendorType
     */
    profileId?: ProfileId;
}
/**
 * Check if a given object implements the ItemVendorType interface.
 */
export declare function instanceOfItemVendorType(value: object): boolean;
export declare function ItemVendorTypeFromJSON(json: any): ItemVendorType;
export declare function ItemVendorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemVendorType;
export declare function ItemVendorTypeToJSON(value?: ItemVendorType | null): any;

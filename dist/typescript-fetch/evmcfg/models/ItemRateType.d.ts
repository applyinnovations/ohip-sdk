/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details of the Item Rate.
 * @export
 * @interface ItemRateType
 */
export interface ItemRateType {
    /**
     * If true, it's the default Rate for the Item.
     * @type {boolean}
     * @memberof ItemRateType
     */
    _default?: boolean;
    /**
     * If true, it's hourly rate.
     * @type {boolean}
     * @memberof ItemRateType
     */
    hourly?: boolean;
    /**
     * The Rate Code of the Item Rate.
     * @type {string}
     * @memberof ItemRateType
     */
    itemRateCode?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ItemRateType
     */
    itemRateId?: UniqueIDType;
    /**
     * The Name of the Item Rate.
     * @type {string}
     * @memberof ItemRateType
     */
    name?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ItemRateType
     */
    price?: CurrencyAmountType;
}
/**
 * Check if a given object implements the ItemRateType interface.
 */
export declare function instanceOfItemRateType(value: object): boolean;
export declare function ItemRateTypeFromJSON(json: any): ItemRateType;
export declare function ItemRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRateType;
export declare function ItemRateTypeToJSON(value?: ItemRateType | null): any;

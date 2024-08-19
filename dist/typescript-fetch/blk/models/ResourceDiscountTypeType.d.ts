/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates the option to select resources that will be discounted with the Resource Discount Percentage.
 * @export
 */
export declare const ResourceDiscountTypeType: {
    readonly AllDiscountableResources: "AllDiscountableResources";
    readonly ResourcesWithSameDiscountPercentage: "ResourcesWithSameDiscountPercentage";
    readonly AllDiscountableItems: "AllDiscountableItems";
    readonly ItemsWithSameDiscountPercentage: "ItemsWithSameDiscountPercentage";
    readonly AllDiscountableMenusAndMenuItems: "AllDiscountableMenusAndMenuItems";
    readonly MenusAndMenuItemsWithSameDiscountPercentage: "MenusAndMenuItemsWithSameDiscountPercentage";
    readonly AllDiscountableSpaces: "AllDiscountableSpaces";
    readonly SpacesWithSameDiscountPercentage: "SpacesWithSameDiscountPercentage";
    readonly None: "None";
};
export type ResourceDiscountTypeType = typeof ResourceDiscountTypeType[keyof typeof ResourceDiscountTypeType];
export declare function ResourceDiscountTypeTypeFromJSON(json: any): ResourceDiscountTypeType;
export declare function ResourceDiscountTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceDiscountTypeType;
export declare function ResourceDiscountTypeTypeToJSON(value?: ResourceDiscountTypeType | null): any;

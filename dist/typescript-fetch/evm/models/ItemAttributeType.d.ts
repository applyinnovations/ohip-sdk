/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType200 } from './TranslationTextType200';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details of the Item Attribute.
 * @export
 * @interface ItemAttributeType
 */
export interface ItemAttributeType {
    /**
     * If true, it's the default Attribute for the Item.
     * @type {boolean}
     * @memberof ItemAttributeType
     */
    _default?: boolean;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ItemAttributeType
     */
    itemAttributeId?: UniqueIDType;
    /**
     * The Setdown Time of the Item Attribute in minutes.
     * @type {number}
     * @memberof ItemAttributeType
     */
    setdownTime?: number;
    /**
     * The Setup Time of the Item Attribute in minutes.
     * @type {number}
     * @memberof ItemAttributeType
     */
    setupTime?: number;
    /**
     *
     * @type {TranslationTextType200}
     * @memberof ItemAttributeType
     */
    translatableName?: TranslationTextType200;
}
/**
 * Check if a given object implements the ItemAttributeType interface.
 */
export declare function instanceOfItemAttributeType(value: object): boolean;
export declare function ItemAttributeTypeFromJSON(json: any): ItemAttributeType;
export declare function ItemAttributeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemAttributeType;
export declare function ItemAttributeTypeToJSON(value?: ItemAttributeType | null): any;

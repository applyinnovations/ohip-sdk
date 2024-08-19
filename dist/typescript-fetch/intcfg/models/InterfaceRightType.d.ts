/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface InterfaceRightType
 */
export interface InterfaceRightType {
    /**
     * Hotel Code to which the Interface Right belongs to.
     * @type {string}
     * @memberof InterfaceRightType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof InterfaceRightType
     */
    interfaceId?: UniqueIDType;
    /**
     * Internal code for each allowed right of a Hotel Interface record.
     * @type {number}
     * @memberof InterfaceRightType
     */
    right?: number;
    /**
     * User defined code for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightType
     */
    code?: string;
    /**
     * User defined description for an Interface Right.
     * @type {string}
     * @memberof InterfaceRightType
     */
    description?: string;
    /**
     * System Description of an allowed Interface Right.
     * @type {string}
     * @memberof InterfaceRightType
     */
    interfaceRightDescription?: string;
}
/**
 * Check if a given object implements the InterfaceRightType interface.
 */
export declare function instanceOfInterfaceRightType(value: object): boolean;
export declare function InterfaceRightTypeFromJSON(json: any): InterfaceRightType;
export declare function InterfaceRightTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceRightType;
export declare function InterfaceRightTypeToJSON(value?: InterfaceRightType | null): any;

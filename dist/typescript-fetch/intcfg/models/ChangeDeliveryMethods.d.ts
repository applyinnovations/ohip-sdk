/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConfiguredExternalDeliveryMethodsType } from './ConfiguredExternalDeliveryMethodsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to change the delivery method for a property/HUB/Chain and its configurations.
 * @export
 * @interface ChangeDeliveryMethods
 */
export interface ChangeDeliveryMethods {
    /**
     *
     * @type {ConfiguredExternalDeliveryMethodsType}
     * @memberof ChangeDeliveryMethods
     */
    deliveryMethods?: ConfiguredExternalDeliveryMethodsType;
    /**
     *
     * @type {Links}
     * @memberof ChangeDeliveryMethods
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeDeliveryMethods
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeDeliveryMethods interface.
 */
export declare function instanceOfChangeDeliveryMethods(value: object): boolean;
export declare function ChangeDeliveryMethodsFromJSON(json: any): ChangeDeliveryMethods;
export declare function ChangeDeliveryMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeDeliveryMethods;
export declare function ChangeDeliveryMethodsToJSON(value?: ChangeDeliveryMethods | null): any;

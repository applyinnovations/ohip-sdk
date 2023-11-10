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
 * Response to request to fetch the delivery method for a property/HUB/Chain and its configurations.
 * @export
 * @interface FetchedDeliveryMethods
 */
export interface FetchedDeliveryMethods {
    /**
     *
     * @type {ConfiguredExternalDeliveryMethodsType}
     * @memberof FetchedDeliveryMethods
     */
    deliveryMethods?: ConfiguredExternalDeliveryMethodsType;
    /**
     *
     * @type {Links}
     * @memberof FetchedDeliveryMethods
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FetchedDeliveryMethods
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FetchedDeliveryMethods interface.
 */
export declare function instanceOfFetchedDeliveryMethods(value: object): boolean;
export declare function FetchedDeliveryMethodsFromJSON(json: any): FetchedDeliveryMethods;
export declare function FetchedDeliveryMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchedDeliveryMethods;
export declare function FetchedDeliveryMethodsToJSON(value?: FetchedDeliveryMethods | null): any;

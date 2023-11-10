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
import type { CateringPackagePricingType } from './CateringPackagePricingType';
/**
 * Collection of multiple Pricing Details associated with a particular Catering Package.
 * @export
 * @interface CateringPackagePricingListType
 */
export interface CateringPackagePricingListType extends Array<CateringPackagePricingType> {
}
/**
 * Check if a given object implements the CateringPackagePricingListType interface.
 */
export declare function instanceOfCateringPackagePricingListType(value: object): boolean;
export declare function CateringPackagePricingListTypeFromJSON(json: any): CateringPackagePricingListType;
export declare function CateringPackagePricingListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackagePricingListType;
export declare function CateringPackagePricingListTypeToJSON(value?: CateringPackagePricingListType | null): any;

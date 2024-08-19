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
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface MealTypeType
 */
export interface MealTypeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof MealTypeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof MealTypeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof MealTypeType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the MealTypeType interface.
 */
export declare function instanceOfMealTypeType(value: object): boolean;
export declare function MealTypeTypeFromJSON(json: any): MealTypeType;
export declare function MealTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MealTypeType;
export declare function MealTypeTypeToJSON(value?: MealTypeType | null): any;

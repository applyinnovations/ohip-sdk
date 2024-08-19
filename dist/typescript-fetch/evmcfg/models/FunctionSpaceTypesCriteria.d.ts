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
import type { FunctionSpaceTypeType } from './FunctionSpaceTypeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating Function Space Types.
 * @export
 * @interface FunctionSpaceTypesCriteria
 */
export interface FunctionSpaceTypesCriteria {
    /**
     * List of Function Space Types.
     * @type {Array<FunctionSpaceTypeType>}
     * @memberof FunctionSpaceTypesCriteria
     */
    functionSpaceTypes?: Array<FunctionSpaceTypeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FunctionSpaceTypesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FunctionSpaceTypesCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FunctionSpaceTypesCriteria interface.
 */
export declare function instanceOfFunctionSpaceTypesCriteria(value: object): boolean;
export declare function FunctionSpaceTypesCriteriaFromJSON(json: any): FunctionSpaceTypesCriteria;
export declare function FunctionSpaceTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceTypesCriteria;
export declare function FunctionSpaceTypesCriteriaToJSON(value?: FunctionSpaceTypesCriteria | null): any;

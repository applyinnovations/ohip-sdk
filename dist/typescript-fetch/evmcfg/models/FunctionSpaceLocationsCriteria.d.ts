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
import type { FunctionSpaceLocationType } from './FunctionSpaceLocationType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for adding function space location configurations to resort.
 * @export
 * @interface FunctionSpaceLocationsCriteria
 */
export interface FunctionSpaceLocationsCriteria {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FunctionSpaceLocationsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * List of the function space locations to be configured or fetched
     * @type {Array<FunctionSpaceLocationType>}
     * @memberof FunctionSpaceLocationsCriteria
     */
    locations?: Array<FunctionSpaceLocationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FunctionSpaceLocationsCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FunctionSpaceLocationsCriteria interface.
 */
export declare function instanceOfFunctionSpaceLocationsCriteria(value: object): boolean;
export declare function FunctionSpaceLocationsCriteriaFromJSON(json: any): FunctionSpaceLocationsCriteria;
export declare function FunctionSpaceLocationsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceLocationsCriteria;
export declare function FunctionSpaceLocationsCriteriaToJSON(value?: FunctionSpaceLocationsCriteria | null): any;

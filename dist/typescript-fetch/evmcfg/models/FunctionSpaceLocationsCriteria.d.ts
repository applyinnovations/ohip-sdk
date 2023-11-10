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
import type { FunctionSpaceLocationsType } from './FunctionSpaceLocationsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for adding function space location configurations to resort.
 * @export
 * @interface FunctionSpaceLocationsCriteria
 */
export interface FunctionSpaceLocationsCriteria {
    /**
     *
     * @type {Links}
     * @memberof FunctionSpaceLocationsCriteria
     */
    links?: Links;
    /**
     *
     * @type {FunctionSpaceLocationsType}
     * @memberof FunctionSpaceLocationsCriteria
     */
    locations?: FunctionSpaceLocationsType;
    /**
     *
     * @type {WarningsType}
     * @memberof FunctionSpaceLocationsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FunctionSpaceLocationsCriteria interface.
 */
export declare function instanceOfFunctionSpaceLocationsCriteria(value: object): boolean;
export declare function FunctionSpaceLocationsCriteriaFromJSON(json: any): FunctionSpaceLocationsCriteria;
export declare function FunctionSpaceLocationsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceLocationsCriteria;
export declare function FunctionSpaceLocationsCriteriaToJSON(value?: FunctionSpaceLocationsCriteria | null): any;

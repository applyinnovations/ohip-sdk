/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TimeSpanType } from './TimeSpanType';
/**
 * Duration of this instruction.
 * @export
 * @interface RoutingInstructionTypeDuration
 */
export interface RoutingInstructionTypeDuration {
    /**
     * Flag to indicate if the routing instruction is a daily instruction.
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    daily?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    friday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    monday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    saturday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    thursday?: boolean;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RoutingInstructionTypeDuration
     */
    timeSpan?: TimeSpanType;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RoutingInstructionTypeDuration
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the RoutingInstructionTypeDuration interface.
 */
export declare function instanceOfRoutingInstructionTypeDuration(value: object): boolean;
export declare function RoutingInstructionTypeDurationFromJSON(json: any): RoutingInstructionTypeDuration;
export declare function RoutingInstructionTypeDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInstructionTypeDuration;
export declare function RoutingInstructionTypeDurationToJSON(value?: RoutingInstructionTypeDuration | null): any;

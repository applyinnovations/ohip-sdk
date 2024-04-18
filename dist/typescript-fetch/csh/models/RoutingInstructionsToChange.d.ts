/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoutingInstructionsToChangeCriteria } from './RoutingInstructionsToChangeCriteria';
import type { WarningType } from './WarningType';
/**
 * Request when changing a routing instruction.
 * @export
 * @interface RoutingInstructionsToChange
 */
export interface RoutingInstructionsToChange {
    /**
     *
     * @type {RoutingInstructionsToChangeCriteria}
     * @memberof RoutingInstructionsToChange
     */
    criteria?: RoutingInstructionsToChangeCriteria;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoutingInstructionsToChange
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoutingInstructionsToChange
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoutingInstructionsToChange interface.
 */
export declare function instanceOfRoutingInstructionsToChange(value: object): boolean;
export declare function RoutingInstructionsToChangeFromJSON(json: any): RoutingInstructionsToChange;
export declare function RoutingInstructionsToChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInstructionsToChange;
export declare function RoutingInstructionsToChangeToJSON(value?: RoutingInstructionsToChange | null): any;
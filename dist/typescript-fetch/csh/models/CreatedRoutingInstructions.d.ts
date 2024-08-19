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
import type { PostingsInfoType } from './PostingsInfoType';
import type { WarningType } from './WarningType';
/**
 * Response when creating a routing instruction. It may optionally return a list of postings which are eligible for transfer as per the new routing instruction in case of room routing instruction.
 * @export
 * @interface CreatedRoutingInstructions
 */
export interface CreatedRoutingInstructions {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CreatedRoutingInstructions
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {PostingsInfoType}
     * @memberof CreatedRoutingInstructions
     */
    postingsForRoomRouting?: PostingsInfoType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CreatedRoutingInstructions
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CreatedRoutingInstructions interface.
 */
export declare function instanceOfCreatedRoutingInstructions(value: object): boolean;
export declare function CreatedRoutingInstructionsFromJSON(json: any): CreatedRoutingInstructions;
export declare function CreatedRoutingInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedRoutingInstructions;
export declare function CreatedRoutingInstructionsToJSON(value?: CreatedRoutingInstructions | null): any;

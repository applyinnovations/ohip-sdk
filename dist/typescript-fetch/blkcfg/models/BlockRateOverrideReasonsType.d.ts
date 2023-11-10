/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockRateOverrideReasonType } from './BlockRateOverrideReasonType';
/**
 * List of Block Rate Override Reasons.
 * @export
 * @interface BlockRateOverrideReasonsType
 */
export interface BlockRateOverrideReasonsType extends Array<BlockRateOverrideReasonType> {
}
/**
 * Check if a given object implements the BlockRateOverrideReasonsType interface.
 */
export declare function instanceOfBlockRateOverrideReasonsType(value: object): boolean;
export declare function BlockRateOverrideReasonsTypeFromJSON(json: any): BlockRateOverrideReasonsType;
export declare function BlockRateOverrideReasonsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRateOverrideReasonsType;
export declare function BlockRateOverrideReasonsTypeToJSON(value?: BlockRateOverrideReasonsType | null): any;

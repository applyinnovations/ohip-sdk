/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockProfilesType } from './BlockProfilesType';
/**
 * A collection of all the profiles associated to this block. Please note that during a change operation this performs a full overlay if the attribute FullOverlay is set to true. In a full overlay, all the profiles that should be associated to the block should be provided during a change operation. Any profiles not provided will be detached from this block. By default the full overlay is considered false if this tag is left blank. If values are provided for profiles, only the full overlay functionality is provided at this time.
 * @export
 * @interface BlockInstructionTypeBlockProfiles
 */
export interface BlockInstructionTypeBlockProfiles {
    /**
     * The list of profiles associated with the block.
     * @type {Array<BlockProfilesType>}
     * @memberof BlockInstructionTypeBlockProfiles
     */
    blockProfile?: Array<BlockProfilesType>;
    /**
     * Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided.
     * @type {boolean}
     * @memberof BlockInstructionTypeBlockProfiles
     */
    fullOverlay?: boolean;
}
/**
 * Check if a given object implements the BlockInstructionTypeBlockProfiles interface.
 */
export declare function instanceOfBlockInstructionTypeBlockProfiles(value: object): boolean;
export declare function BlockInstructionTypeBlockProfilesFromJSON(json: any): BlockInstructionTypeBlockProfiles;
export declare function BlockInstructionTypeBlockProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInstructionTypeBlockProfiles;
export declare function BlockInstructionTypeBlockProfilesToJSON(value?: BlockInstructionTypeBlockProfiles | null): any;

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
/**
 * Instructions which will be considered when copying from the template. If this element is not sent, all the flags will be ignored.
 * @export
 * @interface CopyBlockTypeCopyInstructions
 */
export interface CopyBlockTypeCopyInstructions {
    /**
     * When true, this will adjust the decision and followup date on the new block to the same offset as the source block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    adjustDecisionAndFollowupDate?: boolean;
    /**
     * When true, this will copy the source block's alternate dates to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    alternateDates?: boolean;
    /**
     * When true, this will copy the source block's number of attendees to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    attendeesCount?: boolean;
    /**
     * When true, this will copy the block code of the source block to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    blockCode?: boolean;
    /**
     * When true, this will copy the source block's comments to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    blockComments?: boolean;
    /**
     * When true, this will copy the source block's catering information to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    catering?: boolean;
    /**
     * Event notes of note code 'CH' will be copied from source events to new events on the Block copy.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    changeNotes?: boolean;
    /**
     * When true, this will copy the source block's contract billing information to the new block and make the source block a Master Block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    contractBilling?: boolean;
    /**
     * Contract grid of the source Block will be copied to the contract grid of the new Block
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    contractGrid?: boolean;
    /**
     * When true, this will copy the new block as a sub block of the source block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    createAsSubBlock?: boolean;
    /**
     * When true, this will create the new block in the same tour series as the source block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    createAsTourBlock?: boolean;
    /**
     * When true, this will copy the source block's event comments to the events of the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    eventComments?: boolean;
    /**
     * Event forecast figures will be copied from the source to the events of the new Block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    eventForecastFigures?: boolean;
    /**
     * When true, this will copy the source block's events to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    events?: boolean;
    /**
     * When true, this will copy the source block's group profile to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    groupProfile?: boolean;
    /**
     * All event resources, such as menus and item resources are copied with the events to the new Block. Include Resource Notes and Copy Resource Prices are displayed and enabled.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    otherResources?: boolean;
    /**
     * When true, this will overbook the block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    overbook?: boolean;
    /**
     * When true, this will create the new block in the same potential profile as the source block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    potentialProfile?: boolean;
    /**
     * When true, this will copy the source block's rate code to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    rateCode?: boolean;
    /**
     * When true, this will copy the rate amounts of the source block's alternate dates to the alternate dates of the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    ratesOfAlternateDates?: boolean;
    /**
     * When true, this will copy the source block's resource comments to the resources of the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    resourceComments?: boolean;
    /**
     * When true, this will copy the source block's resource price amounts to the resources of the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    resourcePrices?: boolean;
    /**
     * When true, this will copy the source block's resources to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    resources?: boolean;
    /**
     * When true, this will copy the source block's room allocation counts to the new block.
     * @type {boolean}
     * @memberof CopyBlockTypeCopyInstructions
     */
    rooms?: boolean;
}
/**
 * Check if a given object implements the CopyBlockTypeCopyInstructions interface.
 */
export declare function instanceOfCopyBlockTypeCopyInstructions(value: object): boolean;
export declare function CopyBlockTypeCopyInstructionsFromJSON(json: any): CopyBlockTypeCopyInstructions;
export declare function CopyBlockTypeCopyInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyBlockTypeCopyInstructions;
export declare function CopyBlockTypeCopyInstructionsToJSON(value?: CopyBlockTypeCopyInstructions | null): any;

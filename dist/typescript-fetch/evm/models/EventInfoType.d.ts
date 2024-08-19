/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockType } from './BlockType';
import type { CateringEventResourceType } from './CateringEventResourceType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { EventDetailType } from './EventDetailType';
import type { EventFunctionSpaceType } from './EventFunctionSpaceType';
import type { EventNoteType } from './EventNoteType';
import type { EventPrimaryInfoType } from './EventPrimaryInfoType';
import type { EventProcessInstructionsType } from './EventProcessInstructionsType';
import type { EventRevenuesInformationType } from './EventRevenuesInformationType';
import type { IndicatorType } from './IndicatorType';
import type { LightEventDetailType } from './LightEventDetailType';
/**
 * Catering Event information.
 * @export
 * @interface EventInfoType
 */
export interface EventInfoType {
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof EventInfoType
     */
    altEventsDetail?: Array<LightEventDetailType>;
    /**
     *
     * @type {BlockType}
     * @memberof EventInfoType
     */
    eventBlockInfo?: BlockType;
    /**
     *
     * @type {EventDetailType}
     * @memberof EventInfoType
     */
    eventDetail?: EventDetailType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof EventInfoType
     */
    eventIndicators?: Array<IndicatorType>;
    /**
     * Pertain event information.
     * @type {Array<EventNoteType>}
     * @memberof EventInfoType
     */
    eventNotes?: Array<EventNoteType>;
    /**
     *
     * @type {EventPrimaryInfoType}
     * @memberof EventInfoType
     */
    eventPrimaryInfo?: EventPrimaryInfoType;
    /**
     * Event resources information.
     * @type {Array<CateringEventResourceType>}
     * @memberof EventInfoType
     */
    eventResources?: Array<CateringEventResourceType>;
    /**
     *
     * @type {EventRevenuesInformationType}
     * @memberof EventInfoType
     */
    eventRevenues?: EventRevenuesInformationType;
    /**
     *
     * @type {EventFunctionSpaceType}
     * @memberof EventInfoType
     */
    functionSpaceInformation?: EventFunctionSpaceType;
    /**
     *
     * @type {LightEventDetailType}
     * @memberof EventInfoType
     */
    masterEventDetail?: LightEventDetailType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof EventInfoType
     */
    onTheBooksRevenue?: CurrencyAmountType;
    /**
     *
     * @type {EventProcessInstructionsType}
     * @memberof EventInfoType
     */
    processInstructions?: EventProcessInstructionsType;
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof EventInfoType
     */
    subEventsDetail?: Array<LightEventDetailType>;
}
/**
 * Check if a given object implements the EventInfoType interface.
 */
export declare function instanceOfEventInfoType(value: object): boolean;
export declare function EventInfoTypeFromJSON(json: any): EventInfoType;
export declare function EventInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventInfoType;
export declare function EventInfoTypeToJSON(value?: EventInfoType | null): any;

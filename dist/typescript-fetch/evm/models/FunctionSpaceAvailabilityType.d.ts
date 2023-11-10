/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * The summary information for a function space.
 * @export
 * @interface FunctionSpaceAvailabilityType
 */
export interface FunctionSpaceAvailabilityType {
    /**
     * Flag that indicates if the function space can be reserved or not.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    available?: boolean;
    /**
     * Indicate if the function space is a combination functionSpaceDetails.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    comboSpace?: boolean;
    /**
     * Indicate if the function space will be shown in the Function Diary by default.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    elementSpace?: boolean;
    /**
     * The floor on which the Function Space is located.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    floor?: string;
    /**
     * Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    forceAlternate?: boolean;
    /**
     * The time in minutes that the function space would be considered at 100% utilization.
     * @type {number}
     * @memberof FunctionSpaceAvailabilityType
     */
    fullUtilizationTime?: number;
    /**
     * Indicates whether the function space has handicap facilities.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    handicapFacilities?: boolean;
    /**
     * Hotel Code where function space belongs to.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    hotelId?: string;
    /**
     * The building on which the Function Space is located.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    location?: string;
    /**
     * The first custom order for sorting the function space display.
     * @type {number}
     * @memberof FunctionSpaceAvailabilityType
     */
    orderBy1?: number;
    /**
     * The second custom order for sorting the function space display.
     * @type {number}
     * @memberof FunctionSpaceAvailabilityType
     */
    orderBy2?: number;
    /**
     * The third custom order for sorting the function space display.
     * @type {number}
     * @memberof FunctionSpaceAvailabilityType
     */
    orderBy3?: number;
    /**
     * Indicates whether the functionSpaceDetails type is psuedo.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    psuedoRoomType?: boolean;
    /**
     * Room Code of the Function Space.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    roomCode?: string;
    /**
     * Room Type of the Function Space.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    roomType?: string;
    /**
     * Indicate if the function space is shareable.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    shareable?: boolean;
    /**
     * The Short Name of the Function Space.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    shortName?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof FunctionSpaceAvailabilityType
     */
    spaceName?: TranslationTextType2000;
    /**
     * The Type which the Function Space belongs to.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    spaceType?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof FunctionSpaceAvailabilityType
     */
    suggestedRateAmount?: CurrencyAmountType;
    /**
     * Rate Code suggested to be used by function space.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    suggestedRateCode?: string;
    /**
     * Setup Code suggested to be used by function space.
     * @type {string}
     * @memberof FunctionSpaceAvailabilityType
     */
    suggestedSetupCode?: string;
    /**
     * Indicates whether the Function Space is web bookable or not.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    webBookable?: boolean;
    /**
     * Indicates whether the Function Space is web viewable or not.
     * @type {boolean}
     * @memberof FunctionSpaceAvailabilityType
     */
    webViewable?: boolean;
}
/**
 * Check if a given object implements the FunctionSpaceAvailabilityType interface.
 */
export declare function instanceOfFunctionSpaceAvailabilityType(value: object): boolean;
export declare function FunctionSpaceAvailabilityTypeFromJSON(json: any): FunctionSpaceAvailabilityType;
export declare function FunctionSpaceAvailabilityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceAvailabilityType;
export declare function FunctionSpaceAvailabilityTypeToJSON(value?: FunctionSpaceAvailabilityType | null): any;

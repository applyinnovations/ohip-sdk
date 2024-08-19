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
import type { TranslationTextType200 } from './TranslationTextType200';
/**
 * Type for the function space setup style ID
 * @export
 * @interface FunctionSpaceSetupStyleType
 */
export interface FunctionSpaceSetupStyleType {
    /**
     * Function Space Setup Style Code.
     * @type {string}
     * @memberof FunctionSpaceSetupStyleType
     */
    code?: string;
    /**
     * Setup style code id .
     * @type {number}
     * @memberof FunctionSpaceSetupStyleType
     */
    codeId?: number;
    /**
     * Display in Directory True or False.
     * @type {boolean}
     * @memberof FunctionSpaceSetupStyleType
     */
    directory?: boolean;
    /**
     * Description of the Function Space Setup Style.
     * @type {number}
     * @memberof FunctionSpaceSetupStyleType
     */
    displaySequence?: number;
    /**
     * Indicates if the Setup Style is active.
     * @type {boolean}
     * @memberof FunctionSpaceSetupStyleType
     */
    inactive?: boolean;
    /**
     *
     * @type {TranslationTextType200}
     * @memberof FunctionSpaceSetupStyleType
     */
    translatableDescription?: TranslationTextType200;
    /**
     * Bookmarkable via Website True or False.
     * @type {boolean}
     * @memberof FunctionSpaceSetupStyleType
     */
    webBooking?: boolean;
    /**
     * Setdown Time for web bookings.
     * @type {number}
     * @memberof FunctionSpaceSetupStyleType
     */
    webSetdown?: number;
    /**
     * Setup Time for web bookings.
     * @type {number}
     * @memberof FunctionSpaceSetupStyleType
     */
    webSetup?: number;
}
/**
 * Check if a given object implements the FunctionSpaceSetupStyleType interface.
 */
export declare function instanceOfFunctionSpaceSetupStyleType(value: object): boolean;
export declare function FunctionSpaceSetupStyleTypeFromJSON(json: any): FunctionSpaceSetupStyleType;
export declare function FunctionSpaceSetupStyleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceSetupStyleType;
export declare function FunctionSpaceSetupStyleTypeToJSON(value?: FunctionSpaceSetupStyleType | null): any;

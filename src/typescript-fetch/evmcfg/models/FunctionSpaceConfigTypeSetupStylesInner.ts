/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { TranslationTextType200 } from './TranslationTextType200';
import {
    TranslationTextType200FromJSON,
    TranslationTextType200FromJSONTyped,
    TranslationTextType200ToJSON,
} from './TranslationTextType200';

/**
 * Type for the function space setup style ID
 * @export
 * @interface FunctionSpaceConfigTypeSetupStylesInner
 */
export interface FunctionSpaceConfigTypeSetupStylesInner {
    /**
     * Function Space Setup Style Code.
     * @type {string}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    code?: string;
    /**
     * Setup style code id .
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    codeId?: number;
    /**
     * Indicate if the setup style is the default.
     * @type {boolean}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    _default?: boolean;
    /**
     * Display in Directory True or False.
     * @type {boolean}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    directory?: boolean;
    /**
     * Description of the Function Space Setup Style.
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    displaySequence?: number;
    /**
     * Indicates if the Setup Style is active.
     * @type {boolean}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    inactive?: boolean;
    /**
     * Maximum Capacity for function space setup style type.
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    maxCapacity?: number;
    /**
     * Minimum Capacity for function space setup style type.
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    minCapacity?: number;
    /**
     * 
     * @type {TranslationTextType200}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    translatableDescription?: TranslationTextType200;
    /**
     * Bookmarkable via Website True or False.
     * @type {boolean}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    webBooking?: boolean;
    /**
     * Setdown Time for web bookings.
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    webSetdown?: number;
    /**
     * Setup Time for web bookings.
     * @type {number}
     * @memberof FunctionSpaceConfigTypeSetupStylesInner
     */
    webSetup?: number;
}

/**
 * Check if a given object implements the FunctionSpaceConfigTypeSetupStylesInner interface.
 */
export function instanceOfFunctionSpaceConfigTypeSetupStylesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceConfigTypeSetupStylesInnerFromJSON(json: any): FunctionSpaceConfigTypeSetupStylesInner {
    return FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped(json, false);
}

export function FunctionSpaceConfigTypeSetupStylesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceConfigTypeSetupStylesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'codeId': !exists(json, 'codeId') ? undefined : json['codeId'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'directory': !exists(json, 'directory') ? undefined : json['directory'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'maxCapacity': !exists(json, 'maxCapacity') ? undefined : json['maxCapacity'],
        'minCapacity': !exists(json, 'minCapacity') ? undefined : json['minCapacity'],
        'translatableDescription': !exists(json, 'translatableDescription') ? undefined : TranslationTextType200FromJSON(json['translatableDescription']),
        'webBooking': !exists(json, 'webBooking') ? undefined : json['webBooking'],
        'webSetdown': !exists(json, 'webSetdown') ? undefined : json['webSetdown'],
        'webSetup': !exists(json, 'webSetup') ? undefined : json['webSetup'],
    };
}

export function FunctionSpaceConfigTypeSetupStylesInnerToJSON(value?: FunctionSpaceConfigTypeSetupStylesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'codeId': value.codeId,
        'default': value._default,
        'directory': value.directory,
        'displaySequence': value.displaySequence,
        'inactive': value.inactive,
        'maxCapacity': value.maxCapacity,
        'minCapacity': value.minCapacity,
        'translatableDescription': TranslationTextType200ToJSON(value.translatableDescription),
        'webBooking': value.webBooking,
        'webSetdown': value.webSetdown,
        'webSetup': value.webSetup,
    };
}

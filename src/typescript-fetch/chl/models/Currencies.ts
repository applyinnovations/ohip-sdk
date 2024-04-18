/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyMappingType } from './CurrencyMappingType';
import {
    CurrencyMappingTypeFromJSON,
    CurrencyMappingTypeFromJSONTyped,
    CurrencyMappingTypeToJSON,
} from './CurrencyMappingType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing existing external system currencies.
 * @export
 * @interface Currencies
 */
export interface Currencies {
    /**
     * Information about an external currency mapping.
     * @type {Array<CurrencyMappingType>}
     * @memberof Currencies
     */
    currencies?: Array<CurrencyMappingType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Currencies
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Currencies
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Currencies interface.
 */
export function instanceOfCurrencies(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrenciesFromJSON(json: any): Currencies {
    return CurrenciesFromJSONTyped(json, false);
}

export function CurrenciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currencies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencies': !exists(json, 'currencies') ? undefined : ((json['currencies'] as Array<any>).map(CurrencyMappingTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CurrenciesToJSON(value?: Currencies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencies': value.currencies === undefined ? undefined : ((value.currencies as Array<any>).map(CurrencyMappingTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

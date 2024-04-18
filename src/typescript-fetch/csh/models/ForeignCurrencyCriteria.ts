/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ExchangeRateCalculationType } from './ExchangeRateCalculationType';
import {
    ExchangeRateCalculationTypeFromJSON,
    ExchangeRateCalculationTypeFromJSONTyped,
    ExchangeRateCalculationTypeToJSON,
} from './ExchangeRateCalculationType';
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
 * Operation to calculate foreign currency exchange.
 * @export
 * @interface ForeignCurrencyCriteria
 */
export interface ForeignCurrencyCriteria {
    /**
     * Flag to add exchange commission in order to recalculate payment amount in billing.
     * @type {boolean}
     * @memberof ForeignCurrencyCriteria
     */
    addExchangeCommission?: boolean;
    /**
     * A set of currencies that need to be converted.
     * @type {Array<ExchangeRateCalculationType>}
     * @memberof ForeignCurrencyCriteria
     */
    exchange?: Array<ExchangeRateCalculationType>;
    /**
     * Flag to include exchange information text in response.
     * @type {boolean}
     * @memberof ForeignCurrencyCriteria
     */
    includeExchangeInformation?: boolean;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ForeignCurrencyCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ForeignCurrencyCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ForeignCurrencyCriteria interface.
 */
export function instanceOfForeignCurrencyCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ForeignCurrencyCriteriaFromJSON(json: any): ForeignCurrencyCriteria {
    return ForeignCurrencyCriteriaFromJSONTyped(json, false);
}

export function ForeignCurrencyCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignCurrencyCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addExchangeCommission': !exists(json, 'addExchangeCommission') ? undefined : json['addExchangeCommission'],
        'exchange': !exists(json, 'exchange') ? undefined : ((json['exchange'] as Array<any>).map(ExchangeRateCalculationTypeFromJSON)),
        'includeExchangeInformation': !exists(json, 'includeExchangeInformation') ? undefined : json['includeExchangeInformation'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ForeignCurrencyCriteriaToJSON(value?: ForeignCurrencyCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addExchangeCommission': value.addExchangeCommission,
        'exchange': value.exchange === undefined ? undefined : ((value.exchange as Array<any>).map(ExchangeRateCalculationTypeToJSON)),
        'includeExchangeInformation': value.includeExchangeInformation,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FiscalPartnersType } from './FiscalPartnersType';
import {
    FiscalPartnersTypeFromJSON,
    FiscalPartnersTypeFromJSONTyped,
    FiscalPartnersTypeToJSON,
} from './FiscalPartnersType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object to edit Fiscal Partners.
 * @export
 * @interface ChangeFiscalPartners
 */
export interface ChangeFiscalPartners {
    /**
     * 
     * @type {FiscalPartnersType}
     * @memberof ChangeFiscalPartners
     */
    fiscalPartners?: FiscalPartnersType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChangeFiscalPartners
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChangeFiscalPartners interface.
 */
export function instanceOfChangeFiscalPartners(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeFiscalPartnersFromJSON(json: any): ChangeFiscalPartners {
    return ChangeFiscalPartnersFromJSONTyped(json, false);
}

export function ChangeFiscalPartnersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeFiscalPartners {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalPartners': !exists(json, 'fiscalPartners') ? undefined : FiscalPartnersTypeFromJSON(json['fiscalPartners']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChangeFiscalPartnersToJSON(value?: ChangeFiscalPartners | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalPartners': FiscalPartnersTypeToJSON(value.fiscalPartners),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

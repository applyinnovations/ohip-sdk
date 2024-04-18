/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FiscalPartnerType } from './FiscalPartnerType';
import {
    FiscalPartnerTypeFromJSON,
    FiscalPartnerTypeFromJSONTyped,
    FiscalPartnerTypeToJSON,
} from './FiscalPartnerType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Fiscal Partners.
 * @export
 * @interface FiscalPartnersDetails
 */
export interface FiscalPartnersDetails {
    /**
     * Details of Fiscal Partners.
     * @type {Array<FiscalPartnerType>}
     * @memberof FiscalPartnersDetails
     */
    fiscalPartners?: Array<FiscalPartnerType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FiscalPartnersDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FiscalPartnersDetails interface.
 */
export function instanceOfFiscalPartnersDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalPartnersDetailsFromJSON(json: any): FiscalPartnersDetails {
    return FiscalPartnersDetailsFromJSONTyped(json, false);
}

export function FiscalPartnersDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalPartnersDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalPartners': !exists(json, 'fiscalPartners') ? undefined : ((json['fiscalPartners'] as Array<any>).map(FiscalPartnerTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FiscalPartnersDetailsToJSON(value?: FiscalPartnersDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalPartners': value.fiscalPartners === undefined ? undefined : ((value.fiscalPartners as Array<any>).map(FiscalPartnerTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

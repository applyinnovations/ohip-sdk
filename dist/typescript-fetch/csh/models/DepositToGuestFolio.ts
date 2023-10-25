/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PostDepositToGuestFolioType } from './PostDepositToGuestFolioType';
import {
    PostDepositToGuestFolioTypeFromJSON,
    PostDepositToGuestFolioTypeFromJSONTyped,
    PostDepositToGuestFolioTypeToJSON,
} from './PostDepositToGuestFolioType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to post an existing deposit on a reservation to the Guest Folio for No Show or Canceled Reservations. Deposits remain in the deposit ledger until Checkin/Checkout. In the case of No Show or Canceled reservations they remain in the deposit ledger until this request is done.
 * @export
 * @interface DepositToGuestFolio
 */
export interface DepositToGuestFolio {
    /**
     * 
     * @type {PostDepositToGuestFolioType}
     * @memberof DepositToGuestFolio
     */
    criteria?: PostDepositToGuestFolioType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DepositToGuestFolio
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DepositToGuestFolio
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DepositToGuestFolio interface.
 */
export function instanceOfDepositToGuestFolio(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositToGuestFolioFromJSON(json: any): DepositToGuestFolio {
    return DepositToGuestFolioFromJSONTyped(json, false);
}

export function DepositToGuestFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositToGuestFolio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : PostDepositToGuestFolioTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DepositToGuestFolioToJSON(value?: DepositToGuestFolio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': PostDepositToGuestFolioTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


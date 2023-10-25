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
import type { SupplementalFolioCriteriaType } from './SupplementalFolioCriteriaType';
import {
    SupplementalFolioCriteriaTypeFromJSON,
    SupplementalFolioCriteriaTypeFromJSONTyped,
    SupplementalFolioCriteriaTypeToJSON,
} from './SupplementalFolioCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to post a Supplemental Folio for an existing Folio. Debit Bill ( Supplemental Folio ) Functionality parameter is required
 * @export
 * @interface PostSupplementalFolio
 */
export interface PostSupplementalFolio {
    /**
     * 
     * @type {SupplementalFolioCriteriaType}
     * @memberof PostSupplementalFolio
     */
    criteria?: SupplementalFolioCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostSupplementalFolio
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostSupplementalFolio
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostSupplementalFolio interface.
 */
export function instanceOfPostSupplementalFolio(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostSupplementalFolioFromJSON(json: any): PostSupplementalFolio {
    return PostSupplementalFolioFromJSONTyped(json, false);
}

export function PostSupplementalFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostSupplementalFolio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : SupplementalFolioCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostSupplementalFolioToJSON(value?: PostSupplementalFolio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': SupplementalFolioCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


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
import type { FolioWindowType } from './FolioWindowType';
import {
    FolioWindowTypeFromJSON,
    FolioWindowTypeFromJSONTyped,
    FolioWindowTypeToJSON,
} from './FolioWindowType';
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
 * Details of the folio created.
 * @export
 * @interface ArticlesSale
 */
export interface ArticlesSale {
    /**
     * 
     * @type {Array<FolioWindowType>}
     * @memberof ArticlesSale
     */
    folioWindowDetails?: Array<FolioWindowType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ArticlesSale
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ArticlesSale
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ArticlesSale interface.
 */
export function instanceOfArticlesSale(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArticlesSaleFromJSON(json: any): ArticlesSale {
    return ArticlesSaleFromJSONTyped(json, false);
}

export function ArticlesSaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlesSale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioWindowDetails': !exists(json, 'folioWindowDetails') ? undefined : ((json['folioWindowDetails'] as Array<any>).map(FolioWindowTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ArticlesSaleToJSON(value?: ArticlesSale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioWindowDetails': value.folioWindowDetails === undefined ? undefined : ((value.folioWindowDetails as Array<any>).map(FolioWindowTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FolioReportResultType } from './FolioReportResultType';
import {
    FolioReportResultTypeFromJSON,
    FolioReportResultTypeFromJSONTyped,
    FolioReportResultTypeToJSON,
} from './FolioReportResultType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for folio report.
 * @export
 * @interface FolioReport
 */
export interface FolioReport {
    /**
     * 
     * @type {FolioReportResultType}
     * @memberof FolioReport
     */
    folio?: FolioReportResultType;
    /**
     * 
     * @type {Links}
     * @memberof FolioReport
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof FolioReport
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the FolioReport interface.
 */
export function instanceOfFolioReport(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioReportFromJSON(json: any): FolioReport {
    return FolioReportFromJSONTyped(json, false);
}

export function FolioReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folio': !exists(json, 'folio') ? undefined : FolioReportResultTypeFromJSON(json['folio']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function FolioReportToJSON(value?: FolioReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folio': FolioReportResultTypeToJSON(value.folio),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

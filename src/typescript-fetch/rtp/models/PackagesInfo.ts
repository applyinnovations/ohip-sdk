/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { MasterInfoType } from './MasterInfoType';
import {
    MasterInfoTypeFromJSON,
    MasterInfoTypeFromJSONTyped,
    MasterInfoTypeToJSON,
} from './MasterInfoType';
import type { PackagesInfoPackageCodesList } from './PackagesInfoPackageCodesList';
import {
    PackagesInfoPackageCodesListFromJSON,
    PackagesInfoPackageCodesListFromJSONTyped,
    PackagesInfoPackageCodesListToJSON,
} from './PackagesInfoPackageCodesList';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object to fetch list of packages.
 * @export
 * @interface PackagesInfo
 */
export interface PackagesInfo {
    /**
     * 
     * @type {Links}
     * @memberof PackagesInfo
     */
    links?: Links;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof PackagesInfo
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     * 
     * @type {PackagesInfoPackageCodesList}
     * @memberof PackagesInfo
     */
    packageCodesList?: PackagesInfoPackageCodesList;
    /**
     * 
     * @type {WarningsType}
     * @memberof PackagesInfo
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the PackagesInfo interface.
 */
export function instanceOfPackagesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagesInfoFromJSON(json: any): PackagesInfo {
    return PackagesInfoFromJSONTyped(json, false);
}

export function PackagesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoTypeFromJSON)),
        'packageCodesList': !exists(json, 'packageCodesList') ? undefined : PackagesInfoPackageCodesListFromJSON(json['packageCodesList']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function PackagesInfoToJSON(value?: PackagesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoTypeToJSON)),
        'packageCodesList': PackagesInfoPackageCodesListToJSON(value.packageCodesList),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}

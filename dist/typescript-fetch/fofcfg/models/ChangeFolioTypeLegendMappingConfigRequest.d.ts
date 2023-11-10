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
import type { FolioTypeLegendMappingConfigType } from './FolioTypeLegendMappingConfigType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface ChangeFolioTypeLegendMappingConfigRequest
 */
export interface ChangeFolioTypeLegendMappingConfigRequest {
    /**
     *
     * @type {FolioTypeLegendMappingConfigType}
     * @memberof ChangeFolioTypeLegendMappingConfigRequest
     */
    criteria?: FolioTypeLegendMappingConfigType;
    /**
     *
     * @type {Links}
     * @memberof ChangeFolioTypeLegendMappingConfigRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeFolioTypeLegendMappingConfigRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeFolioTypeLegendMappingConfigRequest interface.
 */
export declare function instanceOfChangeFolioTypeLegendMappingConfigRequest(value: object): boolean;
export declare function ChangeFolioTypeLegendMappingConfigRequestFromJSON(json: any): ChangeFolioTypeLegendMappingConfigRequest;
export declare function ChangeFolioTypeLegendMappingConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeFolioTypeLegendMappingConfigRequest;
export declare function ChangeFolioTypeLegendMappingConfigRequestToJSON(value?: ChangeFolioTypeLegendMappingConfigRequest | null): any;

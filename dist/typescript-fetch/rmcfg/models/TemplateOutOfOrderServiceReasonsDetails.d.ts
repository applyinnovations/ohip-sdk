/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { TemplateOutOfOrderServiceReasonsType } from './TemplateOutOfOrderServiceReasonsType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching template Out of order/service reason(s).
 * @export
 * @interface TemplateOutOfOrderServiceReasonsDetails
 */
export interface TemplateOutOfOrderServiceReasonsDetails {
    /**
     *
     * @type {Links}
     * @memberof TemplateOutOfOrderServiceReasonsDetails
     */
    links?: Links;
    /**
     *
     * @type {TemplateOutOfOrderServiceReasonsType}
     * @memberof TemplateOutOfOrderServiceReasonsDetails
     */
    outOfOrderServiceReasons?: TemplateOutOfOrderServiceReasonsType;
    /**
     *
     * @type {WarningsType}
     * @memberof TemplateOutOfOrderServiceReasonsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TemplateOutOfOrderServiceReasonsDetails interface.
 */
export declare function instanceOfTemplateOutOfOrderServiceReasonsDetails(value: object): boolean;
export declare function TemplateOutOfOrderServiceReasonsDetailsFromJSON(json: any): TemplateOutOfOrderServiceReasonsDetails;
export declare function TemplateOutOfOrderServiceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateOutOfOrderServiceReasonsDetails;
export declare function TemplateOutOfOrderServiceReasonsDetailsToJSON(value?: TemplateOutOfOrderServiceReasonsDetails | null): any;

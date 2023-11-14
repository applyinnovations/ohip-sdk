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
import type { ControlSequencesType } from './ControlSequencesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface OperaControlSequences
 */
export interface OperaControlSequences {
    /**
     *
     * @type {ControlSequencesType}
     * @memberof OperaControlSequences
     */
    controlSequences?: ControlSequencesType;
    /**
     *
     * @type {Links}
     * @memberof OperaControlSequences
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof OperaControlSequences
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the OperaControlSequences interface.
 */
export declare function instanceOfOperaControlSequences(value: object): boolean;
export declare function OperaControlSequencesFromJSON(json: any): OperaControlSequences;
export declare function OperaControlSequencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperaControlSequences;
export declare function OperaControlSequencesToJSON(value?: OperaControlSequences | null): any;
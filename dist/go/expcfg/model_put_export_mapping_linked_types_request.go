/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the PutExportMappingLinkedTypesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutExportMappingLinkedTypesRequest{}

// PutExportMappingLinkedTypesRequest struct for PutExportMappingLinkedTypesRequest
type PutExportMappingLinkedTypesRequest struct {
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	// The linked codes for the given hotel.
	LinkedCodes []ExportMappingLinkedCodeType `json:"linkedCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutExportMappingLinkedTypesRequest instantiates a new PutExportMappingLinkedTypesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutExportMappingLinkedTypesRequest() *PutExportMappingLinkedTypesRequest {
	this := PutExportMappingLinkedTypesRequest{}
	return &this
}

// NewPutExportMappingLinkedTypesRequestWithDefaults instantiates a new PutExportMappingLinkedTypesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutExportMappingLinkedTypesRequestWithDefaults() *PutExportMappingLinkedTypesRequest {
	this := PutExportMappingLinkedTypesRequest{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PutExportMappingLinkedTypesRequest) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutExportMappingLinkedTypesRequest) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PutExportMappingLinkedTypesRequest) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PutExportMappingLinkedTypesRequest) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinkedCodes returns the LinkedCodes field value if set, zero value otherwise.
func (o *PutExportMappingLinkedTypesRequest) GetLinkedCodes() []ExportMappingLinkedCodeType {
	if o == nil || IsNil(o.LinkedCodes) {
		var ret []ExportMappingLinkedCodeType
		return ret
	}
	return o.LinkedCodes
}

// GetLinkedCodesOk returns a tuple with the LinkedCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutExportMappingLinkedTypesRequest) GetLinkedCodesOk() ([]ExportMappingLinkedCodeType, bool) {
	if o == nil || IsNil(o.LinkedCodes) {
		return nil, false
	}
	return o.LinkedCodes, true
}

// HasLinkedCodes returns a boolean if a field has been set.
func (o *PutExportMappingLinkedTypesRequest) HasLinkedCodes() bool {
	if o != nil && !IsNil(o.LinkedCodes) {
		return true
	}

	return false
}

// SetLinkedCodes gets a reference to the given []ExportMappingLinkedCodeType and assigns it to the LinkedCodes field.
func (o *PutExportMappingLinkedTypesRequest) SetLinkedCodes(v []ExportMappingLinkedCodeType) {
	o.LinkedCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutExportMappingLinkedTypesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutExportMappingLinkedTypesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutExportMappingLinkedTypesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutExportMappingLinkedTypesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutExportMappingLinkedTypesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutExportMappingLinkedTypesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutExportMappingLinkedTypesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutExportMappingLinkedTypesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutExportMappingLinkedTypesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutExportMappingLinkedTypesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LinkedCodes) {
		toSerialize["linkedCodes"] = o.LinkedCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutExportMappingLinkedTypesRequest struct {
	value *PutExportMappingLinkedTypesRequest
	isSet bool
}

func (v NullablePutExportMappingLinkedTypesRequest) Get() *PutExportMappingLinkedTypesRequest {
	return v.value
}

func (v *NullablePutExportMappingLinkedTypesRequest) Set(val *PutExportMappingLinkedTypesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutExportMappingLinkedTypesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutExportMappingLinkedTypesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutExportMappingLinkedTypesRequest(val *PutExportMappingLinkedTypesRequest) *NullablePutExportMappingLinkedTypesRequest {
	return &NullablePutExportMappingLinkedTypesRequest{value: val, isSet: true}
}

func (v NullablePutExportMappingLinkedTypesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutExportMappingLinkedTypesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



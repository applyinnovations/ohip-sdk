/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the FetchedHotelInterfaceErrors type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchedHotelInterfaceErrors{}

// FetchedHotelInterfaceErrors Response object for retrieving Hotel Interface Errors.
type FetchedHotelInterfaceErrors struct {
	// Collection of Hotel Interface Errors.
	HotelInterfaceErrors []HotelInterfaceErrorType `json:"hotelInterfaceErrors,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFetchedHotelInterfaceErrors instantiates a new FetchedHotelInterfaceErrors object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchedHotelInterfaceErrors() *FetchedHotelInterfaceErrors {
	this := FetchedHotelInterfaceErrors{}
	return &this
}

// NewFetchedHotelInterfaceErrorsWithDefaults instantiates a new FetchedHotelInterfaceErrors object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchedHotelInterfaceErrorsWithDefaults() *FetchedHotelInterfaceErrors {
	this := FetchedHotelInterfaceErrors{}
	return &this
}

// GetHotelInterfaceErrors returns the HotelInterfaceErrors field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetHotelInterfaceErrors() []HotelInterfaceErrorType {
	if o == nil || IsNil(o.HotelInterfaceErrors) {
		var ret []HotelInterfaceErrorType
		return ret
	}
	return o.HotelInterfaceErrors
}

// GetHotelInterfaceErrorsOk returns a tuple with the HotelInterfaceErrors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetHotelInterfaceErrorsOk() ([]HotelInterfaceErrorType, bool) {
	if o == nil || IsNil(o.HotelInterfaceErrors) {
		return nil, false
	}
	return o.HotelInterfaceErrors, true
}

// HasHotelInterfaceErrors returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasHotelInterfaceErrors() bool {
	if o != nil && !IsNil(o.HotelInterfaceErrors) {
		return true
	}

	return false
}

// SetHotelInterfaceErrors gets a reference to the given []HotelInterfaceErrorType and assigns it to the HotelInterfaceErrors field.
func (o *FetchedHotelInterfaceErrors) SetHotelInterfaceErrors(v []HotelInterfaceErrorType) {
	o.HotelInterfaceErrors = v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *FetchedHotelInterfaceErrors) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *FetchedHotelInterfaceErrors) SetOffset(v int32) {
	o.Offset = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *FetchedHotelInterfaceErrors) SetLimit(v int32) {
	o.Limit = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *FetchedHotelInterfaceErrors) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *FetchedHotelInterfaceErrors) SetTotalResults(v int32) {
	o.TotalResults = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FetchedHotelInterfaceErrors) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FetchedHotelInterfaceErrors) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedHotelInterfaceErrors) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FetchedHotelInterfaceErrors) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FetchedHotelInterfaceErrors) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FetchedHotelInterfaceErrors) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchedHotelInterfaceErrors) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelInterfaceErrors) {
		toSerialize["hotelInterfaceErrors"] = o.HotelInterfaceErrors
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFetchedHotelInterfaceErrors struct {
	value *FetchedHotelInterfaceErrors
	isSet bool
}

func (v NullableFetchedHotelInterfaceErrors) Get() *FetchedHotelInterfaceErrors {
	return v.value
}

func (v *NullableFetchedHotelInterfaceErrors) Set(val *FetchedHotelInterfaceErrors) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchedHotelInterfaceErrors) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchedHotelInterfaceErrors) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchedHotelInterfaceErrors(val *FetchedHotelInterfaceErrors) *NullableFetchedHotelInterfaceErrors {
	return &NullableFetchedHotelInterfaceErrors{value: val, isSet: true}
}

func (v NullableFetchedHotelInterfaceErrors) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchedHotelInterfaceErrors) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



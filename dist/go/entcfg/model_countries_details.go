/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CountriesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CountriesDetails{}

// CountriesDetails Response object for fetching Countries.
type CountriesDetails struct {
	// Country details.
	Countries []CountryType `json:"countries,omitempty"`
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
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCountriesDetails instantiates a new CountriesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCountriesDetails() *CountriesDetails {
	this := CountriesDetails{}
	return &this
}

// NewCountriesDetailsWithDefaults instantiates a new CountriesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCountriesDetailsWithDefaults() *CountriesDetails {
	this := CountriesDetails{}
	return &this
}

// GetCountries returns the Countries field value if set, zero value otherwise.
func (o *CountriesDetails) GetCountries() []CountryType {
	if o == nil || IsNil(o.Countries) {
		var ret []CountryType
		return ret
	}
	return o.Countries
}

// GetCountriesOk returns a tuple with the Countries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetCountriesOk() ([]CountryType, bool) {
	if o == nil || IsNil(o.Countries) {
		return nil, false
	}
	return o.Countries, true
}

// HasCountries returns a boolean if a field has been set.
func (o *CountriesDetails) HasCountries() bool {
	if o != nil && !IsNil(o.Countries) {
		return true
	}

	return false
}

// SetCountries gets a reference to the given []CountryType and assigns it to the Countries field.
func (o *CountriesDetails) SetCountries(v []CountryType) {
	o.Countries = v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *CountriesDetails) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *CountriesDetails) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *CountriesDetails) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *CountriesDetails) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *CountriesDetails) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *CountriesDetails) SetOffset(v int32) {
	o.Offset = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *CountriesDetails) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *CountriesDetails) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *CountriesDetails) SetLimit(v int32) {
	o.Limit = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *CountriesDetails) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *CountriesDetails) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *CountriesDetails) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *CountriesDetails) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *CountriesDetails) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *CountriesDetails) SetTotalResults(v int32) {
	o.TotalResults = &v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *CountriesDetails) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *CountriesDetails) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *CountriesDetails) SetCount(v int32) {
	o.Count = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CountriesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CountriesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CountriesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CountriesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CountriesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CountriesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CountriesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CountriesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Countries) {
		toSerialize["countries"] = o.Countries
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
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCountriesDetails struct {
	value *CountriesDetails
	isSet bool
}

func (v NullableCountriesDetails) Get() *CountriesDetails {
	return v.value
}

func (v *NullableCountriesDetails) Set(val *CountriesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCountriesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCountriesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCountriesDetails(val *CountriesDetails) *NullableCountriesDetails {
	return &NullableCountriesDetails{value: val, isSet: true}
}

func (v NullableCountriesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCountriesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CompAccountingJournal type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompAccountingJournal{}

// CompAccountingJournal Response for fetching the Complimentary Posting Journal.
type CompAccountingJournal struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	JournalPostings *FinancialPostingsType `json:"journalPostings,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCompAccountingJournal instantiates a new CompAccountingJournal object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompAccountingJournal() *CompAccountingJournal {
	this := CompAccountingJournal{}
	return &this
}

// NewCompAccountingJournalWithDefaults instantiates a new CompAccountingJournal object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompAccountingJournalWithDefaults() *CompAccountingJournal {
	this := CompAccountingJournal{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *CompAccountingJournal) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *CompAccountingJournal) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetJournalPostings returns the JournalPostings field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetJournalPostings() FinancialPostingsType {
	if o == nil || IsNil(o.JournalPostings) {
		var ret FinancialPostingsType
		return ret
	}
	return *o.JournalPostings
}

// GetJournalPostingsOk returns a tuple with the JournalPostings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetJournalPostingsOk() (*FinancialPostingsType, bool) {
	if o == nil || IsNil(o.JournalPostings) {
		return nil, false
	}
	return o.JournalPostings, true
}

// HasJournalPostings returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasJournalPostings() bool {
	if o != nil && !IsNil(o.JournalPostings) {
		return true
	}

	return false
}

// SetJournalPostings gets a reference to the given FinancialPostingsType and assigns it to the JournalPostings field.
func (o *CompAccountingJournal) SetJournalPostings(v FinancialPostingsType) {
	o.JournalPostings = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *CompAccountingJournal) SetLimit(v int32) {
	o.Limit = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CompAccountingJournal) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *CompAccountingJournal) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *CompAccountingJournal) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *CompAccountingJournal) SetTotalResults(v int32) {
	o.TotalResults = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CompAccountingJournal) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompAccountingJournal) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CompAccountingJournal) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CompAccountingJournal) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CompAccountingJournal) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompAccountingJournal) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.JournalPostings) {
		toSerialize["journalPostings"] = o.JournalPostings
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCompAccountingJournal struct {
	value *CompAccountingJournal
	isSet bool
}

func (v NullableCompAccountingJournal) Get() *CompAccountingJournal {
	return v.value
}

func (v *NullableCompAccountingJournal) Set(val *CompAccountingJournal) {
	v.value = val
	v.isSet = true
}

func (v NullableCompAccountingJournal) IsSet() bool {
	return v.isSet
}

func (v *NullableCompAccountingJournal) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompAccountingJournal(val *CompAccountingJournal) *NullableCompAccountingJournal {
	return &NullableCompAccountingJournal{value: val, isSet: true}
}

func (v NullableCompAccountingJournal) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompAccountingJournal) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



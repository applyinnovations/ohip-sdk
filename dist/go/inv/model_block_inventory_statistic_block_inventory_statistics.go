/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the BlockInventoryStatisticBlockInventoryStatistics type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockInventoryStatisticBlockInventoryStatistics{}

// BlockInventoryStatisticBlockInventoryStatistics List of block inventory statistics that is grouped by statistic date.
type BlockInventoryStatisticBlockInventoryStatistics struct {
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	AllRowsFetched *bool `json:"allRowsFetched,omitempty"`
	// Summary and Detail statistic for block inventory that is group by statistic date.
	BlockInventoryStatistic []BlockInventoryStatisticType `json:"blockInventoryStatistic,omitempty"`
	// Indicates maximum number of records a Web Service should return.
	Limit *int32 `json:"limit,omitempty"`
	// Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
	Offset *int32 `json:"offset,omitempty"`
	// Evaluated total page count based on the requested max fetch count.
	TotalPages *int32 `json:"totalPages,omitempty"`
	// Total number of rows queried
	TotalRows *int32 `json:"totalRows,omitempty"`
}

// NewBlockInventoryStatisticBlockInventoryStatistics instantiates a new BlockInventoryStatisticBlockInventoryStatistics object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockInventoryStatisticBlockInventoryStatistics() *BlockInventoryStatisticBlockInventoryStatistics {
	this := BlockInventoryStatisticBlockInventoryStatistics{}
	return &this
}

// NewBlockInventoryStatisticBlockInventoryStatisticsWithDefaults instantiates a new BlockInventoryStatisticBlockInventoryStatistics object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockInventoryStatisticBlockInventoryStatisticsWithDefaults() *BlockInventoryStatisticBlockInventoryStatistics {
	this := BlockInventoryStatisticBlockInventoryStatistics{}
	return &this
}

// GetAllRowsFetched returns the AllRowsFetched field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetAllRowsFetched() bool {
	if o == nil || IsNil(o.AllRowsFetched) {
		var ret bool
		return ret
	}
	return *o.AllRowsFetched
}

// GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetAllRowsFetchedOk() (*bool, bool) {
	if o == nil || IsNil(o.AllRowsFetched) {
		return nil, false
	}
	return o.AllRowsFetched, true
}

// HasAllRowsFetched returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasAllRowsFetched() bool {
	if o != nil && !IsNil(o.AllRowsFetched) {
		return true
	}

	return false
}

// SetAllRowsFetched gets a reference to the given bool and assigns it to the AllRowsFetched field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetAllRowsFetched(v bool) {
	o.AllRowsFetched = &v
}

// GetBlockInventoryStatistic returns the BlockInventoryStatistic field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetBlockInventoryStatistic() []BlockInventoryStatisticType {
	if o == nil || IsNil(o.BlockInventoryStatistic) {
		var ret []BlockInventoryStatisticType
		return ret
	}
	return o.BlockInventoryStatistic
}

// GetBlockInventoryStatisticOk returns a tuple with the BlockInventoryStatistic field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetBlockInventoryStatisticOk() ([]BlockInventoryStatisticType, bool) {
	if o == nil || IsNil(o.BlockInventoryStatistic) {
		return nil, false
	}
	return o.BlockInventoryStatistic, true
}

// HasBlockInventoryStatistic returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasBlockInventoryStatistic() bool {
	if o != nil && !IsNil(o.BlockInventoryStatistic) {
		return true
	}

	return false
}

// SetBlockInventoryStatistic gets a reference to the given []BlockInventoryStatisticType and assigns it to the BlockInventoryStatistic field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetBlockInventoryStatistic(v []BlockInventoryStatisticType) {
	o.BlockInventoryStatistic = v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetLimit(v int32) {
	o.Limit = &v
}

// GetOffset returns the Offset field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetOffset() int32 {
	if o == nil || IsNil(o.Offset) {
		var ret int32
		return ret
	}
	return *o.Offset
}

// GetOffsetOk returns a tuple with the Offset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetOffsetOk() (*int32, bool) {
	if o == nil || IsNil(o.Offset) {
		return nil, false
	}
	return o.Offset, true
}

// HasOffset returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasOffset() bool {
	if o != nil && !IsNil(o.Offset) {
		return true
	}

	return false
}

// SetOffset gets a reference to the given int32 and assigns it to the Offset field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetOffset(v int32) {
	o.Offset = &v
}

// GetTotalPages returns the TotalPages field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalPages() int32 {
	if o == nil || IsNil(o.TotalPages) {
		var ret int32
		return ret
	}
	return *o.TotalPages
}

// GetTotalPagesOk returns a tuple with the TotalPages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalPages) {
		return nil, false
	}
	return o.TotalPages, true
}

// HasTotalPages returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasTotalPages() bool {
	if o != nil && !IsNil(o.TotalPages) {
		return true
	}

	return false
}

// SetTotalPages gets a reference to the given int32 and assigns it to the TotalPages field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetTotalPages(v int32) {
	o.TotalPages = &v
}

// GetTotalRows returns the TotalRows field value if set, zero value otherwise.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalRows() int32 {
	if o == nil || IsNil(o.TotalRows) {
		var ret int32
		return ret
	}
	return *o.TotalRows
}

// GetTotalRowsOk returns a tuple with the TotalRows field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalRowsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalRows) {
		return nil, false
	}
	return o.TotalRows, true
}

// HasTotalRows returns a boolean if a field has been set.
func (o *BlockInventoryStatisticBlockInventoryStatistics) HasTotalRows() bool {
	if o != nil && !IsNil(o.TotalRows) {
		return true
	}

	return false
}

// SetTotalRows gets a reference to the given int32 and assigns it to the TotalRows field.
func (o *BlockInventoryStatisticBlockInventoryStatistics) SetTotalRows(v int32) {
	o.TotalRows = &v
}

func (o BlockInventoryStatisticBlockInventoryStatistics) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockInventoryStatisticBlockInventoryStatistics) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllRowsFetched) {
		toSerialize["allRowsFetched"] = o.AllRowsFetched
	}
	if !IsNil(o.BlockInventoryStatistic) {
		toSerialize["blockInventoryStatistic"] = o.BlockInventoryStatistic
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	if !IsNil(o.Offset) {
		toSerialize["offset"] = o.Offset
	}
	if !IsNil(o.TotalPages) {
		toSerialize["totalPages"] = o.TotalPages
	}
	if !IsNil(o.TotalRows) {
		toSerialize["totalRows"] = o.TotalRows
	}
	return toSerialize, nil
}

type NullableBlockInventoryStatisticBlockInventoryStatistics struct {
	value *BlockInventoryStatisticBlockInventoryStatistics
	isSet bool
}

func (v NullableBlockInventoryStatisticBlockInventoryStatistics) Get() *BlockInventoryStatisticBlockInventoryStatistics {
	return v.value
}

func (v *NullableBlockInventoryStatisticBlockInventoryStatistics) Set(val *BlockInventoryStatisticBlockInventoryStatistics) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockInventoryStatisticBlockInventoryStatistics) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockInventoryStatisticBlockInventoryStatistics) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockInventoryStatisticBlockInventoryStatistics(val *BlockInventoryStatisticBlockInventoryStatistics) *NullableBlockInventoryStatisticBlockInventoryStatistics {
	return &NullableBlockInventoryStatisticBlockInventoryStatistics{value: val, isSet: true}
}

func (v NullableBlockInventoryStatisticBlockInventoryStatistics) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockInventoryStatisticBlockInventoryStatistics) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



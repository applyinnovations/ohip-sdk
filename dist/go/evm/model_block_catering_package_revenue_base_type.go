/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BlockCateringPackageRevenueBaseType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockCateringPackageRevenueBaseType{}

// BlockCateringPackageRevenueBaseType Pricing detail of associated catering package.
type BlockCateringPackageRevenueBaseType struct {
	BlockInfo *BlockType `json:"blockInfo,omitempty"`
	// Defines if Flat Rate is applicable for the package.
	FlatPrice *bool `json:"flatPrice,omitempty"`
	PackageDetail *CateringPackageInfoType `json:"packageDetail,omitempty"`
	PackageId *UniqueIDType `json:"packageId,omitempty"`
	// Price Code of the associated package.
	PriceCode *string `json:"priceCode,omitempty"`
	// Price Code description of the associated package.
	PriceDescription *string `json:"priceDescription,omitempty"`
	// Collection of revenues associated with packaged event.
	Revenues []BlockCateringPackageRevenueType `json:"revenues,omitempty"`
}

// NewBlockCateringPackageRevenueBaseType instantiates a new BlockCateringPackageRevenueBaseType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockCateringPackageRevenueBaseType() *BlockCateringPackageRevenueBaseType {
	this := BlockCateringPackageRevenueBaseType{}
	return &this
}

// NewBlockCateringPackageRevenueBaseTypeWithDefaults instantiates a new BlockCateringPackageRevenueBaseType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockCateringPackageRevenueBaseTypeWithDefaults() *BlockCateringPackageRevenueBaseType {
	this := BlockCateringPackageRevenueBaseType{}
	return &this
}

// GetBlockInfo returns the BlockInfo field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetBlockInfo() BlockType {
	if o == nil || IsNil(o.BlockInfo) {
		var ret BlockType
		return ret
	}
	return *o.BlockInfo
}

// GetBlockInfoOk returns a tuple with the BlockInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetBlockInfoOk() (*BlockType, bool) {
	if o == nil || IsNil(o.BlockInfo) {
		return nil, false
	}
	return o.BlockInfo, true
}

// HasBlockInfo returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasBlockInfo() bool {
	if o != nil && !IsNil(o.BlockInfo) {
		return true
	}

	return false
}

// SetBlockInfo gets a reference to the given BlockType and assigns it to the BlockInfo field.
func (o *BlockCateringPackageRevenueBaseType) SetBlockInfo(v BlockType) {
	o.BlockInfo = &v
}

// GetFlatPrice returns the FlatPrice field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetFlatPrice() bool {
	if o == nil || IsNil(o.FlatPrice) {
		var ret bool
		return ret
	}
	return *o.FlatPrice
}

// GetFlatPriceOk returns a tuple with the FlatPrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetFlatPriceOk() (*bool, bool) {
	if o == nil || IsNil(o.FlatPrice) {
		return nil, false
	}
	return o.FlatPrice, true
}

// HasFlatPrice returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasFlatPrice() bool {
	if o != nil && !IsNil(o.FlatPrice) {
		return true
	}

	return false
}

// SetFlatPrice gets a reference to the given bool and assigns it to the FlatPrice field.
func (o *BlockCateringPackageRevenueBaseType) SetFlatPrice(v bool) {
	o.FlatPrice = &v
}

// GetPackageDetail returns the PackageDetail field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetPackageDetail() CateringPackageInfoType {
	if o == nil || IsNil(o.PackageDetail) {
		var ret CateringPackageInfoType
		return ret
	}
	return *o.PackageDetail
}

// GetPackageDetailOk returns a tuple with the PackageDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetPackageDetailOk() (*CateringPackageInfoType, bool) {
	if o == nil || IsNil(o.PackageDetail) {
		return nil, false
	}
	return o.PackageDetail, true
}

// HasPackageDetail returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasPackageDetail() bool {
	if o != nil && !IsNil(o.PackageDetail) {
		return true
	}

	return false
}

// SetPackageDetail gets a reference to the given CateringPackageInfoType and assigns it to the PackageDetail field.
func (o *BlockCateringPackageRevenueBaseType) SetPackageDetail(v CateringPackageInfoType) {
	o.PackageDetail = &v
}

// GetPackageId returns the PackageId field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetPackageId() UniqueIDType {
	if o == nil || IsNil(o.PackageId) {
		var ret UniqueIDType
		return ret
	}
	return *o.PackageId
}

// GetPackageIdOk returns a tuple with the PackageId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetPackageIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.PackageId) {
		return nil, false
	}
	return o.PackageId, true
}

// HasPackageId returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasPackageId() bool {
	if o != nil && !IsNil(o.PackageId) {
		return true
	}

	return false
}

// SetPackageId gets a reference to the given UniqueIDType and assigns it to the PackageId field.
func (o *BlockCateringPackageRevenueBaseType) SetPackageId(v UniqueIDType) {
	o.PackageId = &v
}

// GetPriceCode returns the PriceCode field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetPriceCode() string {
	if o == nil || IsNil(o.PriceCode) {
		var ret string
		return ret
	}
	return *o.PriceCode
}

// GetPriceCodeOk returns a tuple with the PriceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetPriceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PriceCode) {
		return nil, false
	}
	return o.PriceCode, true
}

// HasPriceCode returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasPriceCode() bool {
	if o != nil && !IsNil(o.PriceCode) {
		return true
	}

	return false
}

// SetPriceCode gets a reference to the given string and assigns it to the PriceCode field.
func (o *BlockCateringPackageRevenueBaseType) SetPriceCode(v string) {
	o.PriceCode = &v
}

// GetPriceDescription returns the PriceDescription field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetPriceDescription() string {
	if o == nil || IsNil(o.PriceDescription) {
		var ret string
		return ret
	}
	return *o.PriceDescription
}

// GetPriceDescriptionOk returns a tuple with the PriceDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetPriceDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PriceDescription) {
		return nil, false
	}
	return o.PriceDescription, true
}

// HasPriceDescription returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasPriceDescription() bool {
	if o != nil && !IsNil(o.PriceDescription) {
		return true
	}

	return false
}

// SetPriceDescription gets a reference to the given string and assigns it to the PriceDescription field.
func (o *BlockCateringPackageRevenueBaseType) SetPriceDescription(v string) {
	o.PriceDescription = &v
}

// GetRevenues returns the Revenues field value if set, zero value otherwise.
func (o *BlockCateringPackageRevenueBaseType) GetRevenues() []BlockCateringPackageRevenueType {
	if o == nil || IsNil(o.Revenues) {
		var ret []BlockCateringPackageRevenueType
		return ret
	}
	return o.Revenues
}

// GetRevenuesOk returns a tuple with the Revenues field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockCateringPackageRevenueBaseType) GetRevenuesOk() ([]BlockCateringPackageRevenueType, bool) {
	if o == nil || IsNil(o.Revenues) {
		return nil, false
	}
	return o.Revenues, true
}

// HasRevenues returns a boolean if a field has been set.
func (o *BlockCateringPackageRevenueBaseType) HasRevenues() bool {
	if o != nil && !IsNil(o.Revenues) {
		return true
	}

	return false
}

// SetRevenues gets a reference to the given []BlockCateringPackageRevenueType and assigns it to the Revenues field.
func (o *BlockCateringPackageRevenueBaseType) SetRevenues(v []BlockCateringPackageRevenueType) {
	o.Revenues = v
}

func (o BlockCateringPackageRevenueBaseType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockCateringPackageRevenueBaseType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockInfo) {
		toSerialize["blockInfo"] = o.BlockInfo
	}
	if !IsNil(o.FlatPrice) {
		toSerialize["flatPrice"] = o.FlatPrice
	}
	if !IsNil(o.PackageDetail) {
		toSerialize["packageDetail"] = o.PackageDetail
	}
	if !IsNil(o.PackageId) {
		toSerialize["packageId"] = o.PackageId
	}
	if !IsNil(o.PriceCode) {
		toSerialize["priceCode"] = o.PriceCode
	}
	if !IsNil(o.PriceDescription) {
		toSerialize["priceDescription"] = o.PriceDescription
	}
	if !IsNil(o.Revenues) {
		toSerialize["revenues"] = o.Revenues
	}
	return toSerialize, nil
}

type NullableBlockCateringPackageRevenueBaseType struct {
	value *BlockCateringPackageRevenueBaseType
	isSet bool
}

func (v NullableBlockCateringPackageRevenueBaseType) Get() *BlockCateringPackageRevenueBaseType {
	return v.value
}

func (v *NullableBlockCateringPackageRevenueBaseType) Set(val *BlockCateringPackageRevenueBaseType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockCateringPackageRevenueBaseType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockCateringPackageRevenueBaseType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockCateringPackageRevenueBaseType(val *BlockCateringPackageRevenueBaseType) *NullableBlockCateringPackageRevenueBaseType {
	return &NullableBlockCateringPackageRevenueBaseType{value: val, isSet: true}
}

func (v NullableBlockCateringPackageRevenueBaseType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockCateringPackageRevenueBaseType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



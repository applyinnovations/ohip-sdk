/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelRoomMappingDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelRoomMappingDetailsType{}

// ChannelRoomMappingDetailsType Basic details of hotel-channel room type mapping.
type ChannelRoomMappingDetailsType struct {
	// Flag that indicates whether hotel-channel room type mapping is active or not.
	Active *bool `json:"active,omitempty"`
	// Alternate channel room type name.
	AlternateChannelRoomType *string `json:"alternateChannelRoomType,omitempty"`
	// Channel base allocation.
	BaseAllocation *int32 `json:"baseAllocation,omitempty"`
	// Channel bed type code.
	BedTypeCode *string `json:"bedTypeCode,omitempty"`
	BookingChannelInfo *BookingChannelInfoType `json:"bookingChannelInfo,omitempty"`
	// Channel rate codes where hotel-channel room mappings belong to.
	ChannelRateCodes []string `json:"channelRateCodes,omitempty"`
	// Channel room type order of the hotel-channel room type mapping.
	ChannelRoomTypeOrder *float32 `json:"channelRoomTypeOrder,omitempty"`
	Description *ChannelRoomMappingDescriptionType `json:"description,omitempty"`
	// End date of the hotel-channel room type mapping.
	EndDate *string `json:"endDate,omitempty"`
	GlobalDescription *ChannelMappingEnhancedDescriptionType `json:"globalDescription,omitempty"`
	// Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping.
	NewBeginDate *string `json:"newBeginDate,omitempty"`
	// Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping.
	NewChannelRoomType *string `json:"newChannelRoomType,omitempty"`
	// Rate codes where hotel-channel room type mappings belong to.
	RateCodes []string `json:"rateCodes,omitempty"`
	// Sell sequence for hotel-channel room type mapping.
	SellSequence *float32 `json:"sellSequence,omitempty"`
}

// NewChannelRoomMappingDetailsType instantiates a new ChannelRoomMappingDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelRoomMappingDetailsType() *ChannelRoomMappingDetailsType {
	this := ChannelRoomMappingDetailsType{}
	return &this
}

// NewChannelRoomMappingDetailsTypeWithDefaults instantiates a new ChannelRoomMappingDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelRoomMappingDetailsTypeWithDefaults() *ChannelRoomMappingDetailsType {
	this := ChannelRoomMappingDetailsType{}
	return &this
}

// GetActive returns the Active field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetActive() bool {
	if o == nil || IsNil(o.Active) {
		var ret bool
		return ret
	}
	return *o.Active
}

// GetActiveOk returns a tuple with the Active field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetActiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Active) {
		return nil, false
	}
	return o.Active, true
}

// HasActive returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasActive() bool {
	if o != nil && !IsNil(o.Active) {
		return true
	}

	return false
}

// SetActive gets a reference to the given bool and assigns it to the Active field.
func (o *ChannelRoomMappingDetailsType) SetActive(v bool) {
	o.Active = &v
}

// GetAlternateChannelRoomType returns the AlternateChannelRoomType field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetAlternateChannelRoomType() string {
	if o == nil || IsNil(o.AlternateChannelRoomType) {
		var ret string
		return ret
	}
	return *o.AlternateChannelRoomType
}

// GetAlternateChannelRoomTypeOk returns a tuple with the AlternateChannelRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetAlternateChannelRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AlternateChannelRoomType) {
		return nil, false
	}
	return o.AlternateChannelRoomType, true
}

// HasAlternateChannelRoomType returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasAlternateChannelRoomType() bool {
	if o != nil && !IsNil(o.AlternateChannelRoomType) {
		return true
	}

	return false
}

// SetAlternateChannelRoomType gets a reference to the given string and assigns it to the AlternateChannelRoomType field.
func (o *ChannelRoomMappingDetailsType) SetAlternateChannelRoomType(v string) {
	o.AlternateChannelRoomType = &v
}

// GetBaseAllocation returns the BaseAllocation field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetBaseAllocation() int32 {
	if o == nil || IsNil(o.BaseAllocation) {
		var ret int32
		return ret
	}
	return *o.BaseAllocation
}

// GetBaseAllocationOk returns a tuple with the BaseAllocation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetBaseAllocationOk() (*int32, bool) {
	if o == nil || IsNil(o.BaseAllocation) {
		return nil, false
	}
	return o.BaseAllocation, true
}

// HasBaseAllocation returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasBaseAllocation() bool {
	if o != nil && !IsNil(o.BaseAllocation) {
		return true
	}

	return false
}

// SetBaseAllocation gets a reference to the given int32 and assigns it to the BaseAllocation field.
func (o *ChannelRoomMappingDetailsType) SetBaseAllocation(v int32) {
	o.BaseAllocation = &v
}

// GetBedTypeCode returns the BedTypeCode field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetBedTypeCode() string {
	if o == nil || IsNil(o.BedTypeCode) {
		var ret string
		return ret
	}
	return *o.BedTypeCode
}

// GetBedTypeCodeOk returns a tuple with the BedTypeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetBedTypeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BedTypeCode) {
		return nil, false
	}
	return o.BedTypeCode, true
}

// HasBedTypeCode returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasBedTypeCode() bool {
	if o != nil && !IsNil(o.BedTypeCode) {
		return true
	}

	return false
}

// SetBedTypeCode gets a reference to the given string and assigns it to the BedTypeCode field.
func (o *ChannelRoomMappingDetailsType) SetBedTypeCode(v string) {
	o.BedTypeCode = &v
}

// GetBookingChannelInfo returns the BookingChannelInfo field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetBookingChannelInfo() BookingChannelInfoType {
	if o == nil || IsNil(o.BookingChannelInfo) {
		var ret BookingChannelInfoType
		return ret
	}
	return *o.BookingChannelInfo
}

// GetBookingChannelInfoOk returns a tuple with the BookingChannelInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetBookingChannelInfoOk() (*BookingChannelInfoType, bool) {
	if o == nil || IsNil(o.BookingChannelInfo) {
		return nil, false
	}
	return o.BookingChannelInfo, true
}

// HasBookingChannelInfo returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasBookingChannelInfo() bool {
	if o != nil && !IsNil(o.BookingChannelInfo) {
		return true
	}

	return false
}

// SetBookingChannelInfo gets a reference to the given BookingChannelInfoType and assigns it to the BookingChannelInfo field.
func (o *ChannelRoomMappingDetailsType) SetBookingChannelInfo(v BookingChannelInfoType) {
	o.BookingChannelInfo = &v
}

// GetChannelRateCodes returns the ChannelRateCodes field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetChannelRateCodes() []string {
	if o == nil || IsNil(o.ChannelRateCodes) {
		var ret []string
		return ret
	}
	return o.ChannelRateCodes
}

// GetChannelRateCodesOk returns a tuple with the ChannelRateCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetChannelRateCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.ChannelRateCodes) {
		return nil, false
	}
	return o.ChannelRateCodes, true
}

// HasChannelRateCodes returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasChannelRateCodes() bool {
	if o != nil && !IsNil(o.ChannelRateCodes) {
		return true
	}

	return false
}

// SetChannelRateCodes gets a reference to the given []string and assigns it to the ChannelRateCodes field.
func (o *ChannelRoomMappingDetailsType) SetChannelRateCodes(v []string) {
	o.ChannelRateCodes = v
}

// GetChannelRoomTypeOrder returns the ChannelRoomTypeOrder field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetChannelRoomTypeOrder() float32 {
	if o == nil || IsNil(o.ChannelRoomTypeOrder) {
		var ret float32
		return ret
	}
	return *o.ChannelRoomTypeOrder
}

// GetChannelRoomTypeOrderOk returns a tuple with the ChannelRoomTypeOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetChannelRoomTypeOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.ChannelRoomTypeOrder) {
		return nil, false
	}
	return o.ChannelRoomTypeOrder, true
}

// HasChannelRoomTypeOrder returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasChannelRoomTypeOrder() bool {
	if o != nil && !IsNil(o.ChannelRoomTypeOrder) {
		return true
	}

	return false
}

// SetChannelRoomTypeOrder gets a reference to the given float32 and assigns it to the ChannelRoomTypeOrder field.
func (o *ChannelRoomMappingDetailsType) SetChannelRoomTypeOrder(v float32) {
	o.ChannelRoomTypeOrder = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetDescription() ChannelRoomMappingDescriptionType {
	if o == nil || IsNil(o.Description) {
		var ret ChannelRoomMappingDescriptionType
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetDescriptionOk() (*ChannelRoomMappingDescriptionType, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given ChannelRoomMappingDescriptionType and assigns it to the Description field.
func (o *ChannelRoomMappingDetailsType) SetDescription(v ChannelRoomMappingDescriptionType) {
	o.Description = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ChannelRoomMappingDetailsType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetGlobalDescription returns the GlobalDescription field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetGlobalDescription() ChannelMappingEnhancedDescriptionType {
	if o == nil || IsNil(o.GlobalDescription) {
		var ret ChannelMappingEnhancedDescriptionType
		return ret
	}
	return *o.GlobalDescription
}

// GetGlobalDescriptionOk returns a tuple with the GlobalDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetGlobalDescriptionOk() (*ChannelMappingEnhancedDescriptionType, bool) {
	if o == nil || IsNil(o.GlobalDescription) {
		return nil, false
	}
	return o.GlobalDescription, true
}

// HasGlobalDescription returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasGlobalDescription() bool {
	if o != nil && !IsNil(o.GlobalDescription) {
		return true
	}

	return false
}

// SetGlobalDescription gets a reference to the given ChannelMappingEnhancedDescriptionType and assigns it to the GlobalDescription field.
func (o *ChannelRoomMappingDetailsType) SetGlobalDescription(v ChannelMappingEnhancedDescriptionType) {
	o.GlobalDescription = &v
}

// GetNewBeginDate returns the NewBeginDate field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetNewBeginDate() string {
	if o == nil || IsNil(o.NewBeginDate) {
		var ret string
		return ret
	}
	return *o.NewBeginDate
}

// GetNewBeginDateOk returns a tuple with the NewBeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetNewBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.NewBeginDate) {
		return nil, false
	}
	return o.NewBeginDate, true
}

// HasNewBeginDate returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasNewBeginDate() bool {
	if o != nil && !IsNil(o.NewBeginDate) {
		return true
	}

	return false
}

// SetNewBeginDate gets a reference to the given string and assigns it to the NewBeginDate field.
func (o *ChannelRoomMappingDetailsType) SetNewBeginDate(v string) {
	o.NewBeginDate = &v
}

// GetNewChannelRoomType returns the NewChannelRoomType field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetNewChannelRoomType() string {
	if o == nil || IsNil(o.NewChannelRoomType) {
		var ret string
		return ret
	}
	return *o.NewChannelRoomType
}

// GetNewChannelRoomTypeOk returns a tuple with the NewChannelRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetNewChannelRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.NewChannelRoomType) {
		return nil, false
	}
	return o.NewChannelRoomType, true
}

// HasNewChannelRoomType returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasNewChannelRoomType() bool {
	if o != nil && !IsNil(o.NewChannelRoomType) {
		return true
	}

	return false
}

// SetNewChannelRoomType gets a reference to the given string and assigns it to the NewChannelRoomType field.
func (o *ChannelRoomMappingDetailsType) SetNewChannelRoomType(v string) {
	o.NewChannelRoomType = &v
}

// GetRateCodes returns the RateCodes field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetRateCodes() []string {
	if o == nil || IsNil(o.RateCodes) {
		var ret []string
		return ret
	}
	return o.RateCodes
}

// GetRateCodesOk returns a tuple with the RateCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetRateCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.RateCodes) {
		return nil, false
	}
	return o.RateCodes, true
}

// HasRateCodes returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasRateCodes() bool {
	if o != nil && !IsNil(o.RateCodes) {
		return true
	}

	return false
}

// SetRateCodes gets a reference to the given []string and assigns it to the RateCodes field.
func (o *ChannelRoomMappingDetailsType) SetRateCodes(v []string) {
	o.RateCodes = v
}

// GetSellSequence returns the SellSequence field value if set, zero value otherwise.
func (o *ChannelRoomMappingDetailsType) GetSellSequence() float32 {
	if o == nil || IsNil(o.SellSequence) {
		var ret float32
		return ret
	}
	return *o.SellSequence
}

// GetSellSequenceOk returns a tuple with the SellSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelRoomMappingDetailsType) GetSellSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.SellSequence) {
		return nil, false
	}
	return o.SellSequence, true
}

// HasSellSequence returns a boolean if a field has been set.
func (o *ChannelRoomMappingDetailsType) HasSellSequence() bool {
	if o != nil && !IsNil(o.SellSequence) {
		return true
	}

	return false
}

// SetSellSequence gets a reference to the given float32 and assigns it to the SellSequence field.
func (o *ChannelRoomMappingDetailsType) SetSellSequence(v float32) {
	o.SellSequence = &v
}

func (o ChannelRoomMappingDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelRoomMappingDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Active) {
		toSerialize["active"] = o.Active
	}
	if !IsNil(o.AlternateChannelRoomType) {
		toSerialize["alternateChannelRoomType"] = o.AlternateChannelRoomType
	}
	if !IsNil(o.BaseAllocation) {
		toSerialize["baseAllocation"] = o.BaseAllocation
	}
	if !IsNil(o.BedTypeCode) {
		toSerialize["bedTypeCode"] = o.BedTypeCode
	}
	if !IsNil(o.BookingChannelInfo) {
		toSerialize["bookingChannelInfo"] = o.BookingChannelInfo
	}
	if !IsNil(o.ChannelRateCodes) {
		toSerialize["channelRateCodes"] = o.ChannelRateCodes
	}
	if !IsNil(o.ChannelRoomTypeOrder) {
		toSerialize["channelRoomTypeOrder"] = o.ChannelRoomTypeOrder
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.GlobalDescription) {
		toSerialize["globalDescription"] = o.GlobalDescription
	}
	if !IsNil(o.NewBeginDate) {
		toSerialize["newBeginDate"] = o.NewBeginDate
	}
	if !IsNil(o.NewChannelRoomType) {
		toSerialize["newChannelRoomType"] = o.NewChannelRoomType
	}
	if !IsNil(o.RateCodes) {
		toSerialize["rateCodes"] = o.RateCodes
	}
	if !IsNil(o.SellSequence) {
		toSerialize["sellSequence"] = o.SellSequence
	}
	return toSerialize, nil
}

type NullableChannelRoomMappingDetailsType struct {
	value *ChannelRoomMappingDetailsType
	isSet bool
}

func (v NullableChannelRoomMappingDetailsType) Get() *ChannelRoomMappingDetailsType {
	return v.value
}

func (v *NullableChannelRoomMappingDetailsType) Set(val *ChannelRoomMappingDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelRoomMappingDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelRoomMappingDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelRoomMappingDetailsType(val *ChannelRoomMappingDetailsType) *NullableChannelRoomMappingDetailsType {
	return &NullableChannelRoomMappingDetailsType{value: val, isSet: true}
}

func (v NullableChannelRoomMappingDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelRoomMappingDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



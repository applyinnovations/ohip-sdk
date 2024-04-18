/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the HotelSummaryInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelSummaryInfoType{}

// HotelSummaryInfoType struct for HotelSummaryInfoType
type HotelSummaryInfoType struct {
	Address *AddressType `json:"address,omitempty"`
	Alternate *bool `json:"alternate,omitempty"`
	AvailableRooms *int32 `json:"availableRooms,omitempty"`
	// The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
	ChainCode *string `json:"chainCode,omitempty"`
	// The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
	ChainName *string `json:"chainName,omitempty"`
	ChannelSummaryInfo *ChannelSummaryInfoType `json:"channelSummaryInfo,omitempty"`
	// The official check in time of the Hotel.
	CheckInTime *string `json:"checkInTime,omitempty"`
	// The official check out time of the Hotel.
	CheckOutTime *string `json:"checkOutTime,omitempty"`
	ContactNumbers []TelephoneType `json:"contactNumbers,omitempty"`
	// Provides the hotel's currency code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Exchange Rate information for a currency code.
	CurrencyExchangeRates []CurrencyExchangeRateType `json:"currencyExchangeRates,omitempty"`
	DisplayOrder *float32 `json:"displayOrder,omitempty"`
	// True if the hotel has any scheduled events within the requested date range.
	Event *bool `json:"event,omitempty"`
	HotelAmenities []HotelAmenityType `json:"hotelAmenities,omitempty"`
	// The IATA city code; for example DCA, ORD.
	HotelCityCode *string `json:"hotelCityCode,omitempty"`
	// A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
	HotelCodeContext *string `json:"hotelCodeContext,omitempty"`
	// The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
	HotelId *string `json:"hotelId,omitempty"`
	// A text field used to communicate the proper name of the hotel.
	HotelName *string `json:"hotelName,omitempty"`
	HotelType *string `json:"hotelType,omitempty"`
	InventoryRooms *int32 `json:"inventoryRooms,omitempty"`
	MaxRate *CurrencyAmountType `json:"maxRate,omitempty"`
	MinRate *CurrencyAmountType `json:"minRate,omitempty"`
	Negotiated *bool `json:"negotiated,omitempty"`
	// Represents the total number of events in a calendar for a hotel.
	NumberOfEvents *int32 `json:"numberOfEvents,omitempty"`
	RateRoomDetails *RateRoomDetailsType `json:"rateRoomDetails,omitempty"`
	RelativePosition *RelativePositionType `json:"relativePosition,omitempty"`
	SellMessages *SellMessagesType `json:"sellMessages,omitempty"`
	// Time zone region of the hotel.
	TimeZoneRegion *string `json:"timeZoneRegion,omitempty"`
}

// NewHotelSummaryInfoType instantiates a new HotelSummaryInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelSummaryInfoType() *HotelSummaryInfoType {
	this := HotelSummaryInfoType{}
	return &this
}

// NewHotelSummaryInfoTypeWithDefaults instantiates a new HotelSummaryInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelSummaryInfoTypeWithDefaults() *HotelSummaryInfoType {
	this := HotelSummaryInfoType{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetAddress() AddressType {
	if o == nil || IsNil(o.Address) {
		var ret AddressType
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetAddressOk() (*AddressType, bool) {
	if o == nil || IsNil(o.Address) {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasAddress() bool {
	if o != nil && !IsNil(o.Address) {
		return true
	}

	return false
}

// SetAddress gets a reference to the given AddressType and assigns it to the Address field.
func (o *HotelSummaryInfoType) SetAddress(v AddressType) {
	o.Address = &v
}

// GetAlternate returns the Alternate field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetAlternate() bool {
	if o == nil || IsNil(o.Alternate) {
		var ret bool
		return ret
	}
	return *o.Alternate
}

// GetAlternateOk returns a tuple with the Alternate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetAlternateOk() (*bool, bool) {
	if o == nil || IsNil(o.Alternate) {
		return nil, false
	}
	return o.Alternate, true
}

// HasAlternate returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasAlternate() bool {
	if o != nil && !IsNil(o.Alternate) {
		return true
	}

	return false
}

// SetAlternate gets a reference to the given bool and assigns it to the Alternate field.
func (o *HotelSummaryInfoType) SetAlternate(v bool) {
	o.Alternate = &v
}

// GetAvailableRooms returns the AvailableRooms field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetAvailableRooms() int32 {
	if o == nil || IsNil(o.AvailableRooms) {
		var ret int32
		return ret
	}
	return *o.AvailableRooms
}

// GetAvailableRoomsOk returns a tuple with the AvailableRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetAvailableRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.AvailableRooms) {
		return nil, false
	}
	return o.AvailableRooms, true
}

// HasAvailableRooms returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasAvailableRooms() bool {
	if o != nil && !IsNil(o.AvailableRooms) {
		return true
	}

	return false
}

// SetAvailableRooms gets a reference to the given int32 and assigns it to the AvailableRooms field.
func (o *HotelSummaryInfoType) SetAvailableRooms(v int32) {
	o.AvailableRooms = &v
}

// GetChainCode returns the ChainCode field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetChainCode() string {
	if o == nil || IsNil(o.ChainCode) {
		var ret string
		return ret
	}
	return *o.ChainCode
}

// GetChainCodeOk returns a tuple with the ChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ChainCode) {
		return nil, false
	}
	return o.ChainCode, true
}

// HasChainCode returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasChainCode() bool {
	if o != nil && !IsNil(o.ChainCode) {
		return true
	}

	return false
}

// SetChainCode gets a reference to the given string and assigns it to the ChainCode field.
func (o *HotelSummaryInfoType) SetChainCode(v string) {
	o.ChainCode = &v
}

// GetChainName returns the ChainName field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetChainName() string {
	if o == nil || IsNil(o.ChainName) {
		var ret string
		return ret
	}
	return *o.ChainName
}

// GetChainNameOk returns a tuple with the ChainName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetChainNameOk() (*string, bool) {
	if o == nil || IsNil(o.ChainName) {
		return nil, false
	}
	return o.ChainName, true
}

// HasChainName returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasChainName() bool {
	if o != nil && !IsNil(o.ChainName) {
		return true
	}

	return false
}

// SetChainName gets a reference to the given string and assigns it to the ChainName field.
func (o *HotelSummaryInfoType) SetChainName(v string) {
	o.ChainName = &v
}

// GetChannelSummaryInfo returns the ChannelSummaryInfo field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetChannelSummaryInfo() ChannelSummaryInfoType {
	if o == nil || IsNil(o.ChannelSummaryInfo) {
		var ret ChannelSummaryInfoType
		return ret
	}
	return *o.ChannelSummaryInfo
}

// GetChannelSummaryInfoOk returns a tuple with the ChannelSummaryInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetChannelSummaryInfoOk() (*ChannelSummaryInfoType, bool) {
	if o == nil || IsNil(o.ChannelSummaryInfo) {
		return nil, false
	}
	return o.ChannelSummaryInfo, true
}

// HasChannelSummaryInfo returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasChannelSummaryInfo() bool {
	if o != nil && !IsNil(o.ChannelSummaryInfo) {
		return true
	}

	return false
}

// SetChannelSummaryInfo gets a reference to the given ChannelSummaryInfoType and assigns it to the ChannelSummaryInfo field.
func (o *HotelSummaryInfoType) SetChannelSummaryInfo(v ChannelSummaryInfoType) {
	o.ChannelSummaryInfo = &v
}

// GetCheckInTime returns the CheckInTime field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetCheckInTime() string {
	if o == nil || IsNil(o.CheckInTime) {
		var ret string
		return ret
	}
	return *o.CheckInTime
}

// GetCheckInTimeOk returns a tuple with the CheckInTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetCheckInTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CheckInTime) {
		return nil, false
	}
	return o.CheckInTime, true
}

// HasCheckInTime returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasCheckInTime() bool {
	if o != nil && !IsNil(o.CheckInTime) {
		return true
	}

	return false
}

// SetCheckInTime gets a reference to the given string and assigns it to the CheckInTime field.
func (o *HotelSummaryInfoType) SetCheckInTime(v string) {
	o.CheckInTime = &v
}

// GetCheckOutTime returns the CheckOutTime field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetCheckOutTime() string {
	if o == nil || IsNil(o.CheckOutTime) {
		var ret string
		return ret
	}
	return *o.CheckOutTime
}

// GetCheckOutTimeOk returns a tuple with the CheckOutTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetCheckOutTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CheckOutTime) {
		return nil, false
	}
	return o.CheckOutTime, true
}

// HasCheckOutTime returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasCheckOutTime() bool {
	if o != nil && !IsNil(o.CheckOutTime) {
		return true
	}

	return false
}

// SetCheckOutTime gets a reference to the given string and assigns it to the CheckOutTime field.
func (o *HotelSummaryInfoType) SetCheckOutTime(v string) {
	o.CheckOutTime = &v
}

// GetContactNumbers returns the ContactNumbers field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetContactNumbers() []TelephoneType {
	if o == nil || IsNil(o.ContactNumbers) {
		var ret []TelephoneType
		return ret
	}
	return o.ContactNumbers
}

// GetContactNumbersOk returns a tuple with the ContactNumbers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetContactNumbersOk() ([]TelephoneType, bool) {
	if o == nil || IsNil(o.ContactNumbers) {
		return nil, false
	}
	return o.ContactNumbers, true
}

// HasContactNumbers returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasContactNumbers() bool {
	if o != nil && !IsNil(o.ContactNumbers) {
		return true
	}

	return false
}

// SetContactNumbers gets a reference to the given []TelephoneType and assigns it to the ContactNumbers field.
func (o *HotelSummaryInfoType) SetContactNumbers(v []TelephoneType) {
	o.ContactNumbers = v
}

// GetCurrencyCode returns the CurrencyCode field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetCurrencyCode() string {
	if o == nil || IsNil(o.CurrencyCode) {
		var ret string
		return ret
	}
	return *o.CurrencyCode
}

// GetCurrencyCodeOk returns a tuple with the CurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CurrencyCode) {
		return nil, false
	}
	return o.CurrencyCode, true
}

// HasCurrencyCode returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasCurrencyCode() bool {
	if o != nil && !IsNil(o.CurrencyCode) {
		return true
	}

	return false
}

// SetCurrencyCode gets a reference to the given string and assigns it to the CurrencyCode field.
func (o *HotelSummaryInfoType) SetCurrencyCode(v string) {
	o.CurrencyCode = &v
}

// GetCurrencyExchangeRates returns the CurrencyExchangeRates field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetCurrencyExchangeRates() []CurrencyExchangeRateType {
	if o == nil || IsNil(o.CurrencyExchangeRates) {
		var ret []CurrencyExchangeRateType
		return ret
	}
	return o.CurrencyExchangeRates
}

// GetCurrencyExchangeRatesOk returns a tuple with the CurrencyExchangeRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetCurrencyExchangeRatesOk() ([]CurrencyExchangeRateType, bool) {
	if o == nil || IsNil(o.CurrencyExchangeRates) {
		return nil, false
	}
	return o.CurrencyExchangeRates, true
}

// HasCurrencyExchangeRates returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasCurrencyExchangeRates() bool {
	if o != nil && !IsNil(o.CurrencyExchangeRates) {
		return true
	}

	return false
}

// SetCurrencyExchangeRates gets a reference to the given []CurrencyExchangeRateType and assigns it to the CurrencyExchangeRates field.
func (o *HotelSummaryInfoType) SetCurrencyExchangeRates(v []CurrencyExchangeRateType) {
	o.CurrencyExchangeRates = v
}

// GetDisplayOrder returns the DisplayOrder field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetDisplayOrder() float32 {
	if o == nil || IsNil(o.DisplayOrder) {
		var ret float32
		return ret
	}
	return *o.DisplayOrder
}

// GetDisplayOrderOk returns a tuple with the DisplayOrder field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetDisplayOrderOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplayOrder) {
		return nil, false
	}
	return o.DisplayOrder, true
}

// HasDisplayOrder returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasDisplayOrder() bool {
	if o != nil && !IsNil(o.DisplayOrder) {
		return true
	}

	return false
}

// SetDisplayOrder gets a reference to the given float32 and assigns it to the DisplayOrder field.
func (o *HotelSummaryInfoType) SetDisplayOrder(v float32) {
	o.DisplayOrder = &v
}

// GetEvent returns the Event field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetEvent() bool {
	if o == nil || IsNil(o.Event) {
		var ret bool
		return ret
	}
	return *o.Event
}

// GetEventOk returns a tuple with the Event field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetEventOk() (*bool, bool) {
	if o == nil || IsNil(o.Event) {
		return nil, false
	}
	return o.Event, true
}

// HasEvent returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasEvent() bool {
	if o != nil && !IsNil(o.Event) {
		return true
	}

	return false
}

// SetEvent gets a reference to the given bool and assigns it to the Event field.
func (o *HotelSummaryInfoType) SetEvent(v bool) {
	o.Event = &v
}

// GetHotelAmenities returns the HotelAmenities field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelAmenities() []HotelAmenityType {
	if o == nil || IsNil(o.HotelAmenities) {
		var ret []HotelAmenityType
		return ret
	}
	return o.HotelAmenities
}

// GetHotelAmenitiesOk returns a tuple with the HotelAmenities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelAmenitiesOk() ([]HotelAmenityType, bool) {
	if o == nil || IsNil(o.HotelAmenities) {
		return nil, false
	}
	return o.HotelAmenities, true
}

// HasHotelAmenities returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelAmenities() bool {
	if o != nil && !IsNil(o.HotelAmenities) {
		return true
	}

	return false
}

// SetHotelAmenities gets a reference to the given []HotelAmenityType and assigns it to the HotelAmenities field.
func (o *HotelSummaryInfoType) SetHotelAmenities(v []HotelAmenityType) {
	o.HotelAmenities = v
}

// GetHotelCityCode returns the HotelCityCode field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelCityCode() string {
	if o == nil || IsNil(o.HotelCityCode) {
		var ret string
		return ret
	}
	return *o.HotelCityCode
}

// GetHotelCityCodeOk returns a tuple with the HotelCityCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelCityCodeOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCityCode) {
		return nil, false
	}
	return o.HotelCityCode, true
}

// HasHotelCityCode returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelCityCode() bool {
	if o != nil && !IsNil(o.HotelCityCode) {
		return true
	}

	return false
}

// SetHotelCityCode gets a reference to the given string and assigns it to the HotelCityCode field.
func (o *HotelSummaryInfoType) SetHotelCityCode(v string) {
	o.HotelCityCode = &v
}

// GetHotelCodeContext returns the HotelCodeContext field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelCodeContext() string {
	if o == nil || IsNil(o.HotelCodeContext) {
		var ret string
		return ret
	}
	return *o.HotelCodeContext
}

// GetHotelCodeContextOk returns a tuple with the HotelCodeContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelCodeContextOk() (*string, bool) {
	if o == nil || IsNil(o.HotelCodeContext) {
		return nil, false
	}
	return o.HotelCodeContext, true
}

// HasHotelCodeContext returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelCodeContext() bool {
	if o != nil && !IsNil(o.HotelCodeContext) {
		return true
	}

	return false
}

// SetHotelCodeContext gets a reference to the given string and assigns it to the HotelCodeContext field.
func (o *HotelSummaryInfoType) SetHotelCodeContext(v string) {
	o.HotelCodeContext = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelSummaryInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelName returns the HotelName field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelName() string {
	if o == nil || IsNil(o.HotelName) {
		var ret string
		return ret
	}
	return *o.HotelName
}

// GetHotelNameOk returns a tuple with the HotelName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelNameOk() (*string, bool) {
	if o == nil || IsNil(o.HotelName) {
		return nil, false
	}
	return o.HotelName, true
}

// HasHotelName returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelName() bool {
	if o != nil && !IsNil(o.HotelName) {
		return true
	}

	return false
}

// SetHotelName gets a reference to the given string and assigns it to the HotelName field.
func (o *HotelSummaryInfoType) SetHotelName(v string) {
	o.HotelName = &v
}

// GetHotelType returns the HotelType field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetHotelType() string {
	if o == nil || IsNil(o.HotelType) {
		var ret string
		return ret
	}
	return *o.HotelType
}

// GetHotelTypeOk returns a tuple with the HotelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetHotelTypeOk() (*string, bool) {
	if o == nil || IsNil(o.HotelType) {
		return nil, false
	}
	return o.HotelType, true
}

// HasHotelType returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasHotelType() bool {
	if o != nil && !IsNil(o.HotelType) {
		return true
	}

	return false
}

// SetHotelType gets a reference to the given string and assigns it to the HotelType field.
func (o *HotelSummaryInfoType) SetHotelType(v string) {
	o.HotelType = &v
}

// GetInventoryRooms returns the InventoryRooms field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetInventoryRooms() int32 {
	if o == nil || IsNil(o.InventoryRooms) {
		var ret int32
		return ret
	}
	return *o.InventoryRooms
}

// GetInventoryRoomsOk returns a tuple with the InventoryRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetInventoryRoomsOk() (*int32, bool) {
	if o == nil || IsNil(o.InventoryRooms) {
		return nil, false
	}
	return o.InventoryRooms, true
}

// HasInventoryRooms returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasInventoryRooms() bool {
	if o != nil && !IsNil(o.InventoryRooms) {
		return true
	}

	return false
}

// SetInventoryRooms gets a reference to the given int32 and assigns it to the InventoryRooms field.
func (o *HotelSummaryInfoType) SetInventoryRooms(v int32) {
	o.InventoryRooms = &v
}

// GetMaxRate returns the MaxRate field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetMaxRate() CurrencyAmountType {
	if o == nil || IsNil(o.MaxRate) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.MaxRate
}

// GetMaxRateOk returns a tuple with the MaxRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetMaxRateOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.MaxRate) {
		return nil, false
	}
	return o.MaxRate, true
}

// HasMaxRate returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasMaxRate() bool {
	if o != nil && !IsNil(o.MaxRate) {
		return true
	}

	return false
}

// SetMaxRate gets a reference to the given CurrencyAmountType and assigns it to the MaxRate field.
func (o *HotelSummaryInfoType) SetMaxRate(v CurrencyAmountType) {
	o.MaxRate = &v
}

// GetMinRate returns the MinRate field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetMinRate() CurrencyAmountType {
	if o == nil || IsNil(o.MinRate) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.MinRate
}

// GetMinRateOk returns a tuple with the MinRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetMinRateOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.MinRate) {
		return nil, false
	}
	return o.MinRate, true
}

// HasMinRate returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasMinRate() bool {
	if o != nil && !IsNil(o.MinRate) {
		return true
	}

	return false
}

// SetMinRate gets a reference to the given CurrencyAmountType and assigns it to the MinRate field.
func (o *HotelSummaryInfoType) SetMinRate(v CurrencyAmountType) {
	o.MinRate = &v
}

// GetNegotiated returns the Negotiated field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetNegotiated() bool {
	if o == nil || IsNil(o.Negotiated) {
		var ret bool
		return ret
	}
	return *o.Negotiated
}

// GetNegotiatedOk returns a tuple with the Negotiated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetNegotiatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Negotiated) {
		return nil, false
	}
	return o.Negotiated, true
}

// HasNegotiated returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasNegotiated() bool {
	if o != nil && !IsNil(o.Negotiated) {
		return true
	}

	return false
}

// SetNegotiated gets a reference to the given bool and assigns it to the Negotiated field.
func (o *HotelSummaryInfoType) SetNegotiated(v bool) {
	o.Negotiated = &v
}

// GetNumberOfEvents returns the NumberOfEvents field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetNumberOfEvents() int32 {
	if o == nil || IsNil(o.NumberOfEvents) {
		var ret int32
		return ret
	}
	return *o.NumberOfEvents
}

// GetNumberOfEventsOk returns a tuple with the NumberOfEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetNumberOfEventsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfEvents) {
		return nil, false
	}
	return o.NumberOfEvents, true
}

// HasNumberOfEvents returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasNumberOfEvents() bool {
	if o != nil && !IsNil(o.NumberOfEvents) {
		return true
	}

	return false
}

// SetNumberOfEvents gets a reference to the given int32 and assigns it to the NumberOfEvents field.
func (o *HotelSummaryInfoType) SetNumberOfEvents(v int32) {
	o.NumberOfEvents = &v
}

// GetRateRoomDetails returns the RateRoomDetails field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetRateRoomDetails() RateRoomDetailsType {
	if o == nil || IsNil(o.RateRoomDetails) {
		var ret RateRoomDetailsType
		return ret
	}
	return *o.RateRoomDetails
}

// GetRateRoomDetailsOk returns a tuple with the RateRoomDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetRateRoomDetailsOk() (*RateRoomDetailsType, bool) {
	if o == nil || IsNil(o.RateRoomDetails) {
		return nil, false
	}
	return o.RateRoomDetails, true
}

// HasRateRoomDetails returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasRateRoomDetails() bool {
	if o != nil && !IsNil(o.RateRoomDetails) {
		return true
	}

	return false
}

// SetRateRoomDetails gets a reference to the given RateRoomDetailsType and assigns it to the RateRoomDetails field.
func (o *HotelSummaryInfoType) SetRateRoomDetails(v RateRoomDetailsType) {
	o.RateRoomDetails = &v
}

// GetRelativePosition returns the RelativePosition field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetRelativePosition() RelativePositionType {
	if o == nil || IsNil(o.RelativePosition) {
		var ret RelativePositionType
		return ret
	}
	return *o.RelativePosition
}

// GetRelativePositionOk returns a tuple with the RelativePosition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetRelativePositionOk() (*RelativePositionType, bool) {
	if o == nil || IsNil(o.RelativePosition) {
		return nil, false
	}
	return o.RelativePosition, true
}

// HasRelativePosition returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasRelativePosition() bool {
	if o != nil && !IsNil(o.RelativePosition) {
		return true
	}

	return false
}

// SetRelativePosition gets a reference to the given RelativePositionType and assigns it to the RelativePosition field.
func (o *HotelSummaryInfoType) SetRelativePosition(v RelativePositionType) {
	o.RelativePosition = &v
}

// GetSellMessages returns the SellMessages field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetSellMessages() SellMessagesType {
	if o == nil || IsNil(o.SellMessages) {
		var ret SellMessagesType
		return ret
	}
	return *o.SellMessages
}

// GetSellMessagesOk returns a tuple with the SellMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetSellMessagesOk() (*SellMessagesType, bool) {
	if o == nil || IsNil(o.SellMessages) {
		return nil, false
	}
	return o.SellMessages, true
}

// HasSellMessages returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasSellMessages() bool {
	if o != nil && !IsNil(o.SellMessages) {
		return true
	}

	return false
}

// SetSellMessages gets a reference to the given SellMessagesType and assigns it to the SellMessages field.
func (o *HotelSummaryInfoType) SetSellMessages(v SellMessagesType) {
	o.SellMessages = &v
}

// GetTimeZoneRegion returns the TimeZoneRegion field value if set, zero value otherwise.
func (o *HotelSummaryInfoType) GetTimeZoneRegion() string {
	if o == nil || IsNil(o.TimeZoneRegion) {
		var ret string
		return ret
	}
	return *o.TimeZoneRegion
}

// GetTimeZoneRegionOk returns a tuple with the TimeZoneRegion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelSummaryInfoType) GetTimeZoneRegionOk() (*string, bool) {
	if o == nil || IsNil(o.TimeZoneRegion) {
		return nil, false
	}
	return o.TimeZoneRegion, true
}

// HasTimeZoneRegion returns a boolean if a field has been set.
func (o *HotelSummaryInfoType) HasTimeZoneRegion() bool {
	if o != nil && !IsNil(o.TimeZoneRegion) {
		return true
	}

	return false
}

// SetTimeZoneRegion gets a reference to the given string and assigns it to the TimeZoneRegion field.
func (o *HotelSummaryInfoType) SetTimeZoneRegion(v string) {
	o.TimeZoneRegion = &v
}

func (o HotelSummaryInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelSummaryInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Address) {
		toSerialize["address"] = o.Address
	}
	if !IsNil(o.Alternate) {
		toSerialize["alternate"] = o.Alternate
	}
	if !IsNil(o.AvailableRooms) {
		toSerialize["availableRooms"] = o.AvailableRooms
	}
	if !IsNil(o.ChainCode) {
		toSerialize["chainCode"] = o.ChainCode
	}
	if !IsNil(o.ChainName) {
		toSerialize["chainName"] = o.ChainName
	}
	if !IsNil(o.ChannelSummaryInfo) {
		toSerialize["channelSummaryInfo"] = o.ChannelSummaryInfo
	}
	if !IsNil(o.CheckInTime) {
		toSerialize["checkInTime"] = o.CheckInTime
	}
	if !IsNil(o.CheckOutTime) {
		toSerialize["checkOutTime"] = o.CheckOutTime
	}
	if !IsNil(o.ContactNumbers) {
		toSerialize["contactNumbers"] = o.ContactNumbers
	}
	if !IsNil(o.CurrencyCode) {
		toSerialize["currencyCode"] = o.CurrencyCode
	}
	if !IsNil(o.CurrencyExchangeRates) {
		toSerialize["currencyExchangeRates"] = o.CurrencyExchangeRates
	}
	if !IsNil(o.DisplayOrder) {
		toSerialize["displayOrder"] = o.DisplayOrder
	}
	if !IsNil(o.Event) {
		toSerialize["event"] = o.Event
	}
	if !IsNil(o.HotelAmenities) {
		toSerialize["hotelAmenities"] = o.HotelAmenities
	}
	if !IsNil(o.HotelCityCode) {
		toSerialize["hotelCityCode"] = o.HotelCityCode
	}
	if !IsNil(o.HotelCodeContext) {
		toSerialize["hotelCodeContext"] = o.HotelCodeContext
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelName) {
		toSerialize["hotelName"] = o.HotelName
	}
	if !IsNil(o.HotelType) {
		toSerialize["hotelType"] = o.HotelType
	}
	if !IsNil(o.InventoryRooms) {
		toSerialize["inventoryRooms"] = o.InventoryRooms
	}
	if !IsNil(o.MaxRate) {
		toSerialize["maxRate"] = o.MaxRate
	}
	if !IsNil(o.MinRate) {
		toSerialize["minRate"] = o.MinRate
	}
	if !IsNil(o.Negotiated) {
		toSerialize["negotiated"] = o.Negotiated
	}
	if !IsNil(o.NumberOfEvents) {
		toSerialize["numberOfEvents"] = o.NumberOfEvents
	}
	if !IsNil(o.RateRoomDetails) {
		toSerialize["rateRoomDetails"] = o.RateRoomDetails
	}
	if !IsNil(o.RelativePosition) {
		toSerialize["relativePosition"] = o.RelativePosition
	}
	if !IsNil(o.SellMessages) {
		toSerialize["sellMessages"] = o.SellMessages
	}
	if !IsNil(o.TimeZoneRegion) {
		toSerialize["timeZoneRegion"] = o.TimeZoneRegion
	}
	return toSerialize, nil
}

type NullableHotelSummaryInfoType struct {
	value *HotelSummaryInfoType
	isSet bool
}

func (v NullableHotelSummaryInfoType) Get() *HotelSummaryInfoType {
	return v.value
}

func (v *NullableHotelSummaryInfoType) Set(val *HotelSummaryInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelSummaryInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelSummaryInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelSummaryInfoType(val *HotelSummaryInfoType) *NullableHotelSummaryInfoType {
	return &NullableHotelSummaryInfoType{value: val, isSet: true}
}

func (v NullableHotelSummaryInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelSummaryInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


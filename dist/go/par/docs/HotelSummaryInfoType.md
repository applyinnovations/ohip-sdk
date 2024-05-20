# HotelSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Alternate** | Pointer to **bool** |  | [optional] 
**AvailableRooms** | Pointer to **int32** |  | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**ChannelSummaryInfo** | Pointer to [**ChannelSummaryInfoType**](ChannelSummaryInfoType.md) |  | [optional] 
**CheckInTime** | Pointer to **string** | The official check in time of the Hotel. | [optional] 
**CheckOutTime** | Pointer to **string** | The official check out time of the Hotel. | [optional] 
**ContactNumbers** | Pointer to [**[]TelephoneType**](TelephoneType.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | Provides the hotel&#39;s currency code. | [optional] 
**CurrencyExchangeRates** | Pointer to [**[]CurrencyExchangeRateType**](CurrencyExchangeRateType.md) | Exchange Rate information for a currency code. | [optional] 
**DisplayOrder** | Pointer to **float32** |  | [optional] 
**Event** | Pointer to **bool** | True if the hotel has any scheduled events within the requested date range. | [optional] 
**HotelAmenities** | Pointer to [**[]HotelAmenityType**](HotelAmenityType.md) |  | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelType** | Pointer to **string** |  | [optional] 
**InventoryRooms** | Pointer to **int32** |  | [optional] 
**MaxRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**MinRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Negotiated** | Pointer to **bool** |  | [optional] 
**NumberOfEvents** | Pointer to **int32** | Represents the total number of events in a calendar for a hotel. | [optional] 
**RateRoomDetails** | Pointer to [**RateRoomDetailsType**](RateRoomDetailsType.md) |  | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**SellMessages** | Pointer to [**SellMessagesType**](SellMessagesType.md) |  | [optional] 
**TimeZoneRegion** | Pointer to **string** | Time zone region of the hotel. | [optional] 

## Methods

### NewHotelSummaryInfoType

`func NewHotelSummaryInfoType() *HotelSummaryInfoType`

NewHotelSummaryInfoType instantiates a new HotelSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelSummaryInfoTypeWithDefaults

`func NewHotelSummaryInfoTypeWithDefaults() *HotelSummaryInfoType`

NewHotelSummaryInfoTypeWithDefaults instantiates a new HotelSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *HotelSummaryInfoType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *HotelSummaryInfoType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *HotelSummaryInfoType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *HotelSummaryInfoType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAlternate

`func (o *HotelSummaryInfoType) GetAlternate() bool`

GetAlternate returns the Alternate field if non-nil, zero value otherwise.

### GetAlternateOk

`func (o *HotelSummaryInfoType) GetAlternateOk() (*bool, bool)`

GetAlternateOk returns a tuple with the Alternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternate

`func (o *HotelSummaryInfoType) SetAlternate(v bool)`

SetAlternate sets Alternate field to given value.

### HasAlternate

`func (o *HotelSummaryInfoType) HasAlternate() bool`

HasAlternate returns a boolean if a field has been set.

### GetAvailableRooms

`func (o *HotelSummaryInfoType) GetAvailableRooms() int32`

GetAvailableRooms returns the AvailableRooms field if non-nil, zero value otherwise.

### GetAvailableRoomsOk

`func (o *HotelSummaryInfoType) GetAvailableRoomsOk() (*int32, bool)`

GetAvailableRoomsOk returns a tuple with the AvailableRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRooms

`func (o *HotelSummaryInfoType) SetAvailableRooms(v int32)`

SetAvailableRooms sets AvailableRooms field to given value.

### HasAvailableRooms

`func (o *HotelSummaryInfoType) HasAvailableRooms() bool`

HasAvailableRooms returns a boolean if a field has been set.

### GetChainCode

`func (o *HotelSummaryInfoType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *HotelSummaryInfoType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *HotelSummaryInfoType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *HotelSummaryInfoType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetChainName

`func (o *HotelSummaryInfoType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *HotelSummaryInfoType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *HotelSummaryInfoType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *HotelSummaryInfoType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetChannelSummaryInfo

`func (o *HotelSummaryInfoType) GetChannelSummaryInfo() ChannelSummaryInfoType`

GetChannelSummaryInfo returns the ChannelSummaryInfo field if non-nil, zero value otherwise.

### GetChannelSummaryInfoOk

`func (o *HotelSummaryInfoType) GetChannelSummaryInfoOk() (*ChannelSummaryInfoType, bool)`

GetChannelSummaryInfoOk returns a tuple with the ChannelSummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelSummaryInfo

`func (o *HotelSummaryInfoType) SetChannelSummaryInfo(v ChannelSummaryInfoType)`

SetChannelSummaryInfo sets ChannelSummaryInfo field to given value.

### HasChannelSummaryInfo

`func (o *HotelSummaryInfoType) HasChannelSummaryInfo() bool`

HasChannelSummaryInfo returns a boolean if a field has been set.

### GetCheckInTime

`func (o *HotelSummaryInfoType) GetCheckInTime() string`

GetCheckInTime returns the CheckInTime field if non-nil, zero value otherwise.

### GetCheckInTimeOk

`func (o *HotelSummaryInfoType) GetCheckInTimeOk() (*string, bool)`

GetCheckInTimeOk returns a tuple with the CheckInTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInTime

`func (o *HotelSummaryInfoType) SetCheckInTime(v string)`

SetCheckInTime sets CheckInTime field to given value.

### HasCheckInTime

`func (o *HotelSummaryInfoType) HasCheckInTime() bool`

HasCheckInTime returns a boolean if a field has been set.

### GetCheckOutTime

`func (o *HotelSummaryInfoType) GetCheckOutTime() string`

GetCheckOutTime returns the CheckOutTime field if non-nil, zero value otherwise.

### GetCheckOutTimeOk

`func (o *HotelSummaryInfoType) GetCheckOutTimeOk() (*string, bool)`

GetCheckOutTimeOk returns a tuple with the CheckOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutTime

`func (o *HotelSummaryInfoType) SetCheckOutTime(v string)`

SetCheckOutTime sets CheckOutTime field to given value.

### HasCheckOutTime

`func (o *HotelSummaryInfoType) HasCheckOutTime() bool`

HasCheckOutTime returns a boolean if a field has been set.

### GetContactNumbers

`func (o *HotelSummaryInfoType) GetContactNumbers() []TelephoneType`

GetContactNumbers returns the ContactNumbers field if non-nil, zero value otherwise.

### GetContactNumbersOk

`func (o *HotelSummaryInfoType) GetContactNumbersOk() (*[]TelephoneType, bool)`

GetContactNumbersOk returns a tuple with the ContactNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactNumbers

`func (o *HotelSummaryInfoType) SetContactNumbers(v []TelephoneType)`

SetContactNumbers sets ContactNumbers field to given value.

### HasContactNumbers

`func (o *HotelSummaryInfoType) HasContactNumbers() bool`

HasContactNumbers returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *HotelSummaryInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *HotelSummaryInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *HotelSummaryInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *HotelSummaryInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencyExchangeRates

`func (o *HotelSummaryInfoType) GetCurrencyExchangeRates() []CurrencyExchangeRateType`

GetCurrencyExchangeRates returns the CurrencyExchangeRates field if non-nil, zero value otherwise.

### GetCurrencyExchangeRatesOk

`func (o *HotelSummaryInfoType) GetCurrencyExchangeRatesOk() (*[]CurrencyExchangeRateType, bool)`

GetCurrencyExchangeRatesOk returns a tuple with the CurrencyExchangeRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyExchangeRates

`func (o *HotelSummaryInfoType) SetCurrencyExchangeRates(v []CurrencyExchangeRateType)`

SetCurrencyExchangeRates sets CurrencyExchangeRates field to given value.

### HasCurrencyExchangeRates

`func (o *HotelSummaryInfoType) HasCurrencyExchangeRates() bool`

HasCurrencyExchangeRates returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *HotelSummaryInfoType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *HotelSummaryInfoType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *HotelSummaryInfoType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *HotelSummaryInfoType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetEvent

`func (o *HotelSummaryInfoType) GetEvent() bool`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *HotelSummaryInfoType) GetEventOk() (*bool, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *HotelSummaryInfoType) SetEvent(v bool)`

SetEvent sets Event field to given value.

### HasEvent

`func (o *HotelSummaryInfoType) HasEvent() bool`

HasEvent returns a boolean if a field has been set.

### GetHotelAmenities

`func (o *HotelSummaryInfoType) GetHotelAmenities() []HotelAmenityType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *HotelSummaryInfoType) GetHotelAmenitiesOk() (*[]HotelAmenityType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *HotelSummaryInfoType) SetHotelAmenities(v []HotelAmenityType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *HotelSummaryInfoType) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *HotelSummaryInfoType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *HotelSummaryInfoType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *HotelSummaryInfoType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *HotelSummaryInfoType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *HotelSummaryInfoType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *HotelSummaryInfoType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *HotelSummaryInfoType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *HotelSummaryInfoType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelSummaryInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelSummaryInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelSummaryInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelSummaryInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *HotelSummaryInfoType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *HotelSummaryInfoType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *HotelSummaryInfoType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *HotelSummaryInfoType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelType

`func (o *HotelSummaryInfoType) GetHotelType() string`

GetHotelType returns the HotelType field if non-nil, zero value otherwise.

### GetHotelTypeOk

`func (o *HotelSummaryInfoType) GetHotelTypeOk() (*string, bool)`

GetHotelTypeOk returns a tuple with the HotelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelType

`func (o *HotelSummaryInfoType) SetHotelType(v string)`

SetHotelType sets HotelType field to given value.

### HasHotelType

`func (o *HotelSummaryInfoType) HasHotelType() bool`

HasHotelType returns a boolean if a field has been set.

### GetInventoryRooms

`func (o *HotelSummaryInfoType) GetInventoryRooms() int32`

GetInventoryRooms returns the InventoryRooms field if non-nil, zero value otherwise.

### GetInventoryRoomsOk

`func (o *HotelSummaryInfoType) GetInventoryRoomsOk() (*int32, bool)`

GetInventoryRoomsOk returns a tuple with the InventoryRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryRooms

`func (o *HotelSummaryInfoType) SetInventoryRooms(v int32)`

SetInventoryRooms sets InventoryRooms field to given value.

### HasInventoryRooms

`func (o *HotelSummaryInfoType) HasInventoryRooms() bool`

HasInventoryRooms returns a boolean if a field has been set.

### GetMaxRate

`func (o *HotelSummaryInfoType) GetMaxRate() CurrencyAmountType`

GetMaxRate returns the MaxRate field if non-nil, zero value otherwise.

### GetMaxRateOk

`func (o *HotelSummaryInfoType) GetMaxRateOk() (*CurrencyAmountType, bool)`

GetMaxRateOk returns a tuple with the MaxRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRate

`func (o *HotelSummaryInfoType) SetMaxRate(v CurrencyAmountType)`

SetMaxRate sets MaxRate field to given value.

### HasMaxRate

`func (o *HotelSummaryInfoType) HasMaxRate() bool`

HasMaxRate returns a boolean if a field has been set.

### GetMinRate

`func (o *HotelSummaryInfoType) GetMinRate() CurrencyAmountType`

GetMinRate returns the MinRate field if non-nil, zero value otherwise.

### GetMinRateOk

`func (o *HotelSummaryInfoType) GetMinRateOk() (*CurrencyAmountType, bool)`

GetMinRateOk returns a tuple with the MinRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinRate

`func (o *HotelSummaryInfoType) SetMinRate(v CurrencyAmountType)`

SetMinRate sets MinRate field to given value.

### HasMinRate

`func (o *HotelSummaryInfoType) HasMinRate() bool`

HasMinRate returns a boolean if a field has been set.

### GetNegotiated

`func (o *HotelSummaryInfoType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *HotelSummaryInfoType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *HotelSummaryInfoType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *HotelSummaryInfoType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetNumberOfEvents

`func (o *HotelSummaryInfoType) GetNumberOfEvents() int32`

GetNumberOfEvents returns the NumberOfEvents field if non-nil, zero value otherwise.

### GetNumberOfEventsOk

`func (o *HotelSummaryInfoType) GetNumberOfEventsOk() (*int32, bool)`

GetNumberOfEventsOk returns a tuple with the NumberOfEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfEvents

`func (o *HotelSummaryInfoType) SetNumberOfEvents(v int32)`

SetNumberOfEvents sets NumberOfEvents field to given value.

### HasNumberOfEvents

`func (o *HotelSummaryInfoType) HasNumberOfEvents() bool`

HasNumberOfEvents returns a boolean if a field has been set.

### GetRateRoomDetails

`func (o *HotelSummaryInfoType) GetRateRoomDetails() RateRoomDetailsType`

GetRateRoomDetails returns the RateRoomDetails field if non-nil, zero value otherwise.

### GetRateRoomDetailsOk

`func (o *HotelSummaryInfoType) GetRateRoomDetailsOk() (*RateRoomDetailsType, bool)`

GetRateRoomDetailsOk returns a tuple with the RateRoomDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateRoomDetails

`func (o *HotelSummaryInfoType) SetRateRoomDetails(v RateRoomDetailsType)`

SetRateRoomDetails sets RateRoomDetails field to given value.

### HasRateRoomDetails

`func (o *HotelSummaryInfoType) HasRateRoomDetails() bool`

HasRateRoomDetails returns a boolean if a field has been set.

### GetRelativePosition

`func (o *HotelSummaryInfoType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *HotelSummaryInfoType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *HotelSummaryInfoType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *HotelSummaryInfoType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetSellMessages

`func (o *HotelSummaryInfoType) GetSellMessages() SellMessagesType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *HotelSummaryInfoType) GetSellMessagesOk() (*SellMessagesType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *HotelSummaryInfoType) SetSellMessages(v SellMessagesType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *HotelSummaryInfoType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.

### GetTimeZoneRegion

`func (o *HotelSummaryInfoType) GetTimeZoneRegion() string`

GetTimeZoneRegion returns the TimeZoneRegion field if non-nil, zero value otherwise.

### GetTimeZoneRegionOk

`func (o *HotelSummaryInfoType) GetTimeZoneRegionOk() (*string, bool)`

GetTimeZoneRegionOk returns a tuple with the TimeZoneRegion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneRegion

`func (o *HotelSummaryInfoType) SetTimeZoneRegion(v string)`

SetTimeZoneRegion sets TimeZoneRegion field to given value.

### HasTimeZoneRegion

`func (o *HotelSummaryInfoType) HasTimeZoneRegion() bool`

HasTimeZoneRegion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



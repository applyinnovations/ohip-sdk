# AlternateHotelType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Alternate** | Pointer to **bool** |  | [optional] 
**AlternateHotelCode** | Pointer to **string** |  | [optional] 
**AvailableRooms** | Pointer to **int32** |  | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**ChannelSummaryInfo** | Pointer to [**ChannelSummaryInfoType**](ChannelSummaryInfoType.md) |  | [optional] 
**Comments** | Pointer to **string** | Comments of alternate Hotel. | [optional] 
**ContactNumbers** | Pointer to [**[]TelephoneType**](TelephoneType.md) |  | [optional] 
**CurrencyExchangeRates** | Pointer to [**[]CurrencyExchangeRateType**](CurrencyExchangeRateType.md) | Exchange Rate information for a currency code. | [optional] 
**Direction** | Pointer to **string** | Compass direction to the attraction from the hotel (North/South, etc). | [optional] 
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
**NewAlternateHotelCode** | Pointer to **string** |  | [optional] 
**RateRoomDetails** | Pointer to [**RateRoomDetailsType**](RateRoomDetailsType.md) |  | [optional] 
**ReciprocalRelationship** | Pointer to **bool** | whether the alternate relationship should be applied to the alternate hotel as well. If this flag is true, not only will the AlternateHotelCode hotel be an alternate for HotelCode hotel, but HotelCode hotel will also be an alternate for AlternateHotelCode hotel. | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**SellMessages** | Pointer to [**SellMessagesType**](SellMessagesType.md) |  | [optional] 

## Methods

### NewAlternateHotelType

`func NewAlternateHotelType() *AlternateHotelType`

NewAlternateHotelType instantiates a new AlternateHotelType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlternateHotelTypeWithDefaults

`func NewAlternateHotelTypeWithDefaults() *AlternateHotelType`

NewAlternateHotelTypeWithDefaults instantiates a new AlternateHotelType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *AlternateHotelType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *AlternateHotelType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *AlternateHotelType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *AlternateHotelType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAlternate

`func (o *AlternateHotelType) GetAlternate() bool`

GetAlternate returns the Alternate field if non-nil, zero value otherwise.

### GetAlternateOk

`func (o *AlternateHotelType) GetAlternateOk() (*bool, bool)`

GetAlternateOk returns a tuple with the Alternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternate

`func (o *AlternateHotelType) SetAlternate(v bool)`

SetAlternate sets Alternate field to given value.

### HasAlternate

`func (o *AlternateHotelType) HasAlternate() bool`

HasAlternate returns a boolean if a field has been set.

### GetAlternateHotelCode

`func (o *AlternateHotelType) GetAlternateHotelCode() string`

GetAlternateHotelCode returns the AlternateHotelCode field if non-nil, zero value otherwise.

### GetAlternateHotelCodeOk

`func (o *AlternateHotelType) GetAlternateHotelCodeOk() (*string, bool)`

GetAlternateHotelCodeOk returns a tuple with the AlternateHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateHotelCode

`func (o *AlternateHotelType) SetAlternateHotelCode(v string)`

SetAlternateHotelCode sets AlternateHotelCode field to given value.

### HasAlternateHotelCode

`func (o *AlternateHotelType) HasAlternateHotelCode() bool`

HasAlternateHotelCode returns a boolean if a field has been set.

### GetAvailableRooms

`func (o *AlternateHotelType) GetAvailableRooms() int32`

GetAvailableRooms returns the AvailableRooms field if non-nil, zero value otherwise.

### GetAvailableRoomsOk

`func (o *AlternateHotelType) GetAvailableRoomsOk() (*int32, bool)`

GetAvailableRoomsOk returns a tuple with the AvailableRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRooms

`func (o *AlternateHotelType) SetAvailableRooms(v int32)`

SetAvailableRooms sets AvailableRooms field to given value.

### HasAvailableRooms

`func (o *AlternateHotelType) HasAvailableRooms() bool`

HasAvailableRooms returns a boolean if a field has been set.

### GetChainCode

`func (o *AlternateHotelType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *AlternateHotelType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *AlternateHotelType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *AlternateHotelType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetChainName

`func (o *AlternateHotelType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *AlternateHotelType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *AlternateHotelType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *AlternateHotelType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetChannelSummaryInfo

`func (o *AlternateHotelType) GetChannelSummaryInfo() ChannelSummaryInfoType`

GetChannelSummaryInfo returns the ChannelSummaryInfo field if non-nil, zero value otherwise.

### GetChannelSummaryInfoOk

`func (o *AlternateHotelType) GetChannelSummaryInfoOk() (*ChannelSummaryInfoType, bool)`

GetChannelSummaryInfoOk returns a tuple with the ChannelSummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelSummaryInfo

`func (o *AlternateHotelType) SetChannelSummaryInfo(v ChannelSummaryInfoType)`

SetChannelSummaryInfo sets ChannelSummaryInfo field to given value.

### HasChannelSummaryInfo

`func (o *AlternateHotelType) HasChannelSummaryInfo() bool`

HasChannelSummaryInfo returns a boolean if a field has been set.

### GetComments

`func (o *AlternateHotelType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *AlternateHotelType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *AlternateHotelType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *AlternateHotelType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetContactNumbers

`func (o *AlternateHotelType) GetContactNumbers() []TelephoneType`

GetContactNumbers returns the ContactNumbers field if non-nil, zero value otherwise.

### GetContactNumbersOk

`func (o *AlternateHotelType) GetContactNumbersOk() (*[]TelephoneType, bool)`

GetContactNumbersOk returns a tuple with the ContactNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactNumbers

`func (o *AlternateHotelType) SetContactNumbers(v []TelephoneType)`

SetContactNumbers sets ContactNumbers field to given value.

### HasContactNumbers

`func (o *AlternateHotelType) HasContactNumbers() bool`

HasContactNumbers returns a boolean if a field has been set.

### GetCurrencyExchangeRates

`func (o *AlternateHotelType) GetCurrencyExchangeRates() []CurrencyExchangeRateType`

GetCurrencyExchangeRates returns the CurrencyExchangeRates field if non-nil, zero value otherwise.

### GetCurrencyExchangeRatesOk

`func (o *AlternateHotelType) GetCurrencyExchangeRatesOk() (*[]CurrencyExchangeRateType, bool)`

GetCurrencyExchangeRatesOk returns a tuple with the CurrencyExchangeRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyExchangeRates

`func (o *AlternateHotelType) SetCurrencyExchangeRates(v []CurrencyExchangeRateType)`

SetCurrencyExchangeRates sets CurrencyExchangeRates field to given value.

### HasCurrencyExchangeRates

`func (o *AlternateHotelType) HasCurrencyExchangeRates() bool`

HasCurrencyExchangeRates returns a boolean if a field has been set.

### GetDirection

`func (o *AlternateHotelType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *AlternateHotelType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *AlternateHotelType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *AlternateHotelType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *AlternateHotelType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *AlternateHotelType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *AlternateHotelType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *AlternateHotelType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetEvent

`func (o *AlternateHotelType) GetEvent() bool`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *AlternateHotelType) GetEventOk() (*bool, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *AlternateHotelType) SetEvent(v bool)`

SetEvent sets Event field to given value.

### HasEvent

`func (o *AlternateHotelType) HasEvent() bool`

HasEvent returns a boolean if a field has been set.

### GetHotelAmenities

`func (o *AlternateHotelType) GetHotelAmenities() []HotelAmenityType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *AlternateHotelType) GetHotelAmenitiesOk() (*[]HotelAmenityType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *AlternateHotelType) SetHotelAmenities(v []HotelAmenityType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *AlternateHotelType) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *AlternateHotelType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *AlternateHotelType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *AlternateHotelType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *AlternateHotelType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *AlternateHotelType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *AlternateHotelType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *AlternateHotelType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *AlternateHotelType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetHotelId

`func (o *AlternateHotelType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AlternateHotelType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AlternateHotelType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AlternateHotelType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *AlternateHotelType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *AlternateHotelType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *AlternateHotelType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *AlternateHotelType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelType

`func (o *AlternateHotelType) GetHotelType() string`

GetHotelType returns the HotelType field if non-nil, zero value otherwise.

### GetHotelTypeOk

`func (o *AlternateHotelType) GetHotelTypeOk() (*string, bool)`

GetHotelTypeOk returns a tuple with the HotelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelType

`func (o *AlternateHotelType) SetHotelType(v string)`

SetHotelType sets HotelType field to given value.

### HasHotelType

`func (o *AlternateHotelType) HasHotelType() bool`

HasHotelType returns a boolean if a field has been set.

### GetInventoryRooms

`func (o *AlternateHotelType) GetInventoryRooms() int32`

GetInventoryRooms returns the InventoryRooms field if non-nil, zero value otherwise.

### GetInventoryRoomsOk

`func (o *AlternateHotelType) GetInventoryRoomsOk() (*int32, bool)`

GetInventoryRoomsOk returns a tuple with the InventoryRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryRooms

`func (o *AlternateHotelType) SetInventoryRooms(v int32)`

SetInventoryRooms sets InventoryRooms field to given value.

### HasInventoryRooms

`func (o *AlternateHotelType) HasInventoryRooms() bool`

HasInventoryRooms returns a boolean if a field has been set.

### GetMaxRate

`func (o *AlternateHotelType) GetMaxRate() CurrencyAmountType`

GetMaxRate returns the MaxRate field if non-nil, zero value otherwise.

### GetMaxRateOk

`func (o *AlternateHotelType) GetMaxRateOk() (*CurrencyAmountType, bool)`

GetMaxRateOk returns a tuple with the MaxRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRate

`func (o *AlternateHotelType) SetMaxRate(v CurrencyAmountType)`

SetMaxRate sets MaxRate field to given value.

### HasMaxRate

`func (o *AlternateHotelType) HasMaxRate() bool`

HasMaxRate returns a boolean if a field has been set.

### GetMinRate

`func (o *AlternateHotelType) GetMinRate() CurrencyAmountType`

GetMinRate returns the MinRate field if non-nil, zero value otherwise.

### GetMinRateOk

`func (o *AlternateHotelType) GetMinRateOk() (*CurrencyAmountType, bool)`

GetMinRateOk returns a tuple with the MinRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinRate

`func (o *AlternateHotelType) SetMinRate(v CurrencyAmountType)`

SetMinRate sets MinRate field to given value.

### HasMinRate

`func (o *AlternateHotelType) HasMinRate() bool`

HasMinRate returns a boolean if a field has been set.

### GetNegotiated

`func (o *AlternateHotelType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *AlternateHotelType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *AlternateHotelType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *AlternateHotelType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetNewAlternateHotelCode

`func (o *AlternateHotelType) GetNewAlternateHotelCode() string`

GetNewAlternateHotelCode returns the NewAlternateHotelCode field if non-nil, zero value otherwise.

### GetNewAlternateHotelCodeOk

`func (o *AlternateHotelType) GetNewAlternateHotelCodeOk() (*string, bool)`

GetNewAlternateHotelCodeOk returns a tuple with the NewAlternateHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewAlternateHotelCode

`func (o *AlternateHotelType) SetNewAlternateHotelCode(v string)`

SetNewAlternateHotelCode sets NewAlternateHotelCode field to given value.

### HasNewAlternateHotelCode

`func (o *AlternateHotelType) HasNewAlternateHotelCode() bool`

HasNewAlternateHotelCode returns a boolean if a field has been set.

### GetRateRoomDetails

`func (o *AlternateHotelType) GetRateRoomDetails() RateRoomDetailsType`

GetRateRoomDetails returns the RateRoomDetails field if non-nil, zero value otherwise.

### GetRateRoomDetailsOk

`func (o *AlternateHotelType) GetRateRoomDetailsOk() (*RateRoomDetailsType, bool)`

GetRateRoomDetailsOk returns a tuple with the RateRoomDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateRoomDetails

`func (o *AlternateHotelType) SetRateRoomDetails(v RateRoomDetailsType)`

SetRateRoomDetails sets RateRoomDetails field to given value.

### HasRateRoomDetails

`func (o *AlternateHotelType) HasRateRoomDetails() bool`

HasRateRoomDetails returns a boolean if a field has been set.

### GetReciprocalRelationship

`func (o *AlternateHotelType) GetReciprocalRelationship() bool`

GetReciprocalRelationship returns the ReciprocalRelationship field if non-nil, zero value otherwise.

### GetReciprocalRelationshipOk

`func (o *AlternateHotelType) GetReciprocalRelationshipOk() (*bool, bool)`

GetReciprocalRelationshipOk returns a tuple with the ReciprocalRelationship field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReciprocalRelationship

`func (o *AlternateHotelType) SetReciprocalRelationship(v bool)`

SetReciprocalRelationship sets ReciprocalRelationship field to given value.

### HasReciprocalRelationship

`func (o *AlternateHotelType) HasReciprocalRelationship() bool`

HasReciprocalRelationship returns a boolean if a field has been set.

### GetRelativePosition

`func (o *AlternateHotelType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *AlternateHotelType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *AlternateHotelType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *AlternateHotelType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetSellMessages

`func (o *AlternateHotelType) GetSellMessages() SellMessagesType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *AlternateHotelType) GetSellMessagesOk() (*SellMessagesType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *AlternateHotelType) SetSellMessages(v SellMessagesType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *AlternateHotelType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



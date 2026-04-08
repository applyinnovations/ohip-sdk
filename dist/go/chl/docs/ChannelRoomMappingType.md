# ChannelRoomMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndDate** | Pointer to **string** | End date of the hotel-channel room type mapping. | [optional] 
**Description** | Pointer to [**ChannelRoomMappingDescriptionType**](ChannelRoomMappingDescriptionType.md) |  | [optional] 
**AlternateChannelRoomType** | Pointer to **string** | Alternate channel room type name. | [optional] 
**ChannelRoomTypeOrder** | Pointer to **float32** | Channel room type order of the hotel-channel room type mapping. | [optional] 
**SellSequence** | Pointer to **float32** | Sell sequence for hotel-channel room type mapping. | [optional] 
**Active** | Pointer to **bool** | Flag that indicates whether hotel-channel room type mapping is active or not. | [optional] 
**BedTypeCode** | Pointer to **string** | Channel bed type code. | [optional] 
**BaseAllocation** | Pointer to **int32** | Channel base allocation. | [optional] 
**RateCodes** | Pointer to **[]string** | Rate codes where hotel-channel room type mappings belong to. | [optional] 
**ChannelRateCodes** | Pointer to **[]string** | Channel rate codes where hotel-channel room mappings belong to. | [optional] 
**NewChannelRoomType** | Pointer to **string** | Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping. | [optional] 
**NewBeginDate** | Pointer to **string** | Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping. | [optional] 
**BookingChannelInfo** | Pointer to [**BookingChannelInfoType**](BookingChannelInfoType.md) |  | [optional] 
**GlobalDescription** | Pointer to [**ChannelMappingEnhancedDescriptionType**](ChannelMappingEnhancedDescriptionType.md) |  | [optional] 
**ChannelRoomMappingDetails** | Pointer to [**ChannelRoomMappingDetailsType**](ChannelRoomMappingDetailsType.md) |  | [optional] 
**BookingChannelCode** | Pointer to **string** | Booking Channel Code. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**RoomType** | Pointer to **string** | Room Type. | [optional] 
**ChannelRoomType** | Pointer to **string** | Channel Room Type. | [optional] 
**BeginDate** | Pointer to **string** | Begin Date. | [optional] 

## Methods

### NewChannelRoomMappingType

`func NewChannelRoomMappingType() *ChannelRoomMappingType`

NewChannelRoomMappingType instantiates a new ChannelRoomMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingTypeWithDefaults

`func NewChannelRoomMappingTypeWithDefaults() *ChannelRoomMappingType`

NewChannelRoomMappingTypeWithDefaults instantiates a new ChannelRoomMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndDate

`func (o *ChannelRoomMappingType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelRoomMappingType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelRoomMappingType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelRoomMappingType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetDescription

`func (o *ChannelRoomMappingType) GetDescription() ChannelRoomMappingDescriptionType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChannelRoomMappingType) GetDescriptionOk() (*ChannelRoomMappingDescriptionType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChannelRoomMappingType) SetDescription(v ChannelRoomMappingDescriptionType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChannelRoomMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAlternateChannelRoomType

`func (o *ChannelRoomMappingType) GetAlternateChannelRoomType() string`

GetAlternateChannelRoomType returns the AlternateChannelRoomType field if non-nil, zero value otherwise.

### GetAlternateChannelRoomTypeOk

`func (o *ChannelRoomMappingType) GetAlternateChannelRoomTypeOk() (*string, bool)`

GetAlternateChannelRoomTypeOk returns a tuple with the AlternateChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateChannelRoomType

`func (o *ChannelRoomMappingType) SetAlternateChannelRoomType(v string)`

SetAlternateChannelRoomType sets AlternateChannelRoomType field to given value.

### HasAlternateChannelRoomType

`func (o *ChannelRoomMappingType) HasAlternateChannelRoomType() bool`

HasAlternateChannelRoomType returns a boolean if a field has been set.

### GetChannelRoomTypeOrder

`func (o *ChannelRoomMappingType) GetChannelRoomTypeOrder() float32`

GetChannelRoomTypeOrder returns the ChannelRoomTypeOrder field if non-nil, zero value otherwise.

### GetChannelRoomTypeOrderOk

`func (o *ChannelRoomMappingType) GetChannelRoomTypeOrderOk() (*float32, bool)`

GetChannelRoomTypeOrderOk returns a tuple with the ChannelRoomTypeOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomTypeOrder

`func (o *ChannelRoomMappingType) SetChannelRoomTypeOrder(v float32)`

SetChannelRoomTypeOrder sets ChannelRoomTypeOrder field to given value.

### HasChannelRoomTypeOrder

`func (o *ChannelRoomMappingType) HasChannelRoomTypeOrder() bool`

HasChannelRoomTypeOrder returns a boolean if a field has been set.

### GetSellSequence

`func (o *ChannelRoomMappingType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *ChannelRoomMappingType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *ChannelRoomMappingType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *ChannelRoomMappingType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetActive

`func (o *ChannelRoomMappingType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ChannelRoomMappingType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ChannelRoomMappingType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ChannelRoomMappingType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetBedTypeCode

`func (o *ChannelRoomMappingType) GetBedTypeCode() string`

GetBedTypeCode returns the BedTypeCode field if non-nil, zero value otherwise.

### GetBedTypeCodeOk

`func (o *ChannelRoomMappingType) GetBedTypeCodeOk() (*string, bool)`

GetBedTypeCodeOk returns a tuple with the BedTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCode

`func (o *ChannelRoomMappingType) SetBedTypeCode(v string)`

SetBedTypeCode sets BedTypeCode field to given value.

### HasBedTypeCode

`func (o *ChannelRoomMappingType) HasBedTypeCode() bool`

HasBedTypeCode returns a boolean if a field has been set.

### GetBaseAllocation

`func (o *ChannelRoomMappingType) GetBaseAllocation() int32`

GetBaseAllocation returns the BaseAllocation field if non-nil, zero value otherwise.

### GetBaseAllocationOk

`func (o *ChannelRoomMappingType) GetBaseAllocationOk() (*int32, bool)`

GetBaseAllocationOk returns a tuple with the BaseAllocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAllocation

`func (o *ChannelRoomMappingType) SetBaseAllocation(v int32)`

SetBaseAllocation sets BaseAllocation field to given value.

### HasBaseAllocation

`func (o *ChannelRoomMappingType) HasBaseAllocation() bool`

HasBaseAllocation returns a boolean if a field has been set.

### GetRateCodes

`func (o *ChannelRoomMappingType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ChannelRoomMappingType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ChannelRoomMappingType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ChannelRoomMappingType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetChannelRateCodes

`func (o *ChannelRoomMappingType) GetChannelRateCodes() []string`

GetChannelRateCodes returns the ChannelRateCodes field if non-nil, zero value otherwise.

### GetChannelRateCodesOk

`func (o *ChannelRoomMappingType) GetChannelRateCodesOk() (*[]string, bool)`

GetChannelRateCodesOk returns a tuple with the ChannelRateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateCodes

`func (o *ChannelRoomMappingType) SetChannelRateCodes(v []string)`

SetChannelRateCodes sets ChannelRateCodes field to given value.

### HasChannelRateCodes

`func (o *ChannelRoomMappingType) HasChannelRateCodes() bool`

HasChannelRateCodes returns a boolean if a field has been set.

### GetNewChannelRoomType

`func (o *ChannelRoomMappingType) GetNewChannelRoomType() string`

GetNewChannelRoomType returns the NewChannelRoomType field if non-nil, zero value otherwise.

### GetNewChannelRoomTypeOk

`func (o *ChannelRoomMappingType) GetNewChannelRoomTypeOk() (*string, bool)`

GetNewChannelRoomTypeOk returns a tuple with the NewChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewChannelRoomType

`func (o *ChannelRoomMappingType) SetNewChannelRoomType(v string)`

SetNewChannelRoomType sets NewChannelRoomType field to given value.

### HasNewChannelRoomType

`func (o *ChannelRoomMappingType) HasNewChannelRoomType() bool`

HasNewChannelRoomType returns a boolean if a field has been set.

### GetNewBeginDate

`func (o *ChannelRoomMappingType) GetNewBeginDate() string`

GetNewBeginDate returns the NewBeginDate field if non-nil, zero value otherwise.

### GetNewBeginDateOk

`func (o *ChannelRoomMappingType) GetNewBeginDateOk() (*string, bool)`

GetNewBeginDateOk returns a tuple with the NewBeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBeginDate

`func (o *ChannelRoomMappingType) SetNewBeginDate(v string)`

SetNewBeginDate sets NewBeginDate field to given value.

### HasNewBeginDate

`func (o *ChannelRoomMappingType) HasNewBeginDate() bool`

HasNewBeginDate returns a boolean if a field has been set.

### GetBookingChannelInfo

`func (o *ChannelRoomMappingType) GetBookingChannelInfo() BookingChannelInfoType`

GetBookingChannelInfo returns the BookingChannelInfo field if non-nil, zero value otherwise.

### GetBookingChannelInfoOk

`func (o *ChannelRoomMappingType) GetBookingChannelInfoOk() (*BookingChannelInfoType, bool)`

GetBookingChannelInfoOk returns a tuple with the BookingChannelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelInfo

`func (o *ChannelRoomMappingType) SetBookingChannelInfo(v BookingChannelInfoType)`

SetBookingChannelInfo sets BookingChannelInfo field to given value.

### HasBookingChannelInfo

`func (o *ChannelRoomMappingType) HasBookingChannelInfo() bool`

HasBookingChannelInfo returns a boolean if a field has been set.

### GetGlobalDescription

`func (o *ChannelRoomMappingType) GetGlobalDescription() ChannelMappingEnhancedDescriptionType`

GetGlobalDescription returns the GlobalDescription field if non-nil, zero value otherwise.

### GetGlobalDescriptionOk

`func (o *ChannelRoomMappingType) GetGlobalDescriptionOk() (*ChannelMappingEnhancedDescriptionType, bool)`

GetGlobalDescriptionOk returns a tuple with the GlobalDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalDescription

`func (o *ChannelRoomMappingType) SetGlobalDescription(v ChannelMappingEnhancedDescriptionType)`

SetGlobalDescription sets GlobalDescription field to given value.

### HasGlobalDescription

`func (o *ChannelRoomMappingType) HasGlobalDescription() bool`

HasGlobalDescription returns a boolean if a field has been set.

### GetChannelRoomMappingDetails

`func (o *ChannelRoomMappingType) GetChannelRoomMappingDetails() ChannelRoomMappingDetailsType`

GetChannelRoomMappingDetails returns the ChannelRoomMappingDetails field if non-nil, zero value otherwise.

### GetChannelRoomMappingDetailsOk

`func (o *ChannelRoomMappingType) GetChannelRoomMappingDetailsOk() (*ChannelRoomMappingDetailsType, bool)`

GetChannelRoomMappingDetailsOk returns a tuple with the ChannelRoomMappingDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomMappingDetails

`func (o *ChannelRoomMappingType) SetChannelRoomMappingDetails(v ChannelRoomMappingDetailsType)`

SetChannelRoomMappingDetails sets ChannelRoomMappingDetails field to given value.

### HasChannelRoomMappingDetails

`func (o *ChannelRoomMappingType) HasChannelRoomMappingDetails() bool`

HasChannelRoomMappingDetails returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelRoomMappingType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRoomMappingType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRoomMappingType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRoomMappingType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelRoomMappingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelRoomMappingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelRoomMappingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelRoomMappingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomType

`func (o *ChannelRoomMappingType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ChannelRoomMappingType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ChannelRoomMappingType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ChannelRoomMappingType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetChannelRoomType

`func (o *ChannelRoomMappingType) GetChannelRoomType() string`

GetChannelRoomType returns the ChannelRoomType field if non-nil, zero value otherwise.

### GetChannelRoomTypeOk

`func (o *ChannelRoomMappingType) GetChannelRoomTypeOk() (*string, bool)`

GetChannelRoomTypeOk returns a tuple with the ChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomType

`func (o *ChannelRoomMappingType) SetChannelRoomType(v string)`

SetChannelRoomType sets ChannelRoomType field to given value.

### HasChannelRoomType

`func (o *ChannelRoomMappingType) HasChannelRoomType() bool`

HasChannelRoomType returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelRoomMappingType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelRoomMappingType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelRoomMappingType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelRoomMappingType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



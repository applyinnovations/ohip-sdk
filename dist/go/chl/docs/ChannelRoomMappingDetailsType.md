# ChannelRoomMappingDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Flag that indicates whether hotel-channel room type mapping is active or not. | [optional] 
**AlternateChannelRoomType** | Pointer to **string** | Alternate channel room type name. | [optional] 
**BaseAllocation** | Pointer to **int32** | Channel base allocation. | [optional] 
**BedTypeCode** | Pointer to **string** | Channel bed type code. | [optional] 
**BookingChannelInfo** | Pointer to [**BookingChannelInfoType**](BookingChannelInfoType.md) |  | [optional] 
**ChannelRateCodes** | Pointer to **[]string** | Channel rate codes where hotel-channel room mappings belong to. | [optional] 
**ChannelRoomTypeOrder** | Pointer to **float32** | Channel room type order of the hotel-channel room type mapping. | [optional] 
**Description** | Pointer to [**ChannelRoomMappingDescriptionType**](ChannelRoomMappingDescriptionType.md) |  | [optional] 
**EndDate** | Pointer to **string** | End date of the hotel-channel room type mapping. | [optional] 
**GlobalDescription** | Pointer to [**ChannelMappingEnhancedDescriptionType**](ChannelMappingEnhancedDescriptionType.md) |  | [optional] 
**NewBeginDate** | Pointer to **string** | Begin date of the channel room type mapping. This element is used for sending modified Begin date value for operation ChangeChannelRoomMapping. | [optional] 
**NewChannelRoomType** | Pointer to **string** | Channel Room Type. This element is used for sending modified Channel room type value for operation ChangeChannelRoomMapping. | [optional] 
**RateCodes** | Pointer to **[]string** | Rate codes where hotel-channel room type mappings belong to. | [optional] 
**SellSequence** | Pointer to **float32** | Sell sequence for hotel-channel room type mapping. | [optional] 

## Methods

### NewChannelRoomMappingDetailsType

`func NewChannelRoomMappingDetailsType() *ChannelRoomMappingDetailsType`

NewChannelRoomMappingDetailsType instantiates a new ChannelRoomMappingDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingDetailsTypeWithDefaults

`func NewChannelRoomMappingDetailsTypeWithDefaults() *ChannelRoomMappingDetailsType`

NewChannelRoomMappingDetailsTypeWithDefaults instantiates a new ChannelRoomMappingDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *ChannelRoomMappingDetailsType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ChannelRoomMappingDetailsType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ChannelRoomMappingDetailsType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ChannelRoomMappingDetailsType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAlternateChannelRoomType

`func (o *ChannelRoomMappingDetailsType) GetAlternateChannelRoomType() string`

GetAlternateChannelRoomType returns the AlternateChannelRoomType field if non-nil, zero value otherwise.

### GetAlternateChannelRoomTypeOk

`func (o *ChannelRoomMappingDetailsType) GetAlternateChannelRoomTypeOk() (*string, bool)`

GetAlternateChannelRoomTypeOk returns a tuple with the AlternateChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateChannelRoomType

`func (o *ChannelRoomMappingDetailsType) SetAlternateChannelRoomType(v string)`

SetAlternateChannelRoomType sets AlternateChannelRoomType field to given value.

### HasAlternateChannelRoomType

`func (o *ChannelRoomMappingDetailsType) HasAlternateChannelRoomType() bool`

HasAlternateChannelRoomType returns a boolean if a field has been set.

### GetBaseAllocation

`func (o *ChannelRoomMappingDetailsType) GetBaseAllocation() int32`

GetBaseAllocation returns the BaseAllocation field if non-nil, zero value otherwise.

### GetBaseAllocationOk

`func (o *ChannelRoomMappingDetailsType) GetBaseAllocationOk() (*int32, bool)`

GetBaseAllocationOk returns a tuple with the BaseAllocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAllocation

`func (o *ChannelRoomMappingDetailsType) SetBaseAllocation(v int32)`

SetBaseAllocation sets BaseAllocation field to given value.

### HasBaseAllocation

`func (o *ChannelRoomMappingDetailsType) HasBaseAllocation() bool`

HasBaseAllocation returns a boolean if a field has been set.

### GetBedTypeCode

`func (o *ChannelRoomMappingDetailsType) GetBedTypeCode() string`

GetBedTypeCode returns the BedTypeCode field if non-nil, zero value otherwise.

### GetBedTypeCodeOk

`func (o *ChannelRoomMappingDetailsType) GetBedTypeCodeOk() (*string, bool)`

GetBedTypeCodeOk returns a tuple with the BedTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCode

`func (o *ChannelRoomMappingDetailsType) SetBedTypeCode(v string)`

SetBedTypeCode sets BedTypeCode field to given value.

### HasBedTypeCode

`func (o *ChannelRoomMappingDetailsType) HasBedTypeCode() bool`

HasBedTypeCode returns a boolean if a field has been set.

### GetBookingChannelInfo

`func (o *ChannelRoomMappingDetailsType) GetBookingChannelInfo() BookingChannelInfoType`

GetBookingChannelInfo returns the BookingChannelInfo field if non-nil, zero value otherwise.

### GetBookingChannelInfoOk

`func (o *ChannelRoomMappingDetailsType) GetBookingChannelInfoOk() (*BookingChannelInfoType, bool)`

GetBookingChannelInfoOk returns a tuple with the BookingChannelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelInfo

`func (o *ChannelRoomMappingDetailsType) SetBookingChannelInfo(v BookingChannelInfoType)`

SetBookingChannelInfo sets BookingChannelInfo field to given value.

### HasBookingChannelInfo

`func (o *ChannelRoomMappingDetailsType) HasBookingChannelInfo() bool`

HasBookingChannelInfo returns a boolean if a field has been set.

### GetChannelRateCodes

`func (o *ChannelRoomMappingDetailsType) GetChannelRateCodes() []string`

GetChannelRateCodes returns the ChannelRateCodes field if non-nil, zero value otherwise.

### GetChannelRateCodesOk

`func (o *ChannelRoomMappingDetailsType) GetChannelRateCodesOk() (*[]string, bool)`

GetChannelRateCodesOk returns a tuple with the ChannelRateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateCodes

`func (o *ChannelRoomMappingDetailsType) SetChannelRateCodes(v []string)`

SetChannelRateCodes sets ChannelRateCodes field to given value.

### HasChannelRateCodes

`func (o *ChannelRoomMappingDetailsType) HasChannelRateCodes() bool`

HasChannelRateCodes returns a boolean if a field has been set.

### GetChannelRoomTypeOrder

`func (o *ChannelRoomMappingDetailsType) GetChannelRoomTypeOrder() float32`

GetChannelRoomTypeOrder returns the ChannelRoomTypeOrder field if non-nil, zero value otherwise.

### GetChannelRoomTypeOrderOk

`func (o *ChannelRoomMappingDetailsType) GetChannelRoomTypeOrderOk() (*float32, bool)`

GetChannelRoomTypeOrderOk returns a tuple with the ChannelRoomTypeOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomTypeOrder

`func (o *ChannelRoomMappingDetailsType) SetChannelRoomTypeOrder(v float32)`

SetChannelRoomTypeOrder sets ChannelRoomTypeOrder field to given value.

### HasChannelRoomTypeOrder

`func (o *ChannelRoomMappingDetailsType) HasChannelRoomTypeOrder() bool`

HasChannelRoomTypeOrder returns a boolean if a field has been set.

### GetDescription

`func (o *ChannelRoomMappingDetailsType) GetDescription() ChannelRoomMappingDescriptionType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChannelRoomMappingDetailsType) GetDescriptionOk() (*ChannelRoomMappingDescriptionType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChannelRoomMappingDetailsType) SetDescription(v ChannelRoomMappingDescriptionType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChannelRoomMappingDetailsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelRoomMappingDetailsType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelRoomMappingDetailsType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelRoomMappingDetailsType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelRoomMappingDetailsType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetGlobalDescription

`func (o *ChannelRoomMappingDetailsType) GetGlobalDescription() ChannelMappingEnhancedDescriptionType`

GetGlobalDescription returns the GlobalDescription field if non-nil, zero value otherwise.

### GetGlobalDescriptionOk

`func (o *ChannelRoomMappingDetailsType) GetGlobalDescriptionOk() (*ChannelMappingEnhancedDescriptionType, bool)`

GetGlobalDescriptionOk returns a tuple with the GlobalDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalDescription

`func (o *ChannelRoomMappingDetailsType) SetGlobalDescription(v ChannelMappingEnhancedDescriptionType)`

SetGlobalDescription sets GlobalDescription field to given value.

### HasGlobalDescription

`func (o *ChannelRoomMappingDetailsType) HasGlobalDescription() bool`

HasGlobalDescription returns a boolean if a field has been set.

### GetNewBeginDate

`func (o *ChannelRoomMappingDetailsType) GetNewBeginDate() string`

GetNewBeginDate returns the NewBeginDate field if non-nil, zero value otherwise.

### GetNewBeginDateOk

`func (o *ChannelRoomMappingDetailsType) GetNewBeginDateOk() (*string, bool)`

GetNewBeginDateOk returns a tuple with the NewBeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBeginDate

`func (o *ChannelRoomMappingDetailsType) SetNewBeginDate(v string)`

SetNewBeginDate sets NewBeginDate field to given value.

### HasNewBeginDate

`func (o *ChannelRoomMappingDetailsType) HasNewBeginDate() bool`

HasNewBeginDate returns a boolean if a field has been set.

### GetNewChannelRoomType

`func (o *ChannelRoomMappingDetailsType) GetNewChannelRoomType() string`

GetNewChannelRoomType returns the NewChannelRoomType field if non-nil, zero value otherwise.

### GetNewChannelRoomTypeOk

`func (o *ChannelRoomMappingDetailsType) GetNewChannelRoomTypeOk() (*string, bool)`

GetNewChannelRoomTypeOk returns a tuple with the NewChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewChannelRoomType

`func (o *ChannelRoomMappingDetailsType) SetNewChannelRoomType(v string)`

SetNewChannelRoomType sets NewChannelRoomType field to given value.

### HasNewChannelRoomType

`func (o *ChannelRoomMappingDetailsType) HasNewChannelRoomType() bool`

HasNewChannelRoomType returns a boolean if a field has been set.

### GetRateCodes

`func (o *ChannelRoomMappingDetailsType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ChannelRoomMappingDetailsType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ChannelRoomMappingDetailsType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ChannelRoomMappingDetailsType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetSellSequence

`func (o *ChannelRoomMappingDetailsType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *ChannelRoomMappingDetailsType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *ChannelRoomMappingDetailsType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *ChannelRoomMappingDetailsType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



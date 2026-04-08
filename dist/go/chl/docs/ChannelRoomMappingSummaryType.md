# ChannelRoomMappingSummaryType

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
**NoOfRateRoomsMapped** | Pointer to **int32** | Number of active rate room mappings for the channel room type. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | The maximum occupancy for this room category. | [optional] 
**DefaultOccupancy** | Pointer to **int32** | Default occupancy for the room type. | [optional] 
**PhysicalRoomsCount** | Pointer to **int32** | The physical number of rooms in this room category at this property. | [optional] 
**BookingChannelCode** | Pointer to **string** | Booking Channel Code. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**RoomType** | Pointer to **string** | Room Type. | [optional] 
**ChannelRoomType** | Pointer to **string** | Channel Room Type. | [optional] 
**BeginDate** | Pointer to **string** | Begin Date. | [optional] 

## Methods

### NewChannelRoomMappingSummaryType

`func NewChannelRoomMappingSummaryType() *ChannelRoomMappingSummaryType`

NewChannelRoomMappingSummaryType instantiates a new ChannelRoomMappingSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingSummaryTypeWithDefaults

`func NewChannelRoomMappingSummaryTypeWithDefaults() *ChannelRoomMappingSummaryType`

NewChannelRoomMappingSummaryTypeWithDefaults instantiates a new ChannelRoomMappingSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndDate

`func (o *ChannelRoomMappingSummaryType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelRoomMappingSummaryType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelRoomMappingSummaryType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelRoomMappingSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetDescription

`func (o *ChannelRoomMappingSummaryType) GetDescription() ChannelRoomMappingDescriptionType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChannelRoomMappingSummaryType) GetDescriptionOk() (*ChannelRoomMappingDescriptionType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChannelRoomMappingSummaryType) SetDescription(v ChannelRoomMappingDescriptionType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChannelRoomMappingSummaryType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAlternateChannelRoomType

`func (o *ChannelRoomMappingSummaryType) GetAlternateChannelRoomType() string`

GetAlternateChannelRoomType returns the AlternateChannelRoomType field if non-nil, zero value otherwise.

### GetAlternateChannelRoomTypeOk

`func (o *ChannelRoomMappingSummaryType) GetAlternateChannelRoomTypeOk() (*string, bool)`

GetAlternateChannelRoomTypeOk returns a tuple with the AlternateChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateChannelRoomType

`func (o *ChannelRoomMappingSummaryType) SetAlternateChannelRoomType(v string)`

SetAlternateChannelRoomType sets AlternateChannelRoomType field to given value.

### HasAlternateChannelRoomType

`func (o *ChannelRoomMappingSummaryType) HasAlternateChannelRoomType() bool`

HasAlternateChannelRoomType returns a boolean if a field has been set.

### GetChannelRoomTypeOrder

`func (o *ChannelRoomMappingSummaryType) GetChannelRoomTypeOrder() float32`

GetChannelRoomTypeOrder returns the ChannelRoomTypeOrder field if non-nil, zero value otherwise.

### GetChannelRoomTypeOrderOk

`func (o *ChannelRoomMappingSummaryType) GetChannelRoomTypeOrderOk() (*float32, bool)`

GetChannelRoomTypeOrderOk returns a tuple with the ChannelRoomTypeOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomTypeOrder

`func (o *ChannelRoomMappingSummaryType) SetChannelRoomTypeOrder(v float32)`

SetChannelRoomTypeOrder sets ChannelRoomTypeOrder field to given value.

### HasChannelRoomTypeOrder

`func (o *ChannelRoomMappingSummaryType) HasChannelRoomTypeOrder() bool`

HasChannelRoomTypeOrder returns a boolean if a field has been set.

### GetSellSequence

`func (o *ChannelRoomMappingSummaryType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *ChannelRoomMappingSummaryType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *ChannelRoomMappingSummaryType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *ChannelRoomMappingSummaryType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetActive

`func (o *ChannelRoomMappingSummaryType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ChannelRoomMappingSummaryType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ChannelRoomMappingSummaryType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ChannelRoomMappingSummaryType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetBedTypeCode

`func (o *ChannelRoomMappingSummaryType) GetBedTypeCode() string`

GetBedTypeCode returns the BedTypeCode field if non-nil, zero value otherwise.

### GetBedTypeCodeOk

`func (o *ChannelRoomMappingSummaryType) GetBedTypeCodeOk() (*string, bool)`

GetBedTypeCodeOk returns a tuple with the BedTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCode

`func (o *ChannelRoomMappingSummaryType) SetBedTypeCode(v string)`

SetBedTypeCode sets BedTypeCode field to given value.

### HasBedTypeCode

`func (o *ChannelRoomMappingSummaryType) HasBedTypeCode() bool`

HasBedTypeCode returns a boolean if a field has been set.

### GetBaseAllocation

`func (o *ChannelRoomMappingSummaryType) GetBaseAllocation() int32`

GetBaseAllocation returns the BaseAllocation field if non-nil, zero value otherwise.

### GetBaseAllocationOk

`func (o *ChannelRoomMappingSummaryType) GetBaseAllocationOk() (*int32, bool)`

GetBaseAllocationOk returns a tuple with the BaseAllocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAllocation

`func (o *ChannelRoomMappingSummaryType) SetBaseAllocation(v int32)`

SetBaseAllocation sets BaseAllocation field to given value.

### HasBaseAllocation

`func (o *ChannelRoomMappingSummaryType) HasBaseAllocation() bool`

HasBaseAllocation returns a boolean if a field has been set.

### GetRateCodes

`func (o *ChannelRoomMappingSummaryType) GetRateCodes() []string`

GetRateCodes returns the RateCodes field if non-nil, zero value otherwise.

### GetRateCodesOk

`func (o *ChannelRoomMappingSummaryType) GetRateCodesOk() (*[]string, bool)`

GetRateCodesOk returns a tuple with the RateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodes

`func (o *ChannelRoomMappingSummaryType) SetRateCodes(v []string)`

SetRateCodes sets RateCodes field to given value.

### HasRateCodes

`func (o *ChannelRoomMappingSummaryType) HasRateCodes() bool`

HasRateCodes returns a boolean if a field has been set.

### GetChannelRateCodes

`func (o *ChannelRoomMappingSummaryType) GetChannelRateCodes() []string`

GetChannelRateCodes returns the ChannelRateCodes field if non-nil, zero value otherwise.

### GetChannelRateCodesOk

`func (o *ChannelRoomMappingSummaryType) GetChannelRateCodesOk() (*[]string, bool)`

GetChannelRateCodesOk returns a tuple with the ChannelRateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateCodes

`func (o *ChannelRoomMappingSummaryType) SetChannelRateCodes(v []string)`

SetChannelRateCodes sets ChannelRateCodes field to given value.

### HasChannelRateCodes

`func (o *ChannelRoomMappingSummaryType) HasChannelRateCodes() bool`

HasChannelRateCodes returns a boolean if a field has been set.

### GetNoOfRateRoomsMapped

`func (o *ChannelRoomMappingSummaryType) GetNoOfRateRoomsMapped() int32`

GetNoOfRateRoomsMapped returns the NoOfRateRoomsMapped field if non-nil, zero value otherwise.

### GetNoOfRateRoomsMappedOk

`func (o *ChannelRoomMappingSummaryType) GetNoOfRateRoomsMappedOk() (*int32, bool)`

GetNoOfRateRoomsMappedOk returns a tuple with the NoOfRateRoomsMapped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfRateRoomsMapped

`func (o *ChannelRoomMappingSummaryType) SetNoOfRateRoomsMapped(v int32)`

SetNoOfRateRoomsMapped sets NoOfRateRoomsMapped field to given value.

### HasNoOfRateRoomsMapped

`func (o *ChannelRoomMappingSummaryType) HasNoOfRateRoomsMapped() bool`

HasNoOfRateRoomsMapped returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *ChannelRoomMappingSummaryType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *ChannelRoomMappingSummaryType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *ChannelRoomMappingSummaryType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *ChannelRoomMappingSummaryType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetDefaultOccupancy

`func (o *ChannelRoomMappingSummaryType) GetDefaultOccupancy() int32`

GetDefaultOccupancy returns the DefaultOccupancy field if non-nil, zero value otherwise.

### GetDefaultOccupancyOk

`func (o *ChannelRoomMappingSummaryType) GetDefaultOccupancyOk() (*int32, bool)`

GetDefaultOccupancyOk returns a tuple with the DefaultOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultOccupancy

`func (o *ChannelRoomMappingSummaryType) SetDefaultOccupancy(v int32)`

SetDefaultOccupancy sets DefaultOccupancy field to given value.

### HasDefaultOccupancy

`func (o *ChannelRoomMappingSummaryType) HasDefaultOccupancy() bool`

HasDefaultOccupancy returns a boolean if a field has been set.

### GetPhysicalRoomsCount

`func (o *ChannelRoomMappingSummaryType) GetPhysicalRoomsCount() int32`

GetPhysicalRoomsCount returns the PhysicalRoomsCount field if non-nil, zero value otherwise.

### GetPhysicalRoomsCountOk

`func (o *ChannelRoomMappingSummaryType) GetPhysicalRoomsCountOk() (*int32, bool)`

GetPhysicalRoomsCountOk returns a tuple with the PhysicalRoomsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhysicalRoomsCount

`func (o *ChannelRoomMappingSummaryType) SetPhysicalRoomsCount(v int32)`

SetPhysicalRoomsCount sets PhysicalRoomsCount field to given value.

### HasPhysicalRoomsCount

`func (o *ChannelRoomMappingSummaryType) HasPhysicalRoomsCount() bool`

HasPhysicalRoomsCount returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelRoomMappingSummaryType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRoomMappingSummaryType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRoomMappingSummaryType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRoomMappingSummaryType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelRoomMappingSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelRoomMappingSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelRoomMappingSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelRoomMappingSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomType

`func (o *ChannelRoomMappingSummaryType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ChannelRoomMappingSummaryType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ChannelRoomMappingSummaryType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ChannelRoomMappingSummaryType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetChannelRoomType

`func (o *ChannelRoomMappingSummaryType) GetChannelRoomType() string`

GetChannelRoomType returns the ChannelRoomType field if non-nil, zero value otherwise.

### GetChannelRoomTypeOk

`func (o *ChannelRoomMappingSummaryType) GetChannelRoomTypeOk() (*string, bool)`

GetChannelRoomTypeOk returns a tuple with the ChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomType

`func (o *ChannelRoomMappingSummaryType) SetChannelRoomType(v string)`

SetChannelRoomType sets ChannelRoomType field to given value.

### HasChannelRoomType

`func (o *ChannelRoomMappingSummaryType) HasChannelRoomType() bool`

HasChannelRoomType returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelRoomMappingSummaryType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelRoomMappingSummaryType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelRoomMappingSummaryType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelRoomMappingSummaryType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



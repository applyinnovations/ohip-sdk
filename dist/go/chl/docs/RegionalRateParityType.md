# RegionalRateParityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelsInfo** | Pointer to [**[]BookingChannelInfoType**](BookingChannelInfoType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**HotelsInfo** | Pointer to [**[]HotelChannelInfoType**](HotelChannelInfoType.md) |  | [optional] 
**RegionalParityGroups** | Pointer to [**[]RegionalParityGroupType**](RegionalParityGroupType.md) | Channels and Property combination. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewRegionalRateParityType

`func NewRegionalRateParityType() *RegionalRateParityType`

NewRegionalRateParityType instantiates a new RegionalRateParityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegionalRateParityTypeWithDefaults

`func NewRegionalRateParityTypeWithDefaults() *RegionalRateParityType`

NewRegionalRateParityTypeWithDefaults instantiates a new RegionalRateParityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelsInfo

`func (o *RegionalRateParityType) GetBookingChannelsInfo() []BookingChannelInfoType`

GetBookingChannelsInfo returns the BookingChannelsInfo field if non-nil, zero value otherwise.

### GetBookingChannelsInfoOk

`func (o *RegionalRateParityType) GetBookingChannelsInfoOk() (*[]BookingChannelInfoType, bool)`

GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelsInfo

`func (o *RegionalRateParityType) SetBookingChannelsInfo(v []BookingChannelInfoType)`

SetBookingChannelsInfo sets BookingChannelsInfo field to given value.

### HasBookingChannelsInfo

`func (o *RegionalRateParityType) HasBookingChannelsInfo() bool`

HasBookingChannelsInfo returns a boolean if a field has been set.

### GetCount

`func (o *RegionalRateParityType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RegionalRateParityType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RegionalRateParityType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RegionalRateParityType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RegionalRateParityType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RegionalRateParityType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RegionalRateParityType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RegionalRateParityType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetHotelsInfo

`func (o *RegionalRateParityType) GetHotelsInfo() []HotelChannelInfoType`

GetHotelsInfo returns the HotelsInfo field if non-nil, zero value otherwise.

### GetHotelsInfoOk

`func (o *RegionalRateParityType) GetHotelsInfoOk() (*[]HotelChannelInfoType, bool)`

GetHotelsInfoOk returns a tuple with the HotelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelsInfo

`func (o *RegionalRateParityType) SetHotelsInfo(v []HotelChannelInfoType)`

SetHotelsInfo sets HotelsInfo field to given value.

### HasHotelsInfo

`func (o *RegionalRateParityType) HasHotelsInfo() bool`

HasHotelsInfo returns a boolean if a field has been set.

### GetRegionalParityGroups

`func (o *RegionalRateParityType) GetRegionalParityGroups() []RegionalParityGroupType`

GetRegionalParityGroups returns the RegionalParityGroups field if non-nil, zero value otherwise.

### GetRegionalParityGroupsOk

`func (o *RegionalRateParityType) GetRegionalParityGroupsOk() (*[]RegionalParityGroupType, bool)`

GetRegionalParityGroupsOk returns a tuple with the RegionalParityGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionalParityGroups

`func (o *RegionalRateParityType) SetRegionalParityGroups(v []RegionalParityGroupType)`

SetRegionalParityGroups sets RegionalParityGroups field to given value.

### HasRegionalParityGroups

`func (o *RegionalRateParityType) HasRegionalParityGroups() bool`

HasRegionalParityGroups returns a boolean if a field has been set.

### GetTotalResults

`func (o *RegionalRateParityType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RegionalRateParityType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RegionalRateParityType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RegionalRateParityType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



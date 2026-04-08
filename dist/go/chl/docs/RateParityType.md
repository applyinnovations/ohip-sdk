# RateParityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ParityGroups** | Pointer to [**[]ParityGroupType**](ParityGroupType.md) | Channels and Property combination. | [optional] 
**HotelsInfo** | Pointer to [**[]HotelChannelInfoType**](HotelChannelInfoType.md) |  | [optional] 
**BookingChannelsInfo** | Pointer to [**[]BookingChannelInfoType**](BookingChannelInfoType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewRateParityType

`func NewRateParityType() *RateParityType`

NewRateParityType instantiates a new RateParityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateParityTypeWithDefaults

`func NewRateParityTypeWithDefaults() *RateParityType`

NewRateParityTypeWithDefaults instantiates a new RateParityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetParityGroups

`func (o *RateParityType) GetParityGroups() []ParityGroupType`

GetParityGroups returns the ParityGroups field if non-nil, zero value otherwise.

### GetParityGroupsOk

`func (o *RateParityType) GetParityGroupsOk() (*[]ParityGroupType, bool)`

GetParityGroupsOk returns a tuple with the ParityGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParityGroups

`func (o *RateParityType) SetParityGroups(v []ParityGroupType)`

SetParityGroups sets ParityGroups field to given value.

### HasParityGroups

`func (o *RateParityType) HasParityGroups() bool`

HasParityGroups returns a boolean if a field has been set.

### GetHotelsInfo

`func (o *RateParityType) GetHotelsInfo() []HotelChannelInfoType`

GetHotelsInfo returns the HotelsInfo field if non-nil, zero value otherwise.

### GetHotelsInfoOk

`func (o *RateParityType) GetHotelsInfoOk() (*[]HotelChannelInfoType, bool)`

GetHotelsInfoOk returns a tuple with the HotelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelsInfo

`func (o *RateParityType) SetHotelsInfo(v []HotelChannelInfoType)`

SetHotelsInfo sets HotelsInfo field to given value.

### HasHotelsInfo

`func (o *RateParityType) HasHotelsInfo() bool`

HasHotelsInfo returns a boolean if a field has been set.

### GetBookingChannelsInfo

`func (o *RateParityType) GetBookingChannelsInfo() []BookingChannelInfoType`

GetBookingChannelsInfo returns the BookingChannelsInfo field if non-nil, zero value otherwise.

### GetBookingChannelsInfoOk

`func (o *RateParityType) GetBookingChannelsInfoOk() (*[]BookingChannelInfoType, bool)`

GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelsInfo

`func (o *RateParityType) SetBookingChannelsInfo(v []BookingChannelInfoType)`

SetBookingChannelsInfo sets BookingChannelsInfo field to given value.

### HasBookingChannelsInfo

`func (o *RateParityType) HasBookingChannelsInfo() bool`

HasBookingChannelsInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *RateParityType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RateParityType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RateParityType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RateParityType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RateParityType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RateParityType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RateParityType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RateParityType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RateParityType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RateParityType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RateParityType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RateParityType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



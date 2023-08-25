# AvailResponseSegmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomStays** | Pointer to [**[]RoomStayType**](RoomStayType.md) |  | [optional] 
**MasterInfo** | Pointer to [**AvailResponseMasterInfoType**](AvailResponseMasterInfoType.md) |  | [optional] 
**HotelAlert** | Pointer to **string** | Hotel Alert Message. | [optional] 
**Restriction** | Pointer to [**MasterRestrictionStatusesType**](MasterRestrictionStatusesType.md) |  | [optional] 
**RateChange** | Pointer to [**RateChangeTypeType**](RateChangeTypeType.md) |  | [optional] 
**HotelInfo** | Pointer to [**HotelInfoType**](HotelInfoType.md) |  | [optional] 
**ChannelInformation** | Pointer to [**ChannelAvailRSInfoType**](ChannelAvailRSInfoType.md) |  | [optional] 
**RatePlanSet** | Pointer to **string** | Rate Plan Set whose Rate Plans are returned in the response. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code whose Rate Plans are returned in the response. | [optional] 
**Closed** | Pointer to **bool** | If the availability response has a house level restriction, this flag will be true. | [optional] 
**Redemption** | Pointer to **bool** | Used to indicate if the Room Rates returned are calculated based on points. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**PagingKey** | Pointer to **string** | Used to indicate the paging key(rate room) when more rate rooms available. | [optional] 

## Methods

### NewAvailResponseSegmentType

`func NewAvailResponseSegmentType() *AvailResponseSegmentType`

NewAvailResponseSegmentType instantiates a new AvailResponseSegmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailResponseSegmentTypeWithDefaults

`func NewAvailResponseSegmentTypeWithDefaults() *AvailResponseSegmentType`

NewAvailResponseSegmentTypeWithDefaults instantiates a new AvailResponseSegmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomStays

`func (o *AvailResponseSegmentType) GetRoomStays() []RoomStayType`

GetRoomStays returns the RoomStays field if non-nil, zero value otherwise.

### GetRoomStaysOk

`func (o *AvailResponseSegmentType) GetRoomStaysOk() (*[]RoomStayType, bool)`

GetRoomStaysOk returns a tuple with the RoomStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStays

`func (o *AvailResponseSegmentType) SetRoomStays(v []RoomStayType)`

SetRoomStays sets RoomStays field to given value.

### HasRoomStays

`func (o *AvailResponseSegmentType) HasRoomStays() bool`

HasRoomStays returns a boolean if a field has been set.

### GetMasterInfo

`func (o *AvailResponseSegmentType) GetMasterInfo() AvailResponseMasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *AvailResponseSegmentType) GetMasterInfoOk() (*AvailResponseMasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *AvailResponseSegmentType) SetMasterInfo(v AvailResponseMasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *AvailResponseSegmentType) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetHotelAlert

`func (o *AvailResponseSegmentType) GetHotelAlert() string`

GetHotelAlert returns the HotelAlert field if non-nil, zero value otherwise.

### GetHotelAlertOk

`func (o *AvailResponseSegmentType) GetHotelAlertOk() (*string, bool)`

GetHotelAlertOk returns a tuple with the HotelAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAlert

`func (o *AvailResponseSegmentType) SetHotelAlert(v string)`

SetHotelAlert sets HotelAlert field to given value.

### HasHotelAlert

`func (o *AvailResponseSegmentType) HasHotelAlert() bool`

HasHotelAlert returns a boolean if a field has been set.

### GetRestriction

`func (o *AvailResponseSegmentType) GetRestriction() MasterRestrictionStatusesType`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *AvailResponseSegmentType) GetRestrictionOk() (*MasterRestrictionStatusesType, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *AvailResponseSegmentType) SetRestriction(v MasterRestrictionStatusesType)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *AvailResponseSegmentType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetRateChange

`func (o *AvailResponseSegmentType) GetRateChange() RateChangeTypeType`

GetRateChange returns the RateChange field if non-nil, zero value otherwise.

### GetRateChangeOk

`func (o *AvailResponseSegmentType) GetRateChangeOk() (*RateChangeTypeType, bool)`

GetRateChangeOk returns a tuple with the RateChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChange

`func (o *AvailResponseSegmentType) SetRateChange(v RateChangeTypeType)`

SetRateChange sets RateChange field to given value.

### HasRateChange

`func (o *AvailResponseSegmentType) HasRateChange() bool`

HasRateChange returns a boolean if a field has been set.

### GetHotelInfo

`func (o *AvailResponseSegmentType) GetHotelInfo() HotelInfoType`

GetHotelInfo returns the HotelInfo field if non-nil, zero value otherwise.

### GetHotelInfoOk

`func (o *AvailResponseSegmentType) GetHotelInfoOk() (*HotelInfoType, bool)`

GetHotelInfoOk returns a tuple with the HotelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInfo

`func (o *AvailResponseSegmentType) SetHotelInfo(v HotelInfoType)`

SetHotelInfo sets HotelInfo field to given value.

### HasHotelInfo

`func (o *AvailResponseSegmentType) HasHotelInfo() bool`

HasHotelInfo returns a boolean if a field has been set.

### GetChannelInformation

`func (o *AvailResponseSegmentType) GetChannelInformation() ChannelAvailRSInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *AvailResponseSegmentType) GetChannelInformationOk() (*ChannelAvailRSInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *AvailResponseSegmentType) SetChannelInformation(v ChannelAvailRSInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *AvailResponseSegmentType) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetRatePlanSet

`func (o *AvailResponseSegmentType) GetRatePlanSet() string`

GetRatePlanSet returns the RatePlanSet field if non-nil, zero value otherwise.

### GetRatePlanSetOk

`func (o *AvailResponseSegmentType) GetRatePlanSetOk() (*string, bool)`

GetRatePlanSetOk returns a tuple with the RatePlanSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanSet

`func (o *AvailResponseSegmentType) SetRatePlanSet(v string)`

SetRatePlanSet sets RatePlanSet field to given value.

### HasRatePlanSet

`func (o *AvailResponseSegmentType) HasRatePlanSet() bool`

HasRatePlanSet returns a boolean if a field has been set.

### GetHotelId

`func (o *AvailResponseSegmentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AvailResponseSegmentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AvailResponseSegmentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AvailResponseSegmentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetClosed

`func (o *AvailResponseSegmentType) GetClosed() bool`

GetClosed returns the Closed field if non-nil, zero value otherwise.

### GetClosedOk

`func (o *AvailResponseSegmentType) GetClosedOk() (*bool, bool)`

GetClosedOk returns a tuple with the Closed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClosed

`func (o *AvailResponseSegmentType) SetClosed(v bool)`

SetClosed sets Closed field to given value.

### HasClosed

`func (o *AvailResponseSegmentType) HasClosed() bool`

HasClosed returns a boolean if a field has been set.

### GetRedemption

`func (o *AvailResponseSegmentType) GetRedemption() bool`

GetRedemption returns the Redemption field if non-nil, zero value otherwise.

### GetRedemptionOk

`func (o *AvailResponseSegmentType) GetRedemptionOk() (*bool, bool)`

GetRedemptionOk returns a tuple with the Redemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedemption

`func (o *AvailResponseSegmentType) SetRedemption(v bool)`

SetRedemption sets Redemption field to given value.

### HasRedemption

`func (o *AvailResponseSegmentType) HasRedemption() bool`

HasRedemption returns a boolean if a field has been set.

### GetHasMore

`func (o *AvailResponseSegmentType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *AvailResponseSegmentType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *AvailResponseSegmentType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *AvailResponseSegmentType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *AvailResponseSegmentType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *AvailResponseSegmentType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *AvailResponseSegmentType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *AvailResponseSegmentType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *AvailResponseSegmentType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AvailResponseSegmentType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AvailResponseSegmentType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AvailResponseSegmentType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetPagingKey

`func (o *AvailResponseSegmentType) GetPagingKey() string`

GetPagingKey returns the PagingKey field if non-nil, zero value otherwise.

### GetPagingKeyOk

`func (o *AvailResponseSegmentType) GetPagingKeyOk() (*string, bool)`

GetPagingKeyOk returns a tuple with the PagingKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagingKey

`func (o *AvailResponseSegmentType) SetPagingKey(v string)`

SetPagingKey sets PagingKey field to given value.

### HasPagingKey

`func (o *AvailResponseSegmentType) HasPagingKey() bool`

HasPagingKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



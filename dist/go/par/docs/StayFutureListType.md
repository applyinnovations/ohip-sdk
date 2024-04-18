# StayFutureListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**ReservationInfo** | Pointer to [**[]StayReservationInfoType**](StayReservationInfoType.md) | Additional reservation information attached to the profile . Eg : Future reservation details | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewStayFutureListType

`func NewStayFutureListType() *StayFutureListType`

NewStayFutureListType instantiates a new StayFutureListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayFutureListTypeWithDefaults

`func NewStayFutureListTypeWithDefaults() *StayFutureListType`

NewStayFutureListTypeWithDefaults instantiates a new StayFutureListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *StayFutureListType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *StayFutureListType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *StayFutureListType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *StayFutureListType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *StayFutureListType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *StayFutureListType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *StayFutureListType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *StayFutureListType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetReservationInfo

`func (o *StayFutureListType) GetReservationInfo() []StayReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *StayFutureListType) GetReservationInfoOk() (*[]StayReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *StayFutureListType) SetReservationInfo(v []StayReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *StayFutureListType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetTotalResults

`func (o *StayFutureListType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *StayFutureListType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *StayFutureListType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *StayFutureListType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



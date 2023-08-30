# HistoryListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfo** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) | Additional reservation information attached to the profile . Eg : History reservation details | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewHistoryListType

`func NewHistoryListType() *HistoryListType`

NewHistoryListType instantiates a new HistoryListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHistoryListTypeWithDefaults

`func NewHistoryListTypeWithDefaults() *HistoryListType`

NewHistoryListTypeWithDefaults instantiates a new HistoryListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfo

`func (o *HistoryListType) GetReservationInfo() []ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *HistoryListType) GetReservationInfoOk() (*[]ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *HistoryListType) SetReservationInfo(v []ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *HistoryListType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *HistoryListType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *HistoryListType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *HistoryListType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *HistoryListType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *HistoryListType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *HistoryListType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *HistoryListType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *HistoryListType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *HistoryListType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *HistoryListType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *HistoryListType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *HistoryListType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



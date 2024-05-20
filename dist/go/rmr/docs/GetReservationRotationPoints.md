# GetReservationRotationPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationRotationPoints** | Pointer to [**[]ReservationRotationPointsType**](ReservationRotationPointsType.md) | Collection of reservation and associated rotation points details. | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewGetReservationRotationPoints

`func NewGetReservationRotationPoints() *GetReservationRotationPoints`

NewGetReservationRotationPoints instantiates a new GetReservationRotationPoints object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReservationRotationPointsWithDefaults

`func NewGetReservationRotationPointsWithDefaults() *GetReservationRotationPoints`

NewGetReservationRotationPointsWithDefaults instantiates a new GetReservationRotationPoints object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationRotationPoints

`func (o *GetReservationRotationPoints) GetReservationRotationPoints() []ReservationRotationPointsType`

GetReservationRotationPoints returns the ReservationRotationPoints field if non-nil, zero value otherwise.

### GetReservationRotationPointsOk

`func (o *GetReservationRotationPoints) GetReservationRotationPointsOk() (*[]ReservationRotationPointsType, bool)`

GetReservationRotationPointsOk returns a tuple with the ReservationRotationPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationRotationPoints

`func (o *GetReservationRotationPoints) SetReservationRotationPoints(v []ReservationRotationPointsType)`

SetReservationRotationPoints sets ReservationRotationPoints field to given value.

### HasReservationRotationPoints

`func (o *GetReservationRotationPoints) HasReservationRotationPoints() bool`

HasReservationRotationPoints returns a boolean if a field has been set.

### GetCount

`func (o *GetReservationRotationPoints) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GetReservationRotationPoints) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GetReservationRotationPoints) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GetReservationRotationPoints) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *GetReservationRotationPoints) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *GetReservationRotationPoints) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *GetReservationRotationPoints) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *GetReservationRotationPoints) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *GetReservationRotationPoints) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *GetReservationRotationPoints) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *GetReservationRotationPoints) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *GetReservationRotationPoints) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *GetReservationRotationPoints) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *GetReservationRotationPoints) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *GetReservationRotationPoints) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *GetReservationRotationPoints) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalResults

`func (o *GetReservationRotationPoints) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *GetReservationRotationPoints) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *GetReservationRotationPoints) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *GetReservationRotationPoints) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



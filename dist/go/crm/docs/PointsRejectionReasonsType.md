# PointsRejectionReasonsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PointsRejectionReason** | Pointer to [**[]PointsRejectionReasonType**](PointsRejectionReasonType.md) | Details on rule and reason the points were not awarded for a given point transaction. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewPointsRejectionReasonsType

`func NewPointsRejectionReasonsType() *PointsRejectionReasonsType`

NewPointsRejectionReasonsType instantiates a new PointsRejectionReasonsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPointsRejectionReasonsTypeWithDefaults

`func NewPointsRejectionReasonsTypeWithDefaults() *PointsRejectionReasonsType`

NewPointsRejectionReasonsTypeWithDefaults instantiates a new PointsRejectionReasonsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPointsRejectionReason

`func (o *PointsRejectionReasonsType) GetPointsRejectionReason() []PointsRejectionReasonType`

GetPointsRejectionReason returns the PointsRejectionReason field if non-nil, zero value otherwise.

### GetPointsRejectionReasonOk

`func (o *PointsRejectionReasonsType) GetPointsRejectionReasonOk() (*[]PointsRejectionReasonType, bool)`

GetPointsRejectionReasonOk returns a tuple with the PointsRejectionReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRejectionReason

`func (o *PointsRejectionReasonsType) SetPointsRejectionReason(v []PointsRejectionReasonType)`

SetPointsRejectionReason sets PointsRejectionReason field to given value.

### HasPointsRejectionReason

`func (o *PointsRejectionReasonsType) HasPointsRejectionReason() bool`

HasPointsRejectionReason returns a boolean if a field has been set.

### GetTotalPages

`func (o *PointsRejectionReasonsType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *PointsRejectionReasonsType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *PointsRejectionReasonsType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *PointsRejectionReasonsType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *PointsRejectionReasonsType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *PointsRejectionReasonsType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *PointsRejectionReasonsType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *PointsRejectionReasonsType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *PointsRejectionReasonsType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *PointsRejectionReasonsType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *PointsRejectionReasonsType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *PointsRejectionReasonsType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *PointsRejectionReasonsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PointsRejectionReasonsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PointsRejectionReasonsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PointsRejectionReasonsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *PointsRejectionReasonsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *PointsRejectionReasonsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *PointsRejectionReasonsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *PointsRejectionReasonsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *PointsRejectionReasonsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PointsRejectionReasonsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PointsRejectionReasonsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *PointsRejectionReasonsType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



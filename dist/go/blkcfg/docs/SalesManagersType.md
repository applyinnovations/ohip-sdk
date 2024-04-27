# SalesManagersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**SalesManager** | Pointer to [**[]SalesManagerType**](SalesManagerType.md) | Sales Manager&#39;s information. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewSalesManagersType

`func NewSalesManagersType() *SalesManagersType`

NewSalesManagersType instantiates a new SalesManagersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesManagersTypeWithDefaults

`func NewSalesManagersTypeWithDefaults() *SalesManagersType`

NewSalesManagersTypeWithDefaults instantiates a new SalesManagersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SalesManagersType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SalesManagersType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SalesManagersType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SalesManagersType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *SalesManagersType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SalesManagersType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SalesManagersType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SalesManagersType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *SalesManagersType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *SalesManagersType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *SalesManagersType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *SalesManagersType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *SalesManagersType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *SalesManagersType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *SalesManagersType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *SalesManagersType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetSalesManager

`func (o *SalesManagersType) GetSalesManager() []SalesManagerType`

GetSalesManager returns the SalesManager field if non-nil, zero value otherwise.

### GetSalesManagerOk

`func (o *SalesManagersType) GetSalesManagerOk() (*[]SalesManagerType, bool)`

GetSalesManagerOk returns a tuple with the SalesManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesManager

`func (o *SalesManagersType) SetSalesManager(v []SalesManagerType)`

SetSalesManager sets SalesManager field to given value.

### HasSalesManager

`func (o *SalesManagersType) HasSalesManager() bool`

HasSalesManager returns a boolean if a field has been set.

### GetTotalPages

`func (o *SalesManagersType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *SalesManagersType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *SalesManagersType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *SalesManagersType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *SalesManagersType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SalesManagersType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SalesManagersType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SalesManagersType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



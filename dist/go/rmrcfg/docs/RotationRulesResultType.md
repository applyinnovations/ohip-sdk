# RotationRulesResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationRules** | Pointer to [**RotationRulesType**](RotationRulesType.md) |  | [optional] 
**MasterInfo** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Collection of RateCodes, RoomTypes, Out of Order Reasons | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewRotationRulesResultType

`func NewRotationRulesResultType() *RotationRulesResultType`

NewRotationRulesResultType instantiates a new RotationRulesResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationRulesResultTypeWithDefaults

`func NewRotationRulesResultTypeWithDefaults() *RotationRulesResultType`

NewRotationRulesResultTypeWithDefaults instantiates a new RotationRulesResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationRules

`func (o *RotationRulesResultType) GetRotationRules() RotationRulesType`

GetRotationRules returns the RotationRules field if non-nil, zero value otherwise.

### GetRotationRulesOk

`func (o *RotationRulesResultType) GetRotationRulesOk() (*RotationRulesType, bool)`

GetRotationRulesOk returns a tuple with the RotationRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRules

`func (o *RotationRulesResultType) SetRotationRules(v RotationRulesType)`

SetRotationRules sets RotationRules field to given value.

### HasRotationRules

`func (o *RotationRulesResultType) HasRotationRules() bool`

HasRotationRules returns a boolean if a field has been set.

### GetMasterInfo

`func (o *RotationRulesResultType) GetMasterInfo() []MasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *RotationRulesResultType) GetMasterInfoOk() (*[]MasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *RotationRulesResultType) SetMasterInfo(v []MasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *RotationRulesResultType) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RotationRulesResultType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RotationRulesResultType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RotationRulesResultType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RotationRulesResultType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *RotationRulesResultType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RotationRulesResultType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RotationRulesResultType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RotationRulesResultType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *RotationRulesResultType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RotationRulesResultType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RotationRulesResultType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RotationRulesResultType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *RotationRulesResultType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RotationRulesResultType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RotationRulesResultType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RotationRulesResultType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RotationRulesResultType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RotationRulesResultType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RotationRulesResultType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RotationRulesResultType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RotationRulesResultType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RotationRulesResultType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RotationRulesResultType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RotationRulesResultType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



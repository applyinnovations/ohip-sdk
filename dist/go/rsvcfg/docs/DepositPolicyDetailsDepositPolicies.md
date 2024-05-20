# DepositPolicyDetailsDepositPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**DepositPolicies** | Pointer to [**[]HotelConfigDepositPoliciesType**](HotelConfigDepositPoliciesType.md) | Collection of Deposit Policies grouped by hotel. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewDepositPolicyDetailsDepositPolicies

`func NewDepositPolicyDetailsDepositPolicies() *DepositPolicyDetailsDepositPolicies`

NewDepositPolicyDetailsDepositPolicies instantiates a new DepositPolicyDetailsDepositPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPolicyDetailsDepositPoliciesWithDefaults

`func NewDepositPolicyDetailsDepositPoliciesWithDefaults() *DepositPolicyDetailsDepositPolicies`

NewDepositPolicyDetailsDepositPoliciesWithDefaults instantiates a new DepositPolicyDetailsDepositPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *DepositPolicyDetailsDepositPolicies) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *DepositPolicyDetailsDepositPolicies) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *DepositPolicyDetailsDepositPolicies) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *DepositPolicyDetailsDepositPolicies) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetDepositPolicies

`func (o *DepositPolicyDetailsDepositPolicies) GetDepositPolicies() []HotelConfigDepositPoliciesType`

GetDepositPolicies returns the DepositPolicies field if non-nil, zero value otherwise.

### GetDepositPoliciesOk

`func (o *DepositPolicyDetailsDepositPolicies) GetDepositPoliciesOk() (*[]HotelConfigDepositPoliciesType, bool)`

GetDepositPoliciesOk returns a tuple with the DepositPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicies

`func (o *DepositPolicyDetailsDepositPolicies) SetDepositPolicies(v []HotelConfigDepositPoliciesType)`

SetDepositPolicies sets DepositPolicies field to given value.

### HasDepositPolicies

`func (o *DepositPolicyDetailsDepositPolicies) HasDepositPolicies() bool`

HasDepositPolicies returns a boolean if a field has been set.

### GetHasMore

`func (o *DepositPolicyDetailsDepositPolicies) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *DepositPolicyDetailsDepositPolicies) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *DepositPolicyDetailsDepositPolicies) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *DepositPolicyDetailsDepositPolicies) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *DepositPolicyDetailsDepositPolicies) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *DepositPolicyDetailsDepositPolicies) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *DepositPolicyDetailsDepositPolicies) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *DepositPolicyDetailsDepositPolicies) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *DepositPolicyDetailsDepositPolicies) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *DepositPolicyDetailsDepositPolicies) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *DepositPolicyDetailsDepositPolicies) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *DepositPolicyDetailsDepositPolicies) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *DepositPolicyDetailsDepositPolicies) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DepositPolicyDetailsDepositPolicies) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DepositPolicyDetailsDepositPolicies) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *DepositPolicyDetailsDepositPolicies) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *DepositPolicyDetailsDepositPolicies) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *DepositPolicyDetailsDepositPolicies) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *DepositPolicyDetailsDepositPolicies) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *DepositPolicyDetailsDepositPolicies) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



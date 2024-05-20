# MembershipTransactionRatesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Rate** | Pointer to [**[]MembershipTransactionRateType**](MembershipTransactionRateType.md) | Details of rate for the current points transaction. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewMembershipTransactionRatesType

`func NewMembershipTransactionRatesType() *MembershipTransactionRatesType`

NewMembershipTransactionRatesType instantiates a new MembershipTransactionRatesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionRatesTypeWithDefaults

`func NewMembershipTransactionRatesTypeWithDefaults() *MembershipTransactionRatesType`

NewMembershipTransactionRatesTypeWithDefaults instantiates a new MembershipTransactionRatesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *MembershipTransactionRatesType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *MembershipTransactionRatesType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *MembershipTransactionRatesType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *MembershipTransactionRatesType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *MembershipTransactionRatesType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *MembershipTransactionRatesType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *MembershipTransactionRatesType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *MembershipTransactionRatesType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *MembershipTransactionRatesType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *MembershipTransactionRatesType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *MembershipTransactionRatesType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *MembershipTransactionRatesType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *MembershipTransactionRatesType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *MembershipTransactionRatesType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *MembershipTransactionRatesType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *MembershipTransactionRatesType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRate

`func (o *MembershipTransactionRatesType) GetRate() []MembershipTransactionRateType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *MembershipTransactionRatesType) GetRateOk() (*[]MembershipTransactionRateType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *MembershipTransactionRatesType) SetRate(v []MembershipTransactionRateType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *MembershipTransactionRatesType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetTotalPages

`func (o *MembershipTransactionRatesType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *MembershipTransactionRatesType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *MembershipTransactionRatesType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *MembershipTransactionRatesType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *MembershipTransactionRatesType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *MembershipTransactionRatesType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *MembershipTransactionRatesType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *MembershipTransactionRatesType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



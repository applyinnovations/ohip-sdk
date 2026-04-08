# ProfileTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileTransactions** | Pointer to [**[]ProfileTransactionsType**](ProfileTransactionsType.md) | Transactions related to the Profile. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileTransactions

`func NewProfileTransactions() *ProfileTransactions`

NewProfileTransactions instantiates a new ProfileTransactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTransactionsWithDefaults

`func NewProfileTransactionsWithDefaults() *ProfileTransactions`

NewProfileTransactionsWithDefaults instantiates a new ProfileTransactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileTransactions

`func (o *ProfileTransactions) GetProfileTransactions() []ProfileTransactionsType`

GetProfileTransactions returns the ProfileTransactions field if non-nil, zero value otherwise.

### GetProfileTransactionsOk

`func (o *ProfileTransactions) GetProfileTransactionsOk() (*[]ProfileTransactionsType, bool)`

GetProfileTransactionsOk returns a tuple with the ProfileTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileTransactions

`func (o *ProfileTransactions) SetProfileTransactions(v []ProfileTransactionsType)`

SetProfileTransactions sets ProfileTransactions field to given value.

### HasProfileTransactions

`func (o *ProfileTransactions) HasProfileTransactions() bool`

HasProfileTransactions returns a boolean if a field has been set.

### GetTotalPages

`func (o *ProfileTransactions) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ProfileTransactions) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ProfileTransactions) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ProfileTransactions) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *ProfileTransactions) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ProfileTransactions) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ProfileTransactions) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ProfileTransactions) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ProfileTransactions) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ProfileTransactions) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ProfileTransactions) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ProfileTransactions) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileTransactions) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTransactions) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTransactions) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTransactions) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTransactions) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTransactions) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTransactions) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTransactions) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileTransactions) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTransactions) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTransactions) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTransactions) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileTransactions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileTransactions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileTransactions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileTransactions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileTransactions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileTransactions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileTransactions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileTransactions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



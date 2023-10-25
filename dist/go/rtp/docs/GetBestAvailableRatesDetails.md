# GetBestAvailableRatesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BestAvailableRatesList** | Pointer to [**BestAvailableRatesListType**](BestAvailableRatesListType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGetBestAvailableRatesDetails

`func NewGetBestAvailableRatesDetails() *GetBestAvailableRatesDetails`

NewGetBestAvailableRatesDetails instantiates a new GetBestAvailableRatesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetBestAvailableRatesDetailsWithDefaults

`func NewGetBestAvailableRatesDetailsWithDefaults() *GetBestAvailableRatesDetails`

NewGetBestAvailableRatesDetailsWithDefaults instantiates a new GetBestAvailableRatesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBestAvailableRatesList

`func (o *GetBestAvailableRatesDetails) GetBestAvailableRatesList() BestAvailableRatesListType`

GetBestAvailableRatesList returns the BestAvailableRatesList field if non-nil, zero value otherwise.

### GetBestAvailableRatesListOk

`func (o *GetBestAvailableRatesDetails) GetBestAvailableRatesListOk() (*BestAvailableRatesListType, bool)`

GetBestAvailableRatesListOk returns a tuple with the BestAvailableRatesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBestAvailableRatesList

`func (o *GetBestAvailableRatesDetails) SetBestAvailableRatesList(v BestAvailableRatesListType)`

SetBestAvailableRatesList sets BestAvailableRatesList field to given value.

### HasBestAvailableRatesList

`func (o *GetBestAvailableRatesDetails) HasBestAvailableRatesList() bool`

HasBestAvailableRatesList returns a boolean if a field has been set.

### GetCount

`func (o *GetBestAvailableRatesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GetBestAvailableRatesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GetBestAvailableRatesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GetBestAvailableRatesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *GetBestAvailableRatesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *GetBestAvailableRatesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *GetBestAvailableRatesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *GetBestAvailableRatesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *GetBestAvailableRatesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *GetBestAvailableRatesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *GetBestAvailableRatesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *GetBestAvailableRatesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *GetBestAvailableRatesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *GetBestAvailableRatesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *GetBestAvailableRatesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *GetBestAvailableRatesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *GetBestAvailableRatesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *GetBestAvailableRatesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *GetBestAvailableRatesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *GetBestAvailableRatesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *GetBestAvailableRatesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *GetBestAvailableRatesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *GetBestAvailableRatesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *GetBestAvailableRatesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *GetBestAvailableRatesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GetBestAvailableRatesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GetBestAvailableRatesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GetBestAvailableRatesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



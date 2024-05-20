# AccountForecasts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountForecastDetails** | Pointer to [**[]AccountForecastType**](AccountForecastType.md) | Detail Information about Account Forecast. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountForecasts

`func NewAccountForecasts() *AccountForecasts`

NewAccountForecasts instantiates a new AccountForecasts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountForecastsWithDefaults

`func NewAccountForecastsWithDefaults() *AccountForecasts`

NewAccountForecastsWithDefaults instantiates a new AccountForecasts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountForecastDetails

`func (o *AccountForecasts) GetAccountForecastDetails() []AccountForecastType`

GetAccountForecastDetails returns the AccountForecastDetails field if non-nil, zero value otherwise.

### GetAccountForecastDetailsOk

`func (o *AccountForecasts) GetAccountForecastDetailsOk() (*[]AccountForecastType, bool)`

GetAccountForecastDetailsOk returns a tuple with the AccountForecastDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountForecastDetails

`func (o *AccountForecasts) SetAccountForecastDetails(v []AccountForecastType)`

SetAccountForecastDetails sets AccountForecastDetails field to given value.

### HasAccountForecastDetails

`func (o *AccountForecasts) HasAccountForecastDetails() bool`

HasAccountForecastDetails returns a boolean if a field has been set.

### GetCount

`func (o *AccountForecasts) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AccountForecasts) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AccountForecasts) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AccountForecasts) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *AccountForecasts) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *AccountForecasts) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *AccountForecasts) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *AccountForecasts) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *AccountForecasts) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *AccountForecasts) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *AccountForecasts) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *AccountForecasts) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *AccountForecasts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountForecasts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountForecasts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountForecasts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *AccountForecasts) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *AccountForecasts) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *AccountForecasts) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *AccountForecasts) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *AccountForecasts) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *AccountForecasts) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *AccountForecasts) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *AccountForecasts) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *AccountForecasts) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *AccountForecasts) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *AccountForecasts) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *AccountForecasts) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountForecasts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountForecasts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountForecasts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountForecasts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



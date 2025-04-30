# ARYearViewType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**BalanceInfo** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 
**RunningTotal** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewARYearViewType

`func NewARYearViewType() *ARYearViewType`

NewARYearViewType instantiates a new ARYearViewType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARYearViewTypeWithDefaults

`func NewARYearViewTypeWithDefaults() *ARYearViewType`

NewARYearViewTypeWithDefaults instantiates a new ARYearViewType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRange

`func (o *ARYearViewType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *ARYearViewType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *ARYearViewType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *ARYearViewType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetBalanceInfo

`func (o *ARYearViewType) GetBalanceInfo() ARBalanceType`

GetBalanceInfo returns the BalanceInfo field if non-nil, zero value otherwise.

### GetBalanceInfoOk

`func (o *ARYearViewType) GetBalanceInfoOk() (*ARBalanceType, bool)`

GetBalanceInfoOk returns a tuple with the BalanceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceInfo

`func (o *ARYearViewType) SetBalanceInfo(v ARBalanceType)`

SetBalanceInfo sets BalanceInfo field to given value.

### HasBalanceInfo

`func (o *ARYearViewType) HasBalanceInfo() bool`

HasBalanceInfo returns a boolean if a field has been set.

### GetRunningTotal

`func (o *ARYearViewType) GetRunningTotal() CurrencyAmountType`

GetRunningTotal returns the RunningTotal field if non-nil, zero value otherwise.

### GetRunningTotalOk

`func (o *ARYearViewType) GetRunningTotalOk() (*CurrencyAmountType, bool)`

GetRunningTotalOk returns a tuple with the RunningTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunningTotal

`func (o *ARYearViewType) SetRunningTotal(v CurrencyAmountType)`

SetRunningTotal sets RunningTotal field to given value.

### HasRunningTotal

`func (o *ARYearViewType) HasRunningTotal() bool`

HasRunningTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



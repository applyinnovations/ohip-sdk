# CashierTypeUsageInfoHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LastOpened** | Pointer to **string** | The date that the cashier last opened. | [optional] 
**TimesOpened** | Pointer to **int32** | The number of times the cashier has opened their account today. | [optional] 

## Methods

### NewCashierTypeUsageInfoHistory

`func NewCashierTypeUsageInfoHistory() *CashierTypeUsageInfoHistory`

NewCashierTypeUsageInfoHistory instantiates a new CashierTypeUsageInfoHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierTypeUsageInfoHistoryWithDefaults

`func NewCashierTypeUsageInfoHistoryWithDefaults() *CashierTypeUsageInfoHistory`

NewCashierTypeUsageInfoHistoryWithDefaults instantiates a new CashierTypeUsageInfoHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLastOpened

`func (o *CashierTypeUsageInfoHistory) GetLastOpened() string`

GetLastOpened returns the LastOpened field if non-nil, zero value otherwise.

### GetLastOpenedOk

`func (o *CashierTypeUsageInfoHistory) GetLastOpenedOk() (*string, bool)`

GetLastOpenedOk returns a tuple with the LastOpened field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastOpened

`func (o *CashierTypeUsageInfoHistory) SetLastOpened(v string)`

SetLastOpened sets LastOpened field to given value.

### HasLastOpened

`func (o *CashierTypeUsageInfoHistory) HasLastOpened() bool`

HasLastOpened returns a boolean if a field has been set.

### GetTimesOpened

`func (o *CashierTypeUsageInfoHistory) GetTimesOpened() int32`

GetTimesOpened returns the TimesOpened field if non-nil, zero value otherwise.

### GetTimesOpenedOk

`func (o *CashierTypeUsageInfoHistory) GetTimesOpenedOk() (*int32, bool)`

GetTimesOpenedOk returns a tuple with the TimesOpened field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimesOpened

`func (o *CashierTypeUsageInfoHistory) SetTimesOpened(v int32)`

SetTimesOpened sets TimesOpened field to given value.

### HasTimesOpened

`func (o *CashierTypeUsageInfoHistory) HasTimesOpened() bool`

HasTimesOpened returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



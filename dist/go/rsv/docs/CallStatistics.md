# CallStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallStatisticsList** | Pointer to [**[]CallStatisticsType**](CallStatisticsType.md) | Holds Call Statistics Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCallStatistics

`func NewCallStatistics() *CallStatistics`

NewCallStatistics instantiates a new CallStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallStatisticsWithDefaults

`func NewCallStatisticsWithDefaults() *CallStatistics`

NewCallStatisticsWithDefaults instantiates a new CallStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallStatisticsList

`func (o *CallStatistics) GetCallStatisticsList() []CallStatisticsType`

GetCallStatisticsList returns the CallStatisticsList field if non-nil, zero value otherwise.

### GetCallStatisticsListOk

`func (o *CallStatistics) GetCallStatisticsListOk() (*[]CallStatisticsType, bool)`

GetCallStatisticsListOk returns a tuple with the CallStatisticsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallStatisticsList

`func (o *CallStatistics) SetCallStatisticsList(v []CallStatisticsType)`

SetCallStatisticsList sets CallStatisticsList field to given value.

### HasCallStatisticsList

`func (o *CallStatistics) HasCallStatisticsList() bool`

HasCallStatisticsList returns a boolean if a field has been set.

### GetLinks

`func (o *CallStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CallStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CallStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CallStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CallStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CallStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CallStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CallStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



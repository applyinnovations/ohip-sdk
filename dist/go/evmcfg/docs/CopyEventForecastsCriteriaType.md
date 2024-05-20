# CopyEventForecastsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventForecastsList** | Pointer to [**[]EventForecastsListType**](EventForecastsListType.md) | Provides Event Forecast details that needs to be copied. | [optional] 
**IncludeRevenueType** | Pointer to **bool** | include Revenue Types for the event forecasts? | [optional] 

## Methods

### NewCopyEventForecastsCriteriaType

`func NewCopyEventForecastsCriteriaType() *CopyEventForecastsCriteriaType`

NewCopyEventForecastsCriteriaType instantiates a new CopyEventForecastsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyEventForecastsCriteriaTypeWithDefaults

`func NewCopyEventForecastsCriteriaTypeWithDefaults() *CopyEventForecastsCriteriaType`

NewCopyEventForecastsCriteriaTypeWithDefaults instantiates a new CopyEventForecastsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventForecastsList

`func (o *CopyEventForecastsCriteriaType) GetEventForecastsList() []EventForecastsListType`

GetEventForecastsList returns the EventForecastsList field if non-nil, zero value otherwise.

### GetEventForecastsListOk

`func (o *CopyEventForecastsCriteriaType) GetEventForecastsListOk() (*[]EventForecastsListType, bool)`

GetEventForecastsListOk returns a tuple with the EventForecastsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventForecastsList

`func (o *CopyEventForecastsCriteriaType) SetEventForecastsList(v []EventForecastsListType)`

SetEventForecastsList sets EventForecastsList field to given value.

### HasEventForecastsList

`func (o *CopyEventForecastsCriteriaType) HasEventForecastsList() bool`

HasEventForecastsList returns a boolean if a field has been set.

### GetIncludeRevenueType

`func (o *CopyEventForecastsCriteriaType) GetIncludeRevenueType() bool`

GetIncludeRevenueType returns the IncludeRevenueType field if non-nil, zero value otherwise.

### GetIncludeRevenueTypeOk

`func (o *CopyEventForecastsCriteriaType) GetIncludeRevenueTypeOk() (*bool, bool)`

GetIncludeRevenueTypeOk returns a tuple with the IncludeRevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeRevenueType

`func (o *CopyEventForecastsCriteriaType) SetIncludeRevenueType(v bool)`

SetIncludeRevenueType sets IncludeRevenueType field to given value.

### HasIncludeRevenueType

`func (o *CopyEventForecastsCriteriaType) HasIncludeRevenueType() bool`

HasIncludeRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



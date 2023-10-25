# PutEventForecastsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventForecasts** | Pointer to [**[]EventForecastType**](EventForecastType.md) | Collection of multiple Event Forecasts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutEventForecastsRequest

`func NewPutEventForecastsRequest() *PutEventForecastsRequest`

NewPutEventForecastsRequest instantiates a new PutEventForecastsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutEventForecastsRequestWithDefaults

`func NewPutEventForecastsRequestWithDefaults() *PutEventForecastsRequest`

NewPutEventForecastsRequestWithDefaults instantiates a new PutEventForecastsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventForecasts

`func (o *PutEventForecastsRequest) GetEventForecasts() []EventForecastType`

GetEventForecasts returns the EventForecasts field if non-nil, zero value otherwise.

### GetEventForecastsOk

`func (o *PutEventForecastsRequest) GetEventForecastsOk() (*[]EventForecastType, bool)`

GetEventForecastsOk returns a tuple with the EventForecasts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventForecasts

`func (o *PutEventForecastsRequest) SetEventForecasts(v []EventForecastType)`

SetEventForecasts sets EventForecasts field to given value.

### HasEventForecasts

`func (o *PutEventForecastsRequest) HasEventForecasts() bool`

HasEventForecasts returns a boolean if a field has been set.

### GetLinks

`func (o *PutEventForecastsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutEventForecastsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutEventForecastsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutEventForecastsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutEventForecastsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutEventForecastsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutEventForecastsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutEventForecastsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



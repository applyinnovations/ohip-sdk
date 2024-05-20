# EventForecasts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventForecasts** | Pointer to [**[]EventForecastType**](EventForecastType.md) | Collection of multiple Event Forecasts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEventForecasts

`func NewEventForecasts() *EventForecasts`

NewEventForecasts instantiates a new EventForecasts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventForecastsWithDefaults

`func NewEventForecastsWithDefaults() *EventForecasts`

NewEventForecastsWithDefaults instantiates a new EventForecasts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventForecasts

`func (o *EventForecasts) GetEventForecasts() []EventForecastType`

GetEventForecasts returns the EventForecasts field if non-nil, zero value otherwise.

### GetEventForecastsOk

`func (o *EventForecasts) GetEventForecastsOk() (*[]EventForecastType, bool)`

GetEventForecastsOk returns a tuple with the EventForecasts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventForecasts

`func (o *EventForecasts) SetEventForecasts(v []EventForecastType)`

SetEventForecasts sets EventForecasts field to given value.

### HasEventForecasts

`func (o *EventForecasts) HasEventForecasts() bool`

HasEventForecasts returns a boolean if a field has been set.

### GetLinks

`func (o *EventForecasts) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventForecasts) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventForecasts) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventForecasts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventForecasts) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventForecasts) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventForecasts) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventForecasts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventRevenuesInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | Currency code when base currency of the property is different than the catering currency. | [optional] 
**EventLevelRevenueActualization** | Pointer to **bool** | Flag that indicates if actual revenue can be manually edited. | [optional] 
**EventRevenueInformation** | Pointer to [**[]EventRevenueInformationType**](EventRevenueInformationType.md) | Revenue information about a catering event. | [optional] 
**ExcludeFromForecast** | Pointer to **bool** | Flag to indicate if the event revenue should be excluded from the forecast. | [optional] 
**UseForecastRevenue** | Pointer to **bool** | Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event. | [optional] 

## Methods

### NewEventRevenuesInformationType

`func NewEventRevenuesInformationType() *EventRevenuesInformationType`

NewEventRevenuesInformationType instantiates a new EventRevenuesInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventRevenuesInformationTypeWithDefaults

`func NewEventRevenuesInformationTypeWithDefaults() *EventRevenuesInformationType`

NewEventRevenuesInformationTypeWithDefaults instantiates a new EventRevenuesInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *EventRevenuesInformationType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *EventRevenuesInformationType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *EventRevenuesInformationType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *EventRevenuesInformationType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetEventLevelRevenueActualization

`func (o *EventRevenuesInformationType) GetEventLevelRevenueActualization() bool`

GetEventLevelRevenueActualization returns the EventLevelRevenueActualization field if non-nil, zero value otherwise.

### GetEventLevelRevenueActualizationOk

`func (o *EventRevenuesInformationType) GetEventLevelRevenueActualizationOk() (*bool, bool)`

GetEventLevelRevenueActualizationOk returns a tuple with the EventLevelRevenueActualization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventLevelRevenueActualization

`func (o *EventRevenuesInformationType) SetEventLevelRevenueActualization(v bool)`

SetEventLevelRevenueActualization sets EventLevelRevenueActualization field to given value.

### HasEventLevelRevenueActualization

`func (o *EventRevenuesInformationType) HasEventLevelRevenueActualization() bool`

HasEventLevelRevenueActualization returns a boolean if a field has been set.

### GetEventRevenueInformation

`func (o *EventRevenuesInformationType) GetEventRevenueInformation() []EventRevenueInformationType`

GetEventRevenueInformation returns the EventRevenueInformation field if non-nil, zero value otherwise.

### GetEventRevenueInformationOk

`func (o *EventRevenuesInformationType) GetEventRevenueInformationOk() (*[]EventRevenueInformationType, bool)`

GetEventRevenueInformationOk returns a tuple with the EventRevenueInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventRevenueInformation

`func (o *EventRevenuesInformationType) SetEventRevenueInformation(v []EventRevenueInformationType)`

SetEventRevenueInformation sets EventRevenueInformation field to given value.

### HasEventRevenueInformation

`func (o *EventRevenuesInformationType) HasEventRevenueInformation() bool`

HasEventRevenueInformation returns a boolean if a field has been set.

### GetExcludeFromForecast

`func (o *EventRevenuesInformationType) GetExcludeFromForecast() bool`

GetExcludeFromForecast returns the ExcludeFromForecast field if non-nil, zero value otherwise.

### GetExcludeFromForecastOk

`func (o *EventRevenuesInformationType) GetExcludeFromForecastOk() (*bool, bool)`

GetExcludeFromForecastOk returns a tuple with the ExcludeFromForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromForecast

`func (o *EventRevenuesInformationType) SetExcludeFromForecast(v bool)`

SetExcludeFromForecast sets ExcludeFromForecast field to given value.

### HasExcludeFromForecast

`func (o *EventRevenuesInformationType) HasExcludeFromForecast() bool`

HasExcludeFromForecast returns a boolean if a field has been set.

### GetUseForecastRevenue

`func (o *EventRevenuesInformationType) GetUseForecastRevenue() bool`

GetUseForecastRevenue returns the UseForecastRevenue field if non-nil, zero value otherwise.

### GetUseForecastRevenueOk

`func (o *EventRevenuesInformationType) GetUseForecastRevenueOk() (*bool, bool)`

GetUseForecastRevenueOk returns a tuple with the UseForecastRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForecastRevenue

`func (o *EventRevenuesInformationType) SetUseForecastRevenue(v bool)`

SetUseForecastRevenue sets UseForecastRevenue field to given value.

### HasUseForecastRevenue

`func (o *EventRevenuesInformationType) HasUseForecastRevenue() bool`

HasUseForecastRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FacilityTaskForecastType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FacilityCodes** | Pointer to [**[]FacilityCodeForecastType**](FacilityCodeForecastType.md) | Collection of facility codes with their forecasts. | [optional] 
**Task** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**TaskForecast** | Pointer to [**[]ForecastQuantityType**](ForecastQuantityType.md) | Collection of dates and their quantities. | [optional] 

## Methods

### NewFacilityTaskForecastType

`func NewFacilityTaskForecastType() *FacilityTaskForecastType`

NewFacilityTaskForecastType instantiates a new FacilityTaskForecastType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFacilityTaskForecastTypeWithDefaults

`func NewFacilityTaskForecastTypeWithDefaults() *FacilityTaskForecastType`

NewFacilityTaskForecastTypeWithDefaults instantiates a new FacilityTaskForecastType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFacilityCodes

`func (o *FacilityTaskForecastType) GetFacilityCodes() []FacilityCodeForecastType`

GetFacilityCodes returns the FacilityCodes field if non-nil, zero value otherwise.

### GetFacilityCodesOk

`func (o *FacilityTaskForecastType) GetFacilityCodesOk() (*[]FacilityCodeForecastType, bool)`

GetFacilityCodesOk returns a tuple with the FacilityCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityCodes

`func (o *FacilityTaskForecastType) SetFacilityCodes(v []FacilityCodeForecastType)`

SetFacilityCodes sets FacilityCodes field to given value.

### HasFacilityCodes

`func (o *FacilityTaskForecastType) HasFacilityCodes() bool`

HasFacilityCodes returns a boolean if a field has been set.

### GetTask

`func (o *FacilityTaskForecastType) GetTask() CodeDescriptionType`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *FacilityTaskForecastType) GetTaskOk() (*CodeDescriptionType, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *FacilityTaskForecastType) SetTask(v CodeDescriptionType)`

SetTask sets Task field to given value.

### HasTask

`func (o *FacilityTaskForecastType) HasTask() bool`

HasTask returns a boolean if a field has been set.

### GetTaskForecast

`func (o *FacilityTaskForecastType) GetTaskForecast() []ForecastQuantityType`

GetTaskForecast returns the TaskForecast field if non-nil, zero value otherwise.

### GetTaskForecastOk

`func (o *FacilityTaskForecastType) GetTaskForecastOk() (*[]ForecastQuantityType, bool)`

GetTaskForecastOk returns a tuple with the TaskForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskForecast

`func (o *FacilityTaskForecastType) SetTaskForecast(v []ForecastQuantityType)`

SetTaskForecast sets TaskForecast field to given value.

### HasTaskForecast

`func (o *FacilityTaskForecastType) HasTaskForecast() bool`

HasTaskForecast returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



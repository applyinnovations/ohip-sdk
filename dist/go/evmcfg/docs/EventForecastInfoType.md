# EventForecastInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BlockType** | Pointer to **string** | Block type for which the forecast is associated. | [optional] 
**MarketCode** | Pointer to **string** | Market code for which the forecast is associated. | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 

## Methods

### NewEventForecastInfoType

`func NewEventForecastInfoType() *EventForecastInfoType`

NewEventForecastInfoType instantiates a new EventForecastInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventForecastInfoTypeWithDefaults

`func NewEventForecastInfoTypeWithDefaults() *EventForecastInfoType`

NewEventForecastInfoTypeWithDefaults instantiates a new EventForecastInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *EventForecastInfoType) GetEventType() CodeDescriptionType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *EventForecastInfoType) GetEventTypeOk() (*CodeDescriptionType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *EventForecastInfoType) SetEventType(v CodeDescriptionType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *EventForecastInfoType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetBlockType

`func (o *EventForecastInfoType) GetBlockType() string`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *EventForecastInfoType) GetBlockTypeOk() (*string, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *EventForecastInfoType) SetBlockType(v string)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *EventForecastInfoType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetMarketCode

`func (o *EventForecastInfoType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *EventForecastInfoType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *EventForecastInfoType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *EventForecastInfoType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetDateRange

`func (o *EventForecastInfoType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *EventForecastInfoType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *EventForecastInfoType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *EventForecastInfoType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



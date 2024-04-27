# EventForecastType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForecastId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ForecastInfo** | Pointer to [**[]EventForecastInfoType**](EventForecastInfoType.md) | Provides information about the event forecast. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the Event Forecast belongs to. | [optional] 
**RevenueDetails** | Pointer to [**[]EventForecastRevDetailType**](EventForecastRevDetailType.md) | Collection of Event Forecast Revenue Details. | [optional] 

## Methods

### NewEventForecastType

`func NewEventForecastType() *EventForecastType`

NewEventForecastType instantiates a new EventForecastType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventForecastTypeWithDefaults

`func NewEventForecastTypeWithDefaults() *EventForecastType`

NewEventForecastTypeWithDefaults instantiates a new EventForecastType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForecastId

`func (o *EventForecastType) GetForecastId() UniqueIDType`

GetForecastId returns the ForecastId field if non-nil, zero value otherwise.

### GetForecastIdOk

`func (o *EventForecastType) GetForecastIdOk() (*UniqueIDType, bool)`

GetForecastIdOk returns a tuple with the ForecastId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastId

`func (o *EventForecastType) SetForecastId(v UniqueIDType)`

SetForecastId sets ForecastId field to given value.

### HasForecastId

`func (o *EventForecastType) HasForecastId() bool`

HasForecastId returns a boolean if a field has been set.

### GetForecastInfo

`func (o *EventForecastType) GetForecastInfo() []EventForecastInfoType`

GetForecastInfo returns the ForecastInfo field if non-nil, zero value otherwise.

### GetForecastInfoOk

`func (o *EventForecastType) GetForecastInfoOk() (*[]EventForecastInfoType, bool)`

GetForecastInfoOk returns a tuple with the ForecastInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastInfo

`func (o *EventForecastType) SetForecastInfo(v []EventForecastInfoType)`

SetForecastInfo sets ForecastInfo field to given value.

### HasForecastInfo

`func (o *EventForecastType) HasForecastInfo() bool`

HasForecastInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *EventForecastType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventForecastType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventForecastType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventForecastType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRevenueDetails

`func (o *EventForecastType) GetRevenueDetails() []EventForecastRevDetailType`

GetRevenueDetails returns the RevenueDetails field if non-nil, zero value otherwise.

### GetRevenueDetailsOk

`func (o *EventForecastType) GetRevenueDetailsOk() (*[]EventForecastRevDetailType, bool)`

GetRevenueDetailsOk returns a tuple with the RevenueDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDetails

`func (o *EventForecastType) SetRevenueDetails(v []EventForecastRevDetailType)`

SetRevenueDetails sets RevenueDetails field to given value.

### HasRevenueDetails

`func (o *EventForecastType) HasRevenueDetails() bool`

HasRevenueDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventForecastsListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceHotelCode** | Pointer to **string** | Property from which Code is to be copied. | [optional] 
**TargetHotelCode** | Pointer to **string** | Property to which configuration code type to be copied to. | [optional] 
**SourceForecastId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SourceEventType** | Pointer to **string** | Source Event Type from which code is to be copied from. | [optional] 
**CopyEventTypeAs** | Pointer to **string** | Event Type will be copied From. | [optional] 
**CopyDateRangeAs** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**CopyMarketCodeAs** | Pointer to **string** | Copy Market code as. | [optional] 
**CopyBookingTypeAs** | Pointer to **string** | Copy Booking Type as. | [optional] 

## Methods

### NewEventForecastsListType

`func NewEventForecastsListType() *EventForecastsListType`

NewEventForecastsListType instantiates a new EventForecastsListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventForecastsListTypeWithDefaults

`func NewEventForecastsListTypeWithDefaults() *EventForecastsListType`

NewEventForecastsListTypeWithDefaults instantiates a new EventForecastsListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceHotelCode

`func (o *EventForecastsListType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *EventForecastsListType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *EventForecastsListType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *EventForecastsListType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetTargetHotelCode

`func (o *EventForecastsListType) GetTargetHotelCode() string`

GetTargetHotelCode returns the TargetHotelCode field if non-nil, zero value otherwise.

### GetTargetHotelCodeOk

`func (o *EventForecastsListType) GetTargetHotelCodeOk() (*string, bool)`

GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCode

`func (o *EventForecastsListType) SetTargetHotelCode(v string)`

SetTargetHotelCode sets TargetHotelCode field to given value.

### HasTargetHotelCode

`func (o *EventForecastsListType) HasTargetHotelCode() bool`

HasTargetHotelCode returns a boolean if a field has been set.

### GetSourceForecastId

`func (o *EventForecastsListType) GetSourceForecastId() UniqueIDType`

GetSourceForecastId returns the SourceForecastId field if non-nil, zero value otherwise.

### GetSourceForecastIdOk

`func (o *EventForecastsListType) GetSourceForecastIdOk() (*UniqueIDType, bool)`

GetSourceForecastIdOk returns a tuple with the SourceForecastId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceForecastId

`func (o *EventForecastsListType) SetSourceForecastId(v UniqueIDType)`

SetSourceForecastId sets SourceForecastId field to given value.

### HasSourceForecastId

`func (o *EventForecastsListType) HasSourceForecastId() bool`

HasSourceForecastId returns a boolean if a field has been set.

### GetSourceEventType

`func (o *EventForecastsListType) GetSourceEventType() string`

GetSourceEventType returns the SourceEventType field if non-nil, zero value otherwise.

### GetSourceEventTypeOk

`func (o *EventForecastsListType) GetSourceEventTypeOk() (*string, bool)`

GetSourceEventTypeOk returns a tuple with the SourceEventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceEventType

`func (o *EventForecastsListType) SetSourceEventType(v string)`

SetSourceEventType sets SourceEventType field to given value.

### HasSourceEventType

`func (o *EventForecastsListType) HasSourceEventType() bool`

HasSourceEventType returns a boolean if a field has been set.

### GetCopyEventTypeAs

`func (o *EventForecastsListType) GetCopyEventTypeAs() string`

GetCopyEventTypeAs returns the CopyEventTypeAs field if non-nil, zero value otherwise.

### GetCopyEventTypeAsOk

`func (o *EventForecastsListType) GetCopyEventTypeAsOk() (*string, bool)`

GetCopyEventTypeAsOk returns a tuple with the CopyEventTypeAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyEventTypeAs

`func (o *EventForecastsListType) SetCopyEventTypeAs(v string)`

SetCopyEventTypeAs sets CopyEventTypeAs field to given value.

### HasCopyEventTypeAs

`func (o *EventForecastsListType) HasCopyEventTypeAs() bool`

HasCopyEventTypeAs returns a boolean if a field has been set.

### GetCopyDateRangeAs

`func (o *EventForecastsListType) GetCopyDateRangeAs() DateRangeType`

GetCopyDateRangeAs returns the CopyDateRangeAs field if non-nil, zero value otherwise.

### GetCopyDateRangeAsOk

`func (o *EventForecastsListType) GetCopyDateRangeAsOk() (*DateRangeType, bool)`

GetCopyDateRangeAsOk returns a tuple with the CopyDateRangeAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyDateRangeAs

`func (o *EventForecastsListType) SetCopyDateRangeAs(v DateRangeType)`

SetCopyDateRangeAs sets CopyDateRangeAs field to given value.

### HasCopyDateRangeAs

`func (o *EventForecastsListType) HasCopyDateRangeAs() bool`

HasCopyDateRangeAs returns a boolean if a field has been set.

### GetCopyMarketCodeAs

`func (o *EventForecastsListType) GetCopyMarketCodeAs() string`

GetCopyMarketCodeAs returns the CopyMarketCodeAs field if non-nil, zero value otherwise.

### GetCopyMarketCodeAsOk

`func (o *EventForecastsListType) GetCopyMarketCodeAsOk() (*string, bool)`

GetCopyMarketCodeAsOk returns a tuple with the CopyMarketCodeAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyMarketCodeAs

`func (o *EventForecastsListType) SetCopyMarketCodeAs(v string)`

SetCopyMarketCodeAs sets CopyMarketCodeAs field to given value.

### HasCopyMarketCodeAs

`func (o *EventForecastsListType) HasCopyMarketCodeAs() bool`

HasCopyMarketCodeAs returns a boolean if a field has been set.

### GetCopyBookingTypeAs

`func (o *EventForecastsListType) GetCopyBookingTypeAs() string`

GetCopyBookingTypeAs returns the CopyBookingTypeAs field if non-nil, zero value otherwise.

### GetCopyBookingTypeAsOk

`func (o *EventForecastsListType) GetCopyBookingTypeAsOk() (*string, bool)`

GetCopyBookingTypeAsOk returns a tuple with the CopyBookingTypeAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyBookingTypeAs

`func (o *EventForecastsListType) SetCopyBookingTypeAs(v string)`

SetCopyBookingTypeAs sets CopyBookingTypeAs field to given value.

### HasCopyBookingTypeAs

`func (o *EventForecastsListType) HasCopyBookingTypeAs() bool`

HasCopyBookingTypeAs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



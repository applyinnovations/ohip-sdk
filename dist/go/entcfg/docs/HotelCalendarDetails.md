# HotelCalendarDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCalendar** | Pointer to [**HotelCalendarType**](HotelCalendarType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelCalendarDetails

`func NewHotelCalendarDetails() *HotelCalendarDetails`

NewHotelCalendarDetails instantiates a new HotelCalendarDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelCalendarDetailsWithDefaults

`func NewHotelCalendarDetailsWithDefaults() *HotelCalendarDetails`

NewHotelCalendarDetailsWithDefaults instantiates a new HotelCalendarDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCalendar

`func (o *HotelCalendarDetails) GetHotelCalendar() HotelCalendarType`

GetHotelCalendar returns the HotelCalendar field if non-nil, zero value otherwise.

### GetHotelCalendarOk

`func (o *HotelCalendarDetails) GetHotelCalendarOk() (*HotelCalendarType, bool)`

GetHotelCalendarOk returns a tuple with the HotelCalendar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCalendar

`func (o *HotelCalendarDetails) SetHotelCalendar(v HotelCalendarType)`

SetHotelCalendar sets HotelCalendar field to given value.

### HasHotelCalendar

`func (o *HotelCalendarDetails) HasHotelCalendar() bool`

HasHotelCalendar returns a boolean if a field has been set.

### GetLinks

`func (o *HotelCalendarDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelCalendarDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelCalendarDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelCalendarDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelCalendarDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelCalendarDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelCalendarDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelCalendarDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



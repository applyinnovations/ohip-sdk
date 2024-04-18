# CalendarTaskCountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Class** | Pointer to [**CalendarTaskClassType**](CalendarTaskClassType.md) |  | [optional] 
**OutstandingCount** | Pointer to **int32** | Total number of outstanding calendar tasks under specific classification. | [optional] 
**TaskOwner** | Pointer to **string** | Owner code of the person to whom the calendar task is assigned. | [optional] 

## Methods

### NewCalendarTaskCountType

`func NewCalendarTaskCountType() *CalendarTaskCountType`

NewCalendarTaskCountType instantiates a new CalendarTaskCountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarTaskCountTypeWithDefaults

`func NewCalendarTaskCountTypeWithDefaults() *CalendarTaskCountType`

NewCalendarTaskCountTypeWithDefaults instantiates a new CalendarTaskCountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClass

`func (o *CalendarTaskCountType) GetClass() CalendarTaskClassType`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *CalendarTaskCountType) GetClassOk() (*CalendarTaskClassType, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *CalendarTaskCountType) SetClass(v CalendarTaskClassType)`

SetClass sets Class field to given value.

### HasClass

`func (o *CalendarTaskCountType) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetOutstandingCount

`func (o *CalendarTaskCountType) GetOutstandingCount() int32`

GetOutstandingCount returns the OutstandingCount field if non-nil, zero value otherwise.

### GetOutstandingCountOk

`func (o *CalendarTaskCountType) GetOutstandingCountOk() (*int32, bool)`

GetOutstandingCountOk returns a tuple with the OutstandingCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutstandingCount

`func (o *CalendarTaskCountType) SetOutstandingCount(v int32)`

SetOutstandingCount sets OutstandingCount field to given value.

### HasOutstandingCount

`func (o *CalendarTaskCountType) HasOutstandingCount() bool`

HasOutstandingCount returns a boolean if a field has been set.

### GetTaskOwner

`func (o *CalendarTaskCountType) GetTaskOwner() string`

GetTaskOwner returns the TaskOwner field if non-nil, zero value otherwise.

### GetTaskOwnerOk

`func (o *CalendarTaskCountType) GetTaskOwnerOk() (*string, bool)`

GetTaskOwnerOk returns a tuple with the TaskOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskOwner

`func (o *CalendarTaskCountType) SetTaskOwner(v string)`

SetTaskOwner sets TaskOwner field to given value.

### HasTaskOwner

`func (o *CalendarTaskCountType) HasTaskOwner() bool`

HasTaskOwner returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CopySchedulesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code for the Copy Policy operation. | [optional] 
**Schedule** | Pointer to [**[]CopyScheduleType**](CopyScheduleType.md) | The collection of schedule copy criteria. | [optional] 

## Methods

### NewCopySchedulesType

`func NewCopySchedulesType() *CopySchedulesType`

NewCopySchedulesType instantiates a new CopySchedulesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopySchedulesTypeWithDefaults

`func NewCopySchedulesTypeWithDefaults() *CopySchedulesType`

NewCopySchedulesTypeWithDefaults instantiates a new CopySchedulesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopySchedulesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopySchedulesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopySchedulesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopySchedulesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSchedule

`func (o *CopySchedulesType) GetSchedule() []CopyScheduleType`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *CopySchedulesType) GetScheduleOk() (*[]CopyScheduleType, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *CopySchedulesType) SetSchedule(v []CopyScheduleType)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *CopySchedulesType) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


